/** Chunk was on 66200 **/
n.d(t, {
  Z: () => i
});
var l = n(442837),
  o = n(853872),
  r = n(78839);

function i() {
  let e = (0, l.e7)([r.Z], () => r.Z.getPremiumTypeSubscription());
  return (0, l.e7)([o.Z], () => {
    var t;
    return (null == e ? void 0 : e.paymentSourceId) != null ? null == (t = o.Z.getPaymentSource(e.paymentSourceId)) ? void 0 : t.country : null
  })
}