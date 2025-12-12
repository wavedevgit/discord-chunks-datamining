/** Chunk was on 7891 **/
/** chunk id: 903223, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var i, r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430824 = require("./430824.js");
let u = null,
  d = {};
class p extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z)
  }
  getOptimalRegion() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      n = this.getRegions(exports);
    return null != require ? null != (e = require.find(e => {
      let {
        optimal: t
      } = e;
      return t
    })) ? module : a().sample(require) : null
  }
  getOptimalRegionId() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.getOptimalRegion(module);
    return null != exports ? exports.id : null
  }
  getRandomRegion() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.getRegions(module);
    return null != exports ? a().sample(exports) : null
  }
  getRandomRegionId() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.getRandomRegion(module);
    return null != exports ? exports.id : null
  }
  getRegions(e) {
    return null != e ? d[e] : u
  }
}(i = "displayName") in p ? Object.defineProperty(p, i, {
  value: "RegionStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : p[i] = "RegionStore";
let h = new p(Chunk570140.Z, {
  LOAD_REGIONS: function(e) {
    let t = a().sortBy(e.regions, e => e.name);
    null != e.guildId ? d[e.guildId] = t : u = t
  },
  GUILD_DELETE: function(e) {
    delete d[e.guild.id]
  }
})