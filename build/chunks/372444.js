/** Chunk was on 71567 (60ad2434a2d9f37a.js) **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(100527),
  o = n(906732),
  c = n(678558),
  d = n(388032),
  u = n(237108);
let m = e => {
  let {
    guild: t,
    analyticsLocation: n,
    className: i,
    buttonProps: s = {
      color: a.Ttl.BRAND_INVERTED,
      text: d.NW.string(d.t.oqweNz)
    }
  } = e, {
    color: l,
    text: o
  } = s, u = t.premiumTier + 1;
  return (0, r.jsx)(c.Z, {
    color: l,
    analyticsLocation: n,
    guild: t,
    buttonText: o,
    targetBoostedGuildTier: u,
    className: i
  })
};

function p(e) {
  let {
    header: t,
    text: i,
    analyticsLocation: c,
    guild: d,
    className: p,
    textColor: g,
    headerColor: h,
    buttonProps: f
  } = e, {
    analyticsLocations: b
  } = (0, o.ZP)(l.Z.GUILD_BOOSTING_UPSELL_BANNER);
  return (0, r.jsx)(o.Gt, {
    value: b,
    children: (0, r.jsxs)("div", {
      className: s()(u.banner, p),
      children: [(0, r.jsx)("img", {
        className: u.__invalid_headerGraphic,
        alt: "",
        src: n(322393)
      }), (0, r.jsxs)("div", {
        className: u.content,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-lg/semibold",
          color: null != h ? h : "always-white",
          className: u.header,
          children: t
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: null != g ? g : "always-white",
          children: i
        })]
      }), (0, r.jsx)("div", {
        className: u.ctaContainer,
        children: (0, r.jsx)(m, {
          guild: d,
          analyticsLocation: c,
          className: u.button,
          buttonProps: f
        })
      })]
    })
  })
}