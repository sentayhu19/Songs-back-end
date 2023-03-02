const Song = require('../models/song');
const getTotalCounts = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
    try {
      const totalCounts = await Song.aggregate([
        {
          $group: {
            _id: null,
            totalSongs: { $sum: 1 },
            totalArtists: { $addToSet: '$artist' },
            totalAlbums: { $addToSet: '$album' },
            totalGenres: { $addToSet: '$genre' },
          }, 
        },
        {
          $project: {
            _id: 0, 
            totalSongs: 1,
            totalArtists: { $size: '$totalArtists' },
            totalAlbums: { $size: '$totalAlbums' },
            totalGenres: { $size: '$totalGenres' },
          },
        },
      ]).exec();
      const countByGenre = await Song.aggregate([
        { $group: { _id: "$genre", count: { $sum: 1 } } },
      ]);

      const countByArtist = await Song.aggregate([
        { $group: { _id: "$artist", count: { $sum: 1 }, albums: { $addToSet: "$album" } } },
      ]);
      const countByAlbum = await Song.aggregate([
        { $group: { _id: "$album", count: { $sum: 1 } } },
      ]);
      const data = {
        totalCounts, countByGenre, countByArtist, countByAlbum
      }
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports ={
    getTotalCounts,
  }