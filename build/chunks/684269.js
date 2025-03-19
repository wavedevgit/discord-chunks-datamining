/** Chunk was on 31649 **/
n.d(t, {
  Z: () => o
}), n(230036);
var r = n(695346),
  i = n(875425);
let a = Object.values(i.FO).filter(e => "number" == typeof e).sort((e, t) => e - t);

function o() {
  var e;
  let t = r.Ok.getSetting();
  if (null == t || "" === t.expiresAtMs) return i.FO.TODAY;
  let n = Number(t.expiresAtMs);
  if (isNaN(n)) return i.FO.TODAY;
  if (0 === n) return i.FO.DONT_CLEAR;
  let o = new Date,
    l = new Date(n);
  if (o.getFullYear() !== l.getFullYear() || o.getMonth() !== l.getMonth() || o.getDate() !== l.getDate()) return i.FO.TODAY;
  let s = Number(n) - Date.now();
  return null !== (e = a.find(e => s <= e)) && void 0 !== e ? e : i.FO.TODAY
}