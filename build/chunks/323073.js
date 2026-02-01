/** Chunk was on web.js **/
/** chunk id: 323073, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $v: () => V,
  Bc: () => S,
  Gc: () => U,
  Gn: () => P,
  Jm: () => G,
  Tv: () => j,
  UK: () => x,
  a9: () => w,
  k$: () => R,
  kK: () => k,
  p5: () => Y,
  qR: () => F,
  r9: () => N,
  sP: () => W,
  vL: () => B,
  xq: () => T,
  zS: () => C
}), require("./896048.js"), require("./228524.js");
var Chunk687123 = require("./687123.js"),
  Chunk311907 = require("./311907.js"),
  Chunk847599 = require("./847599.js"),
  Chunk620715 = require("./620715.js"),
  Chunk870383 = require("./870383.js"),
  Chunk36149 = require("./36149.js"),
  Chunk207560 = require("./207560.js"),
  Chunk64313 = require("./64313.js"),
  Chunk260509 = require("./260509.js"),
  Chunk734057 = require("./734057.js"),
  Chunk517019 = require("./517019.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk612200 = require("./612200.js"),
  Chunk204925 = require("./204925.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function v(e) {
  return {
    description: e ? (0, s.H)(O.intl.string(O.t["lSgO/q"]), O.intl.string(O.t.SAoMVJ)) : O.intl.string(O.t.SxY4IW),
    agreement: e ? (0, s.H)(O.intl.string(O.t.PBG51l), O.intl.string(O.t.Zt4Mf4)) : (0, s.H)(O.intl.string(O.t["5B+npG"]), O.intl.string(O.t.FDSSia))
  }
}
let A = new Date("06/16/2020"),
  I = [Chunk652215.ftr.AGE_RESTRICTED, Chunk652215.ftr.EXPLICIT],
  S = new Set([Chunk204925.w_.NSFW_SERVER, Chunk204925.w_.NSFW_SERVER_INVITE, Chunk204925.w_.NSFW_SERVER_INVITE_EMBED]);

function T() {
  let e = h.default.getCurrentUser();
  return null != e && g.default.extractTimestamp(e.id) > A.getTime() && null == e.nsfwAllowed
}

function C(e) {
  return I.includes(e.nsfwLevel)
}

function N() {
  let e = (0, u.o)("age-gate-utils"),
    t = (0, l.p9)();
  return ((0, c.d6)(r.t.AGE_GATED_SPACES) || e) && t
}

function w() {
  let e = (0, c.aX)(r.t.AGE_GATED_SPACES),
    t = (0, u.j)("age-gate-utils"),
    n = (0, l.i2)();
  return (e || t) && n
}

function R(e) {
  let t = (0, l.b8)(),
    n = (0, d.wh)(e),
    r = (0, i.bG)([h.default], () => {
      var e;
      return (null == (e = h.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    c = w(),
    {
      enabled: u
    } = o.Y.useConfig({
      location: "useAgeGateVerifyContentForGuild"
    }),
    f = (0, s.W)(O.intl.string(O.t.PBG51l), O.intl.string(O.t.Zt4Mf4)),
    p = (0, s.W)(O.intl.string(O.t.akjk0f), O.intl.string(O.t.V6Gmu9)),
    _ = (0, s.W)(O.intl.string(O.t["u/xqhc"]), O.intl.string(O.t["5rygLk"])),
    g = (0, s.W)(O.intl.string(O.t["5B+npG"]), O.intl.string(O.t.FDSSia)),
    E = O.intl.string(n ? O.t.xi46lg : O.t.ZmwvDc);
  return c ? t ? {
    title: E,
    description: n ? O.intl.format(u ? O.t["8tk6bB"] : O.t["7uIWQM"], {}) : O.intl.format(u ? O.t.XQZvwn : O.t.x1coPo, {}),
    agreement: f,
    modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY
  } : {
    title: E,
    description: n ? p : _,
    agreement: g,
    modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY
  } : r ? {
    title: O.intl.string(n ? O.t["H0SG/g"] : O.t.NEabBa),
    description: O.intl.format(n ? O.t["6++3cX"] : O.t["2kHZes"], {
      helpURL: m.A.getArticleURL(b.MVz.NSFW_AGE_GATING)
    }),
    agreement: null,
    modalType: a.A5.NSFW_CHANNEL_UNDERAGE
  } : {
    title: E,
    description: O.intl.string(n ? O.t.ZtuRts : O.t.E4Cd5I),
    agreement: O.intl.string(O.t.wVq7uo),
    modalType: a.A5.NSFW_CHANNEL_VERIFIED
  }
}

function P(e) {
  let t = (0, l.b8)(),
    n = w(),
    r = e === y.w_.NSFW_SERVER || e === y.w_.NSFW_SERVER_INVITE || e === y.w_.NSFW_SERVER_INVITE_EMBED,
    a = (0, i.bG)([h.default], () => {
      var e;
      return (null == (e = h.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    {
      enabled: c
    } = o.Y.useConfig({
      location: "useAgeGateVerifyContent"
    }),
    u = (0, s.W)(O.intl.string(O.t.PBG51l), O.intl.string(O.t.Zt4Mf4)),
    d = (0, s.W)(O.intl.string(O.t.UYReTs), O.intl.string(O.t["7ymzsL"])),
    f = (0, s.W)(O.intl.string(O.t["5B+npG"]), O.intl.string(O.t.FDSSia)),
    p = (0, s.W)(O.intl.string(O.t.akjk0f), O.intl.string(O.t.V6Gmu9)),
    _ = (0, s.W)(O.intl.string(O.t["u/xqhc"]), O.intl.string(O.t["5rygLk"]));
  if (e === y.w_.JOIN_LARGE_GUILD_UNDERAGE || e === y.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
    let n = e === y.w_.JOIN_LARGE_GUILD_UNDERAGE ? O.t["u/xsK9"] : O.t.MjQbfi,
      r = v(t);
    return {
      verifyTitle: O.intl.string(n),
      verifyGateDescription: r.description,
      verifyAgreementButtonText: r.agreement
    }
  }
  return t ? {
    verifyAgreementButtonText: u,
    verifyGateDescription: r ? O.intl.format(c ? O.t["8tk6bB"] : O.t["7uIWQM"], {}) : O.intl.format(c ? O.t.XQZvwn : O.t.x1coPo, {}),
    verifyTitle: r ? O.intl.string(O.t.xi46lg) : O.intl.string(O.t.ZmwvDc)
  } : e === y.w_.LARGE_GUILD ? {
    verifyTitle: d,
    verifyGateDescription: O.intl.string(O.t.SxY4IW),
    verifyAgreementButtonText: f
  } : a && r && !n ? {
    verifyTitle: O.intl.string(O.t["H0SG/g"]),
    verifyGateDescription: O.intl.format(O.t["6++3cX"], {
      helpURL: m.A.getArticleURL(b.MVz.AGE_GATE)
    }),
    verifyAgreementButtonText: null
  } : {
    verifyAgreementButtonText: f,
    verifyGateDescription: r ? p : _,
    verifyTitle: r ? O.intl.string(O.t.xi46lg) : O.intl.string(O.t.ZmwvDc)
  }
}
let D = () => {
    let e = h.default.getCurrentUser();
    if (null == e) returnfalse;
    let t = N();
    returntrue !== e.nsfwAllowed || t
  },
  L = e => {
    if (!D() || null == e) returnfalse;
    let t = _.A.getGuild(e);
    return null != t && (0, d.wh)(t)
  },
  x = e => !!D() && null != e && F(f.A.getChannel(e)),
  M = e => N() && x(e),
  j = e => !!M(e) && ((0, E.yO)(y.w_.NSFW_VOICE_CHANNEL), true);

function k(e, t, n) {
  if (L(e)) {
    let e = null != n && S.has(n) ? n : y.w_.NSFW_SERVER;
    (0, E.yO)(e);
    return
  }
  if (H() && x(t)) return void(0, E.yO)(null != n ? n : y.w_.NSFW_CHANNEL)
}
let U = e => null != e && (e.isNSFW() || (0, d.wh)(_.A.getGuild(e.guild_id))),
  G = e => {
    if (null == e) returnfalse;
    let t = (0, l.p9)();
    return U(e) && t
  },
  V = e => {
    var t;
    if (null == e) returnfalse;
    let n = (null == (t = h.default.getCurrentUser()) ? true : t.nsfwAllowed) === true;
    return U(e) && !n
  };

function F(e) {
  var t;
  if (null == e) returnfalse;
  let n = p.A.didAgree(e.guild_id),
    i = (null == (t = h.default.getCurrentUser()) ? true : t.nsfwAllowed) === false,
    a = (0, u.o)("age-gate-utils"),
    o = (0, c.d6)(r.t.AGE_GATED_SPACES) || a,
    s = (0, l.p9)(),
    f = !(n && !i) || s && o;
  if (e.isNSFW() && f) returntrue;
  let m = e.guild_id,
    g = _.A.getGuild(m);
  return null != g && (0, d.wh)(g) && f
}

function B(e) {
  let t = (0, l.i2)(),
    n = (0, i.bG)([p.A], () => p.A.didAgree(null == e ? true : e.guild_id)),
    a = (0, i.bG)([h.default], () => {
      var e;
      return (null == (e = h.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    o = (0, c.aX)(r.t.AGE_GATED_SPACES),
    s = (0, u.j)("age-gate-utils"),
    f = o || s,
    m = (0, i.bG)([_.A], () => _.A.getGuild(null == e ? true : e.guild_id)),
    g = f && t,
    E = !(n && !a) || g;
  return null != e && (!!e.isNSFW() && !!E || null != m && !!(0, d.wh)(m) && !!E)
}

function H() {
  let e = h.default.getCurrentUser();
  return null != e && null == e.nsfwAllowed
}

function Y() {
  let e = (0, c.d6)(r.t.COMMANDS_TOGGLE),
    t = (0, u.o)("age-gate-utils") || e,
    n = (0, l.p9)();
  return t && n
}

function W() {
  let e = (0, c.aX)(r.t.COMMANDS_TOGGLE),
    t = (0, u.j)("age-gate-utils") || e,
    n = (0, l.i2)();
  return t && n
}