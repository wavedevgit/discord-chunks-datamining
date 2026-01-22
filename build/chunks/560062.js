/** Chunk was on web.js **/
/** chunk id: 560062, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk514575 = require("./514575.js"),
  i = TypeError,
  a = function(e) {
    var t, n;
    this.promise = new e(function(e, r) {
      if (true !== t || true !== n) throw new i("Bad Promise constructor");
      t = e, n = r
    }), this.resolve = r(t), this.reject = r(n)
  };
module.exports.f = function(e) {
  return new a(e)
}