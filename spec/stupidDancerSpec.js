describe('stupidDancer', function() {

  var stupidDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    stupidDancer = new StupidDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(stupidDancer.$node).to.be.an.instanceof(jQuery);
  });

   it('should have a "actStupid" function that makes it stupid', function() {
    stupidDancer.actStupid();
    expect(stupidDancer.actStupid()).to.equal("I'm a stupid dancer! Durrr!");
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(stupidDancer, 'step');
      expect(stupidDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(stupidDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(stupidDancer.step.callCount).to.be.equal(2);
    });
  });
});
