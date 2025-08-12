/** Chunk was on 26628 **/
/** chunk id: 478738, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./539854.js");
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = [];
class c extends(r = Chunk442837.ZP.Store) {
  getGeoRestrictedGuilds() {
    return a
  }
}
l = "GeoRestrictedGuildStore", (i = "displayName") in c ? Object.defineProperty(c, i, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : c[i] = l;
let u = new c(Chunk570140.Z, {
  CONNECTION_OPEN: function(e) {
    a = e.geoRestrictedGuilds
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    if (false === a.findIndex(e => e.id === t.id)) returnfalse;
    a = a.filter(e => e.id !== t.id)
  },
  GUILD_GEO_RESTRICTED: function(e) {
    let t = a.filter(t => t.id !== e.guildId);
    t.push({
      id: e.guildId,
      name: e.name,
      icon: e.icon,
      unavailable: true,
      geo_restricted: true
    }), a = t
  }
})