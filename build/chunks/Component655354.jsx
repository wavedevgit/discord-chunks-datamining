/** Chunk was on 38388 **/
/** chunk id: 655354, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk59777 = require("./59777.js");

function u(e) {
  let {
    className: t,
    onJump: n
  } = e, [l, u] = i.useState(false);
  return (0, r.jsx)(a.P3F, {
    className: o()(c.jumpButton, t),
    onClick: e => {
      u(true), n(e)
    },
    children: l ? (0, r.jsx)(a.$jN, {
      type: a.$jN.Type.PULSING_ELLIPSIS
    }) : (0, r.jsx)(a.Text, {
      variant: "text-xs/medium",
      className: c.text,
      children: s.intl.string(s.t.k5WiPf)
    })
  })
}