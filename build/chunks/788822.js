/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  q: () => u
});
var r = n(200651);
n(192379);
var l = n(622535),
  a = n(481060),
  s = n(597688),
  o = n(297651),
  i = n(794324),
  d = n(388032),
  c = n(39532);
let u = e => {
  var t, n, u;
  let m, {
    category: g,
    subblock: h,
    badgeText: f,
    handleTransition: p
  } = e;
  null != h && (m = null === (t = s.Z.getCategoryByStoreListingId(null == h ? void 0 : h.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
  let b = null !== (n = null != m ? m : null == g ? void 0 : g.skuId) && void 0 !== n ? n : "",
    {
      handleCardVisibilityChange: C
    } = (0, o.E)(b, "home", "marketing featured block"),
    {
      featuredBlockBanner: _
    } = (0, i.YG)(g, h);
  return (0, r.jsx)(l.$, {
    onChange: C,
    threshold: 0,
    children: (0, r.jsxs)(a.P3F, {
      className: c.featuredBlock,
      style: {
        backgroundImage: "url(".concat(_, ")")
      },
      onClick: () => p("shop marketing tile", b),
      children: [null != f && (0, r.jsx)(a.IGR, {
        disableColor: !0,
        text: f,
        className: c.featuredBlockBadge
      }), (null == h ? void 0 : h.bodyText) != null && (0, r.jsx)(a.X6q, {
        lineClamp: 4,
        className: c.featuredBlockBodyText,
        style: {
          color: null !== (u = h.bannerTextColor) && void 0 !== u ? u : "white"
        },
        variant: "heading-lg/semibold",
        children: h.bodyText
      }), (0, r.jsx)(a.zxk, {
        className: c.featuredBlockButton,
        color: a.Ttl.WHITE,
        onClick: () => {},
        children: d.NW.string(d.t.jVcuVV)
      })]
    })
  })
}