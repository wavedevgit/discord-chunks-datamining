/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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
    p = !a(function() {
      var t = {};
      return t[f] = function() {
        return 7
      }, 7 !== "" [e](t)
    }),
    _ = p && !a(function() {
      var t = !1,
        n = /a/;
      return "split" === e && ((n = {}).constructor = {}, n.constructor[c] = function() {
        return n
      }, n.flags = "", n[f] = /./ [f]), n.exec = function() {
        return t = !0, null
      }, n[f](""), !t
    });
  if (!p || !_ || n) {
    var h = r(/./ [f]),
      m = t(f, "" [e], function(e, t, n, i, a) {
        var s = r(e),
          l = t.exec;
        return l === o || l === u.exec ? p && !a ? {
          done: !0,
          value: h(t, n, i)
        } : {
          done: !0,
          value: s(n, t, i)
        } : {
          done: !1
        }
      });
    i(String.prototype, e, m[0]), i(u, f, m[1])
  }
  d && l(u[f], "sham", !0)
}