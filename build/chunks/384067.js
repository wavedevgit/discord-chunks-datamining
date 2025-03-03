/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => b
}), r(47120);
var n = r(200651),
  l = r(192379),
  i = r(120356),
  o = r.n(i),
  a = r(622535),
  s = r(481060),
  c = r(597688),
  u = r(297651),
  d = r(215023),
  p = r(388032),
  f = r(39532);
let b = e => {
  var t;
  let {
    wideBannerBlock: r,
    handleTransition: i,
    tab: b
  } = e, h = null === (t = c.Z.getCategoryByStoreListingId(r.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId, m = l.useRef(null), [C, g] = l.useState();
  l.useEffect(() => {
    let e = m.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && g(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let v = null != h ? h : "",
    {
      handleCardVisibilityChange: x
    } = (0, u.E)(v, "home", "marketing wide banner"),
    j = r.bannerUrl;
  return null == j ? null : (0, n.jsx)(a.$, {
    onChange: x,
    threshold: 0,
    children: (0, n.jsxs)("div", {
      className: o()(f.row, f.between, f.section, f.bannerBlockContainer),
      children: [(0, n.jsx)("div", {
        className: f.wideBannerBackgroundImg,
        children: (0, n.jsx)("img", {
          ref: m,
          src: j,
          alt: r.title,
          style: {
            width: "100%",
            height: null != C ? "".concat(C, "px") : "auto",
            objectFit: "cover",
            objectPosition: "left center",
            display: "block"
          }
        })
      }), (0, n.jsx)("div", {
        className: f.wideBannerContentContainer,
        style: {
          maxHeight: null != C ? "".concat(C, "px") : "auto"
        },
        children: (0, n.jsxs)("div", {
          className: f.wideBannerTextContainer,
          children: [(0, n.jsx)(s.X6q, {
            style: {
              color: r.bannerTextColor
            },
            variant: b === d.AW.ORBS ? "heading-xl/bold" : "heading-lg/semibold",
            children: r.title
          }), (0, n.jsx)(s.Text, {
            style: {
              color: b === d.AW.ORBS ? "rgba(255, 255, 255, 0.65)" : r.bannerTextColor
            },
            lineClamp: 2,
            variant: b === d.AW.ORBS ? "text-md/medium" : "text-sm/medium",
            children: r.body
          })]
        })
      }), !0 !== r.disableCta && (0, n.jsx)(s.zxk, {
        className: f.wideBannerBlockButton,
        color: s.Ttl.WHITE,
        onClick: () => i("shop wide banner", v),
        children: p.NW.string(p.t.jVcuVV)
      })]
    })
  })
}