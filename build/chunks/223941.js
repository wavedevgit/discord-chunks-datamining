/** Chunk was on 21153 **/
/** chunk id: 223941, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk73800 = require("./73800.js"),
  Chunk9196 = require("./9196.js"),
  Chunk969319 = require("./969319.js"),
  i = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  l = function(e) {
    var t = e.white,
      r = e.grey,
      l = e.size,
      s = e.renderers,
      u = e.borderRadius,
      c = e.boxShadow,
      p = e.children,
      f = (0, o.default)({
        default: {
          grid: {
            borderRadius: u,
            boxShadow: c,
            absolute: "0px 0px 0px 0px",
            background: "url(" + a.U(t, r, l, s.canvas) + ") center left"
          }
        }
      });
    return (0, n.isValidElement)(p) ? n.cloneElement(p, i({}, p.props, {
      style: i({}, p.props.style, f.grid)
    })) : n.createElement("div", {
      style: f.grid
    })
  };
l.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
};
let s = l