/** Chunk was on 20501 **/
/** chunk id: 743612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk915237 = require("./915237.js");
let o = e => {
  var t, n, r, o;
  let {
    title: c,
    shouldShowElement: d,
    cardVariantStyleInfo: u,
    description: m,
    titleClassName: p = "",
    subtitle: g = "",
    subtitleClassName: h
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.X6q, {
      variant: "heading-xl/extrabold",
      className: s()(l.cardHeading, p),
      children: c
    }), "" !== g && (null == d || d(null == u ? true : u.subtitle)) && (0, i.jsxs)("div", {
      className: h,
      children: [(0, i.jsx)(a.Text, {
        variant: null != (r = null == u || null == (t = u.subtitle) ? true : t.textVariant) ? r : "text-sm/normal",
        children: g
      }), null != m && (0, i.jsx)(a.Text, {
        variant: null != (o = null == u || null == (n = u.description) ? true : n.textVariant) ? o : "text-sm/normal",
        children: (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("br", {}), m]
        })
      })]
    })]
  })
}