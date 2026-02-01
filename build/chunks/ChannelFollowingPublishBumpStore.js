/** Chunk was on 9753 **/
/** chunk id: 572957, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js"), require("./938796.js");
var r, i, Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk812930 = require("./812930.js"),
  Chunk652215 = require("./652215.js");
let g = "ChannelFollowingBumpChannels",
  _ = new Set,
  h = new Set;
class b extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.default, u.A, d.A, p.default), _ = new Set(s.w.get(g))
  }
  shouldShowBump(e) {
    return h.has(e)
  }
}(i = "displayName") in b ? Object.defineProperty(b, i, {
  value: "ChannelFollowingPublishBumpStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[i] = "ChannelFollowingPublishBumpStore";
let y = new b(Chunk73153.h, {
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: r,
      optimistic: i
    } = e;
    if (i || _.has(n)) returnfalse;
    let a = u.A.getChannel(n),
      s = p.default.getCurrentUser();
    if (!(null != a && a.type === f.rbe.GUILD_ANNOUNCEMENT && (0, m.A)(r) && (null != s && (null == (t = r.author) ? true : t.id) === s.id ? d.A.can(f.xBc.SEND_MESSAGES, a) : d.A.can(f.xBc.MANAGE_MESSAGES, a)) && !l.Lt(Number(r.flags), f.pr7.CROSSPOSTED))) returnfalse;
    h.add(r.id)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e;
    h.has(t.id) && l.Lt(Number(t.flags), f.pr7.CROSSPOSTED) && h.delete(t.id)
  },
  CHANNEL_SELECT: function(e) {
    h.clear()
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function(e) {
    let {
      messageId: t
    } = e;
    h.delete(t)
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function(e) {
    let {
      channelId: t
    } = e;
    _.add(t), s.w.set(g, _), h.clear()
  }
})