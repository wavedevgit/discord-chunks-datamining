/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => h
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
  m = n(388032),
  g = n(39532);
let h = e => {
  var t;
  let {
    wideBannerBlock: n,
    handleTransition: a,
    tab: h
  } = e, f = null === (t = d.Z.getCategoryByStoreListingId(n.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId, p = l.useRef(null), [b, C] = l.useState();
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
  let _ = null != f ? f : "",
    {
      handleCardVisibilityChange: v
    } = (0, c.E)(_, "home", "marketing wide banner"),
    x = n.bannerUrl;
  return null == x ? null : (0, r.jsx)(o.$, {
    onChange: v,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      className: s()(g.row, g.between, g.section, g.bannerBlockContainer),
      children: [(0, r.jsx)("div", {
        className: g.wideBannerBackgroundImg,
        children: (0, r.jsx)("img", {
          ref: p,
          src: x,
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
        className: g.wideBannerContentContainer,
        style: {
          maxHeight: null != b ? "".concat(b, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: g.wideBannerTextContainer,
          children: [(0, r.jsx)(i.X6q, {
            style: {
              color: n.bannerTextColor
            },
            variant: h === u.AW.ORBS ? "heading-xl/bold" : "heading-lg/semibold",
            children: n.title
          }), (0, r.jsx)(i.Text, {
            style: {
              color: h === u.AW.ORBS ? "rgba(255, 255, 255, 0.65)" : n.bannerTextColor
            },
            lineClamp: 2,
            variant: h === u.AW.ORBS ? "text-md/medium" : "text-sm/medium",
            children: n.body
          })]
        })
      }), !0 !== n.disableCta && (0, r.jsx)(i.zxk, {
        className: g.wideBannerBlockButton,
        color: i.Ttl.WHITE,
        onClick: () => a("shop wide banner", _),
        children: m.NW.string(m.t.jVcuVV)
      })]
    })
  })
}