/** Chunk was on 64935 **/
/** chunk id: 167681, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S9: () => u,
  dv: () => c
});
var Chunk843472 = require("./843472.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk21181 = require("./21181.js"),
  Chunk652215 = require("./652215.js");
let c = e => {
    var t;
    let n = null == (t = i.default.getCurrentUser()) ? true : t.id,
      r = ((null != n ? a.default.extractTimestamp(n) : 0) + a.default.extractTimestamp(e)) % s.I.length;
    return s.I[r]
  },
  u = (e, t, n) => {
    var a;
    r.A.sendGreetMessage(e.id, n, r.A.getSendMessageOptionsForReply({
      channel: e,
      message: t,
      shouldMention: true,
      showMentionToggle: true
    })), l.default.track(o.HAw.WELCOME_CTA_CLICKED, {
      is_reply: true,
      sticker_id: n,
      target_user: t.author.id,
      sender: null == (a = i.default.getCurrentUser()) ? true : a.id
    })
  }