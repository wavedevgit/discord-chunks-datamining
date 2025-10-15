/** Chunk was on web.js **/
/** chunk id: 246965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y,
  Z: () => v
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk50953 = require("./50953.js");

function E(e) {
  switch (e) {
    case p.Si.TIER_0:
      return s.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
    case p.Si.TIER_2:
      return s.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}

function b(e) {
  switch (e) {
    case p.Si.TIER_0:
      return a.DM8.PREMIUM_TIER_0;
    case p.Si.TIER_2:
      return a.DM8.PREMIUM_TIER_2;
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}

function y(e, t) {
  switch (e) {
    case p.Si.TIER_0:
      return t.days > 0 ? m.intl.formatToPlainString(m.t.sP5OqK, {
        days: t.days
      }) : t.hours > 0 ? m.intl.formatToPlainString(m.t["7Lhfu7"], {
        hours: t.hours
      }) : m.intl.formatToPlainString(m.t.coDiS0, {
        minutes: Math.max(t.minutes, 1)
      });
    case p.Si.TIER_2:
      return t.days > 0 ? m.intl.formatToPlainString(m.t["4prs5e"], {
        days: t.days
      }) : t.hours > 0 ? m.intl.formatToPlainString(m.t.OD5nIS, {
        hours: t.hours
      }) : m.intl.formatToPlainString(m.t.rvyXjI, {
        minutes: Math.max(t.minutes, 1)
      });
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}

function O(e) {
  switch (e) {
    case p.Si.TIER_0:
      return m.intl.string(m.t.mCG029);
    case p.Si.TIER_2:
      return m.intl.string(m.t["7590PT"]);
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
    analyticsLocations: p
  } = (0, l.ZP)(E(s)), m = (0, f.N)(), v = (0, o.Z)(null != m && null != m.expires_at ? Date.parse(m.expires_at) : 0), {
    variant: I
  } = (0, d.ZP)("PremiumTrialEndingNotice"), T = null == m || (null == (t = m.subscription_trial) ? true : t.sku_id) !== s || null == m.expires_at || Object.values(v).every(e => 0 === e);
  if ((0, c.Z)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.TRIAL_NOTICE,
      properties: {
        trial_id: null == m ? true : m.trial_id
      }
    }, {
      disableTrack: T
    }), T) return null;
  let S = () => {
    (0, u.Z)({
      trialId: m.trial_id,
      subscriptionTier: s,
      analyticsLocations: p,
      analyticsObject: {
        page: h.ZY5.IN_APP,
        section: h.jXE.NOTIFICATION_BAR,
        object: h.qAy.BUTTON_CTA
      }
    })
  };
  return I === d.tE.NAGBAR_REFRESH ? (0, r.jsxs)(_.eJ, {
    onClick: n,
    children: [(0, r.jsx)(_.Jy, {
      children: y(s, v)
    }), (0, r.jsx)(_.OJ, {
      onClick: S,
      text: O(s)
    })]
  }) : (0, r.jsxs)(a.qXd, {
    color: b(s),
    children: [(0, r.jsx)(a.RyX, {
      onClick: n
    }), (0, r.jsx)(a.SrA, {
      size: "md",
      color: "currentColor",
      className: g.premiumIcon
    }), y(s, v), (0, r.jsx)(a.EyT, {
      onClick: S,
      children: O(s)
    })]
  })
}