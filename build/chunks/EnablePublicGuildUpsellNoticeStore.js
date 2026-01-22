/** Chunk was on 21738 **/
/** chunk id: 788866, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var r, i, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk498642 = require("./498642.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk124759 = require("./124759.js"),
  Chunk652215 = require("./652215.js");
let f = "publicUpsellChannelNoticeGuilds",
  h = new Set;
class A extends(r = Chunk311907.Ay.Store) {
  initialize() {
    var e;
    this.waitFor(u.A, c.A, o.A), this.syncWith([u.A, c.A, o.A], p.tEg), h = (e = new Set(a.w.get(f)), e)
  }
  isVisible(e) {
    if (null == e) return;
    let t = o.A.getMemberCount(e.id);
    return !h.has(e.id) && null != t && t >= d.dH && u.A.can(p.xBc.ADMINISTRATOR, e) && !e.features.has(p.GuildFeatures.COMMUNITY)
  }
}(i = "displayName") in A ? Object.defineProperty(A, i, {
  value: "EnablePublicGuildUpsellNoticeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : A[i] = "EnablePublicGuildUpsellNoticeStore";
let g = new A(Chunk73153.h, {
  PUBLIC_UPSELL_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!h.has(t)) return h.add(t), a.w.set(f, h), true
  }
})