/** Chunk was on 99014 **/
/** chunk id: 870246, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  $: () => i,
  w: () => s
});
var n, Chunk473749 = require("./473749.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  s = ((n = {}).DETAIL = "Boost Perk Shop Details", n.DEACTIVATE = "Boost Perk Shop Disable", n);

function i(e, t, o) {
  r.useEffect(() => {
    a.default.track(c.rMx.OPEN_MODAL, {
      type: o,
      sku_id: t.skuId,
      guild_id: e
    })
  }, [o, e, t.skuId])
}