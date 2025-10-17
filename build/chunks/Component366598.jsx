/** Chunk was on 86736 **/
/** chunk id: 366598, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk343357 = require("./343357.js");

function c(e) {
  let {
    children: t,
    icon: n,
    title: l
  } = e;
  return (0, i.jsxs)("header", {
    className: s.header,
    children: [(0, i.jsxs)("div", {
      className: s.name,
      children: [r.cloneElement(n, {
        className: a()(n.props.className, s.icon),
        height: 24,
        width: 24
      }), (0, i.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        className: s.title,
        children: l
      })]
    }), t]
  })
}