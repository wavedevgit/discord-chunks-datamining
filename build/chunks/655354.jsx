/** Chunk was on 34779 **/
/** chunk id: 655354, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk144058 = require("./144058.js");

function u(e) {
  let {
    className: t,
    onJump: n
  } = e, [l, u] = i.useState(false);
  return <s.P3F className={o()(c.jumpButton, t)} onClick={e => {
      u(true), n(e)
    }}>{l ? (0, r.jsx)(s.$jN, {
      type: s.$jN.Type.PULSING_ELLIPSIS
    }) : (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      className: c.text,
      children: a.intl.string(a.t.k5WiPT)
    })}</s.P3F>
}