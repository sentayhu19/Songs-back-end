const { Router } = require("express");
const router = Router();
const { addnewSong, editSong, deleteSong, getAllSongs }= require('../controllers/songs_controller');
router.post('/addnewsong', addnewSong)
router.put('/editsong', editSong)
router.delete('/deletesong', deleteSong)
router.get('/getsongs', getAllSongs)
 

module.exports = router;