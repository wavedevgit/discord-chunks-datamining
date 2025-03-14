/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => g
}), n(266796);
var r = n(200651),
  i = n(192379),
  o = n(793030),
  a = n(442837),
  s = n(245004),
  l = n(713081),
  c = n(905128),
  u = n(50101),
  d = n(111360),
  f = n(535396),
  _ = n(268359),
  p = n(388032),
  h = n(351226),
  m = n(952567);

function g(e) {
  var t, n, g;
  let {
    guild: E
  } = e, v = (0, u.Ek)(E, "GuildPowerupsMarketingPowerupCards");
  i.useEffect(() => {
    v && ((0, l.Sn)(E.id), (0, l.Fm)(E.id))
  }, [v, E.id]);
  let b = (0, d.Z)(E.id),
    y = (0, a.e7)([c.Z], () => {
      var e;
      return null === (e = c.Z.getStateForGuild(E.id)) || void 0 === e ? void 0 : e.unlocked
    });
  return v && null != b && (null !== (g = null === (t = b.get(f.Us.PERK)) || void 0 === t ? void 0 : t.length) && void 0 !== g ? g : 0) !== 0 ? (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(o.X6, {
      variant: "heading-xxl/extrabold",
      children: p.NW.string(_.Z.p6HUDQ)
    }), (0, r.jsx)(o.xv, {
      variant: "text-lg/medium",
      children: p.NW.string(_.Z.MYYPa2)
    }), (0, r.jsx)("div", {
      className: h.powerupsContainer,
      children: null === (n = b.get(f.Us.PERK)) || void 0 === n ? void 0 : n.map((e, t) => (0, r.jsx)(s.Q, {
        animatedCard: !0,
        heading: e.title,
        description: e.description,
        imgSrc: m,
        label: p.NW.formatToPlainString(_.Z.QOacIS, {
          quantity: e.cost
        }),
        isNewPerk: !0,
        isEnabled: null == y ? void 0 : y.has(e.skuId)
      }, t))
    })]
  }) : null
}