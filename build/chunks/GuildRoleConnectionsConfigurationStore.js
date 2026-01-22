/** Chunk was on 47841 **/
/** chunk id: 145643, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk71393 = require("./71393.js");
let c = new Map;
class o extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(a.A)
  }
  getGuildRoleConnectionsConfiguration(e) {
    return c.get(e)
  }
}(i = "displayName") in o ? Object.defineProperty(o, i, {
  value: "GuildRoleConnectionsConfigurationStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[i] = "GuildRoleConnectionsConfigurationStore";
let d = new o(Chunk73153.h, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: e => {
    let {
      roleId: t,
      roleConnectionConfigurations: n
    } = e;
    c.set(t, n)
  }
})