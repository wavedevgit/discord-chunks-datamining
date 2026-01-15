/** Chunk was on web.js **/
/** chunk id: 553385, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XP: () => p,
  j8: () => f,
  z$: () => _
});
var Chunk544891 = require("./544891.js"),
  Chunk430742 = require("./430742.js"),
  Chunk904245 = require("./904245.js"),
  Chunk623292 = require("./623292.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk375954 = require("./375954.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : d.uaV.GUILD_DEADCHAT_REVIVE_PROMPT;
  r.tn.post({
    url: d.ANM.FORCE_SEND_PROMPT(e),
    body: {
      prompt_type: t
    },
    rejectWithError: true
  })
}
async function p(e, t, n) {
  await r.tn.post({
    url: d.ANM.SEND_GAMING_STATS(t),
    body: {
      message_reference: {
        guild_id: e,
        channel_id: t,
        message_id: n
      }
    },
    rejectWithError: false
  }), h(t)
}
async function _(e) {
  let t = await r.tn.patch({
    url: d.ANM.UPDATE_GAMING_STATS(e.channel_id, e.id),
    rejectWithError: false
  });
  if (null != t.text && "" !== t.text) {
    let n = s.Z.getChannel(e.channel_id);
    null != n && ((0, o.fE)({
      channel: n,
      message: e,
      shouldMention: false,
      showMentionToggle: false
    }), h(n.id)), i.Z.saveDraft(e.channel_id, t.text, l.d.ChannelMessage)
  }
}

function h(e) {
  c.Z.getMessages(e).hasMoreAfter ? a.Z.jumpToPresent(e, d.AQB) : u.S.dispatch(d.CkL.SCROLLTO_PRESENT)
}