// import logger from "./logger";
const logger = require('./logger');

const log = new logger();
function logSecondUse() {
    log.printLogCount();
    log.pushLog('Second');
    log.printLogCount();
}
module.exports = logSecondUse;