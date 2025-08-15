/** Chunk was on 3115 **/
/** chunk id: 846014, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk647438 = require("./647438.js"),
  Chunk476400 = require("./476400.js"),
  a = require.n(Chunk476400),
  Chunk782497 = require("./782497.js"),
  Chunk829307 = require("./829307.js"),
  Chunk962438 = require("./962438.js"),
  Chunk428585 = require("./428585.js"),
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
  pointer: Chunk428585.Z,
  styles: {}
}, (0, Chunk962438.t1)(p)