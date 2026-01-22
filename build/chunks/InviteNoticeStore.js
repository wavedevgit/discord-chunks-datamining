/** Chunk was on 21738 **/
/** chunk id: 255161, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function c() {
  returntrue
}
class u extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.A), this.syncWith([s.A], c)
  }
  channelNoticePredicate(e, t) {
    return Date.now() - t >= o.D2K && s.A.can(o.xBc.ADMINISTRATOR, e)
  }
}(r = "displayName") in u ? Object.defineProperty(u, r, {
  value: "InviteNoticeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = "InviteNoticeStore";
let d = new u(Chunk73153.h)