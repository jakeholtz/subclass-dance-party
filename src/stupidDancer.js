var StupidDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.intelligence = 0;
}

StupidDancer.prototype = Object.create(Dancer.prototype);
StupidDancer.prototype.constructor = StupidDancer;

StupidDancer.prototype.actStupid = function() {
  Dancer.prototype.step.call(this);
  return "I'm a stupid dancer! Durrr!"
}
