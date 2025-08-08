/** Chunk was on 72939 **/
t.d(n, {
  Z: () => a
});
var o = t(442837),
  r = t(853872),
  i = t(78839);

function a() {
  let e = (0, o.e7)([i.Z], () => i.Z.getPremiumTypeSubscription());
  return (0, o.e7)([r.Z], () => {
    var n;
    return (null == e ? void 0 : e.paymentSourceId) != null ? null == (n = r.Z.getPaymentSource(e.paymentSourceId)) ? void 0 : n.country : null
  })
}