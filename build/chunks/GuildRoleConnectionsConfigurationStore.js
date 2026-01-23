/** Chunk was on 47841 **/
/** chunk id: 145643, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk71393 = require("./71393.js");
let o = new Map;
class c extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(a.A)
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
let d = new c(Chunk73153.h, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: e => {
    let {
      roleId: t,
      roleConnectionConfigurations: n
    } = e;
    o.set(t, n)
  }
})