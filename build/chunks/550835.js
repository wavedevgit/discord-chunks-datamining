/** Chunk was on web.js **/
/** chunk id: 550835, original params: e (module,exports,re quire) **/
"use strict";

function t(e) {
  return e.replace(/\//g, "-")
}
module.exports = function(e) {
  return "object" == typeof e ? Object.keys(e).filter(function(t) {
    return e[t]
  }).map(t).join(" ") : Array.prototype.map.call(arguments, t).join(" ")
}