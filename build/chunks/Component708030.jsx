/** Chunk was on web.js **/
/** chunk id: 708030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk432334 = require("./432334.jsx"),
  Chunk680020 = require("./680020.js");
let l = function(e) {
  let {
    className: t,
    hasCooldown: i,
    isCanceled: l,
    useReducedMotion: c
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(o.sn, t),
    children: [l ? (0, r.jsx)("img", {
      className: a()(o.$J, o.qX),
      src: n(208294),
      alt: ""
    }) : (0, r.jsx)(s.A, {
      className: o.$J,
      boostInCooldown: i,
      useReducedMotion: c
    }), !l && i && (0, r.jsx)("img", {
      className: o.De,
      src: n(595454),
      alt: ""
    })]
  })
}