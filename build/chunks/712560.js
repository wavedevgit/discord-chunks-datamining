/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var t = Math.round;
e.exports = function(e) {
  var n = t(e);
  return n < 0 ? 0 : n > 255 ? 255 : 255 & n
}