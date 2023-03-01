const Song = require('../models/song');

const addnewSong = async (req, res) => {
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
const getAllSongs = async (req, res) => {    //get all Songs
    try {
        const songs = await Song.find();
        res.status(200).json({ songs });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
//edit song
const editSong = async (req, res) => {    //edit one Song by id
    const { title, album, artist, genre, id } = req.body;
    
    console.log("EDIT SONG: ", req.body)
    try {
      const song = await Song.findOne({id: id });
      if (!song) {
        return res.status(404).json({ error: 'Song not found' });
      }
      song.title = title;
      song.album = album;
      song.artist = artist;
      song.genre = genre;
      await song.save();
      res.json(song);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  const deleteSong = async (req, res) => {    //delete one Song by id
    const { id } = req.body;
    try {
      const result = await Song.deleteOne({ id: id });
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Song not found' });
      } 
      res.json({ message: 'Song deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

 
  


  
module.exports = {
    addnewSong,
    getAllSongs,
    editSong,
    deleteSong,
}
