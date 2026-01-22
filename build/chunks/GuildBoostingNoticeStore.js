/** Chunk was on 21738 **/
/** chunk id: 701626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");
class c extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.A), this.syncWith([s.A], o.tEg)
  }
  channelNoticePredicate(e, t) {
    return Date.now() - t >= o.D2K && s.A.can(o.xBc.MANAGE_GUILD, e)
  }
}(r = "displayName") in c ? Object.defineProperty(c, r, {
  value: "GuildBoostingNoticeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[r] = "GuildBoostingNoticeStore";
let u = new c(Chunk73153.h)