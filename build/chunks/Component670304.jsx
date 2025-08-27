/** Chunk was on 76210 **/
/** chunk id: 670304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk770102 = require("./770102.jsx"),
  Chunk36361 = require("./36361.jsx"),
  Chunk770877 = require("./770877.js");
let o = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e;
  return null != t.render ? (0, i.jsx)(t.render, {}) : (0, i.jsx)("div", {
    className: a.pane,
    children: t.layout.map((e, n) => (0, i.jsxs)(l.Fragment, {
      children: [(0, i.jsx)(s.Z, {
        node: e
      }), n !== t.layout.length - 1 && (0, i.jsx)(r.$, {
        className: a.divider
      })]
    }, e.key))
  })
})