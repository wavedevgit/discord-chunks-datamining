/** Chunk was on web.js **/
/** chunk id: 633452, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

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
class c extends(r = Chunk311907.Ay.Store) {
  getGuildRoleConnectionEligibility(e) {
    return null != e ? s.get(e) : true
  }
}
o(c, "displayName", "GuildRoleConnectionEligibilityStore");
let u = new c(Chunk73153.h, {
  GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: l
})