/** Chunk was on web.js **/
"use strict";
n(301563);
var r = n(173850),
  i = n(859209),
  o = n(213265),
  a = n(936940),
  s = n(641236),
  l = n(251069),
  c = s("species"),
  u = RegExp.prototype;
e.exports = function(e, t, n, d) {
  var f = s(e),
    _ = !a(function() {
      var t = {};
      return t[f] = function() {
        return 7
      }, 7 !== "" [e](t)
    }),
    p = _ && !a(function() {
      var t = !1,
        n = /a/;
      return "split" === e && ((n = {}).constructor = {}, n.constructor[c] = function() {
        return n
      }, n.flags = "", n[f] = /./ [f]), n.exec = function() {
        return t = !0, null
      }, n[f](""), !t
    });
  if (!_ || !p || n) {
    var h = r(/./ [f]),
      g = t(f, "" [e], function(e, t, n, i, a) {
        var s = r(e),
          l = t.exec;
        return l === o || l === u.exec ? _ && !a ? {
          done: !0,
          value: h(t, n, i)
        } : {
          done: !0,
          value: s(n, t, i)
        } : {
          done: !1
        }
      });
    i(String.prototype, e, g[0]), i(u, f, g[1])
  }
  d && l(u[f], "sham", !0)
}