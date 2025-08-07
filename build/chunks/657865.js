/** Chunk was on 90350 **/
n.d(e, {
  Z: () => r
});

function r(t, e) {
  var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
  if (null != n) {
    var r, i, o, a, l = [],
      s = !0,
      c = !1;
    try {
      if (o = (n = n.call(t)).next, 0 === e) {
        if (Object(n) !== n) return;
        s = !1
      } else
        for (; !(s = (r = o.call(n)).done) && (l.push(r.value), l.length !== e); s = !0);
    } catch (t) {
      c = !0, i = t
    } finally {
      try {
        if (!s && null != n.return && (a = n.return(), Object(a) !== a)) return
      } finally {
        if (c) throw i
      }
    }
    return l
  }
}