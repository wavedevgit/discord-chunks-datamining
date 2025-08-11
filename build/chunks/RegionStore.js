/** Chunk was on web.js **/
/** chunk id: 903223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430824 = require("./430824.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = null,
  d = {};

function f(e) {
  let t = o().sortBy(e.regions, e => e.name);
  null != e.guildId ? d[e.guildId] = t : u = t
}

function _(e) {
  delete d[e.guild.id]
}
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
    })) ? module : o().sample(require) : null
  }
  getOptimalRegionId() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.getOptimalRegion(module);
    return null != exports ? exports.id : null
  }
  getRandomRegion() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.getRegions(module);
    return null != exports ? o().sample(exports) : null
  }
  getRandomRegionId() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.getRandomRegion(module);
    return null != exports ? exports.id : null
  }
  getRegions(e) {
    return null != e ? d[e] : u
  }
}
c(p, "displayName", "RegionStore");
let h = new p(Chunk570140.Z, {
  LOAD_REGIONS: f,
  GUILD_DELETE: _
})