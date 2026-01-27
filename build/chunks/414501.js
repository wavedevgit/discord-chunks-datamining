/** Chunk was on 38939 **/
/** chunk id: 414501, original params: t,e,r (module,exports,require) **/
"use strict";
var n = require("./116740.js").OrderedMap;
module.exports = {
  createFromArray: function(t) {
    return n(t.map(function(t) {
      return [t.getKey(), t]
    }))
  }
}