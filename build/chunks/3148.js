/** Chunk was on web.js **/
/** chunk id: 3148, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => d,
  cs: () => f,
  pe: () => u
}), require("./997841.js"), require("./539854.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk869765 = require("./869765.js"),
  Chunk598077 = require("./598077.js"),
  Chunk594174 = require("./594174.js"),
  Chunk48854 = require("./48854.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let {
    id: t,
    username: n,
    avatar: r,
    discriminator: i,
    bot: o,
    globalName: a
  } = e;
  return {
    id: t,
    username: n,
    avatar: r,
    discriminator: i,
    bot: o,
    global_name: a
  }
}

function d(e) {
  let {
    channelId: t,
    content: n,
    tts: r = false,
    type: d = c.uaV.DEFAULT,
    messageReference: f,
    allowedMentions: p,
    author: _,
    flags: m,
    nonce: h,
    poll: g,
    sharedCustomTheme: E,
    changelogId: b,
    giftingPrompt: y,
    state: O
  } = e, v = [];
  if (d === c.uaV.REPLY && (i()(null != f, "Replies must have a message reference"), null == p || p.replied_user)) {
    let e = o.Z.getMessageByReference(f);
    (null == e ? true : e.state) === o.Y.LOADED && v.push(u(e.message.author))
  }
  return null == _ && (_ = s.default.getCurrentUser()), _ instanceof a.Z && (_ = u(_)), i()(null != _, "createMessage: author cannot be undefined"), {
    id: null != h ? h : (0, l.r)(),
    type: d,
    content: n,
    channel_id: t,
    author: _,
    attachments: [],
    embeds: [],
    pinned: false,
    mentions: v,
    mention_channels: [],
    mention_roles: [],
    mention_everyone: false,
    timestamp: new Date().toISOString(),
    state: O || c.yb.SENDING,
    tts: r,
    message_reference: f,
    message_snapshots: [],
    flags: m,
    nonce: h,
    poll: g,
    shared_client_theme: E,
    changelog_id: b,
    gifting_prompt: y
  }
}

function f(e) {
  let {
    messageId: t,
    channelId: n,
    content: r,
    embeds: i,
    loggingName: o
  } = e;
  return {
    id: null != t ? t : (0, l.r)(),
    type: c.uaV.DEFAULT,
    flags: c.iLy.EPHEMERAL,
    content: r,
    channel_id: n,
    author: {
      id: c.LAt,
      username: "Clyde",
      discriminator: c.fo$,
      avatar: "clyde",
      bot: true
    },
    attachments: [],
    embeds: null != i ? i : [],
    pinned: false,
    mentions: [],
    mention_channels: [],
    mention_roles: [],
    mention_everyone: false,
    timestamp: new Date().toISOString(),
    state: c.yb.SENT,
    tts: false,
    loggingName: o
  }
}