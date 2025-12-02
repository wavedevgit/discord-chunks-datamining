/** Chunk was on web.js **/
/** chunk id: 670304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk111161 = require("./111161.jsx"),
  Chunk770877 = require("./770877.js");

function l(e) {
  let {
    node: t
  } = e;
  return null != t.render ? (0, r.jsx)(t.render, {}) : (0, r.jsx)("div", {
    className: s.pane,
    children: t.layout.map((e, n) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(a.Z, {
        node: e
      }), n !== t.layout.length - 1 && (0, r.jsx)(o.Z, {
        className: s.divider
      })]
    }, e.key))
  })
}
let c = Chunk473749.memo(l)