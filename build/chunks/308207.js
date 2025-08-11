/** Chunk was on 21153 **/
/** chunk id: 308207, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk73800 = require("./73800.js"),
  Chunk9196 = require("./9196.js"),
  Chunk116850 = require("./116850.js"),
  Chunk439 = require("./439.js"),
  l = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  s = function(e) {
    var t = e.rgb,
      r = e.hsl,
      i = e.width,
      s = e.height,
      u = e.onChange,
      c = e.direction,
      p = e.style,
      f = e.renderers,
      d = e.pointer,
      h = e.className,
      b = (0, o.default)({
        default: {
          picker: {
            position: "relative",
            width: i,
            height: s
          },
          alpha: {
            radius: "2px",
            style: p
          }
        }
      });
    return n.createElement("div", {
      style: b.picker,
      className: "alpha-picker " + (true === h ? "" : h)
    }, n.createElement(a.xV, l({}, b.alpha, {
      rgb: t,
      hsl: r,
      pointer: d,
      renderers: f,
      onChange: u,
      direction: c
    })))
  };
s.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: Chunk439.Z
}, (0, Chunk116850.t1)(s)