/** Chunk was on 47950 **/
/** chunk id: 896132, original params: e,t,r (module,exports,require) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.Checkboard = true;
var n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  Chunk64700 = require("./64700.js"),
  a = s(Chunk64700),
  i = s(require("./205662.js")),
  l = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
  }(require("./960783.js"));

function s(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = exports.Checkboard = function(e) {
  var t = e.white,
    r = e.grey,
    s = e.size,
    u = e.renderers,
    c = e.borderRadius,
    p = e.boxShadow,
    d = e.children,
    f = (0, i.default)({
      default: {
        grid: {
          borderRadius: c,
          boxShadow: p,
          absolute: "0px 0px 0px 0px",
          background: "url(" + l.get(t, r, s, u.canvas) + ") center left"
        }
      }
    });
  return (0, o.isValidElement)(d) ? a.default.cloneElement(d, n({}, d.props, {
    style: n({}, d.props.style, f.grid)
  })) : a.default.createElement("div", {
    style: f.grid
  })
};
u.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
}, exports.default = u