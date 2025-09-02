/** Chunk was on web.js **/
/** chunk id: 622822, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $5: () => U,
  I8: () => x,
  Kt: () => A,
  RW: () => D,
  T5: () => G,
  Y3: () => k,
  Yt: () => v,
  _t: () => j,
  a1: () => C,
  bN: () => O,
  dl: () => S,
  ft: () => M,
  qF: () => L,
  zd: () => P
});
var Chunk442837 = require("./442837.js"),
  Chunk453679 = require("./453679.js"),
  Chunk81643 = require("./81643.js"),
  Chunk974814 = require("./974814.js"),
  Chunk500496 = require("./500496.js"),
  Chunk601964 = require("./601964.js"),
  Chunk592125 = require("./592125.js"),
  Chunk731290 = require("./731290.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js"),
  Chunk758119 = require("./758119.js"),
  Chunk723359 = require("./723359.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let E = new Date("06/16/2020"),
  b = [Chunk981631.V_K.AGE_RESTRICTED, Chunk981631.V_K.EXPLICIT],
  y = [Chunk723359.L0.NSFW_SERVER, Chunk723359.L0.NSFW_SERVER_INVITE, Chunk723359.L0.NSFW_SERVER_INVITE_EMBED];

function O() {
  let e = Chunk594174.default.getCurrentUser();
  return null != module && Chunk709054.default.extractTimestamp(module.id) > E.getTime() && null == module.nsfwAllowed
}

function v(e) {
  return b.includes(e.nsfwLevel)
}

function I(e) {
  let t = d.Z.getGuild(e),
    n = (0, a.sf)();
  return null != t && t.features.has(m.oNc.AGE_VERIFICATION_LARGE_GUILD) && (0, i.u)("age_verification_utils") && n
}

function T(e) {
  let t = (0, r.e7)([d.Z], () => d.Z.getGuild(e)),
    n = (0, a.L5)(),
    o = (0, i.z)("age_verification_utils");
  return null != t && t.features.has(m.oNc.AGE_VERIFICATION_LARGE_GUILD) && o && n
}

function S() {
  let e = (0, Chunk974814.H1)({
      location: "age-gate-utils"
    }),
    t = (0, Chunk81643.sf)();
  return module && exports
}

function A() {
  let e = (0, Chunk974814.s8)({
      location: "age-gate-utils"
    }),
    t = (0, Chunk81643.L5)();
  return module && exports
}

function C(e) {
  let t = (0, a.l6)(),
    n = e === h.L0.NSFW_SERVER || e === h.L0.NSFW_SERVER_INVITE || e === h.L0.NSFW_SERVER_INVITE_EMBED;
  return t ? {
    verifyAgreementButtonText: g.intl.string(g.t.PBG51t),
    verifyGateDescription: n ? g.intl.format(g.t["7uIWQE"], {}) : g.intl.format(g.t.x1coPj, {})
  } : {
    verifyAgreementButtonText: g.intl.string(g.t["5B+npK"]),
    verifyGateDescription: n ? g.intl.string(g.t.akjk0d) : g.intl.string(g.t["u/xqhY"])
  }
}
let N = () => {
    let e = Chunk594174.default.getCurrentUser();
    if (null == module) returnfalse;
    let t = S();
    returntrue !== module.nsfwAllowed || exports
  },
  R = e => {
    if (!N() || null == e) returnfalse;
    let t = d.Z.getGuild(e);
    return null != t && (0, l.Y2)(t) && (0, s.Tz)({
      guildId: e,
      location: "age-gate-utils"
    })
  },
  P = e => !!N() && null != e && k(c.Z.getChannel(e)),
  w = e => S() && P(e),
  D = e => !!w(e) && ((0, p.mN)(h.L0.NSFW_VOICE_CHANNEL), true);

function x(e, t, n) {
  if (R(e)) {
    let e = null != n && y.includes(n) ? n : h.L0.NSFW_SERVER;
    (0, p.mN)(e);
    return
  }
  if (P(t)) return void(0, p.mN)(null != n ? n : h.L0.NSFW_CHANNEL)
}
let L = e => null != e && (e.isNSFW() || (0, l.Y2)(d.Z.getGuild(e.guild_id))),
  j = e => {
    if (null == e) returnfalse;
    let t = (0, a.sf)();
    return L(e) && t
  },
  M = e => {
    var t;
    if (null == e) returnfalse;
    let n = (null == (t = f.default.getCurrentUser()) ? true : t.nsfwAllowed) === true;
    return L(e) && !n
  };

function k(e) {
  var t;
  if (null == e) returnfalse;
  let n = u.Z.didAgree(e.guild_id),
    r = (null == (t = f.default.getCurrentUser()) ? true : t.nsfwAllowed) === false,
    i = (0, o.H1)({
      location: "age-gate-utils"
    }),
    c = (0, a.sf)(),
    _ = !(n && !r) || c && i;
  if (e.isNSFW() && _) returntrue;
  let p = e.guild_id,
    h = d.Z.getGuild(p);
  return null != h && ((0, s.Tz)({
    guildId: p,
    location: "age-gate-utils"
  }) && (0, l.Y2)(h) && c || I(p) && c)
}

function U(e) {
  let t = (0, a.L5)(),
    n = (0, r.e7)([u.Z], () => u.Z.didAgree(null == e ? true : e.guild_id)),
    i = (0, r.e7)([f.default], () => {
      var e;
      return (null == (e = f.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    c = T(null == e ? true : e.guild_id),
    _ = (0, o.s8)({
      location: "age-gate-utils"
    }),
    p = (0, s.j0)({
      guildId: null == e ? true : e.guild_id,
      location: "age-gate-utils"
    }),
    h = (0, r.e7)([d.Z], () => d.Z.getGuild(null == e ? true : e.guild_id)),
    m = _ && t,
    g = !(n && !i) || m;
  return null != e && (!!e.isNSFW() && !!g || null != h && (!!(p && (0, l.Y2)(h)) && !!t || !!c && !!t))
}

function G() {
  let e = Chunk594174.default.getCurrentUser();
  return null != module && null == module.nsfwAllowed
}