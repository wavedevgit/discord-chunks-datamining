/** Chunk was on web.js **/
/** chunk id: 579832, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk537363 = require("./537363.js"),
  Chunk606097 = require("./606097.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk887819 = require("./887819.js"),
  Chunk617842 = require("./617842.js");
let p = () => {
    let e = () => {};
    return (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "expressive",
      size: "md",
      text: Chunk388032.intl.string(Chunk606097.default.rjuKse),
      icon: Chunk793030.SrA,
      onClick: module
    })
  },
  _ = () => {
    let e = () => {};
    return (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "expressive",
      size: "md",
      text: Chunk388032.intl.string(Chunk606097.default["eYHh+z"]),
      onClick: module
    })
  },
  m = e => {
    let {
      message: t,
      channel: n,
      compact: c
    } = e, u = s.default.getCurrentUser();
    if (null == u) return null;
    let m = t.author,
      h = u.id === m.id,
      g = h ? (0, l.c)(m, n) : (0, l.l)(m, false);
    if (null == g) return null;
    let {
      message: E,
      header: b,
      body: y
    } = g;
    return (0, r.jsxs)(o.Z, {
      className: d.systemMessageContainer,
      compact: c,
      iconNode: (0, r.jsx)(i.SrA, {
        size: "md",
        color: "currentColor"
      }),
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: E
      }), (0, r.jsxs)(a.Kqy, {
        direction: "horizontal",
        className: d.embedContainer,
        children: [(0, r.jsx)("img", {
          src: f,
          alt: "",
          className: d.image
        }), (0, r.jsxs)("div", {
          className: d.content,
          children: [(0, r.jsx)(a.Cts, {
            type: "beta",
            variant: "expressive"
          }), (0, r.jsx)("h2", {
            className: d.title,
            children: b
          }), (0, r.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: y
          }), (0, r.jsx)("div", {
            className: d.buttonContainer,
            children: h ? (0, r.jsx)(_, {}) : (0, r.jsx)(p, {})
          })]
        })]
      })]
    })
  }