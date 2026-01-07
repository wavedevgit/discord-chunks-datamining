/** Chunk was on 1272 **/
/** chunk id: 421176, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");
class c extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(o.Z), this.syncWith([o.Z], s.dG4)
  }
  channelNoticePredicate(e, t) {
    return Date.now() - t >= s.Hqc && o.Z.can(s.Plq.MANAGE_GUILD, e)
  }
}(r = "displayName") in c ? Object.defineProperty(c, r, {
  value: "GuildBoostingNoticeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[r] = "GuildBoostingNoticeStore";
let u = new c(Chunk570140.Z)