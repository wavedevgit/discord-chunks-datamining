/** Chunk was on web.js **/
/** chunk id: 484239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk176782 = require("./176782.js"),
  Chunk743612 = require("./743612.jsx"),
  Chunk759291 = require("./759291.js");
let d = e => {
  var t, n, i, d;
  let {
    title: f,
    titleClassName: _,
    buttonClassName: p,
    perkImage: h,
    isCarousel: m,
    onCtaClick: g,
    perkComponent: E,
    subtitle: b = "",
    descriptionCta: y = "",
    cta: O = "",
    cardVariant: v,
    subtitleClassName: I,
    imageOverlayText: T
  } = e, S = e => (null == e ? true : e.onlyShowOnHover) !== true, A = (0, l._)(v), C = null != T;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: a()(u.cover, u.below)
    }), (0, r.jsx)(c.Z, {
      title: f,
      shouldShowElement: S,
      cardVariantStyleInfo: A,
      titleClassName: _,
      subtitle: b,
      subtitleClassName: I
    }), null != h && (0, r.jsxs)("div", {
      className: a()(u.relative, {
        [u.cardImage]: !m,
        [u.hoverCardImage]: !m && !(null == A || null == (t = A.perkImage) ? true : t.disableHoverAnimation)
      }, null == A || null == (n = A.perkImage) ? true : n.className),
      children: [(0, r.jsx)("img", {
        src: h,
        alt: "",
        className: m ? C ? u.carouselCardImageGrayscale : u.carouselCardImage : ""
      }), C ? (0, r.jsx)("div", {
        className: u.imageOverlayTextContainer,
        children: (0, r.jsx)(s.Text, {
          className: u.imageOverlayText,
          variant: "text-md/bold",
          children: T
        })
      }) : null]
    }), null != E && (0, r.jsxs)("div", {
      className: u.cardIllustrationNoHover,
      children: [E, 0 !== y.length && null != g && (0, r.jsx)(o.zx, {
        "data-migration-pending": true,
        className: p,
        fullWidth: true,
        onClick: g,
        children: (0, r.jsx)("div", {
          className: null == A || null == (i = A.descriptionCta) ? true : i.className,
          children: y
        })
      })]
    }), "" !== O && null != g && (0, r.jsx)(o.zx, {
      "data-migration-pending": true,
      className: p,
      fullWidth: true,
      onClick: g,
      children: (0, r.jsx)("div", {
        className: null == A || null == (d = A.cta) ? true : d.className,
        children: O
      })
    })]
  })
}