/** Chunk was on 47129 **/
/** chunk id: 670304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk770102 = require("./770102.jsx"),
  Chunk36361 = require("./36361.jsx"),
  Chunk770877 = require("./770877.js");
let a = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e;
  return null != t.render ? (0, i.jsx)(t.render, {}) : (0, i.jsx)("div", {
    className: s.pane,
    children: t.layout.map((e, n) => (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(o.Z, {
        node: e
      }), n !== t.layout.length - 1 && (0, i.jsx)(l.$, {
        className: s.divider
      })]
    }, e.key))
  })
})