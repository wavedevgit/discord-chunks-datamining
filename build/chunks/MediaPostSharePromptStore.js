/** Chunk was on 17869 **/
/** chunk id: 390395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var l, r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk717125 = require("./717125.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk661191 = require("./661191.js"),
  Chunk306680 = require("./306680.js");
let h = new Set;
class p extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.default, c.A, s.A)
  }
  shouldDisplayPrompt(e) {
    return h.has(e)
  }
}(r = "displayName") in p ? Object.defineProperty(p, r, {
  value: "MediaPostSharePromptStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : p[r] = "MediaPostSharePromptStore";
let f = new p(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    h = new Set
  },
  MESSAGE_CREATE: function(e) {
    var t;
    if (e.isPushNotification) return;
    let n = e.message;
    if (o.default.getId() !== (null == (t = n.author) ? true : t.id) || !(0, d.Co)(n.id, n.channel_id)) return;
    let l = c.A.getChannel(n.channel_id);
    null == l || null == l.parent_id || s.A.isChannelGated(l.guild_id, l.parent_id) && h.add(u.default.castMessageIdAsChannelId(e.message.id))
  },
  DISMISS_MEDIA_POST_SHARE_PROMPT: function(e) {
    let {
      threadId: t
    } = e;
    h.delete(t)
  },
  LOGOUT: function(e) {
    h.clear()
  }
})