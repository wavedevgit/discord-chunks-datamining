/** Chunk was on 89675 **/
/** chunk id: 263954, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk11777 = require("./11777.js");

function i(e) {
  let {
    icon: r,
    iconClassName: t,
    description: o,
    color: i
  } = e;
  return (0, n.jsxs)("div", {
    className: s.perkRow,
    children: [(0, n.jsx)("div", {
      className: s.perkIconContainer,
      children: (0, n.jsx)(r, {
        color: null != i ? i : "currentColor",
        className: a()(s.perkIcon, t)
      })
    }), (0, n.jsx)("div", {
      className: s.perkDescription,
      children: o
    })]
  })
}