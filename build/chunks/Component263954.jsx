/** Chunk was on 89675 **/
/** chunk id: 263954, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk189651 = require("./189651.js");

function i(e) {
  let {
    icon: r,
    iconClassName: t,
    description: o,
    color: i
  } = e;
  return (0, n.jsxs)("div", {
    className: c.perkRow,
    children: [(0, n.jsx)("div", {
      className: c.perkIconContainer,
      children: (0, n.jsx)(r, {
        color: null != i ? i : "currentColor",
        className: s()(c.perkIcon, t)
      })
    }), (0, n.jsx)("div", {
      className: c.perkDescription,
      children: o
    })]
  })
}