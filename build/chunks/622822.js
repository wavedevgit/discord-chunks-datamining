/** Chunk was on web.js **/
/** chunk id: 622822, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gb: () => P,
  I8: () => N,
  Kt: () => O,
  RW: () => C,
  T5: () => w,
  Yt: () => b,
  a1: () => v,
  aC: () => R,
  bN: () => E,
  dl: () => y,
  zd: () => S
}), require("./442837.js"), require("./453679.js");
var Chunk81643 = require("./81643.js"),
  Chunk974814 = require("./974814.js"),
  Chunk500496 = require("./500496.js"),
  Chunk601964 = require("./601964.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js"),
  Chunk758119 = require("./758119.js"),
  Chunk723359 = require("./723359.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let h = new Date("06/16/2020"),
  m = [Chunk981631.V_K.AGE_RESTRICTED, Chunk981631.V_K.EXPLICIT],
  g = [Chunk723359.L0.NSFW_SERVER, Chunk723359.L0.NSFW_SERVER_INVITE, Chunk723359.L0.NSFW_SERVER_INVITE_EMBED];

function E() {
  let e = Chunk594174.default.getCurrentUser();
  return null != module && Chunk709054.default.extractTimestamp(module.id) > h.getTime() && null == module.nsfwAllowed
}

function b(e) {
  return m.includes(e.nsfwLevel)
}

function y() {
  let e = (0, Chunk974814.H1)({
      location: "age-gate-utils"
    }),
    t = (0, Chunk81643.sf)();
  return module && exports
}

function O() {
  let e = (0, Chunk974814.s8)({
      location: "age-gate-utils"
    }),
    t = (0, Chunk81643.L5)();
  return module && exports
}

function v(e) {
  let t = (0, r.l6)(),
    n = e === f.L0.NSFW_SERVER || e === f.L0.NSFW_SERVER_INVITE || e === f.L0.NSFW_SERVER_INVITE_EMBED;
  return t ? {
    verifyAgreementButtonText: p.intl.string(p.t.PBG51t),
    verifyGateDescription: n ? p.intl.format(p.t["7uIWQE"], {}) : p.intl.format(p.t.x1coPj, {})
  } : {
    verifyAgreementButtonText: p.intl.string(p.t["5B+npK"]),
    verifyGateDescription: n ? p.intl.string(p.t.akjk0d) : p.intl.string(p.t["u/xqhY"])
  }
}
let I = () => {
    let e = Chunk594174.default.getCurrentUser();
    if (null == module) returnfalse;
    let t = y();
    return null == module.nsfwAllowed || exports
  },
  T = e => {
    if (!I() || null == e) returnfalse;
    let t = l.Z.getGuild(e);
    return null != t && (0, o.Y2)(t) && (0, a.Tz)({
      guildId: e,
      location: "age-gate-utils"
    })
  },
  S = e => !!I() && null != e && R(s.Z.getChannel(e)),
  A = e => y() && S(e),
  C = e => !!A(e) && ((0, d.mN)(f.L0.NSFW_VOICE_CHANNEL), true);

function N(e, t, n) {
  if (T(e)) {
    let e = null != n && g.includes(n) ? n : f.L0.NSFW_SERVER;
    (0, d.mN)(e);
    return
  }
  if (S(t)) return void(0, d.mN)(null != n ? n : f.L0.NSFW_CHANNEL)
}

function R(e) {
  if (null == e) returnfalse;
  let t = e.guild_id,
    n = l.Z.getGuild(t);
  return e.isNSFW() || null != n && (0, o.Y2)(n)
}

function P(e) {
  return null != e && e.isNSFW()
}

function w() {
  let e = Chunk594174.default.getCurrentUser();
  return null != module && null == module.nsfwAllowed
}