/** Chunk was on 11868 **/
/** chunk id: 246965, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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
  Chunk639119 = require("./639119.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk50953 = require("./50953.js");
let O = function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: O
  } = e, {
    analyticsLocations: p
  } = (0, c.ZP)(function(e) {
    switch (e) {
      case _.Si.TIER_0:
        return o.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
      case _.Si.TIER_2:
        return o.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
      default:
        throw Error("Unsupported subscription tier: ".concat(e))
    }
  }(O)), N = (0, d.N)(), f = (0, a.Z)(null != N && null != N.expires_at ? Date.parse(N.expires_at) : 0), S = null == N || (null == (t = N.subscription_trial) ? true : t.sku_id) !== O || null == N.expires_at || Object.values(f).every(e => 0 === e);
  return ((0, s.Z)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.TRIAL_NOTICE,
    properties: {
      trial_id: null == N ? true : N.trial_id
    }
  }, {
    disableTrack: S
  }), S) ? null : (0, r.jsxs)(l.qXd, {
    color: function(e) {
      switch (e) {
        case _.Si.TIER_0:
          return l.DM8.PREMIUM_TIER_0;
        case _.Si.TIER_2:
          return l.DM8.PREMIUM_TIER_2;
        default:
          throw Error("Unsupported subscription tier: ".concat(e))
      }
    }(O),
    children: [(0, r.jsx)(l.RyX, {
      onClick: n
    }), (0, r.jsx)(l.SrA, {
      size: "md",
      color: "currentColor",
      className: T.premiumIcon
    }), function(e, t) {
      switch (e) {
        case _.Si.TIER_0:
          return t.days > 0 ? I.intl.formatToPlainString(I.t.sP5OqK, {
            days: t.days
          }) : t.hours > 0 ? I.intl.formatToPlainString(I.t["7Lhfu7"], {
            hours: t.hours
          }) : I.intl.formatToPlainString(I.t.coDiS0, {
            minutes: Math.max(t.minutes, 1)
          });
        case _.Si.TIER_2:
          return t.days > 0 ? I.intl.formatToPlainString(I.t["4prs5e"], {
            days: t.days
          }) : t.hours > 0 ? I.intl.formatToPlainString(I.t.OD5nIS, {
            hours: t.hours
          }) : I.intl.formatToPlainString(I.t.rvyXjI, {
            minutes: Math.max(t.minutes, 1)
          });
        default:
          throw Error("Unsupported subscription tier: ".concat(e))
      }
    }(O, f), (0, r.jsx)(l.EyT, {
      onClick: () => {
        (0, u.Z)({
          trialId: N.trial_id,
          subscriptionTier: O,
          analyticsLocations: p,
          analyticsObject: {
            page: E.ZY5.IN_APP,
            section: E.jXE.NOTIFICATION_BAR,
            object: E.qAy.BUTTON_CTA
          }
        })
      },
      children: function(e) {
        switch (e) {
          case _.Si.TIER_0:
            return I.intl.string(I.t.mCG029);
          case _.Si.TIER_2:
            return I.intl.string(I.t["7590PT"]);
          default:
            throw Error("Unsupported subscription tier: ".concat(e))
        }
      }(O)
    })]
  })
}