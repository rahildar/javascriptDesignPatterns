function RedCircle() {

}
RedCircle.prototype.create = function(){
  this.item = '$(<div class = "circle"></div>)'
  return this;
}
function BlueCircle() {

}
BlueCircle.prototype.create = function() {
  this.item = '$(<div class = "bluecircle"></div>)'
  return this;
}

function Absfactory(type) {
this.types = {}

    this.create = function (type) {
    return new this.types[type]().create();
    }
 // cls here is a string => cls.prototype is not defined , here cls = eval(cls) gives an object refrencing to Redcircle or BlueCircle
    this.register = function (type ,cls){
      cls = eval(cls);
      if (cls.prototype.create) {
        this.types[type] = cls;
      }
  }
}
module.exports = Absfactory;
