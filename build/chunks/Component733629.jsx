/** Chunk was on 384 **/
/** chunk id: 733629, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk824804 = require("./824804.js");

function a(e) {
  let {
    title: t,
    settings: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: l.header,
      children: t
    }), n.map(e => e.renderComponent())]
  })
}