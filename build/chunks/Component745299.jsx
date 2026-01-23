/** Chunk was on web.js **/
/** chunk id: 745299, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
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
  Chunk804412 = require("./804412.js"),
  Chunk234419 = require("./234419.js"),
  Chunk635995 = require("./635995.jsx"),
  Chunk915516 = require("./915516.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk237082 = require("./237082.js");

function y(e) {
  switch (e) {
    case h.pe.TIER_0:
      return o.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
    case h.pe.TIER_2:
      return o.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}

function b(e) {
  switch (e) {
    case h.pe.TIER_0:
      return a.Hv$.PREMIUM_TIER_0;
    case h.pe.TIER_2:
      return a.Hv$.PREMIUM_TIER_2;
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}

function O(e) {
  switch (e) {
    case h.pe.TIER_0:
      return g.intl.string(g.t.mCG023);
    case h.pe.TIER_2:
      return g.intl.string(g.t["7590Pe"]);
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}
let v = function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: o
  } = e, {
    analyticsLocations: g
  } = (0, l.Ay)(y(o)), v = (0, f.V)(), A = (0, s.A)(null != v && null != v.expires_at ? Date.parse(v.expires_at) : 0), {
    variant: I,
    showNagbar: S
  } = (0, d.Ay)("PremiumTrialEndingNotice"), T = null == v || (null == (t = v.subscription_trial) ? true : t.sku_id) !== o || null == v.expires_at || Object.values(A).every(e => 0 === e) || v.trial_id !== h.Dw && !S;
  if ((0, c.A)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.TRIAL_NOTICE,
      properties: {
        trial_id: null == v ? true : v.trial_id
      }
    }, {
      disableTrack: T
    }), T) return null;
  let C = () => {
    (0, u.A)({
      trialId: v.trial_id,
      subscriptionTier: o,
      analyticsLocations: g,
      analyticsObject: {
        page: m.liQ.IN_APP,
        section: m.JJy.NOTIFICATION_BAR,
        object: m.ZSU.BUTTON_CTA
      }
    })
  };
  return I === d.CJ.NAGBAR_REFRESH && (null == v ? true : v.trial_id) !== h.Dw ? (0, r.jsxs)(p.T0, {
    onClick: n,
    children: [(0, r.jsx)(p.In, {
      children: (0, _.GZ)(o, A)
    }), (0, r.jsx)(p.fY, {
      onClick: C,
      text: O(o)
    })]
  }) : (0, r.jsxs)(a.$Td, {
    color: b(o),
    children: [(0, r.jsx)(a.PMB, {
      noticeType: o === h.pe.TIER_2 ? m.kqX.PREMIUM_TIER_2_TRIAL_ENDING : m.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
      onClick: n
    }), (0, r.jsx)(a.tvc, {
      size: "md",
      color: "currentColor",
      className: E.PC
    }), (0, _.GZ)(o, A), (0, r.jsx)(a.zr9, {
      onClick: C,
      children: O(o)
    })]
  })
}