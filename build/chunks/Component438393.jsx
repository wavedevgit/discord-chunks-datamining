/** Chunk was on web.js **/
/** chunk id: 438393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => l
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk330711 = require("./330711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk994768 = require("./994768.js");
let s = 96;

function l(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: l,
    title: c,
    tag: u,
    FallbackIcon: d
  } = e, f = null != l ? {
    "--custom-background-url": "url(".concat(l.toString(), ")")
  } : true, p = null != n && "" !== n;
  return (0, r.jsxs)("div", {
    className: a.container,
    children: [(0, r.jsxs)("div", {
      className: a.header,
      children: [(0, r.jsx)("div", {
        className: a.headerBackground,
        style: f
      }), (0, r.jsx)("div", {
        className: a.headerImage,
        children: null != l ? (0, r.jsx)("img", {
          src: l.toString(),
          alt: ""
        }) : (0, r.jsx)(d, {
          size: "custom",
          color: "var(--text-muted)",
          height: s,
          width: s
        })
      })]
    }), (0, r.jsxs)("div", {
      className: a.content,
      children: [(0, r.jsxs)("div", {
        className: a.details,
        children: [null != u && (0, r.jsx)("div", {
          children: u
        }), (0, r.jsx)(o.X6q, {
          color: "text-strong",
          variant: "heading-xl/semibold",
          children: c
        }), p && (0, r.jsx)(o.xvT, {
          color: "text-default",
          variant: "text-md/normal",
          className: a.description,
          children: n
        })]
      }), null != t && (0, r.jsxs)("div", {
        className: a.benefits,
        children: [(0, r.jsx)(o.xvT, {
          color: "text-default",
          variant: "eyebrow",
          children: i.Z.Messages.STOREFRONT_BENEFITS_TITLE
        }), t]
      })]
    })]
  })
}