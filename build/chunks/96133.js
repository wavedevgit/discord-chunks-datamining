/** Chunk was on web.js **/
/** chunk id: 96133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => o
});
var Chunk485756 = require("./485756.js"),
  Chunk222367 = require("./222367.js"),
  Chunk391898 = require("./391898.js");

function s(e, t) {
  return Array.isArray(e) ? !!Array.isArray(t) && e.length === t.length && e.every(function(e, n) {
    return e.getTime() === t[n].getTime()
  }) : e instanceof Date ? t instanceof Date && e.getTime() === t.getTime() : e === t
}
var o = function() {
  function e() {
    this.all = false, this.before = [], this.after = [], this.between = []
  }
  return e.prototype._cacheAdd = function(e, t, n) {
    t && (t = t instanceof Date ? (0, i.o8)(t) : (0, i.bc)(t)), "all" === e ? this.all = t : (n._value = t, this[e].push(n))
  }, e.prototype._cacheGet = function(e, t) {
    var n = false,
      o = t ? Object.keys(t) : [],
      l = function(e) {
        for (var n = 0; n < o.length; n++) {
          var r = o[n];
          if (!s(t[r], e[r])) returntrue
        }
        returnfalse
      },
      c = this[e];
    if ("all" === e) n = this.all;
    else if ((0, a.cy)(c))
      for (var u = 0; u < c.length; u++) {
        var d = c[u];
        if (!(o.length && l(d))) {
          n = d._value;
          break
        }
      }
    if (!n && this.all) {
      for (var f = new r.A(e, t), u = 0; u < this.all.length && f.accept(this.all[u]); u++);
      n = f.getValue(), this._cacheAdd(e, n, t)
    }
    return (0, a.cy)(n) ? (0, i.bc)(n) : n instanceof Date ? (0, i.o8)(n) : n
  }, e
}()