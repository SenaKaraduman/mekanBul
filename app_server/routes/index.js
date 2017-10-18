var express = require('express');//import gibi
var router = express.Router();//nesne oluşturuyor


var ctrlMekanlar=require('../controllers/mekanlar');

var ctrlDigerleri=require('../controllers/digerleri');



router.get('/',ctrlMekanlar.anaSayfa);

router.get('/mekan',ctrlMekanlar.mekanBilgisi);

router.get('/mekan/yorum/yeni',ctrlMekanlar.yorumEkle);

router.get('/hakkinda',ctrlDigerleri.hakkinda);

module.exports = router;
