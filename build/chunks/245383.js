/** Chunk was on web.js **/
/** chunk id: 245383, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk311907 = require("./311907.js"),
  Chunk832946 = require("./832946.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk927578 = require("./927578.js"),
  Chunk683760 = require("./683760.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let {
    subscriptionTier: t,
    subscriptionPlanId: n,
    buttonTextOverride: f,
    defaultTextOverride: _
  } = e, h = (0, r.bG)([a.default], () => a.default.getCurrentUser()), m = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription()), g = (0, r.bG)([l.A], () => l.A.getPremiumTypeOverride()), E = null != _ ? _ : d.intl.string(d.t["2pG5Ga"]), y = null != m ? (0, s.EL)(m) : null, b = true !== g ? g : null != y ? (0, s.m6)(y.planId) : null == h ? true : h.premiumType, O = t === c.pe.TIER_2 && null != b && [c.PremiumTypes.TIER_0, c.PremiumTypes.TIER_1].includes(b), v = null != n && null != y && (null == y ? true : y.planId) !== n;
  (O || v) && (E = d.intl.string(d.t.IJI7yk));
  let A = null != m && (0, s.Nc)(m);
  if (!(null != m && m.status !== u.Dmq.ACCOUNT_HOLD && !(0, i.m1)(m.planId) && !O && !v && true === g || A)) return {
    buttonText: null != f ? f : E
  };
  {
    var I, S;
    let e = p({
      ctaSubscriptionSkuId: t,
      currentPremiumType: b,
      isSwitchingDisabled: A,
      subscription: m
    });
    return {
      buttonText: null != (I = null != (S = e.disabledButtonText) ? S : f) ? I : E,
      buttonTooltipText: e.disabledButtonTooltipText,
      disabled: true
    }
  }
}

function p(e) {
  let t, n, {
    ctaSubscriptionSkuId: r,
    currentPremiumType: i,
    isSwitchingDisabled: a,
    subscription: o
  } = e;
  if (null != r && r !== c.pe.LEGACY && r !== c.pe.TIER_0 && r !== c.pe.TIER_1 && r !== c.pe.TIER_2) return {
    disabledButtonText: t,
    disabledButtonTooltipText: n
  };
  let l = null != r ? c.WN[(0, s.mH)(r)] : null,
    u = null != l ? c.ci[l] : null,
    f = null != i ? c.ci[i] : null;
  if (a) {
    var p;
    n = null != (p = (0, s.Q8)(o)) ? p : true
  } else null != f && null != u && u < f ? (t = d.intl.string(d.t["2pG5Ga"]), n = d.intl.string(d.t.jXaaRk)) : null != l && null != i && l === i ? (t = d.intl.string(d.t.ymSxhy), n = d.intl.string(d.t.jXaaRk)) : null == l && null != i && i === c.PremiumTypes.TIER_2 && (n = d.intl.string(d.t.jXaaRk));
  return {
    disabledButtonText: t,
    disabledButtonTooltipText: n
  }
}