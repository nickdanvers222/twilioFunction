require('dotenv').config();
var accountSid = process.env.TWILIO_ID; //  Account SID 
var authToken = process.env.AUTH_TOKEN;   //  Auth Token 

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

const sendMessage = () => {
    client.messages.create({
        body: 'Hello from LHL',// "Text Message"
        to: 'targetPhoneNumber',  // Text this number
        from: process.env.OFFICIAL_PHONE // TWILIO trial number
    })
    .then((message) => console.log(message.sid));
}

module.exports = {
    sendMessage
}