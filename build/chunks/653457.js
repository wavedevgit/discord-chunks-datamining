/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
var r = n(548828),
  i = TypeError,
  o = function(e) {
    var t, n;
    this.promise = new e(function(e, r) {
      if (void 0 !== t || void 0 !== n) throw new i("Bad Promise constructor");
      t = e, n = r
    }), this.resolve = r(t), this.reject = r(n)
  };
e.exports.f = function(e) {
  return new o(e)
}