var FunnyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.intelligence = 0;
}

FunnyDancer.prototype = Object.create(Dancer.prototype);
FunnyDancer.prototype.constructor = FunnyDancer;

FunnyDancer.prototype.actStupid = function() {
  Dancer.prototype.step.call(this);
  return "I'm a funny dancer! Ha!"
}
