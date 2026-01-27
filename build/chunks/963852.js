/** Chunk was on web.js **/
/** chunk id: 963852, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => d,
  Vi: () => u,
  pO: () => f
}), require("./938796.js"), require("./321073.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk9842 = require("./9842.js"),
  Chunk427157 = require("./427157.js"),
  Chunk287809 = require("./287809.js"),
  Chunk195880 = require("./195880.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  let {
    id: t,
    username: n,
    avatar: r,
    discriminator: i,
    bot: a,
    globalName: o
  } = e;
  return {
    id: t,
    username: n,
    avatar: r,
    discriminator: i,
    bot: a,
    global_name: o
  }
}

function d(e) {
  let {
    channelId: t,
    content: n,
    tts: r = false,
    type: d = c.lAJ.DEFAULT,
    messageReference: f,
    allowedMentions: p,
    author: _,
    flags: h,
    nonce: m,
    poll: g,
    sharedCustomTheme: E,
    changelogId: y,
    giftingPrompt: b,
    state: O
  } = e, v = [];
  if (d === c.lAJ.REPLY && (i()(null != f, "Replies must have a message reference"), null == p || p.replied_user)) {
    let e = a.A.getMessageByReference(f);
    (null == e ? true : e.state) === a.a.LOADED && v.push(u(e.message.author))
  }
  return null == _ && (_ = s.default.getCurrentUser()), _ instanceof o.A && (_ = u(_)), i()(null != _, "createMessage: author cannot be undefined"), {
    id: null != m ? m : (0, l.m)(),
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
    state: O || c.cmJ.SENDING,
    tts: r,
    message_reference: f,
    message_snapshots: [],
    flags: h,
    nonce: m,
    poll: g,
    shared_client_theme: E,
    changelog_id: y,
    gifting_prompt: b
  }
}

function f(e) {
  let {
    messageId: t,
    channelId: n,
    content: r,
    embeds: i,
    loggingName: a
  } = e;
  return {
    id: null != t ? t : (0, l.m)(),
    type: c.lAJ.DEFAULT,
    flags: c.pr7.EPHEMERAL,
    content: r,
    channel_id: n,
    author: {
      id: c.oIV,
      username: "Clyde",
      discriminator: c.h3J,
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
    state: c.cmJ.SENT,
    tts: false,
    loggingName: a
  }
}