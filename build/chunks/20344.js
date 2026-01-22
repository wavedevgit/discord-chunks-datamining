/** Chunk was on 47950 **/
/** chunk id: 20344, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk64700 = require("./64700.js"),
  Chunk205662 = require("./205662.js"),
  Chunk708005 = require("./708005.js"),
  Chunk640271 = require("./640271.js"),
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
      d = e.renderers,
      f = e.pointer,
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
    }, n.createElement(a.ry, l({}, b.alpha, {
      rgb: t,
      hsl: r,
      pointer: f,
      renderers: d,
      onChange: u,
      direction: c
    })))
  };
s.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: Chunk640271.A
}, (0, Chunk708005.Q$)(s)