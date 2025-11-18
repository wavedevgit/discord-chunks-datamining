/** Chunk was on 88657 **/
/** chunk id: 670304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk849999 = require("./849999.js");
let c = Chunk473749.memo(function(e) {
  let {
    node: t
  } = e;
  return null != t.render ? (0, r.jsx)(t.render, {}) : (0, r.jsx)("div", {
    className: a.pane,
    children: t.layout.map((e, n) => (0, r.jsxs)(l.Fragment, {
      children: [(0, r.jsx)(o.Z, {
        node: e
      }), n !== t.layout.length - 1 && (0, r.jsx)(i.izJ, {
        className: a.divider
      })]
    }, e.key))
  })
})