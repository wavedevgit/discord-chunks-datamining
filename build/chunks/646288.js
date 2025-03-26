/** Chunk was on 52272 **/
n.d(t, {
  Z: () => o
});
var r = n(937615),
  i = n(388032);

function o(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (!e.available) return i.NW.string(i.t.RWouSU);
  if (e.premium && !n) return i.NW.string(i.t.QGUSz8);
  let o = e.getPrice(null, t);
  return null != o ? o.amount > 0 ? (0, r.T4)(o.amount, o.currency) : i.NW.string(i.t.QQsaCQ) : i.NW.string(i.t.RWouSU)
}