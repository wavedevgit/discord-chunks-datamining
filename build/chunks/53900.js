/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(442837),
  i = n(853872),
  o = n(78839);

function a() {
  let e = (0, r.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription());
  return (0, r.e7)([i.Z], () => {
    var t;
    return (null == e ? void 0 : e.paymentSourceId) != null ? null === (t = i.Z.getPaymentSource(e.paymentSourceId)) || void 0 === t ? void 0 : t.country : null
  })
}