/** Chunk was on web.js **/
/** chunk id: 591526, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk710845 = require("./710845.js"),
  Chunk287328 = require("./287328.js");
let o = new Chunk710845.Z("ChannelReader");
class a {
  static getSync(e, t) {
    let n = performance.now(),
      r = i.Z.channels(e).getManySyncUnsafe(t),
      a = performance.now() - n;
    return o.log("synchronously loaded in ".concat(a, "ms (guild: ").concat(t, ", channels: ").concat(r.length, ")")), [r, a]
  }
  static async getAsync(e, t) {
    let n = performance.now(),
      r = await i.Z.channels(e).getMany(t),
      a = performance.now() - n;
    return o.verbose("loaded in ".concat(a, "ms (guild: ").concat(t, ", channels: ").concat(r.length, ")")), r
  }
  static async getGuildIds() {
    try {
      var e;
      let t = Chunk287328.Z.channels();
      if (null == exports) return new Set;
      let n = (null != (e = await exports.getGuildIds()) ? module : []).filter(e => null !== e && "string" == typeof e);
      return new Set(require)
    } catch (e) {
      return o.warn("couldn't get guild ids", module), new Set
    }
  }
}