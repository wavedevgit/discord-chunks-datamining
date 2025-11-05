/** Chunk was on 1272 **/
/** chunk id: 400271, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk135899 = require("./135899.js"),
  Chunk981631 = require("./981631.js");
let f = "publicUpsellChannelNoticeGuilds",
  h = new Set;
class g extends(r = Chunk442837.ZP.Store) {
  initialize() {
    var e;
    this.waitFor(Chunk496675.Z, Chunk430824.Z, Chunk650774.Z), this.syncWith([Chunk496675.Z, Chunk430824.Z, Chunk650774.Z], Chunk981631.dG4), h = (e = new Set(Chunk433517.K.get(f)), module)
  }
  isVisible(e) {
    if (null == e) return;
    let t = o.Z.getMemberCount(e.id);
    return !h.has(e.id) && null != t && t >= d.U3 && u.Z.can(p.Plq.ADMINISTRATOR, e) && !e.features.has(p.GuildFeatures.COMMUNITY)
  }
}(i = "displayName") in g ? Object.defineProperty(g, i, {
  value: "EnablePublicGuildUpsellNoticeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : g[i] = "EnablePublicGuildUpsellNoticeStore";
let m = new g(Chunk570140.Z, {
  PUBLIC_UPSELL_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!h.has(t)) return h.add(t), a.K.set(f, h), true
  }
})