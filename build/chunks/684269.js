/** Chunk was on 31649 **/
n.d(t, {
  Z: () => o
}), n(230036);
var r = n(695346),
  i = n(875425);
let l = Object.values(i.FO).filter(e => "number" == typeof e).sort((e, t) => e - t);

function o() {
  var e;
  let t = r.Ok.getSetting();
  if (null == t || "" === t.expiresAtMs) return i.FO.TODAY;
  let n = Number(t.expiresAtMs);
  if (isNaN(n)) return i.FO.TODAY;
  if (0 === n) return i.FO.DONT_CLEAR;
  let o = new Date,
    a = new Date(n);
  if (o.getFullYear() !== a.getFullYear() || o.getMonth() !== a.getMonth() || o.getDate() !== a.getDate()) return i.FO.TODAY;
  let s = Number(n) - Date.now();
  return null !== (e = l.find(e => s <= e)) && void 0 !== e ? e : i.FO.TODAY
}