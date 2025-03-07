/** Chunk was on 2026 **/
n.d(t, {
  M: () => f
}), n(47120);
var r = n(200651),
  a = n(192379),
  i = n(442837),
  l = n(980591),
  o = n(921813),
  s = n(643879),
  c = n(317257),
  u = n(25990),
  d = n(74538),
  m = n(755419);
let f = e => {
  var t, n;
  let {
    user: f
  } = e, p = d.ZP.canUsePremiumProfileCustomization(f), v = (0, i.cj)([u.Z], () => u.Z.getAllPending()), {
    pendingAvatarV2: h
  } = v, b = function(e, t) {
    if (null == e) return {};
    var n, r, a = function(e, t) {
      if (null == e) return {};
      var n, r, a = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
  }(v, ["pendingAvatarV2"]), g = (0, s.SD)({
    userId: f.id,
    image: h
  }), [x, P] = (0, a.useState)(!1);
  return (0, l.Z)(() => {
    P(!0)
  }, 250), (0, r.jsx)(o.Z, (t = function(e) {
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
  }({}, b), n = n = {
    pendingAvatar: g,
    user: f,
    pendingBadges: [(0, m.X2)()],
    shouldOpenBadgeTooltip: e => x && e === c.l.ORB_PROFILE_BADGE,
    canUsePremiumCustomization: p,
    disabledInputs: !0,
    hideExampleButton: !0
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}