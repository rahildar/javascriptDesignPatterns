 function CarFactory() {

 };
 CarFactory.prototype.create=function(car,features) {
 var l = features.length;

 for (var i = 0; i < features.length; i++) {
   switch (features[i]) {
     case 'locks':
       car = new CarWithLocks(car);
       break;
     case 'powerWindows':
     car = new powerWindows(car);
     default:

   }
 }
return car;
}
function CarWithLocks( car )  {
  car.locks = "true";
  return car;
}
function powerWindows( car ) {
  car.powerWindows = "present";
  return car;
}
function Car(name){
  this.name = name;
}
var car = new Car("persna");
var carfactory = new CarFactory();
var modifiedCar = carfactory.create(car,['locks','powerWindows'])
console.log(modifiedCar);
