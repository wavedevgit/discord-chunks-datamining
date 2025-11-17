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
  Chunk505754 = require("./505754.js");
let d = e => {
  var t, n, i;
  let {
    title: d,
    titleClassName: f,
    buttonClassName: _,
    perkImage: p,
    isCarousel: h,
    onCtaClick: m,
    perkComponent: g,
    subtitle: E = "",
    descriptionCta: b = "",
    customContent: y,
    cardVariant: O,
    subtitleClassName: v,
    imageOverlayText: I
  } = e, T = e => (null == e ? true : e.onlyShowOnHover) !== true, S = (0, l._)(O), A = null != I;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: a()(u.cover, u.below)
    }), (0, r.jsx)(c.Z, {
      title: d,
      shouldShowElement: T,
      cardVariantStyleInfo: S,
      titleClassName: f,
      subtitle: E,
      subtitleClassName: v
    }), null != p && (0, r.jsxs)("div", {
      className: a()(u.relative, {
        [u.cardImage]: !h,
        [u.hoverCardImage]: !h && !(null == S || null == (t = S.perkImage) ? true : t.disableHoverAnimation)
      }, null == S || null == (n = S.perkImage) ? true : n.className),
      children: [(0, r.jsx)("img", {
        src: p,
        alt: "",
        className: h ? A ? u.carouselCardImageGrayscale : u.carouselCardImage : ""
      }), A ? (0, r.jsx)("div", {
        className: u.imageOverlayTextContainer,
        children: (0, r.jsx)(s.Text, {
          className: u.imageOverlayText,
          variant: "text-md/bold",
          children: I
        })
      }) : null]
    }), null != g && (0, r.jsxs)("div", {
      className: u.cardIllustrationNoHover,
      children: [g, 0 !== b.length && null != m && (0, r.jsx)(o.zx, {
        "data-migration-pending": true,
        className: _,
        fullWidth: true,
        onClick: m,
        children: (0, r.jsx)("div", {
          className: null == S || null == (i = S.descriptionCta) ? true : i.className,
          children: b
        })
      })]
    }), y]
  })
}