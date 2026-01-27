/** Chunk was on 77870 **/
/** chunk id: 390395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var r, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk717125 = require("./717125.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk661191 = require("./661191.js"),
  Chunk306680 = require("./306680.js");
let p = new Set;
class h extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.default, c.A, a.A)
  }
  shouldDisplayPrompt(e) {
    return p.has(e)
  }
}(l = "displayName") in h ? Object.defineProperty(h, l, {
  value: "MediaPostSharePromptStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[l] = "MediaPostSharePromptStore";
let f = new h(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    p = new Set
  },
  MESSAGE_CREATE: function(e) {
    var t;
    if (e.isPushNotification) return;
    let n = e.message;
    if (o.default.getId() !== (null == (t = n.author) ? true : t.id) || !(0, d.Co)(n.id, n.channel_id)) return;
    let r = c.A.getChannel(n.channel_id);
    null == r || null == r.parent_id || a.A.isChannelGated(r.guild_id, r.parent_id) && p.add(u.default.castMessageIdAsChannelId(e.message.id))
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