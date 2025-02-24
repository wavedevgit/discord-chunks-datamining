/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
var r = n(714760);
e.exports = function(e, t, n) {
  return n ? r(e.entries(), function(e) {
    return t(e[1], e[0])
  }, !0) : e.forEach(t)
}