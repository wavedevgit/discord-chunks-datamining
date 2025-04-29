/** Chunk was on 88235 **/
n.d(t, {
  Z: () => j
});
var r = n(200651),
  l = n(192379),
  i = n(481060),
  o = n(81897),
  s = n(906732),
  a = n(785717),
  c = n(806729),
  d = n(857302),
  u = n(892001),
  f = n(252417),
  p = n(388032),
  h = n(301150);

function j(e) {
  let {
    user: t,
    guildId: n,
    channelId: j,
    onClose: g
  } = e, {
    mutualFriends: m
  } = (0, c.Z)(t), {
    analyticsLocations: v
  } = (0, s.ZP)(), {
    context: b,
    trackUserProfileAction: O
  } = (0, a.KZ)(), x = (0, o.Z)();
  l.useEffect(() => {
    (0, d.Z)(t.id, x)
  }, [t.id, x]);
  let Z = e => {
    var t, n;
    g(), (0, u.openUserProfileModal)((t = function(e) {
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
      userId: e,
      sourceAnalyticsLocations: v
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
  };
  return (0, r.jsx)(i.zJl, {
    className: h.listScroller,
    fade: !0,
    children: null == m ? (0, r.jsx)("div", {
      className: h.empty,
      children: (0, r.jsx)(i.$jN, {})
    }) : 0 === m.length ? (0, r.jsxs)("div", {
      className: h.empty,
      children: [(0, r.jsx)("div", {
        className: h.emptyIconFriends
      }), (0, r.jsx)("div", {
        className: h.emptyText,
        children: p.intl.string(p.t["/5p4g4"])
      })]
    }) : m.map(e => {
      let {
        key: t,
        user: l,
        status: i
      } = e;
      return (0, r.jsx)(f.Z, {
        user: l,
        status: i,
        guildId: n,
        channelId: j,
        onSelect: () => {
          O({
            action: "PRESS_MUTUAL_FRIEND"
          }), Z(l.id)
        }
      }, t)
    })
  })
}