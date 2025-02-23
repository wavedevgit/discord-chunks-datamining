/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
var t = Math.round;
e.exports = function(e) {
  var n = t(e);
  return n < 0 ? 0 : n > 255 ? 255 : 255 & n
}