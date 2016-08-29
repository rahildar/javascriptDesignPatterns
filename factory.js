function blueObject() {
  this.item = "blue"
}
function RedObject() {
  this.item = "red"
}
function createObjects() {
  return {
    create:  function (color) {
    if (color === 'red') {
      return new RedObject;
    }
    else {
      return new blueObject;
    }
  }
}
}
module.exports = createObjects;
