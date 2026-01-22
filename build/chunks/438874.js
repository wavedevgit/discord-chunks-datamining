/** Chunk was on 97492 **/
/** chunk id: 438874, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk294384 = require("./294384.js"),
  Chunk998418 = require("./998418.js"),
  Chunk568065 = require("./568065.js");

function a(e, t) {
  let n = (0, l.Ay)(e, t),
    a = n.type !== i.b_.INACTIVE,
    s = n.type === i.b_.TIER_OVERRIDE_ACTIVATED,
    o = (0, r.A)(e, t, "GuildPowerupCardFooterAdmin"),
    c = i.HO;
  return {
    showToggleButton: (a || !o) && !s,
    showConfigureButton: a && c.has(t.skuId),
    isPowerupActive: a
  }
}