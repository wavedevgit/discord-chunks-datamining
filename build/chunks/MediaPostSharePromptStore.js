/** Chunk was on 81985 **/
/** chunk id: 48929, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430198 = require("./430198.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk709054 = require("./709054.js"),
  Chunk522579 = require("./522579.js");
let p = new Set;
class f extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(s.default, c.Z, o.Z)
  }
  shouldDisplayPrompt(e) {
    return p.has(e)
  }
}(i = "displayName") in f ? Object.defineProperty(f, i, {
  value: "MediaPostSharePromptStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : f[i] = "MediaPostSharePromptStore";
let h = new f(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    p = new Set
  },
  MESSAGE_CREATE: function(e) {
    var t;
    if (e.isPushNotification) return;
    let n = e.message;
    if (s.default.getId() !== (null == (t = n.author) ? true : t.id) || !(0, d.z9)(n.id, n.channel_id)) return;
    let r = c.Z.getChannel(n.channel_id);
    null != r && null != r.parent_id && o.Z.isChannelGated(r.guild_id, r.parent_id) && p.add(u.default.castMessageIdAsChannelId(e.message.id))
  },
  DISMISS_MEDIA_POST_SHARE_PROMPT: function(e) {
    let {
      threadId: t
    } = e;
    p.delete(t)
  },
  LOGOUT: function(e) {
    p.clear()
  }
})