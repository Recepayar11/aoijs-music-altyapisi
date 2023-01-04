const BukeleR= require("aoi.js")
var fs = require('fs');
const bot = new BukeleR.Bot({
  token: "MTA1NDAyOTQxMjU0ODQ4NTE3Mw.Ge8-MO.pI32OQenHgJUVVEwdHxvlQJRtA3wiz7TeLRDLs", //TOKEN BURAYA YAZIN
  prefix: "/",    // PREFİXİNİ BURAYA YAZABİLİRSİN
  fetchInvites: true
})


bot.onJoined()    //BURAYI SİLME ÖNEMLİ

bot.onLeave()   //BURAYI SİLME ÖNEMLİ

bot.onMessage()    //BURAYI SİLME ÖNEMLİ 


bot.loadCommands('./Komutlar/')     //BURAYI SİLME ÖNEMLİ   
