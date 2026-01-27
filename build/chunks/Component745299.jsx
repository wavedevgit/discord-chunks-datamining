/** Chunk was on 93140 **/
/** chunk id: 745299, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk496431 = require("./496431.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk532794 = require("./532794.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk804412 = require("./804412.js"),
  Chunk234419 = require("./234419.js"),
  Chunk635995 = require("./635995.jsx"),
  Chunk915516 = require("./915516.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk237082 = require("./237082.js");

function P(e) {
  switch (e) {
    case N.pe.TIER_0:
      return R.intl.string(R.t.mCG023);
    case N.pe.TIER_2:
      return R.intl.string(R.t.J61px0);
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}
let y = function(e) {
  var t, n, R;
  let {
    dismissCurrentNotice: y,
    subscriptionTier: f
  } = e, {
    analyticsLocations: C
  } = (0, s.Ay)(function(e) {
    switch (e) {
      case N.pe.TIER_0:
        return a.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
      case N.pe.TIER_2:
        return a.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
      default:
        throw Error("Unsupported subscription tier: ".concat(e))
    }
  }(f)), m = (0, T.V)(), D = (0, o.A)(null != m && null != m.expires_at ? Date.parse(m.expires_at) : 0), {
    variant: g,
    showNagbar: h
  } = (0, A.Ay)("PremiumTrialEndingNotice"), b = null == m || (null == (t = m.subscription_trial) ? true : t.sku_id) !== f || null == m.expires_at || Object.values(D).every(e => 0 === e) || m.trial_id !== N.Dw && !h;
  if ((0, c.A)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.TRIAL_NOTICE,
      properties: {
        trial_id: null == m ? true : m.trial_id
      }
    }, {
      disableTrack: b
    }), b) return null;
  let U = f === N.pe.TIER_2 ? p.kqX.PREMIUM_TIER_2_TRIAL_ENDING : p.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    M = () => {
      (0, u.A)({
        trialId: m.trial_id,
        subscriptionTier: f,
        analyticsLocations: C,
        analyticsObject: {
          page: p.liQ.IN_APP,
          section: p.JJy.NOTIFICATION_BAR,
          object: p.ZSU.BUTTON_CTA
        }
      }), E.default.track(p.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: U,
        trial_id: m.trial_id
      })
    },
    j = (0, _.re)({
      intervalType: null == (n = m.subscription_trial) ? true : n.interval,
      intervalCount: null == (R = m.subscription_trial) ? true : R.interval_count
    }),
    k = d.A.getArticleURL(m.trial_id === N.yo ? p.MVz.NITRO_TRIAL_FOR_ALL : p.MVz.PREMIUM_TRIAL);
  return g === A.CJ.NAGBAR_REFRESH && (null == m ? true : m.trial_id) !== N.Dw ? (0, r.jsxs)(I.T0, {
    onClick: () => {
      y(), E.default.track(p.HAw.APP_NOTICE_CLOSED, {
        notice_type: U,
        trial_id: m.trial_id
      })
    },
    children: [(0, r.jsx)(I.In, {
      children: (0, O.GZ)(f, D, j, k)
    }), (0, r.jsx)(I.fY, {
      onClick: M,
      text: P(f)
    })]
  }) : (0, r.jsxs)(l.$Td, {
    color: function(e) {
      switch (e) {
        case N.pe.TIER_0:
          return l.Hv$.PREMIUM_TIER_0;
        case N.pe.TIER_2:
          return l.Hv$.PREMIUM_TIER_2;
        default:
          throw Error("Unsupported subscription tier: ".concat(e))
      }
    }(f),
    children: [(0, r.jsx)(l.PMB, {
      noticeType: U,
      onClick: y
    }), (0, r.jsx)(l.tvc, {
      size: "md",
      color: "currentColor",
      className: S.PC
    }), (0, O.GZ)(f, D, j, k), (0, r.jsx)(l.zr9, {
      onClick: M,
      children: P(f)
    })]
  })
}