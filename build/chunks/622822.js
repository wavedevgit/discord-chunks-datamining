/** Chunk was on web.js **/
/** chunk id: 622822, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $5: () => X,
  I8: () => Y,
  Kt: () => j,
  Lj: () => C,
  RW: () => H,
  Y3: () => q,
  Yt: () => R,
  _I: () => L,
  _t: () => K,
  a1: () => G,
  bN: () => N,
  dl: () => k,
  ft: () => z,
  hO: () => P,
  kH: () => U,
  qF: () => W,
  zd: () => F
}), require("./388685.js"), require("./953529.js");
var Chunk442837 = require("./442837.js"),
  Chunk480916 = require("./480916.js"),
  Chunk453679 = require("./453679.js"),
  Chunk81643 = require("./81643.js"),
  Chunk888429 = require("./888429.js"),
  Chunk128064 = require("./128064.js"),
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

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  return {
    description: e ? b.intl.string(b.t["lSgO/q"]) : b.intl.string(b.t.SxY4IW),
    agreement: e ? b.intl.string(b.t.PBG51l) : b.intl.string(b.t["5B+npG"])
  }
}
let S = new Date("06/16/2020"),
  A = [Chunk981631.V_K.AGE_RESTRICTED, Chunk981631.V_K.EXPLICIT],
  C = new Set([Chunk723359.L0.NSFW_SERVER, Chunk723359.L0.NSFW_SERVER_INVITE, Chunk723359.L0.NSFW_SERVER_INVITE_EMBED]);

function N() {
  let e = Chunk594174.default.getCurrentUser();
  return null != module && Chunk709054.default.extractTimestamp(module.id) > S.getTime() && null == module.nsfwAllowed
}

function R(e) {
  return A.includes(e.nsfwLevel)
}

function P(e) {
  return null != e && w(f.Z.getGuild(e))
}

function w(e) {
  let t = (0, a.u)("age_verification_utils"),
    n = (0, o.yo)();
  return t && n && (null == e ? true : e.features.has(E.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD))
}

function D(e) {
  let t = (0, a.z)("age_verification_utils"),
    n = (0, o.Jm)();
  return t && n && (null == e ? true : e.features.has(E.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD))
}

function L(e) {
  return null != e && x(f.Z.getGuild(e))
}

function x(e) {
  return null != e && (0, a.u)("age_verification_utils") && (0, o.sf)() && e.features.has(E.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD)
}

function M(e) {
  let t = (0, r.e7)([f.Z], () => f.Z.getGuild(e)),
    n = (0, a.z)("age_verification_utils"),
    i = (0, o.L5)();
  return null != t && n && i && t.features.has(E.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD)
}

function k() {
  let e = (0, Chunk128064.c_)("age-gate-utils"),
    t = (0, Chunk453679.u)("age-gate-utils"),
    n = (0, Chunk81643.sf)();
  return (module || exports) && require
}

function j() {
  let e = (0, Chunk128064.pY)("age-gate-utils"),
    t = (0, Chunk81643.L5)(),
    n = (0, Chunk453679.z)("age-gate-utils");
  return (module || require) && exports
}

function U(e) {
  let t = (0, o.l6)(),
    n = (0, c.Y2)(e),
    a = M(null == e ? true : e.id),
    s = (0, r.e7)([_.default], () => {
      var e;
      return (null == (e = _.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    l = j(),
    u = D(e),
    d = b.intl.string(n ? b.t.xi46lg : b.t.ZmwvDc);
  if (l) {
    if (u) {
      let e = T(t);
      return I(O({
        title: b.intl.string(b.t.MjQbfi)
      }, e), {
        modalType: i.it.GUILD_LARGE_SERVER_UNDERAGE
      })
    }
    return t ? {
      title: d,
      description: n ? b.intl.format(b.t["7uIWQM"], {}) : b.intl.format(b.t.x1coPo, {}),
      agreement: b.intl.string(b.t.PBG51l),
      modalType: i.it.NSFW_CHANNEL_AGE_VERIFY
    } : a ? {
      title: b.intl.string(b.t.UYReTs),
      description: b.intl.string(b.t.SxY4IW),
      agreement: b.intl.string(b.t["5B+npG"]),
      modalType: i.it.GUILD_LARGE_SERVER
    } : {
      title: d,
      description: n ? b.intl.string(b.t.akjk0f) : b.intl.string(b.t["u/xqhc"]),
      agreement: b.intl.string(b.t["5B+npG"]),
      modalType: i.it.NSFW_CHANNEL_AGE_VERIFY
    }
  }
  return s ? {
    title: b.intl.string(n ? b.t["H0SG/g"] : b.t.NEabBa),
    description: b.intl.format(n ? b.t["6++3cX"] : b.t["2kHZes"], {
      helpURL: p.Z.getArticleURL(E.BhN.NSFW_AGE_GATING)
    }),
    agreement: null,
    modalType: i.it.NSFW_CHANNEL_UNDERAGE
  } : {
    title: d,
    description: b.intl.string(n ? b.t.ZtuRts : b.t.E4Cd5I),
    agreement: b.intl.string(b.t.wVq7uo),
    modalType: i.it.NSFW_CHANNEL_VERIFIED
  }
}

function G(e) {
  let t = (0, o.l6)(),
    n = j(),
    i = e === g.L0.NSFW_SERVER || e === g.L0.NSFW_SERVER_INVITE || e === g.L0.NSFW_SERVER_INVITE_EMBED,
    a = (0, r.e7)([_.default], () => {
      var e;
      return (null == (e = _.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    });
  if (e === g.L0.JOIN_LARGE_GUILD_UNDERAGE || e === g.L0.ACCESS_LARGE_GUILD_UNDERAGE) {
    let n = e === g.L0.JOIN_LARGE_GUILD_UNDERAGE ? b.t["u/xsK9"] : b.t.MjQbfi,
      r = T(t);
    return {
      verifyTitle: b.intl.string(n),
      verifyGateDescription: r.description,
      verifyAgreementButtonText: r.agreement
    }
  }
  return t ? {
    verifyAgreementButtonText: b.intl.string(b.t.PBG51l),
    verifyGateDescription: i ? b.intl.format(b.t["7uIWQM"], {}) : b.intl.format(b.t.x1coPo, {}),
    verifyTitle: i ? b.intl.string(b.t.xi46lg) : b.intl.string(b.t.ZmwvDc)
  } : e === g.L0.LARGE_GUILD ? {
    verifyTitle: b.intl.string(b.t.UYReTs),
    verifyGateDescription: b.intl.string(b.t.SxY4IW),
    verifyAgreementButtonText: b.intl.string(b.t["5B+npG"])
  } : a && i && !n ? {
    verifyTitle: b.intl.string(b.t["H0SG/g"]),
    verifyGateDescription: b.intl.format(b.t["6++3cX"], {
      helpURL: p.Z.getArticleURL(E.BhN.AGE_GATE)
    }),
    verifyAgreementButtonText: null
  } : {
    verifyAgreementButtonText: b.intl.string(b.t["5B+npG"]),
    verifyGateDescription: i ? b.intl.string(b.t.akjk0f) : b.intl.string(b.t["u/xqhc"]),
    verifyTitle: i ? b.intl.string(b.t.xi46lg) : b.intl.string(b.t.ZmwvDc)
  }
}
let B = () => {
    let e = Chunk594174.default.getCurrentUser();
    if (null == module) returnfalse;
    let t = k();
    returntrue !== module.nsfwAllowed || exports
  },
  Z = e => {
    if (!B() || null == e) returnfalse;
    let t = f.Z.getGuild(e);
    return null != t && (0, c.Y2)(t) && (0, s.Tz)({
      guildId: e,
      location: "age-gate-utils"
    })
  },
  F = e => !!B() && null != e && q(u.Z.getChannel(e)),
  V = e => k() && F(e),
  H = e => !!V(e) && ((0, m.mN)(g.L0.NSFW_VOICE_CHANNEL), true);

function Y(e, t, n) {
  if (P(e)) return void(0, m.mN)(g.L0.ACCESS_LARGE_GUILD_UNDERAGE);
  if (Z(e)) {
    let e = null != n && C.has(n) ? n : g.L0.NSFW_SERVER;
    (0, m.mN)(e);
    return
  }
  return L(e) ? void(0, m.mN)(g.L0.LARGE_GUILD) : Q() && F(t) ? void(0, m.mN)(null != n ? n : g.L0.NSFW_CHANNEL) : true
}
let W = e => null != e && (e.isNSFW() || (0, c.Y2)(f.Z.getGuild(e.guild_id))),
  K = e => {
    if (null == e) returnfalse;
    let t = (0, o.sf)();
    return W(e) && t
  },
  z = e => {
    var t;
    if (null == e) returnfalse;
    let n = (null == (t = _.default.getCurrentUser()) ? true : t.nsfwAllowed) === true;
    return W(e) && !n
  };

function q(e) {
  var t;
  if (null == e) returnfalse;
  let n = d.Z.didAgree(e.guild_id),
    r = (null == (t = _.default.getCurrentUser()) ? true : t.nsfwAllowed) === false,
    i = (0, l.c_)("age-gate-utils"),
    a = (0, o.sf)(),
    u = !(n && !r) || a && i;
  if (e.isNSFW() && u) returntrue;
  let p = e.guild_id,
    h = f.Z.getGuild(p);
  return null != h && ((0, s.Tz)({
    guildId: p,
    location: "age-gate-utils"
  }) && (0, c.Y2)(h) && u || x(h) && a)
}

function X(e) {
  let t = (0, o.L5)(),
    n = (0, r.e7)([d.Z], () => d.Z.didAgree(null == e ? true : e.guild_id)),
    i = (0, r.e7)([_.default], () => {
      var e;
      return (null == (e = _.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    a = M(null == e ? true : e.guild_id),
    u = (0, l.pY)("age-gate-utils"),
    p = (0, s.j0)({
      guildId: null == e ? true : e.guild_id,
      location: "age-gate-utils"
    }),
    h = (0, r.e7)([f.Z], () => f.Z.getGuild(null == e ? true : e.guild_id)),
    m = u && t,
    g = !(n && !i) || m;
  return null != e && (!!e.isNSFW() && !!g || null != h && (!!(p && (0, c.Y2)(h)) && !!g || !!a && !!t))
}

function Q() {
  let e = Chunk594174.default.getCurrentUser();
  return null != module && null == module.nsfwAllowed
}