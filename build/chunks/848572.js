/** Chunk was on 89839 **/
n.d(t, {
  GG: () => E,
  Rw: () => j,
  SI: () => O,
  Vq: () => f,
  a1: () => p,
  kG: () => _,
  y3: () => x
});
var l, r = n(913527),
  a = n.n(r),
  i = n(442837),
  u = n(291175),
  s = n(621853),
  d = n(594174),
  c = n(78839),
  o = n(111361),
  m = n(494450),
  g = n(474936);

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = l
    })
  }
  return e
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var f = ((l = {}).UPCOMING = "upcoming", l.EARNED = "earned", l);

function _() {
  let e = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
    t = (0, m.l)(null == e ? void 0 : e.id);
  return null != t ? t : null
}
let p = e => (0, i.e7)([s.Z], () => {
  if (null == e) return null;
  let t = s.Z.getUserProfile(e);
  return null == t ? void 0 : t.premiumSince
});

function E() {
  let e = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
    t = (0, o.M5)(e, g.p9.TIER_2),
    n = (0, i.e7)([c.Z], () => {
      let e = c.Z.getPremiumSubscription();
      return null != e && t ? e.premiumSince : null
    }, [t]),
    l = p(null == e ? void 0 : e.id);
  return null != n ? n : l
}
let x = () => {
    let e = Object.values(g.vK),
      t = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
      n = (0, i.e7)([c.Z], () => c.Z.getPremiumTypeSubscription());
    if (!(0, o.M5)(t, g.p9.TIER_2) || null == n || null == n.premiumSince) return null;
    let l = a()(),
      r = a()(n.premiumSince).add(1, "day"),
      u = l.diff(r, "months");
    return e.reduce((e, t) => {
      let {
        id: n,
        tenureReqNumMonths: l
      } = t;
      return u >= l ? n : e
    }, null)
  },
  N = () => {
    let e = _(),
      t = (0, i.e7)([c.Z], () => c.Z.getPremiumTypeSubscription());
    return null == e || null == t || null == t.premiumSince ? null : (0, u.RZ)(e, t.premiumSince)
  },
  T = () => {
    let e = E(),
      t = Object.values(g.vK);
    if (null == e || null == t) return null;
    let n = a()().diff(e, "days"),
      l = t[0],
      r = 30 * l.tenureReqNumMonths - n;
    return r <= 0 ? null : v(b({}, l), {
      daysLeft: r,
      status: "upcoming"
    })
  },
  j = () => {
    let e = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
      t = O(null == e ? void 0 : e.id),
      n = N(),
      l = T();
    return null != t ? v(b({}, t), {
      earnedOnDate: n,
      status: "earned"
    }) : null != l ? l : null
  },
  O = e => {
    let t = (0, m.l)(e);
    return null == t ? null : g.vK[t]
  }