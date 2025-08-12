/** Chunk was on 1272 **/
/** chunk id: 456065, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk810788 = require("./810788.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");
let d = false;

function p(e) {
  let t = c.Z.getGuild(e);
  return null != t && !!t.features.has(u.oNc.HUB) && (d = true, true)
}

function h() {
  returntrue
}
class f extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z, Chunk810788.Z), this.syncWith([Chunk810788.Z], h)
  }
  channelNoticePredicate(e) {
    return !!e.features.has(u.oNc.LINKED_TO_HUB) && !d
  }
}
l = "HubLinkNoticeStore", (i = "displayName") in f ? Object.defineProperty(f, i, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : f[i] = l;
let g = new f(Chunk570140.Z, {
  CONNECTION_OPEN: function(e) {
    for (let t of e.guilds)
      if (p(t.id)) returntrue;
    returnfalse
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return p(t.id)
  }
})