/** Chunk was on web.js **/
/** chunk id: 433390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk301766 = require("./301766.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk502087 = require("./502087.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    subscriptionTier: t,
    subscriptionPlanId: n,
    buttonTextOverride: f,
    defaultTextOverride: _
  } = e, h = (0, r.e7)([a.default], () => a.default.getCurrentUser()), m = (0, r.e7)([o.Z], () => o.Z.getPremiumTypeSubscription()), g = (0, r.e7)([l.Z], () => l.Z.getPremiumTypeOverride()), E = null != _ ? _ : d.intl.string(d.t["2pG5Ga"]), b = null != m ? (0, s.Af)(m) : null, y = true !== g ? g : null != b ? (0, s.Rd)(b.planId) : null == h ? true : h.premiumType, O = t === c.Si.TIER_2 && null != y && [c.PremiumTypes.TIER_0, c.PremiumTypes.TIER_1].includes(y), v = null != n && null != b && (null == b ? true : b.planId) !== n;
  (O || v) && (E = d.intl.string(d.t.IJI7yk));
  let S = null != m && (0, s.m3)(m);
  if (!(null != m && m.status !== u.O0b.ACCOUNT_HOLD && !(0, i.Q0)(m.planId) && !O && !v && true === g || S)) return {
    buttonText: null != f ? f : E
  };
  {
    var I, T;
    let e = p({
      ctaSubscriptionSkuId: t,
      currentPremiumType: y,
      isSwitchingDisabled: S,
      subscription: m
    });
    return {
      buttonText: null != (T = null != (I = e.disabledButtonText) ? I : f) ? T : E,
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
  if (null != r && r !== c.Si.LEGACY && r !== c.Si.TIER_0 && r !== c.Si.TIER_1 && r !== c.Si.TIER_2) return {
    disabledButtonText: t,
    disabledButtonTooltipText: n
  };
  let l = null != r ? c.y7[(0, s.Wz)(r)] : null,
    u = null != l ? c.$e[l] : null,
    f = null != i ? c.$e[i] : null;
  if (a) {
    var p;
    n = null != (p = (0, s.nd)(o)) ? p : true
  } else null != f && null != u && u < f ? (t = d.intl.string(d.t["2pG5Ga"]), n = d.intl.string(d.t.jXaaRk)) : null != l && null != i && l === i ? (t = d.intl.string(d.t.ymSxhy), n = d.intl.string(d.t.jXaaRk)) : null == l && null != i && i === c.PremiumTypes.TIER_2 && (n = d.intl.string(d.t.jXaaRk));
  return {
    disabledButtonText: t,
    disabledButtonTooltipText: n
  }
}