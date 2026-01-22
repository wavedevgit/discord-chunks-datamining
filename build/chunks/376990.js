/** Chunk was on 35511 **/
/** chunk id: 376990, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk241091 = require("./241091.js"),
  Chunk155084 = require("./155084.js"),
  Chunk529030 = require("./529030.js"),
  Chunk554987 = require("./554987.js");
module.exports = function(e, t, n) {
  return function(s) {
    var l = o(s),
      c = arguments.length,
      u = c > 1 ? arguments[1] : true,
      d = true !== u,
      p = d ? r(u, c > 2 ? arguments[2] : true) : true,
      h = new e,
      f = 0;
    return i(l, function(e) {
      var r = d ? p(e, f++) : e;
      n ? t(h, a(r)[0], r[1]) : t(h, r)
    }), h
  }
}