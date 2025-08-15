/** Chunk was on 86282 **/
/** chunk id: 512100, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  u: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk409794 = require("./409794.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk541822 = require("./541822.jsx"),
  Chunk330711 = require("./330711.js"),
  Chunk163315 = require("./163315.js");

function c(e) {
  let {
    benefits: n,
    description: l,
    imgSrc: c,
    title: d,
    tag: u,
    FallbackIcon: m
  } = e, x = null != c ? {
    "--custom-background-url": "url(".concat(c.toString(), ")")
  } : true;
  return (0, t.jsx)("div", {
    className: o.container,
    children: (0, t.jsx)(s.Z, {
      className: o.scroller,
      children: (0, t.jsxs)("div", {
        className: o.scrollContent,
        children: [(0, t.jsxs)("div", {
          className: o.header,
          children: [(0, t.jsx)("div", {
            className: o.headerBackground,
            style: x
          }), (0, t.jsx)("div", {
            className: o.headerImage,
            children: null != c ? (0, t.jsx)("img", {
              src: c.toString(),
              alt: ""
            }) : (0, t.jsx)(m, {
              size: "custom",
              color: "var(--text-muted)",
              height: 96,
              width: 96
            })
          })]
        }), (0, t.jsxs)("div", {
          className: o.content,
          children: [(0, t.jsxs)("div", {
            className: o.details,
            children: [null != u && (0, t.jsx)("div", {
              children: u
            }), (0, t.jsx)(r.X, {
              color: "header-primary",
              variant: "heading-xl/semibold",
              children: d
            }), null != l && "" !== l && (0, t.jsx)(i.x, {
              color: "text-default",
              variant: "text-md/normal",
              className: o.description,
              children: l
            })]
          }), null != n && (0, t.jsxs)("div", {
            className: o.benefits,
            children: [(0, t.jsx)(i.x, {
              color: "header-secondary",
              variant: "eyebrow",
              children: a.Z.Messages.STOREFRONT_BENEFITS_TITLE
            }), n]
          })]
        })]
      })
    })
  })
}