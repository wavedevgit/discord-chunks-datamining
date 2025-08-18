/** Chunk was on 36878 **/
/** chunk id: 357660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => o
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk670304 = require("./670304.jsx"),
  Chunk764516 = require("./764516.js");

function o(e) {
  let {
    node: t
  } = e, n = t.render;
  if (null != n) return (0, i.jsx)(n, {});
  if (1 !== t.layout.length) throw Error("Panels with multiple panes must define a render prop to handle the multiple panes");
  return (0, i.jsx)("div", {
    className: r.panel,
    children: (0, i.jsx)(l.Z, {
      node: t.layout[0]
    })
  })
}