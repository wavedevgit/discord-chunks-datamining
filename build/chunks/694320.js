/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => y
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(442837),
  l = n(481060),
  c = n(100527),
  u = n(906732),
  d = n(436774),
  f = n(592125),
  _ = n(944486),
  p = n(626135),
  h = n(981631),
  g = n(388032),
  m = n(256945);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b() {
  (0, l.ZDy)(async () => {
    let {
      default: e
    } = await n.e("3289").then(n.bind(n, 682609));
    return t => (0, r.jsx)(e, v({
      channel: null
    }, t))
  })
}

function y(e) {
  let {
    className: t,
    iconOnly: n
  } = e, o = (0, s.e7)([_.Z, f.Z], () => {
    let e = f.Z.getChannel(_.Z.getChannelId());
    return (null == e ? void 0 : e.isPrivate()) ? h.ZY5.DM_CHANNEL : h.ZY5.GUILD_CHANNEL
  }), {
    analyticsLocations: E
  } = (0, u.ZP)(c.Z.PREMIUM_UPSELL);
  i.useEffect(() => {
    p.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
      type: "longer messages inline",
      location: {
        location_page: o,
        location_section: h.jXE.CHANNEL_TEXT_AREA
      },
      location_stack: E
    })
  }, [o, E]);
  let y = () => (0, r.jsxs)("div", {
      className: a()(m.root, t),
      children: [(0, r.jsx)(l.SrA, {
        size: "md",
        className: m.premium,
        color: d.JX.PREMIUM_TIER_2
      }), (0, r.jsx)(l.Text, {
        className: m.text,
        variant: "text-sm/normal",
        children: g.NW.format(g.t.BNAIBQ, {
          onLearnMore: b
        })
      })]
    }),
    O = () => (0, r.jsx)(l.P3F, {
      className: m.iconOnly,
      onClick: () => b(),
      children: (0, r.jsx)(l.ua7, {
        text: g.NW.string(g.t["+eFIjY"]),
        position: "top",
        children: e => (0, r.jsx)(l.SrA, v({
          size: "md",
          color: "currentColor",
          className: m.premium
        }, e))
      })
    });
  return n ? O() : y()
}