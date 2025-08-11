/** Chunk was on 99014 **/
/** chunk id: 870246, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => c,
  w: () => s
});
var r, Chunk73800 = require("./73800.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  s = ((r = {}).DETAIL = "Boost Perk Shop Details", r.DEACTIVATE = "Boost Perk Shop Disable", r);

function c(e, t, n) {
  o.useEffect(() => {
    i.default.track(a.rMx.OPEN_MODAL, {
      type: n,
      sku_id: t.skuId,
      guild_id: e
    })
  }, [n, e, t.skuId])
}