/** Chunk was on 1272 **/
/** chunk id: 413307, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk949389 = require("./949389.js"),
  Chunk82950 = require("./82950.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk438825 = require("./438825.js");
let d = e => {
  let {
    guild: t
  } = e, n = i.useCallback(() => {
    (0, l.K)(t.id)
  }, [t.id]);
  return (0, r.jsx)(a.Z, {
    guild: t,
    onDismissed: n,
    onClick: () => o.Z.open(t.id, s.pNK.COMMUNITY),
    message: c.intl.string(c.t["2klD0Z"]),
    trackingSource: s.PsQ.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
    type: s.vID.PUBLIC_UPSELL,
    image: u,
    cta: c.intl.string(c.t.hvVgAZ)
  })
}