/** Chunk was on 82124 **/
/** chunk id: 686866, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk10765 = require("./10765.js"),
  Chunk973772 = require("./973772.js"),
  Chunk535396 = require("./535396.js");

function a(e, t) {
  let n = (0, i.ZP)(e, t),
    a = n.type !== l.A3.INACTIVE,
    o = n.type === l.A3.TIER_OVERRIDE_ACTIVATED,
    s = (0, r.Z)(e, t, "GuildPowerupCardFooterAdmin"),
    c = l.ye;
  return {
    showToggleButton: (a || !s) && !o,
    showConfigureButton: a && c.has(t.skuId),
    isPowerupActive: a
  }
}