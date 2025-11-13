/** Chunk was on 11788 **/
/** chunk id: 478738, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./539854.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = [];
class s extends(r = Chunk442837.ZP.Store) {
  getGeoRestrictedGuilds() {
    return a
  }
}(i = "displayName") in s ? Object.defineProperty(s, i, {
  value: "GeoRestrictedGuildStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[i] = "GeoRestrictedGuildStore";
let c = new s(Chunk570140.Z, {
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