/** Chunk was on 90350 **/
n.d(e, {
  Z: () => o
});
var r = n(947704);

function i(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, (0, r.Z)(i.key), i)
  }
}

function o(t, e, n) {
  return e && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t
}