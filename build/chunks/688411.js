/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
t.exports = function(t) {
  return t.Window && t instanceof t.Window ? {
    x: t.pageXOffset || t.document.documentElement.scrollLeft,
    y: t.pageYOffset || t.document.documentElement.scrollTop
  } : {
    x: t.scrollLeft,
    y: t.scrollTop
  }
}