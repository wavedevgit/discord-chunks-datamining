/** Chunk was on web.js **/
/** chunk id: 512100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk409794 = require("./409794.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk330711 = require("./330711.js"),
  Chunk163315 = require("./163315.js");
let l = 96;

function c(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: c,
    title: u,
    tag: d,
    FallbackIcon: f
  } = e, _ = null != c ? {
    "--custom-background-url": "url(".concat(c.toString(), ")")
  } : true, p = null != n && "" !== n;
  return (0, r.jsxs)("div", {
    className: s.container,
    children: [(0, r.jsxs)("div", {
      className: s.header,
      children: [(0, r.jsx)("div", {
        className: s.headerBackground,
        style: _
      }), (0, r.jsx)("div", {
        className: s.headerImage,
        children: null != c ? (0, r.jsx)("img", {
          src: c.toString(),
          alt: ""
        }) : (0, r.jsx)(f, {
          size: "custom",
          color: "var(--text-muted)",
          height: l,
          width: l
        })
      })]
    }), (0, r.jsxs)("div", {
      className: s.content,
      children: [(0, r.jsxs)("div", {
        className: s.details,
        children: [null != d && (0, r.jsx)("div", {
          children: d
        }), (0, r.jsx)(i.X, {
          color: "header-primary",
          variant: "heading-xl/semibold",
          children: u
        }), p && (0, r.jsx)(o.x, {
          color: "text-default",
          variant: "text-md/normal",
          className: s.description,
          children: n
        })]
      }), null != t && (0, r.jsxs)("div", {
        className: s.benefits,
        children: [(0, r.jsx)(o.x, {
          color: "header-secondary",
          variant: "eyebrow",
          children: a.Z.Messages.STOREFRONT_BENEFITS_TITLE
        }), t]
      })]
    })]
  })
}