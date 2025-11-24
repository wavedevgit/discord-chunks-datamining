/** Chunk was on 46984 **/
/** chunk id: 670304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk111161 = require("./111161.jsx"),
  Chunk770877 = require("./770877.js");
let s = Chunk473749.memo(function(e) {
  let {
    node: t
  } = e;
  return null != t.render ? (0, r.jsx)(t.render, {}) : (0, r.jsx)("div", {
    className: a.pane,
    children: t.layout.map((e, n) => (0, r.jsxs)(l.Fragment, {
      children: [(0, r.jsx)(i.Z, {
        node: e
      }), n !== t.layout.length - 1 && (0, r.jsx)(o.Z, {
        className: a.divider
      })]
    }, e.key))
  })
})