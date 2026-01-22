/** Chunk was on 35511 **/
/** chunk id: 362071, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk155084 = require("./155084.js");
module.exports = function(e, t, n) {
  return function() {
    for (var a = new e, o = arguments.length, i = 0; i < o; i++) {
      var s = arguments[i];
      n ? t(a, r(s)[0], s[1]) : t(a, s)
    }
    return a
  }
}