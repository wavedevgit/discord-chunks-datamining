/** Chunk was on web.js **/
/** chunk id: 126182, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./65183.js").OrderedMap;
module.exports = {
  createFromArray: function(e) {
    return r(e.map(function(e) {
      return [e.getKey(), e]
    }))
  }
}