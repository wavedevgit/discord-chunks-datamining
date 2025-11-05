/** Chunk was on web.js **/
/** chunk id: 622822, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $5: () => q,
  I8: () => H,
  Kt: () => j,
  Lj: () => A,
  RW: () => V,
  Y3: () => z,
  Yt: () => N,
  _I: () => D,
  _t: () => W,
  a1: () => U,
  bN: () => C,
  dl: () => M,
  ft: () => K,
  hO: () => R,
  kH: () => k,
  qF: () => Y,
  zd: () => Z
}), require("./388685.js"), require("./953529.js");
var Chunk442837 = require("./442837.js"),
  Chunk480916 = require("./480916.js"),
  Chunk453679 = require("./453679.js"),
  Chunk81643 = require("./81643.js"),
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

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  return {
    description: e ? E.intl.string(E.t["lSgO/q"]) : E.intl.string(E.t.SxY4IW),
    agreement: e ? E.intl.string(E.t.PBG51l) : E.intl.string(E.t["5B+npG"])
  }
}
let T = new Date("06/16/2020"),
  S = [Chunk981631.V_K.AGE_RESTRICTED, Chunk981631.V_K.EXPLICIT],
  A = new Set([Chunk723359.L0.NSFW_SERVER, Chunk723359.L0.NSFW_SERVER_INVITE, Chunk723359.L0.NSFW_SERVER_INVITE_EMBED]);

function C() {
  let e = Chunk594174.default.getCurrentUser();
  return null != module && Chunk709054.default.extractTimestamp(module.id) > T.getTime() && null == module.nsfwAllowed
}

function N(e) {
  return S.includes(e.nsfwLevel)
}

function R(e) {
  return null != e && P(d.Z.getGuild(e))
}

function P(e) {
  let t = (0, a.u)("age_verification_utils"),
    n = (0, o.yo)();
  return t && n && (null == e ? true : e.features.has(g.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD))
}

function w(e) {
  let t = (0, a.z)("age_verification_utils"),
    n = (0, o.Jm)();
  return t && n && (null == e ? true : e.features.has(g.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD))
}

function D(e) {
  return null != e && x(d.Z.getGuild(e))
}

function x(e) {
  return null != e && (0, a.u)("age_verification_utils") && (0, o.sf)() && e.features.has(g.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD)
}

function L(e) {
  let t = (0, r.e7)([d.Z], () => d.Z.getGuild(e)),
    n = (0, a.z)("age_verification_utils"),
    i = (0, o.L5)();
  return null != t && n && i && t.features.has(g.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD)
}

function M() {
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

function k(e) {
  let t = (0, o.l6)(),
    n = (0, l.Y2)(e),
    a = L(null == e ? true : e.id),
    s = (0, r.e7)([f.default], () => {
      var e;
      return (null == (e = f.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    c = j(),
    u = w(e),
    d = E.intl.string(n ? E.t.xi46lg : E.t.ZmwvDc);
  if (c) {
    if (u) {
      let e = I(t);
      return v(y({
        title: E.intl.string(E.t.MjQbfi)
      }, e), {
        modalType: i.it.GUILD_LARGE_SERVER_UNDERAGE
      })
    }
    return t ? {
      title: d,
      description: n ? E.intl.format(E.t["7uIWQM"], {}) : E.intl.format(E.t.x1coPo, {}),
      agreement: E.intl.string(E.t.PBG51l),
      modalType: i.it.NSFW_CHANNEL_AGE_VERIFY
    } : a ? {
      title: E.intl.string(E.t.UYReTs),
      description: E.intl.string(E.t.SxY4IW),
      agreement: E.intl.string(E.t["5B+npG"]),
      modalType: i.it.GUILD_LARGE_SERVER
    } : {
      title: d,
      description: n ? E.intl.string(E.t.akjk0f) : E.intl.string(E.t["u/xqhc"]),
      agreement: E.intl.string(E.t["5B+npG"]),
      modalType: i.it.NSFW_CHANNEL_AGE_VERIFY
    }
  }
  return s ? {
    title: E.intl.string(n ? E.t["H0SG/g"] : E.t.NEabBa),
    description: E.intl.format(n ? E.t["6++3cX"] : E.t["2kHZes"], {
      helpURL: _.Z.getArticleURL(g.BhN.NSFW_AGE_GATING)
    }),
    agreement: null,
    modalType: i.it.NSFW_CHANNEL_UNDERAGE
  } : {
    title: d,
    description: E.intl.string(n ? E.t.ZtuRts : E.t.E4Cd5I),
    agreement: E.intl.string(E.t.wVq7uo),
    modalType: i.it.NSFW_CHANNEL_VERIFIED
  }
}

function U(e) {
  let t = (0, o.l6)(),
    n = j(),
    i = e === m.L0.NSFW_SERVER || e === m.L0.NSFW_SERVER_INVITE || e === m.L0.NSFW_SERVER_INVITE_EMBED,
    a = (0, r.e7)([f.default], () => {
      var e;
      return (null == (e = f.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    });
  if (e === m.L0.JOIN_LARGE_GUILD_UNDERAGE || e === m.L0.ACCESS_LARGE_GUILD_UNDERAGE) {
    let n = e === m.L0.JOIN_LARGE_GUILD_UNDERAGE ? E.t["u/xsK9"] : E.t.MjQbfi,
      r = I(t);
    return {
      verifyTitle: E.intl.string(n),
      verifyGateDescription: r.description,
      verifyAgreementButtonText: r.agreement
    }
  }
  return t ? {
    verifyAgreementButtonText: E.intl.string(E.t.PBG51l),
    verifyGateDescription: i ? E.intl.format(E.t["7uIWQM"], {}) : E.intl.format(E.t.x1coPo, {}),
    verifyTitle: i ? E.intl.string(E.t.xi46lg) : E.intl.string(E.t.ZmwvDc)
  } : e === m.L0.LARGE_GUILD ? {
    verifyTitle: E.intl.string(E.t.UYReTs),
    verifyGateDescription: E.intl.string(E.t.SxY4IW),
    verifyAgreementButtonText: E.intl.string(E.t["5B+npG"])
  } : a && i && !n ? {
    verifyTitle: E.intl.string(E.t["H0SG/g"]),
    verifyGateDescription: E.intl.format(E.t["6++3cX"], {
      helpURL: _.Z.getArticleURL(g.BhN.AGE_GATE)
    }),
    verifyAgreementButtonText: null
  } : {
    verifyAgreementButtonText: E.intl.string(E.t["5B+npG"]),
    verifyGateDescription: i ? E.intl.string(E.t.akjk0f) : E.intl.string(E.t["u/xqhc"]),
    verifyTitle: i ? E.intl.string(E.t.xi46lg) : E.intl.string(E.t.ZmwvDc)
  }
}
let G = () => {
    let e = Chunk594174.default.getCurrentUser();
    if (null == module) returnfalse;
    let t = M();
    returntrue !== module.nsfwAllowed || exports
  },
  B = e => {
    if (!G() || null == e) returnfalse;
    let t = d.Z.getGuild(e);
    return null != t && (0, l.Y2)(t)
  },
  Z = e => !!G() && null != e && z(c.Z.getChannel(e)),
  F = e => M() && Z(e),
  V = e => !!F(e) && ((0, h.mN)(m.L0.NSFW_VOICE_CHANNEL), true);

function H(e, t, n) {
  if (R(e)) return void(0, h.mN)(m.L0.ACCESS_LARGE_GUILD_UNDERAGE);
  if (B(e)) {
    let e = null != n && A.has(n) ? n : m.L0.NSFW_SERVER;
    (0, h.mN)(e);
    return
  }
  return D(e) ? void(0, h.mN)(m.L0.LARGE_GUILD) : X() && Z(t) ? void(0, h.mN)(null != n ? n : m.L0.NSFW_CHANNEL) : true
}
let Y = e => null != e && (e.isNSFW() || (0, l.Y2)(d.Z.getGuild(e.guild_id))),
  W = e => {
    if (null == e) returnfalse;
    let t = (0, o.sf)();
    return Y(e) && t
  },
  K = e => {
    var t;
    if (null == e) returnfalse;
    let n = (null == (t = f.default.getCurrentUser()) ? true : t.nsfwAllowed) === true;
    return Y(e) && !n
  };

function z(e) {
  var t;
  if (null == e) returnfalse;
  let n = u.Z.didAgree(e.guild_id),
    r = (null == (t = f.default.getCurrentUser()) ? true : t.nsfwAllowed) === false,
    i = (0, s.c_)("age-gate-utils"),
    a = (0, o.sf)(),
    c = !(n && !r) || a && i;
  if (e.isNSFW() && c) returntrue;
  let _ = e.guild_id,
    p = d.Z.getGuild(_);
  return null != p && ((0, l.Y2)(p) && c || x(p) && a)
}

function q(e) {
  let t = (0, o.L5)(),
    n = (0, r.e7)([u.Z], () => u.Z.didAgree(null == e ? true : e.guild_id)),
    i = (0, r.e7)([f.default], () => {
      var e;
      return (null == (e = f.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    a = L(null == e ? true : e.guild_id),
    c = (0, s.pY)("age-gate-utils"),
    _ = (0, r.e7)([d.Z], () => d.Z.getGuild(null == e ? true : e.guild_id)),
    p = c && t,
    h = !(n && !i) || p;
  return null != e && (!!e.isNSFW() && !!h || null != _ && (!!(0, l.Y2)(_) && !!h || !!a && !!t))
}

function X() {
  let e = Chunk594174.default.getCurrentUser();
  return null != module && null == module.nsfwAllowed
}