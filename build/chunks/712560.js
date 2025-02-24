/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
var t = Math.round;
e.exports = function(e) {
  var n = t(e);
  return n < 0 ? 0 : n > 255 ? 255 : 255 & n
}