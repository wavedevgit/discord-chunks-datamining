/** Chunk was on web.js **/
/** chunk id: 907116, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk573964 = require("./573964.js"),
  Chunk450030 = require("./450030.js");

function a(e) {
  return null == e ? e : String(e)
}
module.exports = function(e, t) {
  var n;
  if (window.getComputedStyle && (n = window.getComputedStyle(e, null))) return a(n.getPropertyValue(i(t)));
  if (document.defaultView && document.defaultView.getComputedStyle) {
    if (n = document.defaultView.getComputedStyle(e, null)) return a(n.getPropertyValue(i(t)));
    if ("display" === t) return "none"
  }
  return e.currentStyle ? "float" === t ? a(e.currentStyle.cssFloat || e.currentStyle.styleFloat) : a(e.currentStyle[r(t)]) : a(e.style && e.style[r(t)])
}