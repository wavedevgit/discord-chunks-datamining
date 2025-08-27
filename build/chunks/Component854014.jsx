/** Chunk was on 76210 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk873395 = require("./873395.js");

function o(e) {
  let {
    icon: t,
    title: n,
    onClick: l,
    active: o,
    trailing: u
  } = e;
  return (0, i.jsxs)(s.P3F, {
    className: r()(a.item, o && a.active),
    onClick: l,
    children: [(0, i.jsxs)("div", {
      className: a.itemContent,
      children: [(0, i.jsx)(t, {
        color: "currentColor",
        size: "refresh_sm"
      }), n]
    }), (0, i.jsx)("div", {
      className: a.itemContent,
      children: u
    })]
  })
}