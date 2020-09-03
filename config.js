const config = {
  "ownerID": "692790523424931932",//Bu kısıma, kendi ID'niz. 
  "sahip": ["692790523424931932"],
  "admins": [""],//Yetkili eklemek isterseniz, o kişinin ID'si.
  "support": [""],//Destek ekibi eklemek isterseniz, o kişinin ID'si.
  "token": "NzQ5NjUxMTM4MTY4NjE5MTk4.X0vFBw.TklOVMQlJVXNACkuyhCyEGL51EU",//Botun, tokeni.
  "dashboard" : {
    "oauthSecret": "",//Client secret.
    "callbackURL": `https://squats-bot.glitch.me/callback`,//oAuth2 kısmında bulunan kutucuğa, bu bağlantıyı ekleyiniz.
    "sessionSecret": "momet",//Bu kısımı, değiştirmeyiniz.
    "domain": "https://squats-bot.glitch.me"//Sitenin, adresi.
  }
};

module.exports = config;