/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => h
}), n(266796);
var r = n(200651),
  i = n(192379),
  o = n(793030),
  a = n(442837),
  s = n(245004),
  l = n(713081),
  c = n(905128),
  u = n(50101),
  d = n(535396),
  f = n(783684),
  _ = n(388032),
  p = n(597282);

function h(e) {
  var t;
  let {
    guild: n
  } = e, h = (0, u.Ek)(n, "GuildPowerupsMarketingPowerupCards");
  i.useEffect(() => {
    h && (0, l.T7)(n.id)
  }, [h, n.id]);
  let g = (0, a.e7)([c.Z], () => {
    var e;
    return null === (e = c.Z.getStateForGuild(n.id)) || void 0 === e ? void 0 : e.catalog
  }, [n.id]);
  return h && null != g ? (0, r.jsxs)("div", {
    className: p.container,
    children: [(0, r.jsx)(o.X6, {
      variant: "heading-xxl/extrabold",
      children: _.NW.string(f.Z.p6HUDQ)
    }), (0, r.jsx)(o.xv, {
      variant: "text-lg/medium",
      children: _.NW.string(f.Z.MYYPa2)
    }), (0, r.jsx)("div", {
      className: p.powerupsContainer,
      children: null === (t = g[d.U.PERK]) || void 0 === t ? void 0 : t.map((e, t) => (0, r.jsx)(s.Q, {
        heading: e.title,
        description: e.description,
        imgSrc: "",
        label: _.NW.formatToPlainString(f.Z.QOacIS, {
          quantity: e.cost
        }),
        isNewPerk: !0
      }, t))
    })]
  }) : null
}