/** Chunk was on 27978 **/
/** chunk id: 844800, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = false,
  o = null,
  c = null;
class u extends(i = Chunk442837.ZP.Store) {
  getState() {
    return {
      verifySuccess: a,
      verifyErrors: o,
      redirectGuildId: c
    }
  }
}(r = "displayName") in u ? Object.defineProperty(u, r, {
  value: "HubEmailVerificationStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = "HubEmailVerificationStore";
let d = new u(Chunk570140.Z, {
  HUB_VERIFY_EMAIL_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    a = true, o = null, c = t
  },
  HUB_VERIFY_EMAIL_FAILURE: function(e) {
    let {
      errors: t
    } = e;
    a = false, o = t
  }
})