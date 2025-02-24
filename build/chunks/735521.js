/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
}), n(47120);
var r = n(192379),
  i = n(442837),
  o = n(509545);

function a() {
  let [e, t] = r.useState(void 0), [n, a] = r.useState(void 0), [s, l] = r.useState(void 0);
  return {
    selectedSkuId: e,
    selectedPlan: (0, i.e7)([o.Z], () => null != n ? o.Z.get(n) : null),
    setSelectedSkuId: t,
    setSelectedPlanId: a,
    selectedPlanNotification: s,
    setSelectedPlanNotification: l
  }
}