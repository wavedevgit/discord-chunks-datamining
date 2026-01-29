/** Chunk was on 73734 **/
/** chunk id: 745299, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk496431 = require("./496431.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk532794 = require("./532794.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk234419 = require("./234419.js"),
  Chunk635995 = require("./635995.jsx"),
  Chunk915516 = require("./915516.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let p = function(e) {
  var t, n, p;
  let {
    dismissCurrentNotice: R,
    subscriptionTier: S
  } = e, {
    analyticsLocations: P
  } = (0, o.Ay)(function(e) {
    switch (e) {
      case I.pe.TIER_0:
        return a.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
      case I.pe.TIER_2:
        return a.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
      default:
        throw Error("Unsupported subscription tier: ".concat(e))
    }
  }(S)), y = (0, _.V)(), m = (0, l.A)(null != y && null != y.expires_at ? Date.parse(y.expires_at) : 0), f = null == y || (null == (t = y.subscription_trial) ? true : t.sku_id) !== S || null == y.expires_at || Object.values(m).every(e => 0 === e);
  if ((0, s.A)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.TRIAL_NOTICE,
      properties: {
        trial_id: null == y ? true : y.trial_id
      }
    }, {
      disableTrack: f
    }), f) return null;
  let C = S === I.pe.TIER_2 ? O.kqX.PREMIUM_TIER_2_TRIAL_ENDING : O.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    g = (0, d.re)({
      intervalType: null == (n = y.subscription_trial) ? true : n.interval,
      intervalCount: null == (p = y.subscription_trial) ? true : p.interval_count
    }),
    D = E.A.getArticleURL(y.trial_id === I.yo ? O.MVz.NITRO_TRIAL_FOR_ALL : O.MVz.PREMIUM_TRIAL);
  return (0, r.jsxs)(A.T0, {
    onClick: () => {
      R(), u.default.track(O.HAw.APP_NOTICE_CLOSED, {
        notice_type: C,
        trial_id: y.trial_id
      })
    },
    children: [(0, r.jsx)(A.In, {
      children: (0, T.GZ)(S, m, g, D)
    }), (0, r.jsx)(A.fY, {
      onClick: () => {
        (0, c.A)({
          trialId: y.trial_id,
          subscriptionTier: S,
          analyticsLocations: P,
          analyticsObject: {
            page: O.liQ.IN_APP,
            section: O.JJy.NOTIFICATION_BAR,
            object: O.ZSU.BUTTON_CTA
          }
        }), u.default.track(O.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: C,
          trial_id: y.trial_id
        })
      },
      text: function(e) {
        switch (e) {
          case I.pe.TIER_0:
            return N.intl.string(N.t.mCG023);
          case I.pe.TIER_2:
            return N.intl.string(N.t.J61px0);
          default:
            throw Error("Unsupported subscription tier: ".concat(e))
        }
      }(S)
    })]
  })
}