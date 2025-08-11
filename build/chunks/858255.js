/** Chunk was on web.js **/
/** chunk id: 858255, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk322273 = require("./322273.js"),
  Chunk550782 = require("./550782.js");

function o(e) {
  return null == e ? e : String(e)
}
module.exports = function(e, t) {
  var n;
  if (window.getComputedStyle && (n = window.getComputedStyle(e, null))) return o(n.getPropertyValue(i(t)));
  if (document.defaultView && document.defaultView.getComputedStyle) {
    if (n = document.defaultView.getComputedStyle(e, null)) return o(n.getPropertyValue(i(t)));
    if ("display" === t) return "none"
  }
  return e.currentStyle ? "float" === t ? o(e.currentStyle.cssFloat || e.currentStyle.styleFloat) : o(e.currentStyle[r(t)]) : o(e.style && e.style[r(t)])
}