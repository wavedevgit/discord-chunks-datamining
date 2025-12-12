/** Chunk was on web.js **/
/** chunk id: 142990, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk865427 = require("./865427.js"),
  Chunk853425 = require("./853425.jsx"),
  Chunk830121 = require("./830121.js"),
  Chunk922699 = require("./922699.js"),
  Chunk887580 = require("./887580.jsx"),
  Chunk811364 = require("./811364.js");
let d = Chunk473749.lazy(() => require.e("61061").then(require.bind(require, 982661)).then(e => ({
    default: e.PlaygroundEmbed
  }))),
  f = RegExp("^" + Chunk830121.oO.source, Chunk830121.oO.flags);

function p(e) {
  return {
    match: (e, t) => t.allowLinks && t.allowDevLinks ? f.exec(e) : null,
    parse: (e, t) => ({
      target: e,
      type: "devLink"
    }),
    react: (e, t, n) => {
      let s = e.target[0];
      return (0, o.mG)(s) ? (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)("span", {
          children: s
        }), (0, r.jsx)(a.Z, {
          url: s
        }, s)]
      }, n.key) : (0, l.$2)(s) ? (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)("span", {
          children: s
        }), (0, r.jsx)(c.v, {
          url: s
        })]
      }, n.key) : (0, u.Y)(s) ? (0, r.jsx)(i.Fragment, {
        children: (0, r.jsxs)(i.Suspense, {
          fallback: null,
          children: [(0, r.jsx)("span", {
            children: s
          }), (0, r.jsx)(d, {
            url: s
          })]
        })
      }, n.key) : (0, r.jsx)("span", {
        children: s
      }, n.key)
    },
    order: 6
  }
}