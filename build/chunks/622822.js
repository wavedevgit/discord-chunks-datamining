/** Chunk was on web.js **/
/** chunk id: 622822, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $5: () => F,
  I8: () => M,
  Kt: () => N,
  Lj: () => I,
  RW: () => j,
  Uw: () => V,
  Y3: () => Z,
  Yt: () => C,
  _t: () => U,
  a1: () => w,
  bN: () => T,
  dl: () => A,
  ft: () => G,
  kH: () => P,
  qF: () => k,
  xi: () => H,
  zd: () => x
}), require("./388685.js"), require("./953529.js");
var Chunk310882 = require("./310882.js"),
  Chunk442837 = require("./442837.js"),
  Chunk480916 = require("./480916.js"),
  Chunk532812 = require("./532812.js"),
  Chunk81643 = require("./81643.js"),
  Chunk980945 = require("./980945.js"),
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

function O(e) {
  return {
    description: e ? y.intl.string(y.t["lSgO/q"]) : y.intl.string(y.t.SxY4IW),
    agreement: e ? y.intl.string(y.t.PBG51l) : y.intl.string(y.t["5B+npG"])
  }
}
let v = new Date("06/16/2020"),
  S = [Chunk981631.V_K.AGE_RESTRICTED, Chunk981631.V_K.EXPLICIT],
  I = new Set([Chunk723359.L0.NSFW_SERVER, Chunk723359.L0.NSFW_SERVER_INVITE, Chunk723359.L0.NSFW_SERVER_INVITE_EMBED]);

function T() {
  let e = _.default.getCurrentUser();
  return null != e && m.default.extractTimestamp(e.id) > v.getTime() && null == e.nsfwAllowed
}

function C(e) {
  return S.includes(e.nsfwLevel)
}

function A() {
  let e = (0, c.U)("age-gate-utils"),
    t = (0, s.sf)();
  return ((0, l.ML)(r.X.AGE_GATED_SPACES) || e) && t
}

function N() {
  let e = (0, l.Uf)(r.X.AGE_GATED_SPACES),
    t = (0, c.s)("age-gate-utils"),
    n = (0, s.L5)();
  return (e || t) && n
}

function P(e) {
  let t = (0, s.l6)(),
    n = (0, u.Y2)(e),
    r = (0, i.e7)([_.default], () => {
      var e;
      return (null == (e = _.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    o = N(),
    l = y.intl.string(n ? y.t.xi46lg : y.t.ZmwvDc);
  return o ? t ? {
    title: l,
    description: n ? y.intl.format(y.t["7uIWQM"], {}) : y.intl.format(y.t.x1coPo, {}),
    agreement: y.intl.string(y.t.PBG51l),
    modalType: a.it.NSFW_CHANNEL_AGE_VERIFY
  } : {
    title: l,
    description: n ? y.intl.string(y.t.akjk0f) : y.intl.string(y.t["u/xqhc"]),
    agreement: y.intl.string(y.t["5B+npG"]),
    modalType: a.it.NSFW_CHANNEL_AGE_VERIFY
  } : r ? {
    title: y.intl.string(n ? y.t["H0SG/g"] : y.t.NEabBa),
    description: y.intl.format(n ? y.t["6++3cX"] : y.t["2kHZes"], {
      helpURL: h.Z.getArticleURL(b.BhN.NSFW_AGE_GATING)
    }),
    agreement: null,
    modalType: a.it.NSFW_CHANNEL_UNDERAGE
  } : {
    title: l,
    description: y.intl.string(n ? y.t.ZtuRts : y.t.E4Cd5I),
    agreement: y.intl.string(y.t.wVq7uo),
    modalType: a.it.NSFW_CHANNEL_VERIFIED
  }
}

function w(e) {
  let t = (0, s.l6)(),
    n = N(),
    r = e === E.L0.NSFW_SERVER || e === E.L0.NSFW_SERVER_INVITE || e === E.L0.NSFW_SERVER_INVITE_EMBED,
    a = (0, i.e7)([_.default], () => {
      var e;
      return (null == (e = _.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    });
  if (e === E.L0.JOIN_LARGE_GUILD_UNDERAGE || e === E.L0.ACCESS_LARGE_GUILD_UNDERAGE) {
    let n = e === E.L0.JOIN_LARGE_GUILD_UNDERAGE ? y.t["u/xsK9"] : y.t.MjQbfi,
      r = O(t);
    return {
      verifyTitle: y.intl.string(n),
      verifyGateDescription: r.description,
      verifyAgreementButtonText: r.agreement
    }
  }
  return t ? {
    verifyAgreementButtonText: y.intl.string(y.t.PBG51l),
    verifyGateDescription: r ? y.intl.format(y.t["7uIWQM"], {}) : y.intl.format(y.t.x1coPo, {}),
    verifyTitle: r ? y.intl.string(y.t.xi46lg) : y.intl.string(y.t.ZmwvDc)
  } : e === E.L0.LARGE_GUILD ? {
    verifyTitle: y.intl.string(y.t.UYReTs),
    verifyGateDescription: y.intl.string(y.t.SxY4IW),
    verifyAgreementButtonText: y.intl.string(y.t["5B+npG"])
  } : a && r && !n ? {
    verifyTitle: y.intl.string(y.t["H0SG/g"]),
    verifyGateDescription: y.intl.format(y.t["6++3cX"], {
      helpURL: h.Z.getArticleURL(b.BhN.AGE_GATE)
    }),
    verifyAgreementButtonText: null
  } : {
    verifyAgreementButtonText: y.intl.string(y.t["5B+npG"]),
    verifyGateDescription: r ? y.intl.string(y.t.akjk0f) : y.intl.string(y.t["u/xqhc"]),
    verifyTitle: r ? y.intl.string(y.t.xi46lg) : y.intl.string(y.t.ZmwvDc)
  }
}
let R = () => {
    let e = _.default.getCurrentUser();
    if (null == e) returnfalse;
    let t = A();
    returntrue !== e.nsfwAllowed || t
  },
  D = e => {
    if (!R() || null == e) returnfalse;
    let t = p.Z.getGuild(e);
    return null != t && (0, u.Y2)(t)
  },
  x = e => !!R() && null != e && Z(d.Z.getChannel(e)),
  L = e => A() && x(e),
  j = e => !!L(e) && ((0, g.mN)(E.L0.NSFW_VOICE_CHANNEL), true);

function M(e, t, n) {
  if (D(e)) {
    let e = null != n && I.has(n) ? n : E.L0.NSFW_SERVER;
    (0, g.mN)(e);
    return
  }
  if (B() && x(t)) return void(0, g.mN)(null != n ? n : E.L0.NSFW_CHANNEL)
}
let k = e => null != e && (e.isNSFW() || (0, u.Y2)(p.Z.getGuild(e.guild_id))),
  U = e => {
    if (null == e) returnfalse;
    let t = (0, s.sf)();
    return k(e) && t
  },
  G = e => {
    var t;
    if (null == e) returnfalse;
    let n = (null == (t = _.default.getCurrentUser()) ? true : t.nsfwAllowed) === true;
    return k(e) && !n
  };

function Z(e) {
  var t;
  if (null == e) returnfalse;
  let n = f.Z.didAgree(e.guild_id),
    i = (null == (t = _.default.getCurrentUser()) ? true : t.nsfwAllowed) === false,
    a = (0, c.U)("age-gate-utils"),
    o = (0, l.ML)(r.X.AGE_GATED_SPACES) || a,
    d = (0, s.sf)(),
    h = !(n && !i) || d && o;
  if (e.isNSFW() && h) returntrue;
  let m = e.guild_id,
    g = p.Z.getGuild(m);
  return null != g && (0, u.Y2)(g) && h
}

function F(e) {
  let t = (0, s.L5)(),
    n = (0, i.e7)([f.Z], () => f.Z.didAgree(null == e ? true : e.guild_id)),
    a = (0, i.e7)([_.default], () => {
      var e;
      return (null == (e = _.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    }),
    o = (0, l.Uf)(r.X.AGE_GATED_SPACES),
    d = (0, c.s)("age-gate-utils"),
    h = o || d,
    m = (0, i.e7)([p.Z], () => p.Z.getGuild(null == e ? true : e.guild_id)),
    g = h && t,
    E = !(n && !a) || g;
  return null != e && (!!e.isNSFW() && !!E || null != m && !!(0, u.Y2)(m) && !!E)
}

function B() {
  let e = _.default.getCurrentUser();
  return null != e && null == e.nsfwAllowed
}

function V() {
  let e = (0, o.S)("age-gate-utils"),
    t = (0, s.sf)();
  return e && t
}

function H() {
  let e = (0, o.H)("age-gate-utils"),
    t = (0, s.L5)();
  return e && t
}