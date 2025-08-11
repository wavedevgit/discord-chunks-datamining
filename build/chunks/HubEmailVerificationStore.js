/** Chunk was on 27978 **/
/** chunk id: 844800, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = false,
  c = null,
  u = null;
class d extends(l = Chunk442837.ZP.Store) {
  getState() {
    return {
      verifySuccess: a,
      verifyErrors: c,
      redirectGuildId: u
    }
  }
}
i = "HubEmailVerificationStore", (r = "displayName") in d ? Object.defineProperty(d, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = i;
let h = new d(Chunk570140.Z, {
  HUB_VERIFY_EMAIL_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    a = true, c = null, u = t
  },
  HUB_VERIFY_EMAIL_FAILURE: function(e) {
    let {
      errors: t
    } = e;
    a = false, c = t
  }
})