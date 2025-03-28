/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  q: () => b
});
var r = n(200651),
  l = n(192379),
  o = n(622535),
  a = n(481060),
  i = n(597688),
  s = n(297651),
  c = n(794324),
  u = n(388032),
  d = n(39532);
let b = e => {
  var t, n, b;
  let p, {
    category: f,
    subblock: g,
    badgeText: h,
    handleTransition: m
  } = e;
  null != g && (p = null === (t = i.Z.getCategoryByStoreListingId(null == g ? void 0 : g.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
  let v = null !== (n = null != p ? p : null == f ? void 0 : f.skuId) && void 0 !== n ? n : "",
    {
      handleCardVisibilityChange: _
    } = (0, s.E)(v, "home", "marketing featured block"),
    {
      featuredBlockBanner: C
    } = (0, c.YG)(f, g),
    x = l.useRef(null);
  return (0, r.jsx)(o.$, {
    innerRef: x,
    onChange: _,
    threshold: 0,
    children: (0, r.jsxs)(a.P3F, {
      className: d.featuredBlock,
      innerRef: x,
      style: {
        backgroundImage: "url(".concat(C, ")")
      },
      onClick: () => m("shop marketing tile", v),
      children: [null != h && (0, r.jsx)(a.IGR, {
        disableColor: !0,
        text: h,
        className: d.featuredBlockBadge
      }), (null == g ? void 0 : g.bodyText) != null && (0, r.jsx)(a.X6q, {
        lineClamp: 4,
        className: d.featuredBlockBodyText,
        style: {
          color: null !== (b = g.bannerTextColor) && void 0 !== b ? b : "white"
        },
        variant: "heading-lg/semibold",
        children: g.bodyText
      }), (0, r.jsx)(a.zxk, {
        className: d.featuredBlockButton,
        color: a.Ttl.WHITE,
        onClick: () => {},
        children: u.NW.string(u.t.jVcuVV)
      })]
    })
  })
}