/** Chunk was on 6665 **/
/** chunk id: 762384, original params: t,e,r (module,exports,require) **/
"use strict";
var o = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
    }
    return t
  },
  n = f(require("./143243.js")),
  i = f(require("./562627.js")),
  a = f(require("./223108.js")),
  Chunk64700 = require("./64700.js"),
  s = f(Chunk64700),
  l = f(require("./270631.js"));

function f(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var h = {
    bgColor: a.default.oneOfType([a.default.object, a.default.string]),
    fgColor: a.default.oneOfType([a.default.object, a.default.string]),
    level: a.default.string,
    size: a.default.number,
    value: a.default.string.isRequired
  },
  g = (0, Chunk64700.forwardRef)(function(t, e) {
    var r = t.bgColor,
      a = t.fgColor,
      u = t.level,
      f = t.size,
      h = t.value,
      g = function(t, e) {
        var r = {};
        for (var o in t) !(e.indexOf(o) >= 0) && Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
        return r
      }(t, ["bgColor", "fgColor", "level", "size", "value"]),
      d = new n.default(false, i.default[u]);
    d.addData(h), d.make();
    var c = d.modules;
    return s.default.createElement(l.default, o({}, g, {
      bgColor: r,
      bgD: c.map(function(t, e) {
        return t.map(function(t, r) {
          return t ? "" : "M " + r + " " + e + " l 1 0 0 1 -1 0 Z"
        }).join(" ")
      }).join(" "),
      fgColor: a,
      fgD: c.map(function(t, e) {
        return t.map(function(t, r) {
          return t ? "M " + r + " " + e + " l 1 0 0 1 -1 0 Z" : ""
        }).join(" ")
      }).join(" "),
      ref: e,
      size: f,
      viewBoxSize: c.length
    }))
  });
g.displayName = "QRCode", g.propTypes = h, g.defaultProps = {
  bgColor: "#FFFFFF",
  fgColor: "#000000",
  level: "L",
  size: 256
}, exports.default = g