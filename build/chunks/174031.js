/** Chunk was on 66382 **/
/** chunk id: 174031, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk857614 = require("./857614.js"),
  Chunk476400 = require("./476400.js"),
  i = require.n(Chunk476400),
  l = function(e) {
    var t = (0, o.default)({
      default: {
        picker: {
          width: "20px",
          height: "20px",
          borderRadius: "22px",
          transform: "translate(-10px, -7px)",
          background: "hsl(" + Math.round(e.hsl.h) + ", 100%, 50%)",
          border: "2px white solid"
        }
      }
    });
    return n.createElement("div", {
      style: t.picker
    })
  };
l.propTypes = {
  hsl: i().shape({
    h: i().number,
    s: i().number,
    l: i().number,
    a: i().number
  })
}, l.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: .2,
    s: .5
  }
};
let s = l