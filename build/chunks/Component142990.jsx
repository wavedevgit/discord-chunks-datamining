/** Chunk was on web.js **/
/** chunk id: 142990, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk600406 = require("./600406.jsx"),
  Chunk865427 = require("./865427.js"),
  Chunk853425 = require("./853425.jsx"),
  Chunk830121 = require("./830121.js"),
  Chunk887580 = require("./887580.jsx");
let u = RegExp("^" + Chunk830121.oO.source, Chunk830121.oO.flags);

function d(e) {
  return {
    match: (e, t) => t.allowLinks && t.allowDevLinks ? u.exec(e) : null,
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
      }, n.key) : (0, a.Y)(l) ? (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)("span", {
          children: l
        }), (0, r.jsx)(a.k, {
          url: l
        })]
      }, n.key) : (0, r.jsx)("span", {
        children: l
      }, n.key)
    },
    order: 6
  }
}