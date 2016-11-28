describe('Arrow', function()
{
  var obj = new Arrow();
  var x = shootingCirc.x;
  var y = shootingCirc.y;

  it("Equals to shooting circle", function() {
      x = true;
      y = true;

      expect(obj.x == shootingCirc.x).toBe(true);
      expect(obj.y == shootingCirc.y).toBe(true);
    });

    it("Checking mouse pos when firing Arrow x cord", function() {
      mousePos = {x:shootingCirc.x-100,y:shootingCirc.y}
      expect(shootingCirc.x).toBeCloseTo(600);
      obj.fireArrow();
    });

    it("Checking mouse pos when firing Arrow y cord", function() {
      mousePos = {x:shootingCirc.x,y:shootingCirc.y-100}
      expect(shootingCirc.x).toBeCloseTo(600);
      obj.fireArrow();
    });

    it("Calculate trajectory", function() {
      obj.y = groundPoint + 1;
      obj.calcTrajectory();
      expect(obj.velX).toEqual(0);
      expect(obj.velY).toEqual(0);
      expect(obj.firing).toBeFalsy();
    });
});
