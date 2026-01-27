/** Chunk was on 38939 **/
/** chunk id: 907116, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk573964 = require("./573964.js"),
  Chunk450030 = require("./450030.js");

function o(t) {
  return null == t ? t : String(t)
}
module.exports = function(t, e) {
  var r;
  if (window.getComputedStyle && (r = window.getComputedStyle(t, null))) return o(r.getPropertyValue(i(e)));
  if (document.defaultView && document.defaultView.getComputedStyle) {
    if (r = document.defaultView.getComputedStyle(t, null)) return o(r.getPropertyValue(i(e)));
    if ("display" === e) return "none"
  }
  return t.currentStyle ? "float" === e ? o(t.currentStyle.cssFloat || t.currentStyle.styleFloat) : o(t.currentStyle[n(e)]) : o(t.style && t.style[n(e)])
}