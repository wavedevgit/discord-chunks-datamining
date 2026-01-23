/** Chunk was on 97492 **/
/** chunk id: 543897, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./321073.js");
var r, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let a = [];
class o extends(r = Chunk311907.Ay.Store) {
  getGeoRestrictedGuilds() {
    return a
  }
}(l = "displayName") in o ? Object.defineProperty(o, l, {
  value: "GeoRestrictedGuildStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[l] = "GeoRestrictedGuildStore";
let c = new o(Chunk73153.h, {
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