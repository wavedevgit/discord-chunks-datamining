/** Chunk was on 384 **/
/** chunk id: 561654, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430824 = require("./430824.js");
let o = new Map;
class c extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z)
  }
  getGuildRoleConnectionsConfiguration(e) {
    return o.get(e)
  }
}(i = "displayName") in c ? Object.defineProperty(c, i, {
  value: "GuildRoleConnectionsConfigurationStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[i] = "GuildRoleConnectionsConfigurationStore";
let u = new c(Chunk570140.Z, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: e => {
    let {
      roleId: t,
      roleConnectionConfigurations: n
    } = e;
    o.set(t, n)
  }
})