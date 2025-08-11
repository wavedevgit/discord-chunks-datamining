/** Chunk was on 23357 **/
/** chunk id: 377142, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk324474 = require("./324474.js"),
  Chunk921413 = require("./921413.js"),
  Chunk475424 = require("./475424.js"),
  Chunk795462 = require("./795462.js");
module.exports = function(e, t, n) {
  return function(s) {
    var c = a(s),
      l = arguments.length,
      u = l > 1 ? arguments[1] : true,
      d = true !== u,
      p = d ? r(u, l > 2 ? arguments[2] : true) : true,
      h = new e,
      f = 0;
    return i(c, function(e) {
      var r = d ? p(e, f++) : e;
      n ? t(h, o(r)[0], r[1]) : t(h, r)
    }), h
  }
}