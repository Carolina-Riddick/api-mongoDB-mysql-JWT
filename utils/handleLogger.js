const {IncomingWebhook} = require('@slack/webhook'); // Create connection to slack / Creo la conexion a slack
const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL)


const loggerStream = {
    write: message => {
        webHook.send({
            text: message

        })
        console.log('Getting Log / Obteniendo info', message);
    },
  };


  module.exports = loggerStream;