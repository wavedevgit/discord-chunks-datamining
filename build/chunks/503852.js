/** Chunk was on 96914 **/
/** chunk id: 503852, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => l,
  q: () => o
});
var a, Chunk64700 = require("./64700.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  o = ((a = {}).DETAIL = "Boost Perk Shop Details", a.DEACTIVATE = "Boost Perk Shop Disable", a);

function l(e, t, r) {
  n.useEffect(() => {
    s.default.track(c.HAw.OPEN_MODAL, {
      type: r,
      sku_id: t.skuId,
      guild_id: e
    })
  }, [r, e, t.skuId])
}