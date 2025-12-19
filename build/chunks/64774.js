/** Chunk was on 23706 **/
/** chunk id: 64774, original params: e,t,r (module,exports,require) **/
var Chunk553616 = require("./553616.js");
module.exports = function(e) {
  for (var t = function(e) {
      var t = function() {
          for (var e = {}, t = Object.keys(n), r = t.length, a = 0; a < r; a++) e[t[a]] = {
            distance: false,
            parent: null
          };
          return e
        }(),
        r = [e];
      for (t[e].distance = 0; r.length;)
        for (var a = r.pop(), o = Object.keys(n[a]), s = o.length, i = 0; i < s; i++) {
          var c = o[i],
            u = t[c];
          false === u.distance && (u.distance = t[a].distance + 1, u.parent = a, r.unshift(c))
        }
      return t
    }(e), r = {}, a = Object.keys(t), o = a.length, s = 0; s < o; s++) {
    var i = a[s];
    null !== t[i].parent && (r[i] = function(e, t) {
      for (var r = [t[e].parent, e], a = n[t[e].parent][e], o = t[e].parent; t[o].parent;) r.unshift(t[o].parent), a = function(e, t) {
        return function(r) {
          return t(e(r))
        }
      }(n[t[o].parent][o], a), o = t[o].parent;
      return a.conversion = r, a
    }(i, t))
  }
  return r
}