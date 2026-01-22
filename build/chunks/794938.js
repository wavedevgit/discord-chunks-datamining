/** Chunk was on 35511 **/
/** chunk id: 794938, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk999843 = require("./999843.js"),
  a = TypeError,
  o = function(e) {
    var t, n;
    this.promise = new e(function(e, r) {
      if (true !== t || true !== n) throw new a("Bad Promise constructor");
      t = e, n = r
    }), this.resolve = r(t), this.reject = r(n)
  };
module.exports.f = function(e) {
  return new o(e)
}