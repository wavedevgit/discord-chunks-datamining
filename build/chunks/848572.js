/** Chunk was on web.js **/
/** chunk id: 848572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GG: () => y,
  Rw: () => S,
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

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var g = function(e) {
  return e.UPCOMING = "upcoming", e.EARNED = "earned", e
}({});

function E() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = (0, Chunk494450.l)(null == module ? true : module.id);
  return null != exports ? exports : null
}
let b = e => (0, a.e7)([s.Z], () => {
  if (null == e) return null;
  let t = s.Z.getUserProfile(e);
  return null == t ? true : t.premiumSince
});

function y() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = (0, Chunk111361.M5)(module, Chunk474936.PremiumTypes.TIER_2),
    n = (0, Chunk442837.e7)([Chunk78839.Z], () => {
      let e = Chunk78839.Z.getPremiumSubscription();
      return null != module && exports ? module.premiumSince : null
    }, [exports]),
    r = b(null == module ? true : module.id);
  return null != require ? require : Chunk913527
}
let O = () => {
    let e = Object.values(Chunk474936.vK),
      t = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
      n = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription());
    if (!(0, Chunk111361.M5)(exports, Chunk474936.PremiumTypes.TIER_2) || null == require || null == require.premiumSince) return null;
    let r = i()(),
      o = i()(require.premiumSince).add(1, "day"),
      s = Chunk913527.diff(Chunk291175, "months");
    return module.reduce((e, t) => {
      let {
        id: n,
        tenureReqNumMonths: r
      } = t;
      return s >= r ? n : e
    }, null)
  },
  v = () => {
    let e = E(),
      t = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription());
    return null == module || null == exports || null == exports.premiumSince ? null : (0, Chunk291175.RZ)(module, exports.premiumSince)
  },
  I = () => {
    let e = y(),
      t = Object.values(Chunk474936.vK);
    if (null == module || null == exports) return null;
    let n = i()().diff(module, "days"),
      r = exports[0],
      a = 30 * Chunk913527.tenureReqNumMonths - require;
    return Chunk442837 <= 0 ? null : m(p({}, Chunk913527), {
      daysLeft: Chunk442837,
      status: "upcoming"
    })
  },
  S = () => {
    let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
      t = T(null == module ? true : module.id),
      n = v(),
      r = I();
    return null != exports ? m(p({}, exports), {
      earnedOnDate: require,
      status: "earned"
    }) : null != Chunk913527 ? Chunk913527 : null
  },
  T = e => {
    let t = (0, d.l)(e);
    return null == t ? null : f.vK[t]
  }