/** Chunk was on web.js **/
/** chunk id: 743612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk505754 = require("./505754.js");
let l = e => {
  var t, n, i, l;
  let {
    title: c,
    shouldShowElement: u,
    cardVariantStyleInfo: d,
    description: f,
    titleClassName: _ = "",
    subtitle: p = "",
    subtitleClassName: h
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Heading, {
      variant: "heading-xl/extrabold",
      className: a()(s.cardHeading, _),
      children: c
    }), "" !== p && (null == u || u(null == d ? true : d.subtitle)) && (0, r.jsxs)("div", {
      className: h,
      children: [(0, r.jsx)(o.Text, {
        variant: null != (i = null == d || null == (t = d.subtitle) ? true : t.textVariant) ? i : "text-sm/normal",
        children: p
      }), null != f && (0, r.jsx)(o.Text, {
        variant: null != (l = null == d || null == (n = d.description) ? true : n.textVariant) ? l : "text-sm/normal",
        children: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("br", {}), f]
        })
      })]
    })]
  })
}