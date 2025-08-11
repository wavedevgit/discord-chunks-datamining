/** Chunk was on web.js **/
/** chunk id: 76729, original params: e (module,exports,re quire) **/
"use strict";
var t = function(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "true" : "false";
    case "number":
      return isFinite(e) ? e : "";
    default:
      return ""
  }
};
module.exports = function(e, n, r, i) {
  return (n = n || "&", r = r || "=", null === e && (e = true), "object" == typeof e) ? Object.keys(e).map(function(i) {
    var o = encodeURIComponent(t(i)) + r;
    return Array.isArray(e[i]) ? e[i].map(function(e) {
      return o + encodeURIComponent(t(e))
    }).join(n) : o + encodeURIComponent(t(e[i]))
  }).filter(Boolean).join(n) : i ? encodeURIComponent(t(i)) + r + encodeURIComponent(t(e)) : ""
}