/** Chunk was on 21738 **/
/** chunk id: 731667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk891540 = require("./891540.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");
let u = false;

function d(e) {
  let t = o.A.getGuild(e);
  return null != t && !!t.features.has(c.GuildFeatures.HUB) && (u = true, true)
}

function p() {
  returntrue
}
class h extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.A, s.A), this.syncWith([s.A], p)
  }
  channelNoticePredicate(e) {
    return !!e.features.has(c.GuildFeatures.LINKED_TO_HUB) && !u
  }
}(i = "displayName") in h ? Object.defineProperty(h, i, {
  value: "HubLinkNoticeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[i] = "HubLinkNoticeStore";
let g = new h(Chunk73153.h, {
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