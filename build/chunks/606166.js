/** Chunk was on 68880 **/
"use strict";

function e(t) {
  return t.replace(/\//g, "-")
}
t.exports = function(t) {
  return "object" == typeof t ? Object.keys(t).filter(function(e) {
    return t[e]
  }).map(e).join(" ") : Array.prototype.map.call(arguments, e).join(" ")
}