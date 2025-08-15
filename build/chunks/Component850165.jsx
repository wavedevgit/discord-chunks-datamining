/** Chunk was on 59650 **/
/** chunk id: 850165, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk394968 = require("./394968.js");

function a(t) {
  let {
    heroImageSrc: e,
    heroImageAlt: n,
    children: a,
    header: o,
    description: c
  } = t;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: e,
      alt: n,
      className: s.heroImage
    }), (0, r.jsxs)(i.hzk, {
      "data-migration-pending": true,
      className: s.body,
      children: [(0, r.jsxs)("div", {
        className: s.textContainer,
        children: [(0, r.jsx)(i.X6q, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: o
        }), null != c && (0, r.jsx)(i.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: s.description,
          children: c
        })]
      }), a]
    })]
  })
}