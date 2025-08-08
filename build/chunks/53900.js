/** Chunk was on 95193 **/
n.d(t, {
  Z: () => o
});
var i = n(442837),
  r = n(853872),
  l = n(78839);

function o() {
  let e = (0, i.e7)([l.Z], () => l.Z.getPremiumTypeSubscription());
  return (0, i.e7)([r.Z], () => {
    var t;
    return (null == e ? void 0 : e.paymentSourceId) != null ? null == (t = r.Z.getPaymentSource(e.paymentSourceId)) ? void 0 : t.country : null
  })
}