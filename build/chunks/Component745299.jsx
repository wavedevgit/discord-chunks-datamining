/** Chunk was on web.js **/
/** chunk id: 745299, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
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

function v(e) {
  switch (e) {
    case E.pe.TIER_0:
      return o.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
    case E.pe.TIER_2:
      return o.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}

function A(e) {
  switch (e) {
    case E.pe.TIER_0:
      return a.Hv$.PREMIUM_TIER_0;
    case E.pe.TIER_2:
      return a.Hv$.PREMIUM_TIER_2;
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}

function I(e) {
  switch (e) {
    case E.pe.TIER_0:
      return b.intl.string(b.t.mCG023);
    case E.pe.TIER_2:
      return b.intl.string(b.t.J61px0);
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}
let S = function(e) {
  var t, n, o;
  let {
    dismissCurrentNotice: b,
    subscriptionTier: S
  } = e, {
    analyticsLocations: T
  } = (0, l.Ay)(v(S)), C = (0, h.V)(), N = (0, s.A)(null != C && null != C.expires_at ? Date.parse(C.expires_at) : 0), {
    variant: w,
    showNagbar: R
  } = (0, _.Ay)("PremiumTrialEndingNotice"), P = null == C || (null == (t = C.subscription_trial) ? true : t.sku_id) !== S || null == C.expires_at || Object.values(N).every(e => 0 === e) || C.trial_id !== E.Dw && !R;
  if ((0, c.A)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.TRIAL_NOTICE,
      properties: {
        trial_id: null == C ? true : C.trial_id
      }
    }, {
      disableTrack: P
    }), P) return null;
  let D = S === E.pe.TIER_2 ? y.kqX.PREMIUM_TIER_2_TRIAL_ENDING : y.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    x = () => {
      (0, u.A)({
        trialId: C.trial_id,
        subscriptionTier: S,
        analyticsLocations: T,
        analyticsObject: {
          page: y.liQ.IN_APP,
          section: y.JJy.NOTIFICATION_BAR,
          object: y.ZSU.BUTTON_CTA
        }
      }), d.default.track(y.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: D,
        trial_id: C.trial_id
      })
    },
    L = (0, p.re)({
      intervalType: null == (n = C.subscription_trial) ? true : n.interval,
      intervalCount: null == (o = C.subscription_trial) ? true : o.interval_count
    }),
    j = f.A.getArticleURL(C.trial_id === E.yo ? y.MVz.NITRO_TRIAL_FOR_ALL : y.MVz.PREMIUM_TRIAL);
  return w === _.CJ.NAGBAR_REFRESH && (null == C ? true : C.trial_id) !== E.Dw ? (0, r.jsxs)(m.T0, {
    onClick: () => {
      b(), d.default.track(y.HAw.APP_NOTICE_CLOSED, {
        notice_type: D,
        trial_id: C.trial_id
      })
    },
    children: [(0, r.jsx)(m.In, {
      children: (0, g.GZ)(S, N, L, j)
    }), (0, r.jsx)(m.fY, {
      onClick: x,
      text: I(S)
    })]
  }) : (0, r.jsxs)(a.$Td, {
    color: A(S),
    children: [(0, r.jsx)(a.PMB, {
      noticeType: D,
      onClick: b
    }), (0, r.jsx)(a.tvc, {
      size: "md",
      color: "currentColor",
      className: O.PC
    }), (0, g.GZ)(S, N, L, j), (0, r.jsx)(a.zr9, {
      onClick: x,
      children: I(S)
    })]
  })
}