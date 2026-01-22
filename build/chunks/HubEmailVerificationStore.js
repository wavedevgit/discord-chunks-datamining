/** Chunk was on 86142 **/
/** chunk id: 341371, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let a = false,
  o = null,
  c = null;
class u extends(i = Chunk311907.Ay.Store) {
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
let d = new u(Chunk73153.h, {
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