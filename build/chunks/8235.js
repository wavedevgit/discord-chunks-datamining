/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
var e = {
  isImage: function(t) {
    return "image" === r(t)[0]
  },
  isJpeg: function(t) {
    var n = r(t);
    return e.isImage(t) && ("jpeg" === n[1] || "pjpeg" === n[1])
  }
};

function r(t) {
  return t.split("/")
}
t.exports = e