/** Chunk was on 38939 **/
/** chunk id: 536978, original params: t (module,exports,require) **/
"use strict";
module.exports = function(t) {
  return t.Window && t instanceof t.Window ? {
    x: t.pageXOffset || t.document.documentElement.scrollLeft,
    y: t.pageYOffset || t.document.documentElement.scrollTop
  } : {
    x: t.scrollLeft,
    y: t.scrollTop
  }
}