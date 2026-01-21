/** Chunk was on 82124 **/
/** chunk id: 903223, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var r, i, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430824 = require("./430824.js");
let u = null,
  d = {};
class p extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(c.Z)
  }
  getOptimalRegion() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      n = this.getRegions(t);
    return null != n ? null != (e = n.find(e => {
      let {
        optimal: t
      } = e;
      return t
    })) ? e : a().sample(n) : null
  }
  getOptimalRegionId() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.getOptimalRegion(e);
    return null != t ? t.id : null
  }
  getRandomRegion() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.getRegions(e);
    return null != t ? a().sample(t) : null
  }
  getRandomRegionId() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.getRandomRegion(e);
    return null != t ? t.id : null
  }
  getRegions(e) {
    return null != e ? d[e] : u
  }
}(r = "displayName") in p ? Object.defineProperty(p, r, {
  value: "RegionStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : p[r] = "RegionStore";
let f = new p(Chunk570140.Z, {
  LOAD_REGIONS: function(e) {
    let t = a().sortBy(e.regions, e => e.name);
    null != e.guildId ? d[e.guildId] = t : u = t
  },
  GUILD_DELETE: function(e) {
    delete d[e.guild.id]
  }
})