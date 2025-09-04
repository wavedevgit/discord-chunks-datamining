/** Chunk was on web.js **/
/** chunk id: 622822, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $5: () => F,
  I8: () => M,
  Kt: () => R,
  RW: () => k,
  T5: () => V,
  Y3: () => Z,
  Yt: () => T,
  _t: () => G,
  a1: () => w,
  bN: () => I,
  dl: () => N,
  ft: () => B,
  kH: () => P,
  qF: () => U,
  zd: () => L
});
var Chunk442837 = require("./442837.js"),
  Chunk480916 = require("./480916.js"),
  Chunk453679 = require("./453679.js"),
  Chunk81643 = require("./81643.js"),
  Chunk974814 = require("./974814.js"),
  Chunk500496 = require("./500496.js"),
  Chunk601964 = require("./601964.js"),
  Chunk592125 = require("./592125.js"),
  Chunk731290 = require("./731290.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk709054 = require("./709054.js"),
  Chunk758119 = require("./758119.js"),
  Chunk723359 = require("./723359.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let y = new Date("06/16/2020"),
  O = [Chunk981631.V_K.AGE_RESTRICTED, Chunk981631.V_K.EXPLICIT],
  v = [Chunk723359.L0.NSFW_SERVER, Chunk723359.L0.NSFW_SERVER_INVITE, Chunk723359.L0.NSFW_SERVER_INVITE_EMBED];

function I() {
  let e = Chunk594174.default.getCurrentUser();
  return null != module && Chunk709054.default.extractTimestamp(module.id) > y.getTime() && null == module.nsfwAllowed
}

function T(e) {
  return O.includes(e.nsfwLevel)
}

function S(e) {
  return null != e && A(f.Z.getGuild(e))
}

function A(e) {
  let t = (0, o.sf)();
  return null != e && e.features.has(E.oNc.AGE_VERIFICATION_LARGE_GUILD) && (0, a.u)("age_verification_utils") && t
}

function C(e) {
  let t = (0, r.e7)([f.Z], () => f.Z.getGuild(e)),
    n = (0, o.L5)(),
    i = (0, a.z)("age_verification_utils");
  return null != t && t.features.has(E.oNc.AGE_VERIFICATION_LARGE_GUILD) && i && n
}

function N() {
  let e = (0, Chunk974814.H1)({
      location: "age-gate-utils"
    }),
    t = (0, Chunk81643.sf)();
  return module && exports
}

function R() {
  let e = (0, Chunk974814.s8)({
      location: "age-gate-utils"
    }),
    t = (0, Chunk81643.L5)();
  return module && exports
}

function P(e) {
  let t = (0, o.l6)(),
    n = (0, c.Y2)(e),
    a = C(null == e ? true : e.id),
    s = (0, r.e7)([_.default], () => {
      var e;
      return (null == (e = _.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    l = R(),
    u = b.intl.string(n ? b.t.xi46lp : b.t.ZmwvDQ);
  return l ? t ? {
    title: u,
    description: n ? b.intl.format(b.t["7uIWQE"], {}) : b.intl.format(b.t.x1coPj, {}),
    agreement: b.intl.string(b.t.PBG51t),
    modalType: i.it.NSFW_CHANNEL_AGE_VERIFY
  } : a ? {
    title: b.intl.string(b.t.UYReTk),
    description: b.intl.string(b.t.SxY4IS),
    agreement: b.intl.string(b.t["5B+npK"]),
    modalType: i.it.GUILD_LARGE_SERVER
  } : {
    title: u,
    description: n ? b.intl.string(b.t.akjk0d) : b.intl.string(b.t["u/xqhY"]),
    agreement: b.intl.string(b.t["5B+npK"]),
    modalType: i.it.NSFW_CHANNEL_AGE_VERIFY
  } : s ? {
    title: b.intl.string(n ? b.t["H0SG/v"] : b.t.NEabBQ),
    description: b.intl.format(n ? b.t["6++3cX"] : b.t["2kHZen"], {
      helpURL: p.Z.getArticleURL(E.BhN.NSFW_AGE_GATING)
    }),
    agreement: null,
    modalType: i.it.NSFW_CHANNEL_UNDERAGE
  } : {
    title: u,
    description: b.intl.string(n ? b.t.ZtuRtr : b.t.E4Cd5O),
    agreement: b.intl.string(b.t.wVq7ur),
    modalType: i.it.NSFW_CHANNEL_VERIFIED
  }
}

function w(e) {
  let t = (0, o.l6)(),
    n = e === g.L0.NSFW_SERVER || e === g.L0.NSFW_SERVER_INVITE || e === g.L0.NSFW_SERVER_INVITE_EMBED;
  return t ? {
    verifyAgreementButtonText: b.intl.string(b.t.PBG51t),
    verifyGateDescription: n ? b.intl.format(b.t["7uIWQE"], {}) : b.intl.format(b.t.x1coPj, {}),
    verifyTitle: n ? b.intl.string(b.t.xi46lp) : b.intl.string(b.t.ZmwvDQ)
  } : e === g.L0.LARGE_GUILD ? {
    verifyTitle: b.intl.string(b.t.UYReTk),
    verifyGateDescription: b.intl.string(b.t.SxY4IS),
    verifyAgreementButtonText: b.intl.string(b.t["5B+npK"])
  } : {
    verifyAgreementButtonText: b.intl.string(b.t["5B+npK"]),
    verifyGateDescription: n ? b.intl.string(b.t.akjk0d) : b.intl.string(b.t["u/xqhY"]),
    verifyTitle: n ? b.intl.string(b.t.xi46lp) : b.intl.string(b.t.ZmwvDQ)
  }
}
let D = () => {
    let e = Chunk594174.default.getCurrentUser();
    if (null == module) returnfalse;
    let t = N();
    returntrue !== module.nsfwAllowed || exports
  },
  x = e => {
    if (!D() || null == e) returnfalse;
    let t = f.Z.getGuild(e);
    return null != t && (0, c.Y2)(t) && (0, l.Tz)({
      guildId: e,
      location: "age-gate-utils"
    })
  },
  L = e => !!D() && null != e && Z(u.Z.getChannel(e)),
  j = e => N() && L(e),
  k = e => !!j(e) && ((0, m.mN)(g.L0.NSFW_VOICE_CHANNEL), true);

function M(e, t, n) {
  if (x(e)) {
    let e = null != n && v.includes(n) ? n : g.L0.NSFW_SERVER;
    (0, m.mN)(e);
    return
  }
  return S(e) ? void(0, m.mN)(g.L0.LARGE_GUILD) : L(t) ? void(0, m.mN)(null != n ? n : g.L0.NSFW_CHANNEL) : true
}
let U = e => null != e && (e.isNSFW() || (0, c.Y2)(f.Z.getGuild(e.guild_id))),
  G = e => {
    if (null == e) returnfalse;
    let t = (0, o.sf)();
    return U(e) && t
  },
  B = e => {
    var t;
    if (null == e) returnfalse;
    let n = (null == (t = _.default.getCurrentUser()) ? true : t.nsfwAllowed) === true;
    return U(e) && !n
  };

function Z(e) {
  var t;
  if (null == e) returnfalse;
  let n = d.Z.didAgree(e.guild_id),
    r = (null == (t = _.default.getCurrentUser()) ? true : t.nsfwAllowed) === false,
    i = (0, s.H1)({
      location: "age-gate-utils"
    }),
    a = (0, o.sf)(),
    u = !(n && !r) || a && i;
  if (e.isNSFW() && u) returntrue;
  let p = e.guild_id,
    h = f.Z.getGuild(p);
  return null != h && ((0, l.Tz)({
    guildId: p,
    location: "age-gate-utils"
  }) && (0, c.Y2)(h) && a || A(h) && a)
}

function F(e) {
  let t = (0, o.L5)(),
    n = (0, r.e7)([d.Z], () => d.Z.didAgree(null == e ? true : e.guild_id)),
    i = (0, r.e7)([_.default], () => {
      var e;
      return (null == (e = _.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    a = C(null == e ? true : e.guild_id),
    u = (0, s.s8)({
      location: "age-gate-utils"
    }),
    p = (0, l.j0)({
      guildId: null == e ? true : e.guild_id,
      location: "age-gate-utils"
    }),
    h = (0, r.e7)([f.Z], () => f.Z.getGuild(null == e ? true : e.guild_id)),
    m = u && t,
    g = !(n && !i) || m;
  return null != e && (!!e.isNSFW() && !!g || null != h && (!!(p && (0, c.Y2)(h)) && !!t || !!a && !!t))
}

function V() {
  let e = Chunk594174.default.getCurrentUser();
  return null != module && null == module.nsfwAllowed
}