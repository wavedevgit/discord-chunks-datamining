/** Chunk was on 66866 **/
/** chunk id: 93237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $q: () => m,
  F6: () => p,
  HI: () => _,
  ZL: () => g,
  eW: () => h,
  p9: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk266454 = require("./266454.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk276444 = require("./276444.js"),
  Chunk870041 = require("./870041.js"),
  Chunk533525 = require("./533525.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let t = (e - Date.now()) / a.Z.Millis.HOUR;
  return t > 24 ? d.intl.formatToPlainString(d.t["g9s+dH"], {
    numDays: Math.floor(t / 24)
  }) : t >= 1 ? d.intl.formatToPlainString(d.t.k9v339, {
    numHours: Math.floor(t)
  }) : d.intl.formatToPlainString(d.t["/d0GmZ"], {
    numMinutes: Math.floor(60 * t)
  })
}
let m = () => (0, Chunk266454.zu)(Chunk704215.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
  f = () => {
    (0, Chunk266454.Q3)(Chunk704215.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE)
  },
  _ = e => {
    let {
      trialOffer: t
    } = e;
    if (null == t) returnfalse;
    let n = true !== t.referrer_id,
      r = true === t.redeemed_at,
      i = new Date(o.default.extractTimestamp(t.id)),
      l = new Date;
    return n && r && l >= i
  },
  g = () => {
    (0, Chunk266454.Q3)(Chunk704215.z.REFERRAL_PROGRAM_POPOVER)
  },
  h = () => {
    let e = Chunk870041.ZP.useExperiment({
        location: "useIsReferralProgramPopoverShowable"
      }),
      t = (0, Chunk533525.b)("useIsReferralProgramPopoverShowable", module.cohort === Chunk870041.xI.Control),
      n = (0, Chunk266454.zu)(Chunk704215.z.REFERRAL_PROGRAM_POPOVER),
      a = (0, Chunk442837.e7)([Chunk276444.Z], () => Chunk276444.Z.getReferralsRemaining());
    return exports && false === require && null !== Chunk70956 && Chunk70956 > 0 && module.cohort !== Chunk870041.xI.Control
  }