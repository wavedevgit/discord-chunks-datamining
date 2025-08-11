/** Chunk was on web.js **/
/** chunk id: 611510, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => s
});
var Chunk135891 = require("./135891.js"),
  Chunk695170 = require("./695170.js"),
  Chunk686942 = require("./686942.js");

function a(e, t) {
  return Array.isArray(e) ? !!Array.isArray(t) && e.length === t.length && e.every(function(e, n) {
    return e.getTime() === t[n].getTime()
  }) : e instanceof Date ? t instanceof Date && e.getTime() === t.getTime() : e === t
}
var s = function() {
  function e() {
    this.all = false, this.before = [], this.after = [], this.between = []
  }
  return module.prototype._cacheAdd = function(e, t, n) {
    t && (t = t instanceof Date ? (0, i.d9)(t) : (0, i.L1)(t)), "all" === e ? this.all = t : (n._value = t, this[e].push(n))
  }, module.prototype._cacheGet = function(e, t) {
    var n = false,
      s = t ? Object.keys(t) : [],
      l = function(e) {
        for (var n = 0; n < s.length; n++) {
          var r = s[n];
          if (!a(t[r], e[r])) returntrue
        }
        returnfalse
      },
      c = this[e];
    if ("all" === e) n = this.all;
    else if ((0, o.kJ)(c))
      for (var u = 0; u < c.length; u++) {
        var d = c[u];
        if (!(s.length && l(d))) {
          n = d._value;
          break
        }
      }
    if (!n && this.all) {
      for (var f = new r.Z(e, t), u = 0; u < this.all.length && f.accept(this.all[u]); u++);
      n = f.getValue(), this._cacheAdd(e, n, t)
    }
    return (0, o.kJ)(n) ? (0, i.L1)(n) : n instanceof Date ? (0, i.d9)(n) : n
  }, module
}()