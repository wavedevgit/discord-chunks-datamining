/** Chunk was on 64935 **/
/** chunk id: 727949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GQ: () => d,
  NF: () => f,
  QG: () => m,
  Tp: () => _,
  ZR: () => p,
  ne: () => g
});
var Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk826673 = require("./826673.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk851746 = require("./851746.js"),
  Chunk103411 = require("./103411.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let t = (e - Date.now()) / a.A.Millis.HOUR;
  return t > 24 ? u.intl.formatToPlainString(u.t["g9s+dA"], {
    numDays: Math.floor(t / 24)
  }) : t >= 1 ? u.intl.formatToPlainString(u.t.k9v33y, {
    numHours: Math.floor(t)
  }) : u.intl.formatToPlainString(u.t["/d0GmT"], {
    numMinutes: Math.floor(60 * t)
  })
}
let p = () => (0, l.k8)(i.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
  m = () => {
    (0, l.Dr)(i.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE)
  },
  f = e => {
    let {
      trialOffer: t
    } = e;
    if (null == t) returnfalse;
    let n = true !== t.referrer_id,
      r = true === t.redeemed_at,
      i = new Date(s.default.extractTimestamp(t.id)),
      l = new Date;
    return n && r && l >= i
  },
  g = () => {
    (0, l.Dr)(i.M.REFERRAL_PROGRAM_POPOVER)
  },
  _ = () => {
    let e = (0, c.m)(false),
      t = (0, l.k8)(i.M.REFERRAL_PROGRAM_POPOVER),
      n = (0, r.bG)([o.A], () => o.A.getReferralsRemaining());
    return e && false === t && null !== n && n > 0
  }