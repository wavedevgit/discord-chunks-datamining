/** Chunk was on 66382 **/
/** chunk id: 230340, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk473749 = require("./473749.js"),
  Chunk857614 = require("./857614.js"),
  Chunk894064 = require("./894064.js"),
  Chunk372798 = require("./372798.js"),
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
  pointer: Chunk372798.Z
}, (0, Chunk894064.t1)(s)