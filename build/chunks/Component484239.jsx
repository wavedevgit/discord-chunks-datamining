/** Chunk was on 30202 **/
/** chunk id: 484239, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk404615 = require("./404615.js"),
  Chunk743612 = require("./743612.jsx"),
  Chunk505754 = require("./505754.js");
let u = e => {
  var t;
  let {
    title: n,
    titleClassName: r,
    buttonClassName: u,
    perkImage: m,
    isCarousel: p,
    onCtaClick: g,
    perkComponent: h,
    subtitle: f = "",
    descriptionCta: b = "",
    cardVariant: x,
    subtitleClassName: _,
    imageOverlayText: j
  } = e, E = (0, o._)(x), C = null != j;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: s()(d.cover, d.below)
    }), (0, i.jsx)(c.Z, {
      title: n,
      shouldShowElement: e => (null == e ? true : e.onlyShowOnHover) !== true,
      cardVariantStyleInfo: E,
      titleClassName: r,
      subtitle: f,
      subtitleClassName: _
    }), null != m && (0, i.jsxs)("div", {
      className: s()(d.relative, {
        [d.cardImage]: !p
      }),
      children: [(0, i.jsx)("img", {
        src: m,
        alt: "",
        className: p ? C ? d.carouselCardImageGrayscale : d.carouselCardImage : ""
      }), C ? (0, i.jsx)("div", {
        className: d.imageOverlayTextContainer,
        children: (0, i.jsx)(l.Text, {
          className: d.imageOverlayText,
          variant: "text-md/bold",
          children: j
        })
      }) : null]
    }), null != h && (0, i.jsxs)("div", {
      className: d.cardIllustrationNoHover,
      children: [h, 0 !== b.length && null != g && (0, i.jsx)(a.zx, {
        "data-migration-pending": true,
        className: u,
        fullWidth: true,
        onClick: g,
        children: (0, i.jsx)("div", {
          className: null == E || null == (t = E.descriptionCta) ? true : t.className,
          children: b
        })
      })]
    })]
  })
}