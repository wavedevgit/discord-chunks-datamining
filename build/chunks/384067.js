/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => f
}), n(47120);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(622535),
  i = n(481060),
  d = n(597688),
  c = n(297651),
  u = n(215023),
  g = n(388032),
  h = n(39532);
let f = e => {
  var t;
  let {
    wideBannerBlock: n,
    handleTransition: a,
    tab: f
  } = e, m = null === (t = d.Z.getCategoryByStoreListingId(n.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId, p = l.useRef(null), [b, C] = l.useState();
  l.useEffect(() => {
    let e = p.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && C(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let _ = null != m ? m : "",
    {
      handleCardVisibilityChange: x
    } = (0, c.E)(_, "home", "marketing wide banner"),
    v = n.bannerUrl;
  return null == v ? null : (0, r.jsx)(o.$, {
    onChange: x,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      className: s()(h.row, h.between, h.section, h.bannerBlockContainer),
      children: [(0, r.jsx)("div", {
        className: h.wideBannerBackgroundImg,
        children: (0, r.jsx)("img", {
          ref: p,
          src: v,
          alt: n.title,
          style: {
            width: "100%",
            height: null != b ? "".concat(b, "px") : "auto",
            objectFit: "cover",
            objectPosition: "left center",
            display: "block"
          }
        })
      }), (0, r.jsx)("div", {
        className: h.wideBannerContentContainer,
        style: {
          maxHeight: null != b ? "".concat(b, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: h.wideBannerTextContainer,
          children: [(0, r.jsx)(i.X6q, {
            style: {
              color: n.bannerTextColor
            },
            variant: f === u.AW.ORBS ? "heading-xl/bold" : "heading-lg/semibold",
            children: n.title
          }), (0, r.jsx)(i.Text, {
            style: {
              color: f === u.AW.ORBS ? "rgba(255, 255, 255, 0.65)" : n.bannerTextColor
            },
            lineClamp: 2,
            variant: f === u.AW.ORBS ? "text-md/medium" : "text-sm/medium",
            children: n.body
          })]
        })
      }), !0 !== n.disableCta && (0, r.jsx)(i.zxk, {
        className: h.wideBannerBlockButton,
        color: i.Ttl.WHITE,
        onClick: () => a("shop wide banner", _),
        children: g.NW.string(g.t.jVcuVV)
      })]
    })
  })
}