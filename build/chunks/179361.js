/** Chunk was on 91584 **/
/** chunk id: 179361, original params: t,e,r (module,exports,require) **/
"use strict";
var n = require("./65183.js").OrderedMap;
module.exports = {
  createFromArray: function(t) {
    return n(t.map(function(t) {
      return [t.getKey(), t]
    }))
  }
}