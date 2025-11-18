/** Chunk was on 32923 **/
/** chunk id: 733629, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk298392 = require("./298392.js");

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