/** Chunk was on 31253 **/
/** chunk id: 246965, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./415506.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
let O = 12633 == require.j ? function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: O
  } = e, {
    analyticsLocations: N
  } = (0, c.ZP)(function(e) {
    switch (e) {
      case d.Si.TIER_0:
        return a.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
      case d.Si.TIER_2:
        return a.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
      default:
        throw Error("Unsupported subscription tier: ".concat(e))
    }
  }(O)), S = (0, _.N)(), p = (0, o.Z)(null != S && null != S.expires_at ? Date.parse(S.expires_at) : 0), R = null == S || (null == (t = S.subscription_trial) ? true : t.sku_id) !== O || null == S.expires_at || Object.values(p).every(e => 0 === e);
  return ((0, s.Z)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.TRIAL_NOTICE,
    properties: {
      trial_id: null == S ? true : S.trial_id
    }
  }, {
    disableTrack: R
  }), R) ? null : (0, r.jsxs)(l.qXd, {
    color: function(e) {
      switch (e) {
        case d.Si.TIER_0:
          return l.DM8.PREMIUM_TIER_0;
        case d.Si.TIER_2:
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
        case d.Si.TIER_0:
          return t.days > 0 ? I.intl.formatToPlainString(I.t.sP5OqK, {
            days: t.days
          }) : t.hours > 0 ? I.intl.formatToPlainString(I.t["7Lhfu7"], {
            hours: t.hours
          }) : I.intl.formatToPlainString(I.t.coDiS0, {
            minutes: Math.max(t.minutes, 1)
          });
        case d.Si.TIER_2:
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
    }(O, p), (0, r.jsx)(l.EyT, {
      onClick: () => {
        (0, u.Z)({
          trialId: S.trial_id,
          subscriptionTier: O,
          analyticsLocations: N,
          analyticsObject: {
            page: E.ZY5.IN_APP,
            section: E.jXE.NOTIFICATION_BAR,
            object: E.qAy.BUTTON_CTA
          }
        })
      },
      children: function(e) {
        switch (e) {
          case d.Si.TIER_0:
            return I.intl.string(I.t.mCG029);
          case d.Si.TIER_2:
            return I.intl.string(I.t["7590PT"]);
          default:
            throw Error("Unsupported subscription tier: ".concat(e))
        }
      }(O)
    })]
  })
} : null