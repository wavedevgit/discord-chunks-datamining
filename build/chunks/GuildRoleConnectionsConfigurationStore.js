/** Chunk was on 96812 **/
/** chunk id: 561654, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var r, n, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430824 = require("./430824.js");
let s = new Map;
class u extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z)
  }
  getGuildRoleConnectionsConfiguration(e) {
    return s.get(e)
  }
}(n = "displayName") in u ? Object.defineProperty(u, n, {
  value: "GuildRoleConnectionsConfigurationStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[n] = "GuildRoleConnectionsConfigurationStore";
let c = new u(Chunk570140.Z, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: e => {
    let {
      roleId: t,
      roleConnectionConfigurations: l
    } = e;
    s.set(t, l)
  }
})