/** Chunk was on 1272 **/
/** chunk id: 184107, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = {};
class c extends(l = Chunk442837.ZP.Store) {
  getSkuIdForChannel(e) {
    return s[e]
  }
}
i = "ChannelSKUStore", (r = "displayName") in c ? Object.defineProperty(c, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : c[r] = i;
let u = new c(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    s = {}
  },
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      storeListing: n
    } = e;
    null != t && (s[t] = n.sku.id)
  }
})