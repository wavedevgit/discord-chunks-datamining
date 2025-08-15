/** Chunk was on 8381 **/
/** chunk id: 370260, original params: t (module,exports,require) **/
"use strict";
module.exports = {
  stringify: function(t) {
    return "_" + String(t)
  },
  unstringify: function(t) {
    return t.slice(1)
  }
}