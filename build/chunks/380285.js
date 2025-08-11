/** Chunk was on 23357 **/
/** chunk id: 380285, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk921413 = require("./921413.js");
module.exports = function(e, t, n) {
  return function() {
    for (var o = new e, a = arguments.length, i = 0; i < a; i++) {
      var s = arguments[i];
      n ? t(o, r(s)[0], s[1]) : t(o, s)
    }
    return o
  }
}