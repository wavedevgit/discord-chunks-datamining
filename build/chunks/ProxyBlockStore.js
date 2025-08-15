/** Chunk was on 66866 **/
/** chunk id: 417626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = false;
class s extends(i = Chunk442837.ZP.Store) {
  get blockedByProxy() {
    return o
  }
}(r = "displayName") in s ? Object.defineProperty(s, r, {
  value: "ProxyBlockStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[r] = "ProxyBlockStore";
let c = new s(Chunk570140.Z, {
  PROXY_BLOCKED_REQUEST: function(e) {
    o = true
  }
})