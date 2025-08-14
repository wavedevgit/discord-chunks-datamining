/** Chunk was on 36878 **/
/** chunk id: 670304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk770102 = require("./770102.jsx"),
  Chunk36361 = require("./36361.jsx"),
  Chunk770877 = require("./770877.js");
let a = Chunk73800.memo(function(e) {
  let {
    node: t
  } = e;
  return null != t.render ? (0, i.jsx)(t.render, {}) : (0, i.jsx)("div", {
    className: r.pane,
    children: t.layout.map((e, n) => (0, i.jsxs)(l.Fragment, {
      children: [(0, i.jsx)(o.Z, {
        node: e
      }), n !== t.layout.length - 1 && (0, i.jsx)(s.$, {
        className: r.divider
      })]
    }, e.key))
  })
})