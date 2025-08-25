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
    onClick: i,
    active: o,
    trailing: a
  } = e;
  return (0, l.jsxs)(s.P3F, {
    className: r()(u.item, o && u.active),
    onClick: i,
    children: [(0, l.jsxs)("div", {
      className: u.itemContent,
      children: [(0, l.jsx)(t, {
        color: "currentColor",
        size: "refresh_sm"
      }), n]
    }), (0, l.jsx)("div", {
      className: u.itemContent,
      children: a
    })]
  })
}