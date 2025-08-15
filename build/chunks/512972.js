/** Chunk was on 8381 **/
/** chunk id: 512972, original params: t,e,r (module,exports,require) **/
"use strict";
var n = require("./65183.js").OrderedMap;
module.exports = {
  createFromArray: function(t) {
    return n(t.map(function(t) {
      return [t.getKey(), t]
    }))
  }
}