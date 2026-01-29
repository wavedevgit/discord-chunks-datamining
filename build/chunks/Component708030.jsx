/** Chunk was on 2827 **/
/** chunk id: 708030, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk432334 = require("./432334.jsx"),
  Chunk680020 = require("./680020.js");
let o = function(e) {
  let {
    className: t,
    hasCooldown: i,
    isCanceled: o,
    useReducedMotion: c
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(a.sn, t),
    children: [o ? (0, r.jsx)("img", {
      className: l()(a.$J, a.qX),
      src: n(208294),
      alt: ""
    }) : (0, r.jsx)(s.A, {
      className: a.$J,
      boostInCooldown: i,
      useReducedMotion: c
    }), !o && i && (0, r.jsx)("img", {
      className: a.De,
      src: n(595454),
      alt: ""
    })]
  })
}