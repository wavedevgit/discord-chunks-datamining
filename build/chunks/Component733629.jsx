/** Chunk was on 5533 **/
/** chunk id: 733629, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk889400 = require("./889400.js");

function a(e) {
  let {
    title: t,
    settings: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(i.X6q, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: l.header,
      children: t
    }), n.map(e => e.renderComponent())]
  })
}