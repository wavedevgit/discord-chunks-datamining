/** Chunk was on 11814 (5d38d8f10d63a4b1.js) **/
n.d(t, {
  Z: () => i
});
var r = n(192379);

function i() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return r.useCallback(e => {
    t.forEach(t => {
      null != t && ("function" == typeof t ? t(e) : t.current = e)
    })
  }, t)
}