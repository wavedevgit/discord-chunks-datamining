/** Chunk was on 1272 **/
n.d(t, {
  G: () => a
});
var r = n(772848),
  i = n(70956),
  l = n(686325);
let o = null;

function a() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = Date.now();
  return null == o || function(e) {
    let t = Date.now(),
      n = t - e.lastUsed > l.iP * i.Z.Millis.MINUTE,
      r = t - e.initialized > 12 * i.Z.Millis.HOUR;
    return n || r
  }(o) ? o = {
    uuid: (0, r.Z)(),
    initialized: t,
    lastUsed: t
  } : (e && (o.lastUsed = t), o)
}