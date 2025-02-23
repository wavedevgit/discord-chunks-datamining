/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
e.exports = function(e) {
  var t, r;
  if (t = n(618336), r = n(919089), "keypress" === e.type) {
    var i = String.fromCharCode(e.which);
    return e.shiftKey || (i = i.toLowerCase()), i
  }
  return t[e.which] ? t[e.which] : r[e.which] ? r[e.which] : String.fromCharCode(e.which).toLowerCase()
}