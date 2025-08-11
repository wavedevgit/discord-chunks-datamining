/** Chunk was on web.js **/
/** chunk id: 246965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./415506.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk213609 = require("./213609.js"),
  Chunk963249 = require("./963249.js"),
  Chunk639119 = require("./639119.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk131715 = require("./131715.js");

function m(e) {
  switch (e) {
    case f.Si.TIER_0:
      return s.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
    case f.Si.TIER_2:
      return s.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}

function g(e) {
  switch (e) {
    case f.Si.TIER_0:
      return o.DM8.PREMIUM_TIER_0;
    case f.Si.TIER_2:
      return o.DM8.PREMIUM_TIER_2;
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}

function E(e, t) {
  switch (e) {
    case f.Si.TIER_0:
      return t.days > 0 ? p.intl.formatToPlainString(p.t.sP5OqK, {
        days: t.days
      }) : t.hours > 0 ? p.intl.formatToPlainString(p.t["7Lhfu7"], {
        hours: t.hours
      }) : p.intl.formatToPlainString(p.t.coDiS0, {
        minutes: Math.max(t.minutes, 1)
      });
    case f.Si.TIER_2:
      return t.days > 0 ? p.intl.formatToPlainString(p.t["4prs5e"], {
        days: t.days
      }) : t.hours > 0 ? p.intl.formatToPlainString(p.t.OD5nIS, {
        hours: t.hours
      }) : p.intl.formatToPlainString(p.t.rvyXjI, {
        minutes: Math.max(t.minutes, 1)
      });
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}

function b(e) {
  switch (e) {
    case f.Si.TIER_0:
      return p.intl.string(p.t.mCG029);
    case f.Si.TIER_2:
      return p.intl.string(p.t["7590PT"]);
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}
let y = function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: s
  } = e, {
    analyticsLocations: f
  } = (0, l.ZP)(m(s)), p = (0, d.N)(), y = (0, a.Z)(null != p && null != p.expires_at ? Date.parse(p.expires_at) : 0), O = null == p || (null == (t = p.subscription_trial) ? true : t.sku_id) !== s || null == p.expires_at || Object.values(y).every(e => 0 === e);
  return ((0, c.Z)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.TRIAL_NOTICE,
    properties: {
      trial_id: null == p ? true : p.trial_id
    }
  }, {
    disableTrack: O
  }), O) ? null : <o.qXd color={g(s)}>{<o.RyX onClick={n} />}{<o.SrA size={"md"} color={"currentColor"} className={h.premiumIcon} />}{E(s, y)}{<o.EyT onClick={() => {
        (0, u.Z)({
          trialId: p.trial_id,
          subscriptionTier: s,
          analyticsLocations: f,
          analyticsObject: {
            page: _.ZY5.IN_APP,
            section: _.jXE.NOTIFICATION_BAR,
            object: _.qAy.BUTTON_CTA
          }
        })
      }}>{b(s)}</o.EyT>}</o.qXd>
}