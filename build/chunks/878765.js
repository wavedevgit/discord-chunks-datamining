/** Chunk was on web.js **/
/** chunk id: 878765, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./4940.js").f;
module.exports = function(e, t, n) {
  n in e || r(e, n, {
    configurable: true,
    get: function() {
      return t[n]
    },
    set: function(e) {
      t[n] = e
    }
  })
}