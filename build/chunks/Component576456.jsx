/** Chunk was on 42402 **/
/** chunk id: 576456, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk647586 = require("./647586.js");

function u(e) {
  let {
    className: t,
    onJump: n
  } = e, [i, u] = l.useState(false);
  return (0, r.jsx)(a.DUT, {
    className: s()(c.n, t),
    onClick: e => {
      u(true), n(e)
    },
    children: i ? (0, r.jsx)(a.y$y, {
      type: a.y$y.Type.PULSING_ELLIPSIS
    }) : (0, r.jsx)(a.Text, {
      variant: "text-xs/medium",
      className: c.Q,
      children: o.intl.string(o.t.k5WiPf)
    })
  })
}