/** Chunk was on 47129 **/
/** chunk id: 670304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk770102 = require("./770102.jsx"),
  Chunk36361 = require("./36361.jsx"),
  Chunk849999 = require("./849999.js");
let s = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e;
  return null != t.render ? (0, r.jsx)(t.render, {}) : (0, r.jsx)("div", {
    className: a.pane,
    children: t.layout.map((e, n) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(o.Z, {
        node: e
      }), n !== t.layout.length - 1 && (0, r.jsx)(l.$, {
        className: a.divider
      })]
    }, e.key))
  })
})