/** Chunk was on web.js **/
"use strict";
n(35282);
var r = n(580983),
  i = n(556585),
  a = n(16721),
  o = n(621523),
  s = n(751736),
  l = n(436207),
  c = s("species"),
  u = RegExp.prototype;
e.exports = function(e, t, n, d) {
  var _ = s(e),
    f = !o(function() {
      var t = {};
      return t[_] = function() {
        return 7
      }, 7 !== "" [e](t)
    }),
    p = f && !o(function() {
      var t = !1,
        n = /a/;
      return "split" === e && ((n = {}).constructor = {}, n.constructor[c] = function() {
        return n
      }, n.flags = "", n[_] = /./ [_]), n.exec = function() {
        return t = !0, null
      }, n[_](""), !t
    });
  if (!f || !p || n) {
    var h = /./ [_],
      m = t(_, "" [e], function(e, t, n, i, o) {
        var s = t.exec;
        return s === a || s === u.exec ? f && !o ? {
          done: !0,
          value: r(h, t, n, i)
        } : {
          done: !0,
          value: r(e, n, t, i)
        } : {
          done: !1
        }
      });
    i(String.prototype, e, m[0]), i(u, _, m[1])
  }
  d && l(u[_], "sham", !0)
}