/** Chunk was on 8381 **/
/** chunk id: 606166, original params: t (module,exports,require) **/
"use strict";

function e(t) {
  return t.replace(/\//g, "-")
}
module.exports = function(t) {
  return "object" == typeof t ? Object.keys(t).filter(function(e) {
    return t[e]
  }).map(e).join(" ") : Array.prototype.map.call(arguments, e).join(" ")
}