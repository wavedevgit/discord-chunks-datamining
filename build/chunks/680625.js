/** Chunk was on web.js **/
"use strict";
var t = Math.ceil,
  n = Math.floor;
e.exports = Math.trunc || function(e) {
  var r = +e;
  return (r > 0 ? n : t)(r)
}