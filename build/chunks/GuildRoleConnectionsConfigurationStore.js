/** Chunk was on web.js **/
/** chunk id: 561654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430824 = require("./430824.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = new Map,
  c = e => {
    let {
      roleId: t,
      roleConnectionConfigurations: n
    } = e;
    l.set(t, n)
  };
class u extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z)
  }
  getGuildRoleConnectionsConfiguration(e) {
    return l.get(e)
  }
}
s(u, "displayName", "GuildRoleConnectionsConfigurationStore");
let d = new u(Chunk570140.Z, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: c
})