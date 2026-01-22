/** Chunk was on web.js **/
/** chunk id: 112848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $F: () => S,
  Lh: () => E,
  Wo: () => g,
  Xb: () => y,
  bu: () => O,
  p3: () => I,
  rG: () => b
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk439174 = require("./439174.js"),
  Chunk622543 = require("./622543.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk474090 = require("./474090.js"),
  Chunk416654 = require("./416654.js"),
  Chunk788868 = require("./788868.js");

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
  let e = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
    t = (0, d.v)(null == e ? true : e.id);
  return null != t ? t : null
}
let b = e => (0, a.bG)([o.A], () => {
  if (null == e) return null;
  let t = o.A.getUserProfile(e);
  return null == t ? true : t.premiumSince
});

function y() {
  let e = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
    t = (0, u.YE)(e, f.PremiumTypes.TIER_2),
    n = (0, a.bG)([c.A], () => {
      let e = c.A.getPremiumSubscription();
      return null != e && t ? e.premiumSince : null
    }, [t]),
    r = b(null == e ? true : e.id);
  return null != n ? n : r
}
let O = () => {
    let e = Object.values(f.VD),
      t = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
      n = (0, a.bG)([c.A], () => c.A.getPremiumTypeSubscription());
    if (!(0, u.YE)(t, f.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
    let r = i()(),
      s = i()(n.premiumSince).add(1, "day"),
      o = r.diff(s, "months");
    return e.reduce((e, t) => {
      let {
        id: n,
        tenureReqNumMonths: r
      } = t;
      return o >= r ? n : e
    }, null)
  },
  A = () => {
    let e = E(),
      t = (0, a.bG)([c.A], () => c.A.getPremiumTypeSubscription());
    return null == e || null == t || null == t.premiumSince ? null : (0, s.Xr)(e, t.premiumSince)
  },
  v = () => {
    let e = y(),
      t = Object.values(f.VD);
    if (null == e || null == t) return null;
    let n = i()().diff(e, "days"),
      r = t[0],
      a = 30 * r.tenureReqNumMonths - n;
    return a <= 0 ? null : m(_({}, r), {
      daysLeft: a,
      status: "upcoming"
    })
  },
  S = () => {
    let e = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
      t = I(null == e ? true : e.id),
      n = A(),
      r = v();
    return null != t ? m(_({}, t), {
      earnedOnDate: n,
      status: "earned"
    }) : null != r ? r : null
  },
  I = e => {
    let t = (0, d.v)(e);
    return null == t ? null : f.VD[t]
  }