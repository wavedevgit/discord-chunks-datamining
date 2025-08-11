/** Chunk was on web.js **/
/** chunk id: 512100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk409794 = require("./409794.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk541822 = require("./541822.jsx"),
  Chunk330711 = require("./330711.js"),
  Chunk845533 = require("./845533.js");
let c = 96;

function u(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: u,
    title: d,
    tag: f,
    FallbackIcon: _
  } = e, p = null != u ? {
    "--custom-background-url": "url(".concat(u.toString(), ")")
  } : true, h = null != n && "" !== n;
  return (0, r.jsx)("div", {
    className: l.container,
    children: (0, r.jsx)(a.Z, {
      className: l.scroller,
      children: (0, r.jsxs)("div", {
        className: l.scrollContent,
        children: [(0, r.jsxs)("div", {
          className: l.header,
          children: [(0, r.jsx)("div", {
            className: l.headerBackground,
            style: p
          }), (0, r.jsx)("div", {
            className: l.headerImage,
            children: null != u ? (0, r.jsx)("img", {
              src: u.toString(),
              alt: ""
            }) : (0, r.jsx)(_, {
              size: "custom",
              color: "var(--text-muted)",
              height: c,
              width: c
            })
          })]
        }), (0, r.jsxs)("div", {
          className: l.content,
          children: [(0, r.jsxs)("div", {
            className: l.details,
            children: [null != f && (0, r.jsx)("div", {
              children: f
            }), (0, r.jsx)(i.X, {
              color: "header-primary",
              variant: "heading-xl/semibold",
              children: d
            }), h && (0, r.jsx)(o.x, {
              color: "text-default",
              variant: "text-md/normal",
              className: l.description,
              children: n
            })]
          }), null != t && (0, r.jsxs)("div", {
            className: l.benefits,
            children: [(0, r.jsx)(o.x, {
              color: "header-secondary",
              variant: "eyebrow",
              children: s.Z.Messages.STOREFRONT_BENEFITS_TITLE
            }), t]
          })]
        })]
      })
    })
  })
}