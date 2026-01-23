/** Chunk was on 97492 **/
/** chunk id: 717518, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var r, l, Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk71393 = require("./71393.js");
let u = null,
  d = {};
class p extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A)
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
    })) ? e : s().sample(n) : null
  }
  getOptimalRegionId() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.getOptimalRegion(e);
    return null != t ? t.id : null
  }
  getRandomRegion() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.getRegions(e);
    return null != t ? s().sample(t) : null
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
let h = new p(Chunk73153.h, {
  LOAD_REGIONS: function(e) {
    let t = s().sortBy(e.regions, e => e.name);
    null != e.guildId ? d[e.guildId] = t : u = t
  },
  GUILD_DELETE: function(e) {
    delete d[e.guild.id]
  }
})