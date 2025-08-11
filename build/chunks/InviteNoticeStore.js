/** Chunk was on 1272 **/
/** chunk id: 683743, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function u() {
  returntrue
}
class d extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk496675.Z), this.syncWith([Chunk496675.Z], u)
  }
  channelNoticePredicate(e, t) {
    return Date.now() - t >= c.Hqc && s.Z.can(c.Plq.ADMINISTRATOR, e)
  }
}
i = "InviteNoticeStore", (r = "displayName") in d ? Object.defineProperty(d, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = i;
let p = new d(Chunk570140.Z)