/** Chunk was on 1272 **/
/** chunk id: 255791, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");
let p = {
  MAX_MEMBER_COUNT: new Set
};
class f extends(r = Chunk442837.ZP.Store) {
  initialize() {
    var e;
    this.waitFor(Chunk496675.Z, Chunk430824.Z, Chunk650774.Z), this.syncWith([Chunk496675.Z, Chunk430824.Z, Chunk650774.Z], Chunk981631.dG4), Chunk433517.K.remove(Chunk981631.vID.MAX_MEMBER_COUNT_100), Chunk433517.K.remove(Chunk981631.vID.MAX_MEMBER_COUNT_250), e = new Set(Chunk433517.K.get(Chunk981631.vID.MAX_MEMBER_COUNT)), p[Chunk981631.vID.MAX_MEMBER_COUNT] = true !== module ? module : new Set
  }
  isVisible(e) {
    var t;
    if (null == e) returnfalse;
    let n = null != (t = o.Z.getMemberCount(e.id)) ? t : 0,
      r = u.Z.can(d.Plq.ADMINISTRATOR, e);
    return !p[d.vID.MAX_MEMBER_COUNT].has(e.id) && r && e.maxMembers > 0 && e.maxMembers - n <= 1e4
  }
}(i = "displayName") in f ? Object.defineProperty(f, i, {
  value: "MaxMemberCountChannelNoticeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : f[i] = "MaxMemberCountChannelNoticeStore";
let h = new f(Chunk570140.Z, {
  MAX_MEMBER_COUNT_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!p[d.vID.MAX_MEMBER_COUNT].has(t)) return p[d.vID.MAX_MEMBER_COUNT].add(t), a.K.set(d.vID.MAX_MEMBER_COUNT, p[d.vID.MAX_MEMBER_COUNT]), true
  }
})