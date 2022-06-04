 class logger {

    // singleton
    constructor() {
        
        // checking that the instance is present or not 
        if(logger.instance == null) {
            this.logs  = [];
            logger.instance = this;
        }
        // why Object freeze 
        // so that we can't add any method or variable in it 
        return Object.freeze(logger.instance);

    }

    // constructor() {

    //     this.logs  = [];
    // }

    pushLog(message) {
        this.logs.push(message);
        console.log(`Message Logged:`, message);
    }

    printLogCount() {
        console.log(`${this.logs.length} Logs`);
    }
}

module.exports = logger;