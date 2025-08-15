/** Chunk was on 3115 **/
/** chunk id: 772081, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  C: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk782497 = require("./782497.js"),
  Chunk476400 = require("./476400.js"),
  i = require.n(Chunk476400),
  l = function(e) {
    var t = (0, o.default)({
      default: {
        picker: {
          width: "20px",
          height: "20px",
          borderRadius: "22px",
          border: "2px #fff solid",
          transform: "translate(-12px, -13px)",
          background: "hsl(" + Math.round(e.hsl.h) + ", " + Math.round(100 * e.hsl.s) + "%, " + Math.round(100 * e.hsl.l) + "%)"
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