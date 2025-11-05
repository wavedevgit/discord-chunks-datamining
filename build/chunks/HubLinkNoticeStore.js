/** Chunk was on 1272 **/
/** chunk id: 456065, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk810788 = require("./810788.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");
let u = false;

function d(e) {
  let t = o.Z.getGuild(e);
  return null != t && !!t.features.has(c.GuildFeatures.HUB) && (u = true, true)
}

function p() {
  returntrue
}
class f extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z, Chunk810788.Z), this.syncWith([Chunk810788.Z], p)
  }
  channelNoticePredicate(e) {
    return !!e.features.has(c.GuildFeatures.LINKED_TO_HUB) && !u
  }
}(i = "displayName") in f ? Object.defineProperty(f, i, {
  value: "HubLinkNoticeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : f[i] = "HubLinkNoticeStore";
let h = new f(Chunk570140.Z, {
  CONNECTION_OPEN: function(e) {
    for (let t of e.guilds)
      if (d(t.id)) returntrue;
    returnfalse
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return d(t.id)
  }
})