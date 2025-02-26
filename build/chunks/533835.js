/** Chunk was on 2998 **/
t.d(n, {
  default: () => j
}), t(47120);
var r = t(200651),
  o = t(192379),
  i = t(512722),
  l = t.n(i),
  s = t(442837),
  c = t(100527),
  a = t(922611),
  d = t(695346),
  u = t(699516),
  f = t(594174),
  p = t(971393),
  b = t(787018),
  m = t(752342),
  v = t(886794),
  g = t(910364);

function y(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = r
    })
  }
  return e
}

function I(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
let h = [c.Z.BITE_SIZE_PROFILE_POPOUT, c.Z.PROFILE_PANEL];

function j(e) {
  var {
    user: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, r, o = function(e, n) {
      if (null == e) return {};
      var t, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) t = i[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
    }
    return o
  }(e, ["user"]);
  let i = (0, s.e7)([f.default], () => f.default.getCurrentUser());
  l()(null != i, "UserProfileModalWrapper: currentUser cannot be undefined");
  let {
    isBlocked: c,
    isIgnored: j
  } = (0, s.cj)([u.Z], () => ({
    isBlocked: u.Z.isBlocked(n.id),
    isIgnored: u.Z.isIgnored(n.id)
  })), x = (0, a.D)({
    location: "UserProfileModalWrapper"
  }), [_, O] = o.useState(c || x && (j || c)), Z = (0, p.sS)({
    location: "UserProfileModalWrapper"
  });
  o.useEffect(() => {
    O(j || c)
  }, [j, c]);
  let N = !h.some(e => {
      var n;
      return (null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e)
    }),
    P = d.Rt.useSetting();
  return _ && Z && N && !x ? (0, r.jsx)(b.Z, y({
    user: n,
    currentUser: i,
    onViewBlockedProfileClick: () => O(!1)
  }, t)) : _ && N && x && !(j && P) ? (0, r.jsx)(b.W, y({
    user: n,
    currentUser: i,
    onViewBlockedProfileClick: () => O(!1)
  }, t)) : n.isNonUserBot() ? (0, r.jsx)(v.Z, I(y({}, t), {
    user: n,
    currentUser: i
  })) : n.bot ? (0, r.jsx)(m.Z, I(y({}, t), {
    user: n,
    currentUser: i
  })) : (0, r.jsx)(g.Z, I(y({}, t), {
    user: n,
    currentUser: i
  }))
}