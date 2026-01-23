/** Chunk was on 21738 **/
/** chunk id: 15438, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var r, i, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk498642 = require("./498642.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");
let p = {
  MAX_MEMBER_COUNT: new Set
};
class h extends(r = Chunk311907.Ay.Store) {
  initialize() {
    var e;
    this.waitFor(u.A, c.A, o.A), this.syncWith([u.A, c.A, o.A], d.tEg), a.w.remove(d.n5X.MAX_MEMBER_COUNT_100), a.w.remove(d.n5X.MAX_MEMBER_COUNT_250), e = new Set(a.w.get(d.n5X.MAX_MEMBER_COUNT)), p[d.n5X.MAX_MEMBER_COUNT] = true !== e ? e : new Set
  }
  isVisible(e) {
    var t;
    if (null == e) returnfalse;
    let n = null != (t = o.A.getMemberCount(e.id)) ? t : 0,
      r = u.A.can(d.xBc.ADMINISTRATOR, e);
    return !p[d.n5X.MAX_MEMBER_COUNT].has(e.id) && r && e.maxMembers > 0 && e.maxMembers - n <= 1e4
  }
}(i = "displayName") in h ? Object.defineProperty(h, i, {
  value: "MaxMemberCountChannelNoticeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[i] = "MaxMemberCountChannelNoticeStore";
let g = new h(Chunk73153.h, {
  MAX_MEMBER_COUNT_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!p[d.n5X.MAX_MEMBER_COUNT].has(t)) return p[d.n5X.MAX_MEMBER_COUNT].add(t), a.w.set(d.n5X.MAX_MEMBER_COUNT, p[d.n5X.MAX_MEMBER_COUNT]), true
  }
})