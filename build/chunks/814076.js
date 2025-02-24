/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => s
}), n(47120);
var r = n(192379),
  i = n(742280),
  o = n(442837),
  a = n(351402);

function s() {
  let [e, t] = r.useState(!1), [n, s] = r.useState(!1), l = (0, o.e7)([a.Z], () => i.M.EEA_COUNTRIES.has(a.Z.ipCountryCodeWithFallback));
  return {
    hasViewedPurchaseTerms: e,
    setHasViewedPurchaseTerms: t,
    showWithdrawalWaiver: l,
    hasAcceptedWithdrawalWaiver: !l || n,
    setHasAcceptedWithdrawalWaiver: s
  }
}