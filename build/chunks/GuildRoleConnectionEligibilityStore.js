/** Chunk was on 31978 **/
/** chunk id: 107484, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var r, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = new Map;
class s extends(r = Chunk442837.ZP.Store) {
  getGuildRoleConnectionEligibility(e) {
    return null != e ? a.get(e) : true
  }
}(l = "displayName") in s ? Object.defineProperty(s, l, {
  value: "GuildRoleConnectionEligibilityStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[l] = "GuildRoleConnectionEligibilityStore";
let c = new s(Chunk570140.Z, {
  GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: e => {
    let {
      roleId: t,
      roleConnectionEligibility: n
    } = e;
    a.set(t, n)
  }
})