/** Chunk was on web.js **/
/** chunk id: 536978, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e) {
  return e.Window && e instanceof e.Window ? {
    x: e.pageXOffset || e.document.documentElement.scrollLeft,
    y: e.pageYOffset || e.document.documentElement.scrollTop
  } : {
    x: e.scrollLeft,
    y: e.scrollTop
  }
}