/** Chunk was on 21738 **/
/** chunk id: 314457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk621248 = require("./621248.js"),
  Chunk64983 = require("./64983.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk628287 = require("./628287.js");
let d = e => {
  let {
    guild: t
  } = e, n = i.useCallback(() => {
    (0, l.J)(t.id)
  }, [t.id]);
  return (0, r.jsx)(a.A, {
    guild: t,
    onDismissed: n,
    onClick: () => s.A.open(t.id, o.BEX.COMMUNITY),
    message: c.intl.string(c.t["2klD0Z"]),
    trackingSource: o.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
    type: o.n5X.PUBLIC_UPSELL,
    image: u,
    cta: c.intl.string(c.t.hvVgAZ)
  })
}