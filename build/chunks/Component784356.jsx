/** Chunk was on 60667 **/
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
    subtitle: h = "",
    descriptionCta: b = "",
    customContent: E,
    cardVariant: x,
    subtitleClassName: O,
    imageOverlayText: C
  } = e, T = (0, o.Q)(x), I = null != C;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: l()(d.Iv, d.Gz)
    }), (0, r.jsx)(c.A, {
      title: u,
      shouldShowElement: e => (null == e ? true : e.onlyShowOnHover) !== true,
      cardVariantStyleInfo: T,
      titleClassName: _,
      subtitle: h,
      subtitleClassName: O
    }), null != m && (0, r.jsxs)("div", {
      className: l()(d.V8, {
        [d.wP]: !g,
        [d.QN]: !g && !(null == T || null == (t = T.perkImage) ? true : t.disableHoverAnimation)
      }, null == T || null == (n = T.perkImage) ? true : n.className),
      children: [(0, r.jsx)("img", {
        src: m,
        alt: "",
        className: g ? I ? d.ls : d.gu : ""
      }), I ? (0, r.jsx)("div", {
        className: d.Yh,
        children: (0, r.jsx)(a.Text, {
          className: d.nj,
          variant: "text-md/bold",
          children: C
        })
      }) : null]
    }), null != f && (0, r.jsxs)("div", {
      className: d.wX,
      children: [f, 0 !== b.length && null != A && (0, r.jsx)(s.$n, {
        "data-migration-pending": true,
        className: p,
        fullWidth: true,
        onClick: A,
        children: (0, r.jsx)("div", {
          className: null == T || null == (i = T.descriptionCta) ? true : i.className,
          children: b
        })
      })]
    }), E]
  })
}