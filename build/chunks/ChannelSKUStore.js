/** Chunk was on 21738 **/
/** chunk id: 851466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let s = {};
class o extends(i = Chunk311907.Ay.Store) {
  getSkuIdForChannel(e) {
    return s[e]
  }
}(r = "displayName") in o ? Object.defineProperty(o, r, {
  value: "ChannelSKUStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[r] = "ChannelSKUStore";
let c = new o(Chunk73153.h, {
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