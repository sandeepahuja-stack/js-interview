var logger = (function() {
 
    // Singleton reference 
    var instance;
   
    function init() {
      // Private methods and variables
      this.logs = [];
  
      this.pushLogs = function(message) {
        this.logs.push(message)
        console.log(`Message Logged:`, message);
      }
  
      this.getlogCount = function() {
        console.log(`${this.logs.length} Logs`);
        
      }
    };
   
    return function() {
        if ( !instance ) {
          instance = new init();
        }
        return  Object.freeze(instance);
    };
  })();
  
  let cart1 = logger();
  let cart2 = logger();

  cart1.getlogCount()
cart1.pushLogs('first log');
cart1.getlogCount()
cart2.getlogCount()
cart2.pushLogs('second log')
cart2.getlogCount()