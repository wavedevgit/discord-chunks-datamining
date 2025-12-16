/** Chunk was on 1272 **/
/** chunk id: 184107, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = {};
class s extends(i = Chunk442837.ZP.Store) {
  getSkuIdForChannel(e) {
    return o[e]
  }
}(r = "displayName") in s ? Object.defineProperty(s, r, {
  value: "ChannelSKUStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[r] = "ChannelSKUStore";
let c = new s(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    o = {}
  },
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      storeListing: n
    } = e;
    null != t && (o[t] = n.sku.id)
  }
})