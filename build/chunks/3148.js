/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  ZP: () => d,
  cs: () => f,
  pe: () => u
}), n(789020), n(653041);
var r = n(512722),
  i = n.n(r),
  o = n(869765),
  a = n(598077),
  s = n(594174),
  l = n(48854),
  c = n(981631);

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
    tts: r = !1,
    type: d = c.uaV.DEFAULT,
    messageReference: f,
    allowedMentions: p,
    author: _,
    flags: h,
    nonce: m,
    poll: g,
    changelogId: E,
    giftingPrompt: v,
    state: b
  } = e, y = [];
  if (d === c.uaV.REPLY && (i()(null != f, "Replies must have a message reference"), null == p || p.replied_user)) {
    let e = o.Z.getMessageByReference(f);
    (null == e ? void 0 : e.state) === o.Y.LOADED && y.push(u(e.message.author))
  }
  return null == _ && (_ = s.default.getCurrentUser()), _ instanceof a.Z && (_ = u(_)), i()(null != _, "createMessage: author cannot be undefined"), {
    id: null != m ? m : (0, l.r)(),
    type: d,
    content: n,
    channel_id: t,
    author: _,
    attachments: [],
    embeds: [],
    pinned: !1,
    mentions: y,
    mention_channels: [],
    mention_roles: [],
    mention_everyone: !1,
    timestamp: new Date().toISOString(),
    state: b || c.yb.SENDING,
    tts: r,
    message_reference: f,
    message_snapshots: [],
    flags: h,
    nonce: m,
    poll: g,
    changelog_id: E,
    gifting_prompt: v
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
      bot: !0
    },
    attachments: [],
    embeds: null != i ? i : [],
    pinned: !1,
    mentions: [],
    mention_channels: [],
    mention_roles: [],
    mention_everyone: !1,
    timestamp: new Date().toISOString(),
    state: c.yb.SENT,
    tts: !1,
    loggingName: o
  }
}