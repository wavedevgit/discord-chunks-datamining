/** Chunk was on web.js **/
"use strict";
var r = n(24033);
e.exports = function() {
  var e = r(this),
    t = "";
  return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
}