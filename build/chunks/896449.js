/** Chunk was on 94458 **/
n.d(t, {
  Z: () => v
});
var r = n(200651),
  a = n(192379),
  l = n(481060),
  i = n(239091),
  o = n(299206),
  s = n(810568),
  c = n(168524),
  u = n(37258),
  d = n(26033),
  m = n(178762),
  p = n(388032),
  h = n(694247);

function x(e) {
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

function g(e, t) {
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

function v(e) {
  var t;
  let {
    user: n,
    guildId: v,
    channel: f,
    entry: y,
    onSelect: j,
    disableGameProfileLinks: P
  } = e, O = a.useContext(m.Ir), b = (0, u.Z)({
    userId: n.id,
    guildId: v,
    channelId: null == f ? void 0 : f.id,
    onAction: O
  }), C = (0, o.Z)({
    id: n.id,
    label: p.NW.string(p.t["/AXYnJ"])
  }), N = "application_id" in y.extra ? y.extra.application_id : null, I = (0, o.Z)({
    id: N,
    label: p.NW.string(p.t["FfCL+/"])
  }), w = (0, d.dX)(y), T = (0, c.Z)({
    location: "ContentPopoutContextMenu",
    applicationId: w && !0 !== P ? null === (t = y.extra) || void 0 === t ? void 0 : t.application_id : void 0,
    source: s.m1.ActivityCardContextMenu,
    trackEntryPointImpression: !0,
    sourceUserId: y.author_id
  });
  return (0, r.jsx)(l.yRy, {
    align: "top",
    position: "right",
    disablePointerEvents: !1,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(l.v2r, {
        navId: "content-inventory-context",
        onClose: () => {
          (0, i.Zy)(), t()
        },
        "aria-label": p.NW.string(p.t.liqwPD),
        onSelect: j,
        children: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)(l.kSQ, {
            children: [b, null != T && (0, r.jsx)(l.sNh, {
              id: "game-profile",
              label: p.NW.string(p.t.f7aVGh),
              action: e => {
                T(e), null == O || O()
              }
            })]
          }), (0, r.jsxs)(l.kSQ, {
            children: [C, I]
          })]
        })
      })
    },
    children: e => (0, r.jsx)(l.ua7, {
      text: p.NW.string(p.t.UKOtz8),
      children: t => (0, r.jsx)(l.P3F, g(x(g(x({}, t), {
        className: h.menuIcon
      }), e), {
        children: (0, r.jsx)(l.xhG, {
          color: "currentColor",
          size: "custom",
          width: 16,
          height: 16
        })
      }))
    })
  })
}