/** Chunk was on 78376 **/
/** chunk id: 784356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk543233 = require("./543233.js"),
  Chunk76707 = require("./76707.jsx"),
  Chunk296388 = require("./296388.js");
let u = e => {
  var t, n, i;
  let {
    title: u,
    titleClassName: _,
    buttonClassName: p,
    perkImage: m,
    isCarousel: g,
    onCtaClick: A,
    perkComponent: f,
    subtitle: b,
    descriptionCta: h,
    customContent: E,
    cardVariant: O,
    subtitleClassName: C,
    imageOverlayText: x
  } = e, S = (0, o.Q)(O), T = null != x;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: l()(d.Iv, d.Gz)
    }), (0, r.jsx)(c.A, {
      title: u,
      cardVariantStyleInfo: S,
      titleClassName: _,
      subtitle: b,
      subtitleClassName: C,
      isOverlay: false
    }), null != m && (0, r.jsxs)("div", {
      className: l()(d.V8, {
        [d.wP]: !g,
        [d.QN]: !g && !(null == S || null == (t = S.perkImage) ? true : t.disableHoverAnimation)
      }, null == S || null == (n = S.perkImage) ? true : n.className),
      children: [(0, r.jsx)("img", {
        src: m,
        alt: "",
        className: g ? T ? d.ls : d.gu : ""
      }), T ? (0, r.jsx)("div", {
        className: d.Yh,
        children: (0, r.jsx)(a.Text, {
          className: d.nj,
          variant: "text-md/bold",
          children: x
        })
      }) : null]
    }), null != f && (0, r.jsxs)("div", {
      className: d.wX,
      children: [f, null != h && null != A && (0, r.jsx)(s.$n, {
        "data-migration-pending": true,
        className: p,
        fullWidth: true,
        onClick: A,
        children: (0, r.jsx)("div", {
          className: null == S || null == (i = S.descriptionCta) ? true : i.className,
          children: h
        })
      })]
    }), E]
  })
}