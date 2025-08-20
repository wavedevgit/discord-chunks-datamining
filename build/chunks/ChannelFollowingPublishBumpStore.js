/** Chunk was on 26434 **/
/** chunk id: 212342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./997841.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk110630 = require("./110630.js"),
  Chunk981631 = require("./981631.js");
let g = "ChannelFollowingBumpChannels",
  _ = new Set,
  h = new Set;
class b extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default), _ = new Set(Chunk433517.K.get(g))
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
let E = new b(Chunk570140.Z, {
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: r,
      optimistic: i
    } = e;
    if (i || _.has(n)) returnfalse;
    let l = c.Z.getChannel(n),
      o = d.default.getCurrentUser();
    if (!(null != l && l.type === f.d4z.GUILD_ANNOUNCEMENT && (0, m.Z)(r) && (null != o && (null == (t = r.author) ? true : t.id) === o.id ? u.Z.can(f.Plq.SEND_MESSAGES, l) : u.Z.can(f.Plq.MANAGE_MESSAGES, l)) && !p.yE(Number(r.flags), f.iLy.CROSSPOSTED))) returnfalse;
    h.add(r.id)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e;
    h.has(t.id) && p.yE(Number(t.flags), f.iLy.CROSSPOSTED) && h.delete(t.id)
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
    _.add(t), o.K.set(g, _), h.clear()
  }
})