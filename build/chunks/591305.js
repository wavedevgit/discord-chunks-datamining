/** Chunk was on web.js **/
/** chunk id: 591305, original params: e (module,exports,re quire) **/
"use strict";
module.exports = {
  stringify: function(e) {
    return "_" + String(e)
  },
  unstringify: function(e) {
    return e.slice(1)
  }
}