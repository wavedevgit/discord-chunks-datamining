/** Chunk was on web.js **/
/** chunk id: 622822, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $5: () => Q,
  I8: () => W,
  Kt: () => U,
  Lj: () => N,
  RW: () => Y,
  Y3: () => X,
  Yt: () => P,
  _I: () => x,
  _t: () => z,
  a1: () => B,
  bN: () => R,
  dl: () => k,
  ft: () => q,
  hO: () => D,
  kH: () => G,
  qF: () => K,
  xi: () => $,
  zd: () => V
}), require("./388685.js"), require("./953529.js");
var Chunk442837 = require("./442837.js"),
  Chunk480916 = require("./480916.js"),
  Chunk532812 = require("./532812.js"),
  Chunk453679 = require("./453679.js"),
  Chunk81643 = require("./81643.js"),
  Chunk128064 = require("./128064.js"),
  Chunk312870 = require("./312870.js"),
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  return {
    description: e ? y.intl.string(y.t["lSgO/q"]) : y.intl.string(y.t.SxY4IW),
    agreement: e ? y.intl.string(y.t.PBG51l) : y.intl.string(y.t["5B+npG"])
  }
}
let A = new Date("06/16/2020"),
  C = [Chunk981631.V_K.AGE_RESTRICTED, Chunk981631.V_K.EXPLICIT],
  N = new Set([Chunk723359.L0.NSFW_SERVER, Chunk723359.L0.NSFW_SERVER_INVITE, Chunk723359.L0.NSFW_SERVER_INVITE_EMBED]);

function R() {
  let e = Chunk594174.default.getCurrentUser();
  return null != module && Chunk709054.default.extractTimestamp(module.id) > A.getTime() && null == module.nsfwAllowed
}

function P(e) {
  return C.includes(e.nsfwLevel)
}

function D(e) {
  return null != e && w(_.Z.getGuild(e))
}

function w(e) {
  let t = (0, o.u)("age_verification_utils"),
    n = (0, s.yo)();
  return t && n && (null == e ? true : e.features.has(b.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD))
}

function L(e) {
  let t = (0, o.z)("age_verification_utils"),
    n = (0, s.Jm)();
  return t && n && (null == e ? true : e.features.has(b.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD))
}

function x(e) {
  return null != e && M(_.Z.getGuild(e))
}

function M(e) {
  return null != e && (0, o.u)("age_verification_utils") && (0, s.sf)() && e.features.has(b.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD)
}

function j(e) {
  let t = (0, r.e7)([_.Z], () => _.Z.getGuild(e)),
    n = (0, o.z)("age_verification_utils"),
    i = (0, s.L5)();
  return null != t && n && i && t.features.has(b.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD)
}

function k() {
  let e = (0, Chunk128064.c_)("age-gate-utils"),
    t = (0, Chunk453679.u)("age-gate-utils"),
    n = (0, Chunk312870.U)("age-gate-utils"),
    r = (0, Chunk81643.sf)();
  return (module || exports || require) && Chunk442837
}

function U() {
  let e = (0, Chunk128064.pY)("age-gate-utils"),
    t = (0, Chunk453679.z)("age-gate-utils"),
    n = (0, Chunk312870.s)("age-gate-utils"),
    r = (0, Chunk81643.L5)();
  return (module || exports || require) && Chunk442837
}

function G(e) {
  let t = (0, s.l6)(),
    n = (0, u.Y2)(e),
    a = j(null == e ? true : e.id),
    o = (0, r.e7)([p.default], () => {
      var e;
      return (null == (e = p.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    l = U(),
    c = L(e),
    d = y.intl.string(n ? y.t.xi46lg : y.t.ZmwvDc);
  if (l) {
    if (c) {
      let e = S(t);
      return T(v({
        title: y.intl.string(y.t.MjQbfi)
      }, e), {
        modalType: i.it.GUILD_LARGE_SERVER_UNDERAGE
      })
    }
    return t ? {
      title: d,
      description: n ? y.intl.format(y.t["7uIWQM"], {}) : y.intl.format(y.t.x1coPo, {}),
      agreement: y.intl.string(y.t.PBG51l),
      modalType: i.it.NSFW_CHANNEL_AGE_VERIFY
    } : a ? {
      title: y.intl.string(y.t.UYReTs),
      description: y.intl.string(y.t.SxY4IW),
      agreement: y.intl.string(y.t["5B+npG"]),
      modalType: i.it.GUILD_LARGE_SERVER
    } : {
      title: d,
      description: n ? y.intl.string(y.t.akjk0f) : y.intl.string(y.t["u/xqhc"]),
      agreement: y.intl.string(y.t["5B+npG"]),
      modalType: i.it.NSFW_CHANNEL_AGE_VERIFY
    }
  }
  return o ? {
    title: y.intl.string(n ? y.t["H0SG/g"] : y.t.NEabBa),
    description: y.intl.format(n ? y.t["6++3cX"] : y.t["2kHZes"], {
      helpURL: h.Z.getArticleURL(b.BhN.NSFW_AGE_GATING)
    }),
    agreement: null,
    modalType: i.it.NSFW_CHANNEL_UNDERAGE
  } : {
    title: d,
    description: y.intl.string(n ? y.t.ZtuRts : y.t.E4Cd5I),
    agreement: y.intl.string(y.t.wVq7uo),
    modalType: i.it.NSFW_CHANNEL_VERIFIED
  }
}

function B(e) {
  let t = (0, s.l6)(),
    n = U(),
    i = e === E.L0.NSFW_SERVER || e === E.L0.NSFW_SERVER_INVITE || e === E.L0.NSFW_SERVER_INVITE_EMBED,
    a = (0, r.e7)([p.default], () => {
      var e;
      return (null == (e = p.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    });
  if (e === E.L0.JOIN_LARGE_GUILD_UNDERAGE || e === E.L0.ACCESS_LARGE_GUILD_UNDERAGE) {
    let n = e === E.L0.JOIN_LARGE_GUILD_UNDERAGE ? y.t["u/xsK9"] : y.t.MjQbfi,
      r = S(t);
    return {
      verifyTitle: y.intl.string(n),
      verifyGateDescription: r.description,
      verifyAgreementButtonText: r.agreement
    }
  }
  return t ? {
    verifyAgreementButtonText: y.intl.string(y.t.PBG51l),
    verifyGateDescription: i ? y.intl.format(y.t["7uIWQM"], {}) : y.intl.format(y.t.x1coPo, {}),
    verifyTitle: i ? y.intl.string(y.t.xi46lg) : y.intl.string(y.t.ZmwvDc)
  } : e === E.L0.LARGE_GUILD ? {
    verifyTitle: y.intl.string(y.t.UYReTs),
    verifyGateDescription: y.intl.string(y.t.SxY4IW),
    verifyAgreementButtonText: y.intl.string(y.t["5B+npG"])
  } : a && i && !n ? {
    verifyTitle: y.intl.string(y.t["H0SG/g"]),
    verifyGateDescription: y.intl.format(y.t["6++3cX"], {
      helpURL: h.Z.getArticleURL(b.BhN.AGE_GATE)
    }),
    verifyAgreementButtonText: null
  } : {
    verifyAgreementButtonText: y.intl.string(y.t["5B+npG"]),
    verifyGateDescription: i ? y.intl.string(y.t.akjk0f) : y.intl.string(y.t["u/xqhc"]),
    verifyTitle: i ? y.intl.string(y.t.xi46lg) : y.intl.string(y.t.ZmwvDc)
  }
}
let Z = () => {
    let e = Chunk594174.default.getCurrentUser();
    if (null == module) returnfalse;
    let t = k();
    returntrue !== module.nsfwAllowed || exports
  },
  F = e => {
    if (!Z() || null == e) returnfalse;
    let t = _.Z.getGuild(e);
    return null != t && (0, u.Y2)(t)
  },
  V = e => !!Z() && null != e && X(d.Z.getChannel(e)),
  H = e => k() && V(e),
  Y = e => !!H(e) && ((0, g.mN)(E.L0.NSFW_VOICE_CHANNEL), true);

function W(e, t, n) {
  if (D(e)) return void(0, g.mN)(E.L0.ACCESS_LARGE_GUILD_UNDERAGE);
  if (F(e)) {
    let e = null != n && N.has(n) ? n : E.L0.NSFW_SERVER;
    (0, g.mN)(e);
    return
  }
  return x(e) ? void(0, g.mN)(E.L0.LARGE_GUILD) : J() && V(t) ? void(0, g.mN)(null != n ? n : E.L0.NSFW_CHANNEL) : true
}
let K = e => null != e && (e.isNSFW() || (0, u.Y2)(_.Z.getGuild(e.guild_id))),
  z = e => {
    if (null == e) returnfalse;
    let t = (0, s.sf)();
    return K(e) && t
  },
  q = e => {
    var t;
    if (null == e) returnfalse;
    let n = (null == (t = p.default.getCurrentUser()) ? true : t.nsfwAllowed) === true;
    return K(e) && !n
  };

function X(e) {
  var t;
  if (null == e) returnfalse;
  let n = f.Z.didAgree(e.guild_id),
    r = (null == (t = p.default.getCurrentUser()) ? true : t.nsfwAllowed) === false,
    i = (0, l.c_)("age-gate-utils"),
    a = (0, c.U)("age-gate-utils"),
    o = i || a,
    d = (0, s.sf)(),
    h = !(n && !r) || d && o;
  if (e.isNSFW() && h) returntrue;
  let m = e.guild_id,
    g = _.Z.getGuild(m);
  return null != g && ((0, u.Y2)(g) && h || M(g) && d)
}

function Q(e) {
  let t = (0, s.L5)(),
    n = (0, r.e7)([f.Z], () => f.Z.didAgree(null == e ? true : e.guild_id)),
    i = (0, r.e7)([p.default], () => {
      var e;
      return (null == (e = p.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    a = j(null == e ? true : e.guild_id),
    o = (0, l.pY)("age-gate-utils"),
    d = (0, c.s)("age-gate-utils"),
    h = o || d,
    m = (0, r.e7)([_.Z], () => _.Z.getGuild(null == e ? true : e.guild_id)),
    g = h && t,
    E = !(n && !i) || g;
  return null != e && (!!e.isNSFW() && !!E || null != m && (!!(0, u.Y2)(m) && !!E || !!a && !!t))
}

function J() {
  let e = Chunk594174.default.getCurrentUser();
  return null != module && null == module.nsfwAllowed
}

function $() {
  let e = (0, Chunk532812.H)("age-gate-utils"),
    t = (0, Chunk81643.L5)();
  return module && exports
}