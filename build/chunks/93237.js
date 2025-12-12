/** Chunk was on web.js **/
/** chunk id: 93237, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $q: () => f,
  F6: () => d,
  HI: () => _,
  ZL: () => m,
  eW: () => g,
  p9: () => p
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk266454 = require("./266454.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk276444 = require("./276444.js"),
  Chunk533525 = require("./533525.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let t = (e - Date.now()) / a.Z.Millis.HOUR;
  return t > 24 ? u.intl.formatToPlainString(u.t["g9s+dA"], {
    numDays: Math.floor(t / 24)
  }) : t >= 1 ? u.intl.formatToPlainString(u.t.k9v33y, {
    numHours: Math.floor(t)
  }) : u.intl.formatToPlainString(u.t["/d0GmT"], {
    numMinutes: Math.floor(60 * t)
  })
}
let f = () => (0, Chunk266454.zu)(Chunk704215.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
  p = () => {
    (0, Chunk266454.Q3)(Chunk704215.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE)
  },
  _ = e => {
    let {
      trialOffer: t
    } = e;
    if (null == t) returnfalse;
    let n = true !== t.referrer_id,
      r = true === t.redeemed_at,
      i = new Date(s.default.extractTimestamp(t.id)),
      o = new Date >= i;
    return n && r && o
  },
  m = () => {
    (0, Chunk266454.Q3)(Chunk704215.z.REFERRAL_PROGRAM_POPOVER)
  },
  h = () => (0, Chunk266454.zu)(Chunk704215.z.REFERRAL_PROGRAM_POPOVER),
  g = () => {
    let e = (0, Chunk533525.b)(false),
      t = h(),
      n = (0, Chunk442837.e7)([Chunk276444.Z], () => Chunk276444.Z.getReferralsRemaining());
    return module && false === exports && null !== require && require > 0
  }