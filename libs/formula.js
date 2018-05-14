var module = module || {};

if (typeof document !== "undefined" && typeof wx === "undefined") {
  module = window;
  Object.defineProperties(module, { formula: { value: {} } })
}
else {
  module = module || {};
  module.exports = module.exports || {};
}
typeof GameGlobal !== "undefined" && (GameGlobal.formula = module.exports);
(function (module, exports) {
  var properties = {
    checkCCRectangle:{
      value:function(circle1,circle2){
         let distanceCC=this.getDistancePP(circle1.x,circle1.y,circle2.x,circle2.y);
         return distanceCC < circle1.width/2+circle2.width/2; 
      }
    },
    checkRRRectangle:{
      value:function(rect1,rect2){
        let 
      }
    },
    getDistancePP: {
      value: function (x1, y1, x2, y2) {
        return Math.pow((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1),0.5);
      },
    },
    getDistancePL: {
      value: function (x, y, x1, y1, x2, y2) {
        var a = y2 - y1;
        var b = x1 - x2;
        var c = x2 * y1 - x1 * y2;
        if (!(Math.abs(a) > 0.00001 || Math.abs(b) > 0.00001)) {
          return;
        }
        return Math.abs(a * x + b * y + c) / Math.pow(a * a + b * b, 0.5);
      },
    },
    checkCRRectangle: {
        value: function (x, y, r, x0, y0, x1, y1, x2, y2) {
          w1 = this.getDistancePP(x0, y0, x2, y2);
          h1 = this.getDistancePP(x0, y0, x1, y1);
          w2 = this.getDistancePL(x, y, x0, y0, x1, y1);
          h2 = this.getDistancePL(x, y, x0, y0, x2, y2);
          if (w2 > w1 + r)
            return -1;
          if (h2 > h1 + r)
            return -1;

          if (w2 <= w1)
            return 1;
          if (h2 <= h1)
            return 2;

          return (w2 - w1) * (w2 - w1) + (h2 - h1) * (h2 - h1) <= r * r ? 3:-1;
        }
      },
      getTransPosition: {
        value: function (x, y, rotation) {
          let itemRotation = rotation % 360;
          let θ = Math.PI * ((itemRotation > 180 ? -(360 - itemRotation) : itemRotation) / 180);
          let newX = x * Math.cos(θ) + y * Math.sin(θ);
          let newY = y * Math.cos(θ) - x * Math.sin(θ);
          return [newX,newY];
        }
      }
    
  };
  Object.defineProperties(exports, properties);
})(module, module.exports || module.formula);