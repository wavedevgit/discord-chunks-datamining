/** Chunk was on 99014 **/
/** chunk id: 17622, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk119331 = require("./119331.js"),
  Chunk336227 = require("./336227.js"),
  Chunk467541 = require("./467541.js");

function d(e) {
  let {
    powerup: t
  } = e, o = (0, i.Z)(t);
  return (0, n.jsx)("div", {
    className: l.levelContainer,
    children: o.map(e => {
      let {
        Icon: t,
        className: o
      } = (0, s.t)(e.perkIcon, false);
      return (0, n.jsxs)("div", {
        className: l.perkContainer,
        children: [(0, n.jsx)(t, {
          color: "currentColor",
          className: a()(l.perkIcon, o)
        }), (0, n.jsx)(c.xvT, {
          className: l.perkText,
          color: "text-default",
          variant: "text-sm/medium",
          children: e.description
        })]
      }, "perk-".concat(e.perkIcon))
    })
  })
}