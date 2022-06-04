// import logger from "./logger";
const logger = require('./logger');
const log = new logger();
function logFirstUse() {
    log.printLogCount();
    log.pushLog('First');
    log.printLogCount();
}

module.exports = logFirstUse;