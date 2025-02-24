/** Chunk was on web.js **/
"use strict";
e.exports = function() {
  var e = this;
  clearTimeout(e.resetTimer), e.resetTimer = setTimeout(function() {
    e.resetSequences()
  }, 1e3)
}