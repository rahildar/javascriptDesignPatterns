const factory = require('./absfactory');


module.exports = function () {
  var instance;

  function init() {
    var cf = new factory();

    cf.register("red" ,"RedCircle");
    cf.register("blue" ,"BlueCircle");
  
   function create(type) {
    return cf.create(type)
   }
    function add(a,b) {
      return a + b;
    }
    function sub(a ,b) {
      return a - b;
    }
    return {
      create:create,
      add: add,
      sub: sub
    }
  }

  return {
    getinstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }

}
