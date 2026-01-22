/** Chunk was on web.js **/
/** chunk id: 819744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Iz: () => _,
  g: () => f,
  yg: () => p
});
var Chunk562465 = require("./562465.js"),
  Chunk465532 = require("./465532.js"),
  Chunk843472 = require("./843472.js"),
  Chunk118517 = require("./118517.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk320501 = require("./320501.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");

function f(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : d.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT;
  r.Bo.post({
    url: d.Rsh.FORCE_SEND_PROMPT(e),
    body: {
      prompt_type: t
    },
    rejectWithError: true
  })
}
async function p(e, t, n) {
  await r.Bo.post({
    url: d.Rsh.SEND_GAMING_STATS(t),
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
  let t = await r.Bo.patch({
    url: d.Rsh.UPDATE_GAMING_STATS(e.channel_id, e.id),
    rejectWithError: false
  });
  if (null != t.text && "" !== t.text) {
    let n = o.A.getChannel(e.channel_id);
    null != n && ((0, s.Yf)({
      channel: n,
      message: e,
      shouldMention: false,
      showMentionToggle: false
    }), h(n.id)), i.A.saveDraft(e.channel_id, t.text, l.C.ChannelMessage)
  }
}

function h(e) {
  c.A.getMessages(e).hasMoreAfter ? a.A.jumpToPresent(e, d.EMb) : u._.dispatch(d.jej.SCROLLTO_PRESENT)
}