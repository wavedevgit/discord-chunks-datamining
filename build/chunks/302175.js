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
  _ = n(730621),
  p = n(388032),
  h = n(840987),
  m = n(952567);

function g(e) {
  var t;
  let {
    guild: n
  } = e, g = (0, u.Ek)(n, "GuildPowerupsMarketingPowerupCards");
  i.useEffect(() => {
    g && ((0, l.Sn)(n.id), (0, l.Fm)(n.id))
  }, [g, n.id]);
  let E = (0, d.Z)(n.id),
    v = (0, a.e7)([c.Z], () => {
      var e;
      return null === (e = c.Z.getStateForGuild(n.id)) || void 0 === e ? void 0 : e.unlocked
    });
  return g && null != E ? (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(o.X6, {
      variant: "heading-xxl/extrabold",
      children: p.NW.string(_.Z.p6HUDQ)
    }), (0, r.jsx)(o.xv, {
      variant: "text-lg/medium",
      children: p.NW.string(_.Z.MYYPa2)
    }), (0, r.jsx)("div", {
      className: h.powerupsContainer,
      children: null === (t = E.get(f.Us.PERK)) || void 0 === t ? void 0 : t.map((e, t) => (0, r.jsx)(s.Q, {
        animatedCard: !0,
        heading: e.title,
        description: e.description,
        imgSrc: m,
        label: p.NW.formatToPlainString(_.Z.QOacIS, {
          quantity: e.cost
        }),
        isNewPerk: !0,
        isEnabled: null == v ? void 0 : v.has(e.skuId)
      }, t))
    })]
  }) : null
}