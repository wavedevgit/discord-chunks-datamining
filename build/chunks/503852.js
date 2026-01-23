/** Chunk was on 96914 **/
/** chunk id: 503852, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => i,
  q: () => c
});
var n, Chunk64700 = require("./64700.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  c = ((n = {}).DETAIL = "Boost Perk Shop Details", n.DEACTIVATE = "Boost Perk Shop Disable", n);

function i(e, t, r) {
  o.useEffect(() => {
    a.default.track(s.HAw.OPEN_MODAL, {
      type: r,
      sku_id: t.skuId,
      guild_id: e
    })
  }, [r, e, t.skuId])
}