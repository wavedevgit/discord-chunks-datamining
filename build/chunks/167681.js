/** Chunk was on web.js **/
/** chunk id: 167681, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
      r = ((null != n ? s.default.extractTimestamp(n) : 0) + s.default.extractTimestamp(e)) % o.I.length;
    return o.I[r]
  },
  u = (e, t, n) => {
    var s;
    let o = {
      channel: e,
      message: t,
      shouldMention: true,
      showMentionToggle: true
    };
    r.A.sendGreetMessage(e.id, n, r.A.getSendMessageOptionsForReply(o)), a.default.track(l.HAw.WELCOME_CTA_CLICKED, {
      is_reply: true,
      sticker_id: n,
      target_user: t.author.id,
      sender: null == (s = i.default.getCurrentUser()) ? true : s.id
    })
  }