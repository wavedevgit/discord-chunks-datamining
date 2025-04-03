/** Chunk was on 10451 **/
n.d(t, {
  Z: () => l
});
var r = n(192379),
  i = n(913527),
  s = n.n(i),
  a = n(55935);
let o = s().duration(30, "days");

function l(e, t) {
  return r.useMemo(() => (0, a.vc)(t ? null != e.outboundRedemptionEndDate ? s()(e.outboundRedemptionEndDate) : s()(e.endDate).add(o) : s()(e.endDate), "LL"), [e, t])
}