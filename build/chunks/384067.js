/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => f
}), n(47120);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  o = n.n(a),
  s = n(622535),
  i = n(481060),
  c = n(597688),
  d = n(297651),
  u = n(215023),
  g = n(388032),
  h = n(39532);
let f = e => {
  var t, n, a;
  let {
    wideBannerBlock: f,
    handleTransition: m,
    tab: p
  } = e, b = null === (t = c.Z.getCategoryByStoreListingId(f.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId, C = l.useRef(null), [_, v] = l.useState();
  l.useEffect(() => {
    let e = C.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && v(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let k = null != b ? b : "",
    {
      handleCardVisibilityChange: x
    } = (0, d.E)(k, "home", "marketing wide banner"),
    j = f.bannerUrl;
  return null == j ? null : (0, r.jsx)(s.$, {
    onChange: x,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      className: o()(h.row, h.between, h.bannerBlockContainer, h.centeredSection),
      children: [(0, r.jsx)("div", {
        className: h.wideBannerBackgroundImg,
        children: (0, r.jsx)("img", {
          ref: C,
          src: j,
          alt: f.title,
          style: {
            width: "100%",
            height: null != _ ? "".concat(_, "px") : "auto",
            objectFit: "cover",
            objectPosition: "left center",
            display: "block"
          }
        })
      }), (0, r.jsx)("div", {
        className: h.wideBannerContentContainer,
        style: {
          maxHeight: null != _ ? "".concat(_, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: h.wideBannerTextContainer,
          children: [(0, r.jsx)(i.X6q, {
            style: {
              color: null !== (n = f.bannerTextColor) && void 0 !== n ? n : "var(--text-normal)"
            },
            variant: p === u.AW.ORBS ? "heading-xl/bold" : "heading-lg/semibold",
            children: f.title
          }), (0, r.jsx)(i.Text, {
            style: {
              color: null !== (a = f.bannerTextColor) && void 0 !== a ? a : "var(--text-normal)"
            },
            lineClamp: 2,
            variant: p === u.AW.ORBS ? "text-md/medium" : "text-sm/medium",
            children: f.body
          })]
        })
      }), !0 !== f.disableCta && (0, r.jsx)(i.zxk, {
        className: h.wideBannerBlockButton,
        color: i.Ttl.PRIMARY,
        onClick: () => m("shop wide banner", k),
        children: g.NW.string(g.t.jVcuVV)
      })]
    })
  })
}