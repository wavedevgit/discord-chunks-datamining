/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  q: () => u
});
var r = n(200651);
n(192379);
var l = n(622535),
  a = n(481060),
  o = n(597688),
  s = n(297651),
  i = n(794324),
  c = n(388032),
  d = n(39532);
let u = e => {
  var t, n, u;
  let g, {
    category: h,
    subblock: f,
    badgeText: m,
    handleTransition: p
  } = e;
  null != f && (g = null === (t = o.Z.getCategoryByStoreListingId(null == f ? void 0 : f.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
  let b = null !== (n = null != g ? g : null == h ? void 0 : h.skuId) && void 0 !== n ? n : "",
    {
      handleCardVisibilityChange: C
    } = (0, s.E)(b, "home", "marketing featured block"),
    {
      featuredBlockBanner: _
    } = (0, i.YG)(h, f);
  return (0, r.jsx)(l.$, {
    onChange: C,
    threshold: 0,
    children: (0, r.jsxs)(a.P3F, {
      className: d.featuredBlock,
      style: {
        backgroundImage: "url(".concat(_, ")")
      },
      onClick: () => p("shop marketing tile", b),
      children: [null != m && (0, r.jsx)(a.IGR, {
        disableColor: !0,
        text: m,
        className: d.featuredBlockBadge
      }), (null == f ? void 0 : f.bodyText) != null && (0, r.jsx)(a.X6q, {
        lineClamp: 4,
        className: d.featuredBlockBodyText,
        style: {
          color: null !== (u = f.bannerTextColor) && void 0 !== u ? u : "white"
        },
        variant: "heading-lg/semibold",
        children: f.bodyText
      }), (0, r.jsx)(a.zxk, {
        className: d.featuredBlockButton,
        color: a.Ttl.WHITE,
        onClick: () => {},
        children: c.NW.string(c.t.jVcuVV)
      })]
    })
  })
}