const Song = require('../models/song');

const addnewSong = async (req, res) => {
    console.log("ADD NEW SONG ", req.body)
    const { title, artist, album, genre } = req.body;
    if(!title || !artist || !album || !genre) {
        return res.status(400).json({ error: 'Please fill out all fields' });
    } 
    try {
        const newSong = await Song.create(req.body);
        res.status(201).json(newSong);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json({ songs });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
//edit song
const editSong = async (req, res) => {
    const { title, album } = req.body;
    const songTitle = req.params.title;
    const songAlbum = req.params.album;
    const songArtist = req.params.artist;
    const songGenre = req.params.genre;
    
    try {
      const song = await Song.findOne({ title: songTitle, album: songAlbum, artist: songArtist, genre: songGenre });
      if (!song) {
        return res.status(404).json({ error: 'Song not found' });
      }
      song.title = title;
      song.album = album;
      await song.save();
      res.json(song);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  const deleteSong = async (req, res) => {
    const songTitle = req.params.title;
    const songAlbum = req.params.album;
    const songArtist = req.params.artist;
    const songGenre = req.params.genre;
    
    try {
      const song = await Song.findOne({ title: songTitle, album: songAlbum, artist: songArtist, genre: songGenre });
      if (!song) {
        return res.status(404).json({ error: 'Song not found' });
      }
      await song.remove();
      res.json({ message: 'Song deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  


module.exports = {
    addnewSong,
    getAllSongs,
    editSong,
    deleteSong
}