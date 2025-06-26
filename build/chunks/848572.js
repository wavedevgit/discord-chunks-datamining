/** Chunk was on 89839 **/
t.d(n, {
  GG: () => E,
  Rw: () => O,
  SI: () => P,
  Vq: () => f,
  a1: () => p,
  kG: () => _,
  y3: () => x
});
var l, r = t(913527),
  a = t.n(r),
  i = t(442837),
  u = t(291175),
  d = t(621853),
  s = t(594174),
  o = t(78839),
  c = t(111361),
  m = t(494450),
  g = t(474936);

function v(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = l
    })
  }
  return e
}

function b(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
var f = ((l = {}).UPCOMING = "upcoming", l.EARNED = "earned", l);

function _() {
  let e = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
    n = (0, m.l)(null == e ? void 0 : e.id);
  return null != n ? n : null
}
let p = e => (0, i.e7)([d.Z], () => {
  if (null == e) return null;
  let n = d.Z.getUserProfile(e);
  return null == n ? void 0 : n.premiumSince
});

function E() {
  let e = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
    n = (0, c.M5)(e, g.p9.TIER_2),
    t = (0, i.e7)([o.ZP], () => {
      let e = o.ZP.getPremiumSubscription();
      return null != e && n ? e.premiumSince : null
    }, [n]),
    l = p(null == e ? void 0 : e.id);
  return null != t ? t : l
}
let x = () => {
    let e = Object.values(g.vK),
      n = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
      t = (0, i.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription());
    if (!(0, c.M5)(n, g.p9.TIER_2) || null == t || null == t.premiumSince) return null;
    let l = a()(),
      r = a()(t.premiumSince).add(1, "day"),
      u = l.diff(r, "months");
    return e.reduce((e, n) => {
      let {
        id: t,
        tenureReqNumMonths: l
      } = n;
      return u >= l ? t : e
    }, null)
  },
  N = () => {
    let e = _(),
      n = (0, i.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription());
    return null == e || null == n || null == n.premiumSince ? null : (0, u.RZ)(e, n.premiumSince)
  },
  T = () => {
    let e = E(),
      n = Object.values(g.vK);
    if (null == e || null == n) return null;
    let t = a()().diff(e, "days"),
      l = n[0],
      r = 30 * l.tenureReqNumMonths - t;
    return r <= 0 ? null : b(v({}, l), {
      daysLeft: r,
      status: "upcoming"
    })
  },
  O = () => {
    let e = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
      n = P(null == e ? void 0 : e.id),
      t = N(),
      l = T();
    return null != n ? b(v({}, n), {
      earnedOnDate: t,
      status: "earned"
    }) : null != l ? l : null
  },
  P = e => {
    let n = (0, m.l)(e);
    return null == n ? null : g.vK[n]
  }