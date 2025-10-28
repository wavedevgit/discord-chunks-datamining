/** Chunk was on web.js **/
/** chunk id: 142990, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk316686 = require("./316686.js"),
  Chunk865427 = require("./865427.js"),
  Chunk853425 = require("./853425.jsx"),
  Chunk830121 = require("./830121.js"),
  Chunk887580 = require("./887580.jsx");
let u = Chunk647438.lazy(() => Promise.all([require.e("33622"), require.e("75215"), require.e("66548"), require.e("950"), require.e("36182")]).then(require.bind(require, 600406)).then(e => ({
    default: e.PlaygroundEmbed
  }))),
  d = RegExp("^" + Chunk830121.oO.source, Chunk830121.oO.flags);

function f(e) {
  return {
    match: (e, t) => t.allowLinks && t.allowDevLinks ? d.exec(e) : null,
    parse: (e, t) => ({
      target: e,
      type: "devLink"
    }),
    react: (e, t, n) => {
      let l = e.target[0];
      return (0, o.mG)(l) ? (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)("span", {
          children: l
        }), (0, r.jsx)(s.Z, {
          url: l
        }, l)]
      }, n.key) : (0, c.$2)(l) ? (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)("span", {
          children: l
        }), (0, r.jsx)(c.vF, {
          url: l
        })]
      }, n.key) : (0, a.Y)(l) ? (0, r.jsx)(i.Fragment, {
        children: (0, r.jsxs)(i.Suspense, {
          fallback: null,
          children: [(0, r.jsx)("span", {
            children: l
          }), (0, r.jsx)(u, {
            url: l
          })]
        })
      }, n.key) : (0, r.jsx)("span", {
        children: l
      }, n.key)
    },
    order: 6
  }
}