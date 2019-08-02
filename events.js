const events = require('events')
const emitter = new events.EventEmitter()
emitter.on('hello', function(param){
    console.log(`Receive hello event with parameters ${param}`)
})

emitter.emit('hello', 'hahaha')