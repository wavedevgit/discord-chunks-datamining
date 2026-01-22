/** Chunk was on web.js **/
/** chunk id: 727949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GQ: () => d,
  NF: () => _,
  QG: () => p,
  Tp: () => g,
  ZR: () => f,
  ne: () => h
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
  let t = (e - Date.now()) / s.A.Millis.HOUR;
  return t > 24 ? u.intl.formatToPlainString(u.t["g9s+dA"], {
    numDays: Math.floor(t / 24)
  }) : t >= 1 ? u.intl.formatToPlainString(u.t.k9v33y, {
    numHours: Math.floor(t)
  }) : u.intl.formatToPlainString(u.t["/d0GmT"], {
    numMinutes: Math.floor(60 * t)
  })
}
let f = () => (0, a.k8)(i.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
  p = () => {
    (0, a.Dr)(i.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE)
  },
  _ = e => {
    let {
      trialOffer: t
    } = e;
    if (null == t) returnfalse;
    let n = true !== t.referrer_id,
      r = true === t.redeemed_at,
      i = new Date(o.default.extractTimestamp(t.id)),
      a = new Date >= i;
    return n && r && a
  },
  h = () => {
    (0, a.Dr)(i.M.REFERRAL_PROGRAM_POPOVER)
  },
  m = () => (0, a.k8)(i.M.REFERRAL_PROGRAM_POPOVER),
  g = () => {
    let e = (0, c.m)(false),
      t = m(),
      n = (0, r.bG)([l.A], () => l.A.getReferralsRemaining());
    return e && false === t && null !== n && n > 0
  }