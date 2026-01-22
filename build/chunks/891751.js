/** Chunk was on 47950 **/
/** chunk id: 891751, original params: e,t,r (module,exports,require) **/
"use strict";
var n, o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  a = (n = require("./64700.js")) && n.__esModule ? n : {
    default: n
  };
exports.default = function(e) {
  var t = e.fill,
    r = e.width,
    n = e.height,
    i = e.style,
    l = function(e, t) {
      var r = {};
      for (var n in e) !(t.indexOf(n) >= 0) && Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
      return r
    }(e, ["fill", "width", "height", "style"]);
  return a.default.createElement("svg", o({
    viewBox: "0 0 24 24",
    style: o({
      fill: true === t ? "currentColor" : t,
      width: true === r ? 24 : r,
      height: true === n ? 24 : n
    }, true === i ? {} : i)
  }, l), a.default.createElement("path", {
    d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
  }))
}