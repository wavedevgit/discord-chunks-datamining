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
    buttonTextOverride: n,
    defaultTextOverride: f
  } = e, p = (0, r.e7)([a.default], () => a.default.getCurrentUser()), h = (0, r.e7)([o.Z], () => o.Z.getPremiumTypeSubscription()), m = (0, r.e7)([l.Z], () => l.Z.getPremiumTypeOverride()), g = null != f ? f : d.intl.string(d.t["2pG5GR"]), E = null != h ? (0, s.Af)(h) : null, b = true !== m ? m : null != E ? (0, s.Rd)(E.planId) : null == p ? true : p.premiumType, y = t === c.Si.TIER_2 && null != b && [c.p9.TIER_0, c.p9.TIER_1].includes(b);
  y && (g = d.intl.string(d.t.IJI7ys));
  let O = null != h && (0, s.m3)(h);
  if (!(null != h && h.status !== u.O0b.ACCOUNT_HOLD && !(0, i.Q0)(h.planId) && !y && true === m || O)) return {
    buttonText: null != n ? n : g
  };
  {
    var v, I;
    let e = _({
      ctaSubscriptionSkuId: t,
      currentPremiumType: b,
      isSwitchingDisabled: O,
      subscription: h
    });
    return {
      buttonText: null != (I = null != (v = e.disabledButtonText) ? v : n) ? I : g,
      buttonTooltipText: e.disabledButtonTooltipText,
      disabled: true
    }
  }
}

function _(e) {
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
    var _;
    n = null != (_ = (0, s.nd)(o)) ? _ : true
  } else null != f && null != u && u < f ? (t = d.intl.string(d.t["2pG5GR"]), n = d.intl.string(d.t.jXaaRk)) : null != l && null != i && l === i ? (t = d.intl.string(d.t.ymSxh4), n = d.intl.string(d.t.jXaaRk)) : null == l && null != i && i === c.p9.TIER_2 && (n = d.intl.string(d.t.jXaaRk));
  return {
    disabledButtonText: t,
    disabledButtonTooltipText: n
  }
}