/** Chunk was on web.js **/
/** chunk id: 246965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk931118 = require("./931118.js"),
  Chunk639119 = require("./639119.js"),
  Chunk959052 = require("./959052.jsx"),
  Chunk533246 = require("./533246.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk710930 = require("./710930.js");

function b(e) {
  switch (e) {
    case m.Si.TIER_0:
      return s.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
    case m.Si.TIER_2:
      return s.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}

function y(e) {
  switch (e) {
    case m.Si.TIER_0:
      return a.DM8.PREMIUM_TIER_0;
    case m.Si.TIER_2:
      return a.DM8.PREMIUM_TIER_2;
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}

function O(e) {
  switch (e) {
    case m.Si.TIER_0:
      return g.intl.string(g.t.mCG023);
    case m.Si.TIER_2:
      return g.intl.string(g.t["7590Pe"]);
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}
let v = function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: s
  } = e, {
    analyticsLocations: g
  } = (0, l.ZP)(b(s)), v = (0, f.N)(), S = (0, o.Z)(null != v && null != v.expires_at ? Date.parse(v.expires_at) : 0), {
    variant: I,
    showNagbar: T
  } = (0, d.ZP)("PremiumTrialEndingNotice"), C = null == v || (null == (t = v.subscription_trial) ? true : t.sku_id) !== s || null == v.expires_at || Object.values(S).every(e => 0 === e) || v.trial_id !== m.a7 && !T;
  if ((0, c.Z)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.TRIAL_NOTICE,
      properties: {
        trial_id: null == v ? true : v.trial_id
      }
    }, {
      disableTrack: C
    }), C) return null;
  let A = () => {
    (0, u.Z)({
      trialId: v.trial_id,
      subscriptionTier: s,
      analyticsLocations: g,
      analyticsObject: {
        page: h.ZY5.IN_APP,
        section: h.jXE.NOTIFICATION_BAR,
        object: h.qAy.BUTTON_CTA
      }
    })
  };
  return I === d.tE.NAGBAR_REFRESH && (null == v ? true : v.trial_id) !== m.a7 ? (0, r.jsxs)(p.eJ, {
    onClick: n,
    children: [(0, r.jsx)(p.Jy, {
      children: (0, _.kj)(s, S)
    }), (0, r.jsx)(p.OJ, {
      onClick: A,
      text: O(s)
    })]
  }) : (0, r.jsxs)(a.qXd, {
    color: y(s),
    children: [(0, r.jsx)(a.RyX, {
      noticeType: s === m.Si.TIER_2 ? h.kVF.PREMIUM_TIER_2_TRIAL_ENDING : h.kVF.PREMIUM_TIER_0_TRIAL_ENDING,
      onClick: n
    }), (0, r.jsx)(a.SrA, {
      size: "md",
      color: "currentColor",
      className: E.premiumIcon
    }), (0, _.kj)(s, S), (0, r.jsx)(a.EyT, {
      onClick: A,
      children: O(s)
    })]
  })
}