/** Chunk was on web.js **/
/** chunk id: 784356, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk543233 = require("./543233.js"),
  Chunk76707 = require("./76707.jsx"),
  Chunk296388 = require("./296388.js");
let d = e => {
  var t, n, i;
  let {
    title: d,
    titleClassName: f,
    buttonClassName: p,
    perkImage: _,
    isCarousel: h,
    onCtaClick: m,
    perkComponent: g,
    subtitle: E = "",
    descriptionCta: b = "",
    customContent: y,
    cardVariant: O,
    subtitleClassName: A,
    imageOverlayText: v
  } = e, S = e => (null == e ? true : e.onlyShowOnHover) !== true, I = (0, l.Q)(O), T = null != v;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: a()(u.Iv, u.Gz)
    }), (0, r.jsx)(c.A, {
      title: d,
      shouldShowElement: S,
      cardVariantStyleInfo: I,
      titleClassName: f,
      subtitle: E,
      subtitleClassName: A
    }), null != _ && (0, r.jsxs)("div", {
      className: a()(u.V8, {
        [u.wP]: !h,
        [u.QN]: !h && !(null == I || null == (t = I.perkImage) ? true : t.disableHoverAnimation)
      }, null == I || null == (n = I.perkImage) ? true : n.className),
      children: [(0, r.jsx)("img", {
        src: _,
        alt: "",
        className: h ? T ? u.ls : u.gu : ""
      }), T ? (0, r.jsx)("div", {
        className: u.Yh,
        children: (0, r.jsx)(o.Text, {
          className: u.nj,
          variant: "text-md/bold",
          children: v
        })
      }) : null]
    }), null != g && (0, r.jsxs)("div", {
      className: u.wX,
      children: [g, 0 !== b.length && null != m && (0, r.jsx)(s.$n, {
        "data-migration-pending": true,
        className: p,
        fullWidth: true,
        onClick: m,
        children: (0, r.jsx)("div", {
          className: null == I || null == (i = I.descriptionCta) ? true : i.className,
          children: b
        })
      })]
    }), y]
  })
}