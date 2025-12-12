/** Chunk was on 64722 **/
/** chunk id: 686866, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk10765 = require("./10765.js"),
  Chunk973772 = require("./973772.js"),
  Chunk535396 = require("./535396.js");

function o(e, t) {
  let n = (0, i.ZP)(e, t).type !== l.A3.INACTIVE,
    o = (0, r.Z)(e, t, "GuildPowerupCardFooterAdmin");
  return {
    showToggleButton: n || !o,
    showConfigureButton: n && l.uc.has(t.skuId),
    isPowerupActive: n
  }
}