/** Chunk was on web.js **/
/** chunk id: 484239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk176782 = require("./176782.js"),
  Chunk743612 = require("./743612.jsx"),
  Chunk290643 = require("./290643.js");
let d = e => {
  var t, n, i;
  let {
    title: d,
    titleClassName: f,
    buttonClassName: p,
    perkImage: _,
    isCarousel: m,
    onCtaClick: h,
    perkComponent: g,
    subtitle: E = "",
    descriptionCta: b = "",
    customContent: y,
    cardVariant: O,
    subtitleClassName: v,
    imageOverlayText: S
  } = e, I = e => (null == e ? true : e.onlyShowOnHover) !== true, T = (0, l._)(O), C = null != S;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: a()(u.cover, u.below)
    }), (0, r.jsx)(c.Z, {
      title: d,
      shouldShowElement: I,
      cardVariantStyleInfo: T,
      titleClassName: f,
      subtitle: E,
      subtitleClassName: v
    }), null != _ && (0, r.jsxs)("div", {
      className: a()(u.relative, {
        [u.cardImage]: !m,
        [u.hoverCardImage]: !m && !(null == T || null == (t = T.perkImage) ? true : t.disableHoverAnimation)
      }, null == T || null == (n = T.perkImage) ? true : n.className),
      children: [(0, r.jsx)("img", {
        src: _,
        alt: "",
        className: m ? C ? u.carouselCardImageGrayscale : u.carouselCardImage : ""
      }), C ? (0, r.jsx)("div", {
        className: u.imageOverlayTextContainer,
        children: (0, r.jsx)(s.Text, {
          className: u.imageOverlayText,
          variant: "text-md/bold",
          children: S
        })
      }) : null]
    }), null != g && (0, r.jsxs)("div", {
      className: u.cardIllustrationNoHover,
      children: [g, 0 !== b.length && null != h && (0, r.jsx)(o.zx, {
        "data-migration-pending": true,
        className: p,
        fullWidth: true,
        onClick: h,
        children: (0, r.jsx)("div", {
          className: null == T || null == (i = T.descriptionCta) ? true : i.className,
          children: b
        })
      })]
    }), y]
  })
}