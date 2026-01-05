/** Chunk was on 1272 **/
/** chunk id: 400271, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  g = new Set;
class m extends(r = Chunk442837.ZP.Store) {
  initialize() {
    var e;
    this.waitFor(Chunk496675.Z, Chunk430824.Z, Chunk650774.Z), this.syncWith([Chunk496675.Z, Chunk430824.Z, Chunk650774.Z], Chunk981631.dG4), g = (e = new Set(Chunk433517.K.get(f)), module)
  }
  isVisible(e) {
    if (null == e) return;
    let t = s.Z.getMemberCount(e.id);
    return !g.has(e.id) && null != t && t >= d.U3 && u.Z.can(p.Plq.ADMINISTRATOR, e) && !e.features.has(p.GuildFeatures.COMMUNITY)
  }
}(i = "displayName") in m ? Object.defineProperty(m, i, {
  value: "EnablePublicGuildUpsellNoticeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[i] = "EnablePublicGuildUpsellNoticeStore";
let h = new m(Chunk570140.Z, {
  PUBLIC_UPSELL_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!g.has(t)) return g.add(t), a.K.set(f, g), true
  }
})