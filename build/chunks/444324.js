/** Chunk was on 1272 **/
/** chunk id: 444324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk900849 = require("./900849.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l {
  markAsSeen(e, t, n) {
    this.categoryId !== e && (this.categoryId = e, this.flushSeenGuilds(n)), this.guildIds.add(t)
  }
  flushSeenGuilds(e) {
    this.guildIds.size > 0 && (r.Az(e, Array.from(this.guildIds)), this.guildIds.clear())
  }
  constructor(e) {
    i(this, "guildIds", new Set), i(this, "categoryId", true), this.categoryId = e
  }
}