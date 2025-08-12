/** Chunk was on 8725 **/
/** chunk id: 366598, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk878214 = require("./878214.js");

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
        className: o()(n.props.className, s.icon),
        height: 24,
        width: 24
      }), (0, i.jsx)(a.X6q, {
        variant: "heading-md/semibold",
        className: s.title,
        children: l
      })]
    }), t]
  })
}