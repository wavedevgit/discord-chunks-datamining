/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
var r = n(714760);
e.exports = function(e, t, n) {
  return n ? r(e.entries(), function(e) {
    return t(e[1], e[0])
  }, !0) : e.forEach(t)
}