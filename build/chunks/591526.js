/** Chunk was on web.js **/
/** chunk id: 591526, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk710845 = require("./710845.js"),
  Chunk287328 = require("./287328.js");
let a = new Chunk710845.Z("ChannelReader");
class o {
  static getSync(e, t) {
    let n = performance.now(),
      r = i.Z.channels(e).getManySyncUnsafe(t),
      o = performance.now() - n;
    return a.log("synchronously loaded in ".concat(o, "ms (guild: ").concat(t, ", channels: ").concat(r.length, ")")), [r, o]
  }
  static async getAsync(e, t) {
    let n = performance.now(),
      r = await i.Z.channels(e).getMany(t),
      o = performance.now() - n;
    return a.verbose("loaded in ".concat(o, "ms (guild: ").concat(t, ", channels: ").concat(r.length, ")")), r
  }
  static async getGuildIds() {
    try {
      var e;
      let t = Chunk287328.Z.channels();
      if (null == exports) return new Set;
      let n = (null != (e = await exports.getGuildIds()) ? module : []).filter(e => null !== e && "string" == typeof e);
      return new Set(require)
    } catch (e) {
      return a.warn("couldn't get guild ids", module), new Set
    }
  }
}