/** Chunk was on 91584 **/
/** chunk id: 401169, original params: t (module,exports,require) **/
"use strict";
module.exports = {
  stringify: function(t) {
    return "_" + String(t)
  },
  unstringify: function(t) {
    return t.slice(1)
  }
}