/** Chunk was on 97492 **/
/** chunk id: 438874, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk294384 = require("./294384.js"),
  Chunk998418 = require("./998418.js"),
  Chunk568065 = require("./568065.js");

function s(e, t) {
  let n = (0, l.Ay)(e, t),
    s = n.type !== i.b_.INACTIVE,
    a = n.type === i.b_.TIER_OVERRIDE_ACTIVATED,
    o = (0, r.A)(e, t, "GuildPowerupCardFooterAdmin"),
    c = i.HO;
  return {
    showToggleButton: (s || !o) && !a,
    showConfigureButton: s && c.has(t.skuId),
    isPowerupActive: s
  }
}