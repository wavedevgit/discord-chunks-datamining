/** Chunk was on 5606 **/
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
    titleClassName: p,
    buttonClassName: _,
    perkImage: m,
    isCarousel: g,
    onCtaClick: f,
    perkComponent: b,
    subtitle: h = "",
    descriptionCta: A = "",
    customContent: E,
    cardVariant: x,
    subtitleClassName: O,
    imageOverlayText: C
  } = e, y = (0, o.Q)(x), j = null != C;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: l()(d.Iv, d.Gz)
    }), (0, r.jsx)(c.A, {
      title: u,
      shouldShowElement: e => (null == e ? true : e.onlyShowOnHover) !== true,
      cardVariantStyleInfo: y,
      titleClassName: p,
      subtitle: h,
      subtitleClassName: O
    }), null != m && (0, r.jsxs)("div", {
      className: l()(d.V8, {
        [d.wP]: !g,
        [d.QN]: !g && !(null == y || null == (t = y.perkImage) ? true : t.disableHoverAnimation)
      }, null == y || null == (n = y.perkImage) ? true : n.className),
      children: [(0, r.jsx)("img", {
        src: m,
        alt: "",
        className: g ? j ? d.ls : d.gu : ""
      }), j ? (0, r.jsx)("div", {
        className: d.Yh,
        children: (0, r.jsx)(a.Text, {
          className: d.nj,
          variant: "text-md/bold",
          children: C
        })
      }) : null]
    }), null != b && (0, r.jsxs)("div", {
      className: d.wX,
      children: [b, 0 !== A.length && null != f && (0, r.jsx)(s.$n, {
        "data-migration-pending": true,
        className: _,
        fullWidth: true,
        onClick: f,
        children: (0, r.jsx)("div", {
          className: null == y || null == (i = y.descriptionCta) ? true : i.className,
          children: A
        })
      })]
    }), E]
  })
}