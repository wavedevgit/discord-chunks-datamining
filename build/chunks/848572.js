/** Chunk was on web.js **/
/** chunk id: 848572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GG: () => y,
  Rw: () => I,
  SI: () => T,
  Vq: () => g,
  a1: () => b,
  kG: () => E,
  y3: () => O
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk291175 = require("./291175.js"),
  Chunk621853 = require("./621853.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk111361 = require("./111361.js"),
  Chunk494450 = require("./494450.js"),
  Chunk474936 = require("./474936.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var g = function(e) {
  return e.UPCOMING = "upcoming", e.EARNED = "earned", e
}({});

function E() {
  let e = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
    t = (0, d.l)(null == e ? true : e.id);
  return null != t ? t : null
}
let b = e => (0, a.e7)([s.Z], () => {
  if (null == e) return null;
  let t = s.Z.getUserProfile(e);
  return null == t ? true : t.premiumSince
});

function y() {
  let e = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
    t = (0, u.M5)(e, f.PremiumTypes.TIER_2),
    n = (0, a.e7)([c.Z], () => {
      let e = c.Z.getPremiumSubscription();
      return null != e && t ? e.premiumSince : null
    }, [t]),
    r = b(null == e ? true : e.id);
  return null != n ? n : r
}
let O = () => {
    let e = Object.values(f.vK),
      t = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
      n = (0, a.e7)([c.Z], () => c.Z.getPremiumTypeSubscription());
    if (!(0, u.M5)(t, f.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
    let r = i()(),
      o = i()(n.premiumSince).add(1, "day"),
      s = r.diff(o, "months");
    return e.reduce((e, t) => {
      let {
        id: n,
        tenureReqNumMonths: r
      } = t;
      return s >= r ? n : e
    }, null)
  },
  v = () => {
    let e = E(),
      t = (0, a.e7)([c.Z], () => c.Z.getPremiumTypeSubscription());
    return null == e || null == t || null == t.premiumSince ? null : (0, o.RZ)(e, t.premiumSince)
  },
  S = () => {
    let e = y(),
      t = Object.values(f.vK);
    if (null == e || null == t) return null;
    let n = i()().diff(e, "days"),
      r = t[0],
      a = 30 * r.tenureReqNumMonths - n;
    return a <= 0 ? null : h(_({}, r), {
      daysLeft: a,
      status: "upcoming"
    })
  },
  I = () => {
    let e = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
      t = T(null == e ? true : e.id),
      n = v(),
      r = S();
    return null != t ? h(_({}, t), {
      earnedOnDate: n,
      status: "earned"
    }) : null != r ? r : null
  },
  T = e => {
    let t = (0, d.l)(e);
    return null == t ? null : f.vK[t]
  }