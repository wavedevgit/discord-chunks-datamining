/** Chunk was on 67325 **/
/** chunk id: 561654, original params: e,r,l (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var t, n, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430824 = require("./430824.js");
let a = new Map;
class _ extends(t = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z)
  }
  getGuildRoleConnectionsConfiguration(e) {
    return a.get(e)
  }
}(n = "displayName") in _ ? Object.defineProperty(_, n, {
  value: "GuildRoleConnectionsConfigurationStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : _[n] = "GuildRoleConnectionsConfigurationStore";
let c = new _(Chunk570140.Z, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: e => {
    let {
      roleId: r,
      roleConnectionConfigurations: l
    } = e;
    a.set(r, l)
  }
})