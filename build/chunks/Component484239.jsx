/** Chunk was on web.js **/
/** chunk id: 484239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk176782 = require("./176782.js"),
  Chunk743612 = require("./743612.jsx"),
  Chunk505754 = require("./505754.js");
let d = e => {
  var t;
  let {
    title: n,
    titleClassName: i,
    buttonClassName: d,
    perkImage: f,
    isCarousel: _,
    onCtaClick: p,
    perkComponent: h,
    subtitle: m = "",
    descriptionCta: g = "",
    cardVariant: E,
    subtitleClassName: b,
    imageOverlayText: y
  } = e, O = e => (null == e ? true : e.onlyShowOnHover) !== true, v = (0, l._)(E), I = null != y;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: o()(u.cover, u.below)
    }), (0, r.jsx)(c.Z, {
      title: n,
      shouldShowElement: O,
      cardVariantStyleInfo: v,
      titleClassName: i,
      subtitle: m,
      subtitleClassName: b
    }), null != f && (0, r.jsxs)("div", {
      className: o()(u.relative, {
        [u.cardImage]: !_
      }),
      children: [(0, r.jsx)("img", {
        src: f,
        alt: "",
        className: _ ? I ? u.carouselCardImageGrayscale : u.carouselCardImage : ""
      }), I ? (0, r.jsx)("div", {
        className: u.imageOverlayTextContainer,
        children: (0, r.jsx)(s.Text, {
          className: u.imageOverlayText,
          variant: "text-md/bold",
          children: y
        })
      }) : null]
    }), null != h && (0, r.jsxs)("div", {
      className: u.cardIllustrationNoHover,
      children: [h, 0 !== g.length && null != p && (0, r.jsx)(a.zx, {
        "data-migration-pending": true,
        className: d,
        fullWidth: true,
        onClick: p,
        children: (0, r.jsx)("div", {
          className: null == v || null == (t = v.descriptionCta) ? true : t.className,
          children: g
        })
      })]
    })]
  })
}