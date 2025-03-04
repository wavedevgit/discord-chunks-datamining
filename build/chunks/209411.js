/** Chunk was on 27978 **/
n.d(t, {
  Z: () => b
}), n(47120), n(301563), n(773603);
var r = n(200651),
  i = n(192379),
  o = n(593473),
  a = n(512969),
  l = n(442837),
  s = n(893776),
  c = n(899742),
  u = n(493773),
  d = n(743142),
  h = n(893607),
  g = n(703656),
  p = n(314897),
  f = n(781428),
  m = n(981631),
  _ = n(176505);

function b(e) {
  var t, n;
  let b = i.useCallback(t => {
      if (function(e) {
          var t;
          let n = (0, a.LX)(e, {
            path: m.Z5c.CHANNEL(h.Hw.guildId(), h.Hw.channelId())
          });
          return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === _.oC.ROLE_SUBSCRIPTIONS
        }(t)) g.dL(t);
      else {
        var n;
        (null !== (n = e.transitionTo) && void 0 !== n ? n : g.uL)(t)
      }
    }, [e.transitionTo]),
    {
      isAuthenticated: N,
      loginStatus: x
    } = (0, l.cj)([p.default], () => ({
      isAuthenticated: p.default.isAuthenticated(),
      loginStatus: p.default.getLoginStatus()
    })),
    {
      location: v,
      redirectTo: I
    } = e,
    [E, j] = i.useState(N);

  function O(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      handoffSource: r
    } = e;
    (0, c.Yz)({
      handoffKey: t,
      handoffToken: n,
      handoffSource: r
    }), j(!1)
  }
  return ((0, u.ZP)(() => {
    if (null != v) {
      let {
        handoff_key: e,
        handoff_token: t
      } = (0, o.parse)(v.search);
      if (null != e && null != t) {
        let n = null != I ? (0, d.L)(I) : void 0;
        E ? s.Z.logout(null).finally(() => {
          O({
            handoffKey: e,
            handoffToken: t,
            handoffSource: n
          })
        }) : O({
          handoffKey: e,
          handoffToken: t,
          handoffSource: n
        })
      }
    }
  }), E || x === m.u34.LOGGING_IN) ? (0, r.jsx)(f.q, {}) : (0, r.jsx)(f.Z, (t = function(e) {
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
  }({}, e), n = n = {
    transitionTo: b
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