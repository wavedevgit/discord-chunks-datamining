/** Chunk was on 1272 **/
/** chunk id: 184107, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = {};
class o extends(i = Chunk442837.ZP.Store) {
  getSkuIdForChannel(e) {
    return s[e]
  }
}(r = "displayName") in o ? Object.defineProperty(o, r, {
  value: "ChannelSKUStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[r] = "ChannelSKUStore";
let c = new o(Chunk570140.Z, {
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