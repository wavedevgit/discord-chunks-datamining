/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => d
}), n(47120);
var r, i, s, a = n(442837),
  l = n(570140),
  o = n(430824);
let A = new Map;
class c extends(r = a.ZP.Store) {
  initialize() {
    this.waitFor(o.Z)
  }
  getGuildRoleConnectionsConfiguration(e) {
    return A.get(e)
  }
}
s = "GuildRoleConnectionsConfigurationStore", (i = "displayName") in c ? Object.defineProperty(c, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : c[i] = s;
let d = new c(l.Z, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: e => {
    let {
      roleId: t,
      roleConnectionConfigurations: n
    } = e;
    A.set(t, n)
  }
})