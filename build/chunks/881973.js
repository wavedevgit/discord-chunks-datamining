/** Chunk was on 21738 **/
/** chunk id: 881973, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk449054 = require("./449054.js");

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
    this.guildIds.size > 0 && (r.PU(e, Array.from(this.guildIds)), this.guildIds.clear())
  }
  constructor(e) {
    i(this, "guildIds", new Set), i(this, "categoryId", true), this.categoryId = e
  }
}