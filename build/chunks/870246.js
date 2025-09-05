/** Chunk was on 99982 **/
/** chunk id: 870246, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => i,
  w: () => l
});
var r, Chunk647438 = require("./647438.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  l = ((r = {}).DETAIL = "Boost Perk Shop Details", r.DEACTIVATE = "Boost Perk Shop Disable", r);

function i(e, t, n) {
  o.useEffect(() => {
    a.default.track(s.rMx.OPEN_MODAL, {
      type: n,
      sku_id: t.skuId,
      guild_id: e
    })
  }, [n, e, t.skuId])
}