/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => g
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(100527),
  o = n(906732),
  A = n(678558),
  c = n(388032),
  d = n(92386);
let u = e => {
  let {
    guild: t,
    analyticsLocation: n,
    className: i,
    buttonProps: s = {
      color: a.Ttl.BRAND_INVERTED,
      text: c.NW.string(c.t.oqweNz)
    }
  } = e, {
    color: l,
    text: o
  } = s, d = t.premiumTier + 1;
  return (0, r.jsx)(A.Z, {
    color: l,
    analyticsLocation: n,
    guild: t,
    buttonText: o,
    targetBoostedGuildTier: d,
    className: i
  })
};

function g(e) {
  let {
    header: t,
    text: i,
    analyticsLocation: A,
    guild: c,
    className: g,
    textColor: f,
    headerColor: m,
    buttonProps: p
  } = e, {
    analyticsLocations: h
  } = (0, o.ZP)(l.Z.GUILD_BOOSTING_UPSELL_BANNER);
  return (0, r.jsx)(o.Gt, {
    value: h,
    children: (0, r.jsxs)("div", {
      className: s()(d.banner, g),
      children: [(0, r.jsx)("img", {
        className: d.__invalid_headerGraphic,
        alt: "",
        src: n(322393)
      }), (0, r.jsxs)("div", {
        className: d.content,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-lg/semibold",
          color: null != m ? m : "always-white",
          className: d.header,
          children: t
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: null != f ? f : "always-white",
          children: i
        })]
      }), (0, r.jsx)("div", {
        className: d.ctaContainer,
        children: (0, r.jsx)(u, {
          guild: c,
          analyticsLocation: A,
          className: d.button,
          buttonProps: p
        })
      })]
    })
  })
}