/** Chunk was on web.js **/
/** chunk id: 531743, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk626584 = require("./626584.js"),
  Chunk723176 = require("./723176.js");
let a = new Chunk626584.A("ChannelReader");
class s {
  static getSync(e, t) {
    let n = performance.now(),
      r = i.A.channels(e).getManySyncUnsafe(t),
      s = performance.now() - n;
    return a.log("synchronously loaded in ".concat(s, "ms (guild: ").concat(t, ", channels: ").concat(r.length, ")")), [r, s]
  }
  static async getAsync(e, t) {
    let n = performance.now(),
      r = await i.A.channels(e).getMany(t),
      s = performance.now() - n;
    return a.verbose("loaded in ".concat(s, "ms (guild: ").concat(t, ", channels: ").concat(r.length, ")")), r
  }
  static async getGuildIds() {
    try {
      var e;
      let t = i.A.channels();
      if (null == t) return new Set;
      let n = (null != (e = await t.getGuildIds()) ? e : []).filter(e => null !== e && "string" == typeof e);
      return new Set(n)
    } catch (e) {
      return a.warn("couldn't get guild ids", e), new Set
    }
  }
}