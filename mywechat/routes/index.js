var express = require('express');
var wechat = require('wechat');
var router = express.Router();
var weconfig = {
  token: 'TREEZH0',
  appid: 'wxdef846e86bc42f84',
  appsecret: '63d772db5c2e69ad3298b481c408a1b2',
  encodingAESKey: 'iX2dUWhWvaDPGX6hiLGBs3CwqzUiifr5e5EdAwKnO7K'
};

/* GET home page. */
router.get('/', wechat(weconfig, function(req, res, next) {
	console.log(req.weixin);
	var message = req.weixin;
	//文本
	if (message.Content === '1') {
 
		res.reply('hehe');
  }
  
  })
);

module.exports = router;
