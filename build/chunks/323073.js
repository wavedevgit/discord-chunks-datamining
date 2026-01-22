/** Chunk was on web.js **/
/** chunk id: 323073, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $v: () => U,
  Bc: () => v,
  Gc: () => M,
  Gn: () => R,
  Jm: () => k,
  Tv: () => L,
  UK: () => D,
  a9: () => C,
  k$: () => N,
  kK: () => j,
  p5: () => B,
  qR: () => G,
  r9: () => T,
  sP: () => H,
  vL: () => V,
  xq: () => S,
  zS: () => I
}), require("./896048.js"), require("./228524.js");
var Chunk687123 = require("./687123.js"),
  Chunk311907 = require("./311907.js"),
  Chunk847599 = require("./847599.js"),
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

function y(e) {
  return {
    description: e ? b.intl.string(b.t["lSgO/q"]) : b.intl.string(b.t.SxY4IW),
    agreement: e ? b.intl.string(b.t.PBG51l) : b.intl.string(b.t["5B+npG"])
  }
}
let O = new Date("06/16/2020"),
  A = [Chunk652215.ftr.AGE_RESTRICTED, Chunk652215.ftr.EXPLICIT],
  v = new Set([Chunk204925.w_.NSFW_SERVER, Chunk204925.w_.NSFW_SERVER_INVITE, Chunk204925.w_.NSFW_SERVER_INVITE_EMBED]);

function S() {
  let e = p.default.getCurrentUser();
  return null != e && h.default.extractTimestamp(e.id) > O.getTime() && null == e.nsfwAllowed
}

function I(e) {
  return A.includes(e.nsfwLevel)
}

function T() {
  let e = (0, l.o)("age-gate-utils"),
    t = (0, s.p9)();
  return ((0, o.d6)(r.t.AGE_GATED_SPACES) || e) && t
}

function C() {
  let e = (0, o.aX)(r.t.AGE_GATED_SPACES),
    t = (0, l.j)("age-gate-utils"),
    n = (0, s.i2)();
  return (e || t) && n
}

function N(e) {
  let t = (0, s.b8)(),
    n = (0, c.wh)(e),
    r = (0, i.bG)([p.default], () => {
      var e;
      return (null == (e = p.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    o = C(),
    l = b.intl.string(n ? b.t.xi46lg : b.t.ZmwvDc);
  return o ? t ? {
    title: l,
    description: n ? b.intl.format(b.t["7uIWQM"], {}) : b.intl.format(b.t.x1coPo, {}),
    agreement: b.intl.string(b.t.PBG51l),
    modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY
  } : {
    title: l,
    description: n ? b.intl.string(b.t.akjk0f) : b.intl.string(b.t["u/xqhc"]),
    agreement: b.intl.string(b.t["5B+npG"]),
    modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY
  } : r ? {
    title: b.intl.string(n ? b.t["H0SG/g"] : b.t.NEabBa),
    description: b.intl.format(n ? b.t["6++3cX"] : b.t["2kHZes"], {
      helpURL: _.A.getArticleURL(E.MVz.NSFW_AGE_GATING)
    }),
    agreement: null,
    modalType: a.A5.NSFW_CHANNEL_UNDERAGE
  } : {
    title: l,
    description: b.intl.string(n ? b.t.ZtuRts : b.t.E4Cd5I),
    agreement: b.intl.string(b.t.wVq7uo),
    modalType: a.A5.NSFW_CHANNEL_VERIFIED
  }
}

function R(e) {
  let t = (0, s.b8)(),
    n = C(),
    r = e === g.w_.NSFW_SERVER || e === g.w_.NSFW_SERVER_INVITE || e === g.w_.NSFW_SERVER_INVITE_EMBED,
    a = (0, i.bG)([p.default], () => {
      var e;
      return (null == (e = p.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    });
  if (e === g.w_.JOIN_LARGE_GUILD_UNDERAGE || e === g.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
    let n = e === g.w_.JOIN_LARGE_GUILD_UNDERAGE ? b.t["u/xsK9"] : b.t.MjQbfi,
      r = y(t);
    return {
      verifyTitle: b.intl.string(n),
      verifyGateDescription: r.description,
      verifyAgreementButtonText: r.agreement
    }
  }
  return t ? {
    verifyAgreementButtonText: b.intl.string(b.t.PBG51l),
    verifyGateDescription: r ? b.intl.format(b.t["7uIWQM"], {}) : b.intl.format(b.t.x1coPo, {}),
    verifyTitle: r ? b.intl.string(b.t.xi46lg) : b.intl.string(b.t.ZmwvDc)
  } : e === g.w_.LARGE_GUILD ? {
    verifyTitle: b.intl.string(b.t.UYReTs),
    verifyGateDescription: b.intl.string(b.t.SxY4IW),
    verifyAgreementButtonText: b.intl.string(b.t["5B+npG"])
  } : a && r && !n ? {
    verifyTitle: b.intl.string(b.t["H0SG/g"]),
    verifyGateDescription: b.intl.format(b.t["6++3cX"], {
      helpURL: _.A.getArticleURL(E.MVz.AGE_GATE)
    }),
    verifyAgreementButtonText: null
  } : {
    verifyAgreementButtonText: b.intl.string(b.t["5B+npG"]),
    verifyGateDescription: r ? b.intl.string(b.t.akjk0f) : b.intl.string(b.t["u/xqhc"]),
    verifyTitle: r ? b.intl.string(b.t.xi46lg) : b.intl.string(b.t.ZmwvDc)
  }
}
let w = () => {
    let e = p.default.getCurrentUser();
    if (null == e) returnfalse;
    let t = T();
    returntrue !== e.nsfwAllowed || t
  },
  P = e => {
    if (!w() || null == e) returnfalse;
    let t = f.A.getGuild(e);
    return null != t && (0, c.wh)(t)
  },
  D = e => !!w() && null != e && G(u.A.getChannel(e)),
  x = e => T() && D(e),
  L = e => !!x(e) && ((0, m.yO)(g.w_.NSFW_VOICE_CHANNEL), true);

function j(e, t, n) {
  if (P(e)) {
    let e = null != n && v.has(n) ? n : g.w_.NSFW_SERVER;
    (0, m.yO)(e);
    return
  }
  if (F() && D(t)) return void(0, m.yO)(null != n ? n : g.w_.NSFW_CHANNEL)
}
let M = e => null != e && (e.isNSFW() || (0, c.wh)(f.A.getGuild(e.guild_id))),
  k = e => {
    if (null == e) returnfalse;
    let t = (0, s.p9)();
    return M(e) && t
  },
  U = e => {
    var t;
    if (null == e) returnfalse;
    let n = (null == (t = p.default.getCurrentUser()) ? true : t.nsfwAllowed) === true;
    return M(e) && !n
  };

function G(e) {
  var t;
  if (null == e) returnfalse;
  let n = d.A.didAgree(e.guild_id),
    i = (null == (t = p.default.getCurrentUser()) ? true : t.nsfwAllowed) === false,
    a = (0, l.o)("age-gate-utils"),
    u = (0, o.d6)(r.t.AGE_GATED_SPACES) || a,
    _ = (0, s.p9)(),
    h = !(n && !i) || _ && u;
  if (e.isNSFW() && h) returntrue;
  let m = e.guild_id,
    g = f.A.getGuild(m);
  return null != g && (0, c.wh)(g) && h
}

function V(e) {
  let t = (0, s.i2)(),
    n = (0, i.bG)([d.A], () => d.A.didAgree(null == e ? true : e.guild_id)),
    a = (0, i.bG)([p.default], () => {
      var e;
      return (null == (e = p.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    u = (0, o.aX)(r.t.AGE_GATED_SPACES),
    _ = (0, l.j)("age-gate-utils"),
    h = u || _,
    m = (0, i.bG)([f.A], () => f.A.getGuild(null == e ? true : e.guild_id)),
    g = h && t,
    E = !(n && !a) || g;
  return null != e && (!!e.isNSFW() && !!E || null != m && !!(0, c.wh)(m) && !!E)
}

function F() {
  let e = p.default.getCurrentUser();
  return null != e && null == e.nsfwAllowed
}

function B() {
  let e = (0, o.d6)(r.t.COMMANDS_TOGGLE),
    t = (0, l.o)("age-gate-utils") || e,
    n = (0, s.p9)();
  return t && n
}

function H() {
  let e = (0, o.aX)(r.t.COMMANDS_TOGGLE),
    t = (0, l.j)("age-gate-utils") || e,
    n = (0, s.i2)();
  return t && n
}