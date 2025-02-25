/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  q: () => h
});
var n = r(200651);
r(192379);
var i = r(120356),
  l = r.n(i),
  o = r(622535),
  a = r(481060),
  s = r(597688),
  c = r(884697),
  d = r(297651),
  u = r(215023),
  p = r(388032),
  f = r(974492);
let h = e => {
  var t, r, i, h, b;
  let C, {
    category: m,
    subblock: g,
    badgeText: v,
    handleTransition: x
  } = e;
  null != g && (C = null === (t = s.Z.getCategoryByStoreListingId(null == g ? void 0 : g.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
  let j = null !== (r = null != C ? C : null == m ? void 0 : m.skuId) && void 0 !== r ? r : "",
    {
      handleCardVisibilityChange: _
    } = (0, d.E)(j, "home", "marketing featured block"),
    y = null !== (h = null == g ? void 0 : g.bannerUrl) && void 0 !== h ? h : (0, c.uV)(null !== (i = null == m ? void 0 : m.featuredBlock) && void 0 !== i ? i : "", {
      size: u.J0,
      format: "png"
    });
  return (0, n.jsx)(o.$, {
    onChange: _,
    threshold: 0,
    children: (0, n.jsxs)(a.P3F, {
      className: l()(f.featuredBlock),
      style: {
        backgroundImage: "url(".concat(y, ")")
      },
      onClick: () => x("shop marketing tile", j),
      children: [null != v && (0, n.jsx)(a.IGR, {
        disableColor: !0,
        text: v,
        className: f.featuredBlockBadge
      }), (null == g ? void 0 : g.bodyText) != null && (0, n.jsx)(a.X6q, {
        lineClamp: 4,
        className: f.featuredBlockBodyText,
        style: {
          color: null !== (b = g.bannerTextColor) && void 0 !== b ? b : "white"
        },
        variant: "heading-lg/semibold",
        children: g.bodyText
      }), (0, n.jsx)(a.zxk, {
        className: f.featuredBlockButton,
        color: a.Ttl.WHITE,
        onClick: () => {},
        children: p.NW.string(p.t.jVcuVV)
      })]
    })
  })
}