describe('funnyDancer', function() {

  var funnyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    funnyDancer = new FunnyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(funnyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a "actFunny" function that makes it funny', function() {
    funnyDancer.actFunny();
    expect(funnyDancer.actFunny()).to.equal("I'm a funny dancer! Ha!");
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(funnyDancer, 'step');
      expect(funnyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(funnyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(funnyDancer.step.callCount).to.be.equal(2);
    });
  });
});
