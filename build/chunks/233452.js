/** Chunk was on 47950 **/
/** chunk id: 233452, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk64700 = require("./64700.js"),
  Chunk655972 = require("./655972.js"),
  a = require.n(Chunk655972),
  Chunk205662 = require("./205662.js"),
  Chunk920385 = require("./920385.js"),
  Chunk708005 = require("./708005.js"),
  Chunk543211 = require("./543211.js"),
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
      d = e.styles,
      f = e.className,
      h = (0, i.default)((0, l.A)({
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
      }, true === d ? {} : d));
    return n.createElement("div", {
      style: h.picker,
      className: "hue-picker " + (true === f ? "" : f)
    }, n.createElement(s.RG, c({}, h.hue, {
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
  pointer: Chunk543211.A,
  styles: {}
}, (0, Chunk708005.Q$)(p)