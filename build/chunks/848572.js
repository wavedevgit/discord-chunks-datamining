/** Chunk was on 89839 **/
/** chunk id: 848572, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GG: () => E,
  Rw: () => O,
  SI: () => j,
  Vq: () => p,
  a1: () => _,
  kG: () => v,
  y3: () => N
});
var r, Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk291175 = require("./291175.js"),
  Chunk621853 = require("./621853.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk111361 = require("./111361.js"),
  Chunk494450 = require("./494450.js"),
  Chunk474936 = require("./474936.js");

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var p = ((r = {}).UPCOMING = "upcoming", r.EARNED = "earned", r);

function v() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = (0, Chunk494450.l)(null == module ? true : module.id);
  return null != exports ? exports : null
}
let _ = e => (0, i.e7)([d.Z], () => {
  if (null == e) return null;
  let t = d.Z.getUserProfile(e);
  return null == t ? true : t.premiumSince
});

function E() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = (0, Chunk111361.M5)(module, Chunk474936.p9.TIER_2),
    n = (0, Chunk442837.e7)([Chunk78839.Z], () => {
      let e = Chunk78839.Z.getPremiumSubscription();
      return null != module && exports ? module.premiumSince : null
    }, [exports]),
    r = _(null == module ? true : module.id);
  return null != require ? require : r
}
let N = () => {
    let e = Object.values(Chunk474936.vK),
      t = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
      n = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription());
    if (!(0, Chunk111361.M5)(exports, Chunk474936.p9.TIER_2) || null == require || null == require.premiumSince) return null;
    let r = a()(),
      l = a()(require.premiumSince).add(1, "day"),
      u = r.diff(Chunk913527, "months");
    return module.reduce((e, t) => {
      let {
        id: n,
        tenureReqNumMonths: r
      } = t;
      return u >= r ? n : e
    }, null)
  },
  x = () => {
    let e = v(),
      t = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription());
    return null == module || null == exports || null == exports.premiumSince ? null : (0, Chunk291175.RZ)(module, exports.premiumSince)
  },
  T = () => {
    let e = E(),
      t = Object.values(Chunk474936.vK);
    if (null == module || null == exports) return null;
    let n = a()().diff(module, "days"),
      r = exports[0],
      l = 30 * r.tenureReqNumMonths - require;
    return Chunk913527 <= 0 ? null : f(b({}, r), {
      daysLeft: Chunk913527,
      status: "upcoming"
    })
  },
  O = () => {
    let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
      t = j(null == module ? true : module.id),
      n = x(),
      r = T();
    return null != exports ? f(b({}, exports), {
      earnedOnDate: require,
      status: "earned"
    }) : null != r ? r : null
  },
  j = e => {
    let t = (0, m.l)(e);
    return null == t ? null : g.vK[t]
  }