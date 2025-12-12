/** Chunk was on 9414 **/
/** chunk id: 366598, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk663145 = require("./663145.js");

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