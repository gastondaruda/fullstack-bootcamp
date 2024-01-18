const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')


const server = app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`)
})

module.exports = {server, app}

//exercise 4.1 ✓
//exercise 4.2 ✓
//exercise 4.3 ✓
//exercise 4.4 ✓
//exercise 4.5 ✓
//exercise 4.6 
//exercise 4.7 

