const server = require('http').createServer()
const io = require('socket.io')(server)
const process = require('process')
const config = require('./config/config.dev')
const logger = require('log4js').getLogger('Main App')

logger.info('Starting App...')

require('./src/handler/init.js')(io)

server.listen(
    config.port,
    () => {
        logger.info(`Listening with PID ${process.pid} on ${config.hostName} on port ${config.port}`)
        logger.info(`This platform is ${process.platform}`)
    }
);
