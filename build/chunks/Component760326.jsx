/** Chunk was on 1272 **/
/** chunk id: 760326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk561716 = require("./561716.js"),
  Chunk51596 = require("./51596.js"),
  Chunk82950 = require("./82950.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk830352 = require("./830352.js"),
  Chunk932478 = require("./932478.js");
let f = e => {
  let t = (0, r.jsx)(i.M2$, {
    shortcut: l.$.binds["0"],
    keyClassName: d.key
  });
  return (0, r.jsx)(s.Z, {
    guild: e.guild,
    onDismissed: () => e.markAsDismissed(c.L.UNKNOWN),
    onClick: () => (0, a.$Z)("CHANNEL_NOTICE"),
    message: u.intl.string(u.t.Qhk8cs),
    cta: t,
    trackingSource: o.PsQ.QUICK_SWITCHER_NOTICE,
    type: o.vID.QUICKSWITCHER,
    image: p,
    imageMarginX: 50
  })
}