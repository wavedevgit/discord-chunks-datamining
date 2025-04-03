/** Chunk was on 31649 **/
n.d(t, {
  Z: () => a
}), n(230036);
var r = n(695346),
  l = n(875425);
let i = Object.values(l.FO).filter(e => "number" == typeof e).sort((e, t) => e - t);

function a() {
  var e;
  let t = r.Ok.getSetting();
  if (null == t || "" === t.expiresAtMs) return l.FO.TODAY;
  let n = Number(t.expiresAtMs);
  if (isNaN(n)) return l.FO.TODAY;
  if (0 === n) return l.FO.DONT_CLEAR;
  let a = new Date,
    o = new Date(n);
  if (a.getFullYear() !== o.getFullYear() || a.getMonth() !== o.getMonth() || a.getDate() !== o.getDate()) return l.FO.TODAY;
  let s = Number(n) - Date.now();
  return null !== (e = i.find(e => s <= e)) && void 0 !== e ? e : l.FO.TODAY
}