/** Chunk was on 99014 **/
/** chunk id: 17622, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk119331 = require("./119331.js"),
  Chunk336227 = require("./336227.js"),
  Chunk372285 = require("./372285.js");

function u(e) {
  let {
    powerup: t
  } = e, n = (0, c.Z)(t);
  return (0, r.jsx)("div", {
    className: l.levelContainer,
    children: n.map(e => {
      let {
        Icon: t,
        className: n
      } = (0, s.t)(e.perkIcon, false);
      return (0, r.jsxs)("div", {
        className: l.perkContainer,
        children: [(0, r.jsx)(t, {
          color: "currentColor",
          className: i()(l.perkIcon, n)
        }), (0, r.jsx)(a.xv, {
          className: l.perkText,
          color: "text-default",
          variant: "text-sm/medium",
          children: e.description
        })]
      }, "perk-".concat(e.perkIcon))
    })
  })
}