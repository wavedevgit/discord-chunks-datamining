/** Chunk was on 23357 **/
/** chunk id: 602168, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk691593 = require("./691593.js"),
  o = TypeError,
  a = function(e) {
    var t, n;
    this.promise = new e(function(e, r) {
      if (true !== t || true !== n) throw new o("Bad Promise constructor");
      t = e, n = r
    }), this.resolve = r(t), this.reject = r(n)
  };
module.exports.f = function(e) {
  return new a(e)
}