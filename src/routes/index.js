const { Router } = require("express");
const router = Router();
const { addnewSong, editSong, deleteSong }= require('../controllers/songs_controller');
router.post('/addnewsong', addnewSong)
router.put('/editsong/:title/:album/:artist/:genre', editSong)
router.delete('/deletesong/:title/:album/:artist/:genre', deleteSong)

module.exports = router;