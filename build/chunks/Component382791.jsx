/** Chunk was on web.js **/
/** chunk id: 382791, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A1: () => g,
  Cy: () => h,
  VE: () => _,
  mn: () => p,
  y_: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk104494 = require("./104494.js"),
  Chunk63802 = require("./63802.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk740150 = require("./740150.js"),
  _ = function(e) {
    return e[e.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", e[e.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", e[e.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", e[e.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", e[e.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", e[e.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", e[e.PREMIUM_TIER_2_GREY_FILL = 6] = "PREMIUM_TIER_2_GREY_FILL", e[e.PREMIUM_TIER_2_MOD_BACKGROUND_FILL = 7] = "PREMIUM_TIER_2_MOD_BACKGROUND_FILL", e
  }({});

function p(e) {
  let {
    text: t,
    className: n,
    colorOptions: i = 2,
    icon: o,
    gap: l = true
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(n, f.freeTrialPill, {
      [f.freeTrialPillTier0GradientFill]: 1 === i,
      [f.freeTrialPillTier2GradientFill]: 3 === i,
      [f.freeTrialPillTier2OldGradientFill]: 4 === i,
      [f.lightBackgroundPill]: 5 === i,
      [f.greyBackgroundPill]: 6 === i,
      [f.modBackgroundPill]: 7 === i,
      [f.freeTrialPillGap]: l
    }),
    children: [(0, r.jsx)(s.Text, {
      variant: "text-xs/bold",
      className: a()(f.freeTrialPillText, {
        [f.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
        [f.freeTrialPillTextTier0]: 0 === i,
        [f.freeTrialPillTextTier2]: 2 === i || 6 === i,
        [f.freeTrialPillTextDefault]: 7 === i
      }),
      children: t
    }), o]
  })
}

function h(e) {
  let t, {
    text: n,
    className: i,
    colorOptions: s = 2,
    isPillOnBorder: l = true
  } = e;
  switch (s) {
    case 1:
      t = o.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
      break;
    case 3:
      t = "url(#".concat(c.l_, ")");
      break;
    case 4:
    case 5:
      t = "url(#".concat(c.Qi, ")");
      break;
    default:
      t = "white"
  }
  return l ? (0, r.jsxs)("div", {
    className: a()(i, f.freeTrialPillWithSparkles),
    children: [(0, r.jsx)(c.R9, {
      foreground: f.sparkleStar1,
      color: t
    }), (0, r.jsx)(c.R9, {
      foreground: f.sparkleStar2,
      color: t
    }), (0, r.jsx)(c.R9, {
      foreground: f.sparkleStar3,
      color: t
    }), (0, r.jsx)(p, {
      text: n,
      colorOptions: s
    }), (0, r.jsx)(c.R9, {
      foreground: f.sparkleStar4,
      color: t
    }), (0, r.jsx)(c.R9, {
      foreground: f.sparkleStar5,
      color: t
    })]
  }) : (0, r.jsxs)("div", {
    className: a()(i, f.freeTrialPillWithSparkles),
    children: [(0, r.jsx)(p, {
      text: n,
      colorOptions: s
    }), (0, r.jsx)(c.R9, {
      foreground: f.sparkleStar1,
      style: {
        marginLeft: 4,
        marginBottom: false
      },
      color: t
    }), (0, r.jsx)(c.R9, {
      foreground: f.sparkleStar2,
      color: t
    })]
  })
}

function m(e, t) {
  return t === u.Si.TIER_0 ? d.intl.string(d.t.IBYG5U) : e === u.PremiumTypes.TIER_0 ? d.intl.string(d.t.qYKftX) : null
}

function g(e, t, n, r, i) {
  if (null != n && (0, l.Wp)(n, u.Si.TIER_2) && true !== n.discount.amount) return e ? d.intl.string(d.t.EyjDRE) : d.intl.formatToPlainString(d.t.iiLbvu, {
    percent: n.discount.amount
  });
  if (i === u.Si.TIER_2) {
    let e = d.intl.string(d.t.IBYG5U);
    return (null == r ? true : r.trial_id) === u.a7 && (e = d.intl.string(d.t.gtNqJQ)), e
  }
  return t === u.PremiumTypes.TIER_2 ? d.intl.string(d.t.qYKftX) : e ? d.intl.string(d.t.EyjDRE) : null
}