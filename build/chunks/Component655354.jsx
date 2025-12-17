/** Chunk was on 67000 **/
/** chunk id: 655354, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk878590 = require("./878590.js");

function u(e) {
  let {
    className: t,
    onJump: n
  } = e, [l, u] = i.useState(false);
  return (0, r.jsx)(o.P3F, {
    className: a()(c.jumpButton, t),
    onClick: e => {
      u(true), n(e)
    },
    children: l ? (0, r.jsx)(o.$jN, {
      type: o.$jN.Type.PULSING_ELLIPSIS
    }) : (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: c.text,
      children: s.intl.string(s.t.k5WiPf)
    })
  })
}