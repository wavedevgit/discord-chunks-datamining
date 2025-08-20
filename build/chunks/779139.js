/** Chunk was on web.js **/
/** chunk id: 779139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  TZ: () => u,
  y6: () => c
});
var Chunk904245 = require("./904245.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk8532 = require("./8532.js"),
  Chunk981631 = require("./981631.js");
let c = e => {
    var t;
    let n = null == (t = i.default.getCurrentUser()) ? true : t.id,
      r = ((null != n ? o.default.extractTimestamp(n) : 0) + o.default.extractTimestamp(e)) % s.m.length;
    return s.m[r]
  },
  u = (e, t, n) => {
    var o;
    let s = {
      channel: e,
      message: t,
      shouldMention: true,
      showMentionToggle: true
    };
    r.Z.sendGreetMessage(e.id, n, r.Z.getSendMessageOptionsForReply(s)), a.default.track(l.rMx.WELCOME_CTA_CLICKED, {
      is_reply: true,
      sticker_id: n,
      target_user: t.author.id,
      sender: null == (o = i.default.getCurrentUser()) ? true : o.id
    })
  }