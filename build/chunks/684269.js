/** Chunk was on 31649 **/
n.d(t, {
  Z: () => l
}), n(230036);
var r = n(695346),
  i = n(875425);
let a = Object.values(i.FO).filter(e => "number" == typeof e).sort((e, t) => e - t);

function l() {
  var e;
  let t = r.Ok.getSetting();
  if (null == t || "" === t.expiresAtMs) return i.FO.TODAY;
  let n = Number(t.expiresAtMs);
  if (isNaN(n)) return i.FO.TODAY;
  if (0 === n) return i.FO.DONT_CLEAR;
  let l = new Date,
    o = new Date(n);
  if (l.getFullYear() !== o.getFullYear() || l.getMonth() !== o.getMonth() || l.getDate() !== o.getDate()) return i.FO.TODAY;
  let s = Number(n) - Date.now();
  return null !== (e = a.find(e => s <= e)) && void 0 !== e ? e : i.FO.TODAY
}