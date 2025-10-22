/** Chunk was on 89675 **/
/** chunk id: 263954, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk56589 = require("./56589.js");

function a(e) {
  let {
    icon: r,
    iconClassName: t,
    description: o,
    color: a
  } = e;
  return (0, n.jsxs)("div", {
    className: i.perkRow,
    children: [(0, n.jsx)("div", {
      className: i.perkIconContainer,
      children: (0, n.jsx)(r, {
        color: null != a ? a : "currentColor",
        className: s()(i.perkIcon, t)
      })
    }), (0, n.jsx)("div", {
      className: i.perkDescription,
      children: o
    })]
  })
}