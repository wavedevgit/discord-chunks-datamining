/** Chunk was on 1272 **/
/** chunk id: 683743, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function c() {
  returntrue
}
class u extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk496675.Z), this.syncWith([Chunk496675.Z], c)
  }
  channelNoticePredicate(e, t) {
    return Date.now() - t >= s.Hqc && o.Z.can(s.Plq.ADMINISTRATOR, e)
  }
}(r = "displayName") in u ? Object.defineProperty(u, r, {
  value: "InviteNoticeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = "InviteNoticeStore";
let d = new u(Chunk570140.Z)