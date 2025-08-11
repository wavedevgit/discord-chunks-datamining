/** Chunk was on 1272 **/
/** chunk id: 421176, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");
class u extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk496675.Z), this.syncWith([Chunk496675.Z], Chunk981631.dG4)
  }
  channelNoticePredicate(e, t) {
    return Date.now() - t >= c.Hqc && s.Z.can(c.Plq.MANAGE_GUILD, e)
  }
}
i = "GuildBoostingNoticeStore", (r = "displayName") in u ? Object.defineProperty(u, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = i;
let d = new u(Chunk570140.Z)