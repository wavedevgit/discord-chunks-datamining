/** Chunk was on 22557 **/
/** chunk id: 75811, original params: t,e,r (module,exports,require) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
    }
    return t
  },
  n = u(require("./639519.js")),
  Chunk647438 = require("./647438.js"),
  a = u(Chunk647438);

function u(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var s = {
    bgColor: n.default.oneOfType([n.default.object, n.default.string]).isRequired,
    bgD: n.default.string.isRequired,
    fgColor: n.default.oneOfType([n.default.object, n.default.string]).isRequired,
    fgD: n.default.string.isRequired,
    size: n.default.number.isRequired,
    title: n.default.string,
    viewBoxSize: n.default.number.isRequired,
    xmlns: n.default.string
  },
  l = (0, Chunk647438.forwardRef)(function(t, e) {
    var r = t.bgColor,
      n = t.bgD,
      i = t.fgD,
      u = t.fgColor,
      s = t.size,
      l = t.title,
      f = t.viewBoxSize,
      h = function(t, e) {
        var r = {};
        for (var o in t) !(e.indexOf(o) >= 0) && Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
        return r
      }(t, ["bgColor", "bgD", "fgD", "fgColor", "size", "title", "viewBoxSize"]);
    return a.default.createElement("svg", o({}, h, {
      height: s,
      ref: e,
      viewBox: "0 0 " + f + " " + f,
      width: s
    }), l ? a.default.createElement("title", null, l) : null, a.default.createElement("path", {
      d: n,
      fill: r
    }), a.default.createElement("path", {
      d: i,
      fill: u
    }))
  });
l.displayName = "QRCodeSvg", l.propTypes = s, l.defaultProps = {
  title: true,
  xmlns: "http://www.w3.org/2000/svg"
}, exports.default = l