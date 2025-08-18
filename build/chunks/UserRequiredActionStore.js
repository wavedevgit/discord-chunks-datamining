/** Chunk was on 91173 **/
/** chunk id: 23434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = null;
class s extends(i = Chunk442837.ZP.Store) {
  hasAction() {
    return null != a
  }
  getAction() {
    return a
  }
}

function c(e) {
  a = e.requiredAction
}(r = "displayName") in s ? Object.defineProperty(s, r, {
  value: "UserRequiredActionStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[r] = "UserRequiredActionStore";
let u = new s(Chunk570140.Z, {
  CONNECTION_OPEN: c,
  USER_REQUIRED_ACTION_UPDATE: c
})