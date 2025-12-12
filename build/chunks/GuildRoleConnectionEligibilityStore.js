/** Chunk was on web.js **/
/** chunk id: 107484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Map,
  l = e => {
    let {
      roleId: t,
      roleConnectionEligibility: n
    } = e;
    s.set(t, n)
  };
class c extends(r = Chunk442837.ZP.Store) {
  getGuildRoleConnectionEligibility(e) {
    return null != e ? s.get(e) : true
  }
}
o(c, "displayName", "GuildRoleConnectionEligibilityStore");
let u = new c(Chunk570140.Z, {
  GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: l
})