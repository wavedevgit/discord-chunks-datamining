/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => h
}), n(47120);
var r = n(200651),
  l = n(192379),
  o = n(120356),
  a = n.n(o),
  i = n(622535),
  s = n(481060),
  c = n(63063),
  u = n(597688),
  d = n(297651),
  b = n(215023),
  p = n(981631),
  f = n(388032),
  g = n(39532);
let h = e => {
  var t, n, o;
  let {
    wideBannerBlock: h,
    handleTransition: m,
    tab: v
  } = e, _ = null === (t = u.Z.getCategoryByStoreListingId(h.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId, C = l.useRef(null), x = l.useRef(null), [O, y] = l.useState();
  l.useEffect(() => {
    let e = x.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && y(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let j = null != _ ? _ : "",
    {
      handleCardVisibilityChange: k
    } = (0, d.E)(j, "home", "marketing wide banner"),
    S = h.bannerUrl;
  return null == S ? null : (0, r.jsx)(i.$, {
    innerRef: C,
    onChange: k,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      ref: C,
      className: a()(g.row, g.between, g.bannerBlockContainer, g.centeredSection),
      children: [(0, r.jsx)("div", {
        className: g.wideBannerBackgroundImg,
        children: (0, r.jsx)("img", {
          ref: x,
          src: S,
          alt: h.title,
          style: {
            width: "100%",
            height: null != O ? "".concat(O, "px") : "auto",
            objectFit: "cover",
            objectPosition: "left center",
            display: "block"
          }
        })
      }), (0, r.jsx)("div", {
        className: g.wideBannerContentContainer,
        style: {
          maxHeight: null != O ? "".concat(O, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: g.wideBannerTextContainer,
          children: [(0, r.jsx)(s.X6q, {
            style: {
              color: null !== (n = h.bannerTextColor) && void 0 !== n ? n : "var(--text-normal)"
            },
            variant: v === b.AW.ORBS ? "heading-xl/bold" : "heading-lg/semibold",
            children: h.title
          }), (0, r.jsx)(s.Text, {
            style: {
              color: null !== (o = h.bannerTextColor) && void 0 !== o ? o : "var(--text-normal)"
            },
            lineClamp: 2,
            variant: v === b.AW.ORBS ? "text-md/medium" : "text-sm/medium",
            children: v === b.AW.ORBS ? f.NW.format(f.t.SFFP7O, {
              helpdeskArticle: c.Z.getArticleURL(p.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : h.body
          })]
        })
      }), !0 !== h.disableCta && (0, r.jsx)(s.zxk, {
        className: g.wideBannerBlockButton,
        color: s.Ttl.PRIMARY,
        onClick: () => m("shop wide banner", j),
        children: f.NW.string(f.t.jVcuVV)
      })]
    })
  })
}