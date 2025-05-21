/** Chunk was on 89839 **/
n.d(t, {
  GG: () => N,
  Rw: () => O,
  SI: () => h,
  Vq: () => _,
  a1: () => p,
  kG: () => E,
  y3: () => T
});
var r, l = n(913527),
  a = n.n(l),
  i = n(442837),
  u = n(291175),
  d = n(621853),
  s = n(594174),
  c = n(78839),
  o = n(111361),
  m = n(943180),
  g = n(494450),
  b = n(474936);

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function v(e, t) {
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
var _ = ((r = {}).UPCOMING = "upcoming", r.EARNED = "earned", r);

function E() {
  let e = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
    t = (0, g.l)(null == e ? void 0 : e.id);
  return null != t ? t : null
}
let p = e => (0, i.e7)([d.Z], () => {
  if (null == e) return null;
  let t = d.Z.getUserProfile(e);
  return null == t ? void 0 : t.premiumSince
});

function N() {
  let e = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
    t = (0, o.M5)(e, b.p9.TIER_2),
    n = (0, i.e7)([c.ZP], () => {
      let e = c.ZP.getPremiumSubscription();
      return null != e && t ? e.premiumSince : null
    }, [t]),
    r = p(null == e ? void 0 : e.id);
  return null != n ? n : r
}
let T = () => {
    let e = Object.values(b.vK),
      t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
      n = (0, i.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
    if (!(0, o.M5)(t, b.p9.TIER_2) || null == n || null == n.premiumSince) return null;
    let r = a()(),
      l = a()(n.premiumSince).add(1, "day"),
      u = r.diff(l, "months");
    return e.reduce((e, t) => {
      let {
        id: n,
        tenureReqNumMonths: r
      } = t;
      return u >= r ? n : e
    }, null)
  },
  x = () => {
    let e = E(),
      t = (0, i.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
    return null == e || null == t || null == t.premiumSince ? null : (0, u.RZ)(e, t.premiumSince)
  },
  P = () => {
    let {
      enabled: e
    } = (0, m.D)(), t = N(), n = Object.values(b.vK);
    if (!e || null == t || null == n) return null;
    let r = a()().diff(t, "days"),
      l = n[0],
      i = 30 * l.tenureReqNumMonths - r;
    return i <= 0 ? null : v(f({}, l), {
      daysLeft: i,
      status: "upcoming"
    })
  },
  O = () => {
    let e = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
      t = h(null == e ? void 0 : e.id),
      n = x(),
      r = P();
    return null != t ? v(f({}, t), {
      earnedOnDate: n,
      status: "earned"
    }) : null != r ? r : null
  },
  h = e => {
    let t = (0, g.l)(e);
    return null == t ? null : b.vK[t]
  }