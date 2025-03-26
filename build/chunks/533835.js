/** Chunk was on 81818 **/
t.d(n, {
  default: () => v
}), t(47120);
var o = t(200651),
  r = t(192379),
  i = t(442837),
  l = t(100527),
  s = t(695346),
  c = t(699516),
  a = t(787018),
  d = t(752342),
  u = t(886794),
  f = t(910364);

function p(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      o = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), o.forEach(function(n) {
      var o;
      o = t[n], n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = o
    })
  }
  return e
}

function b(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t.push.apply(t, o)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
let y = [l.Z.BITE_SIZE_PROFILE_POPOUT, l.Z.PROFILE_PANEL];

function v(e) {
  var {
    user: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, o, r = function(e, n) {
      if (null == e) return {};
      var t, o, r = {},
        i = Object.keys(e);
      for (o = 0; o < i.length; o++) t = i[o], n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (o = 0; o < i.length; o++) t = i[o], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
  }(e, ["user"]);
  let {
    isBlocked: l,
    isIgnored: v
  } = (0, i.cj)([c.Z], () => ({
    isBlocked: c.Z.isBlocked(n.id),
    isIgnored: c.Z.isIgnored(n.id)
  })), [g, m] = r.useState(l || v || l);
  r.useEffect(() => {
    m(v || l)
  }, [v, l]);
  let I = !y.some(e => {
      var n;
      return (null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e)
    }),
    j = s.Rt.useSetting();
  return g && I && !(v && j) ? (0, o.jsx)(a.W, p({
    user: n,
    onViewBlockedProfileClick: () => m(!1)
  }, t)) : n.isNonUserBot() ? (0, o.jsx)(u.Z, b(p({}, t), {
    user: n
  })) : n.bot ? (0, o.jsx)(d.Z, b(p({}, t), {
    user: n
  })) : (0, o.jsx)(f.Z, b(p({}, t), {
    user: n
  }))
}