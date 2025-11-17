/** Chunk was on 66382 **/
/** chunk id: 631322, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk473749 = require("./473749.js"),
  Chunk476400 = require("./476400.js"),
  a = require.n(Chunk476400),
  Chunk857614 = require("./857614.js"),
  Chunk829307 = require("./829307.js"),
  Chunk894064 = require("./894064.js"),
  Chunk740266 = require("./740266.js"),
  c = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  p = function(e) {
    var t = e.width,
      r = e.height,
      o = e.onChange,
      a = e.hsl,
      u = e.direction,
      p = e.pointer,
      f = e.styles,
      d = e.className,
      h = (0, i.default)((0, l.Z)({
        default: {
          picker: {
            position: "relative",
            width: t,
            height: r
          },
          hue: {
            radius: "2px"
          }
        }
      }, true === f ? {} : f));
    return n.createElement("div", {
      style: h.picker,
      className: "hue-picker " + (true === d ? "" : d)
    }, n.createElement(s.PS, c({}, h.hue, {
      hsl: a,
      pointer: p,
      onChange: function(e) {
        return o({
          a: 1,
          h: e.h,
          l: .5,
          s: 1
        })
      },
      direction: u
    })))
  };
p.propTypes = {
  styles: a().object
}, p.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: Chunk740266.Z,
  styles: {}
}, (0, Chunk894064.t1)(p)