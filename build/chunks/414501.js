/** Chunk was on web.js **/
/** chunk id: 414501, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./116740.js").OrderedMap;
module.exports = {
  createFromArray: function(e) {
    return r(e.map(function(e) {
      return [e.getKey(), e]
    }))
  }
}