/** Chunk was on web.js **/
/** chunk id: 422559, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VY: () => o,
  _$: () => s,
  wt: () => c
}), require("./415506.js");
var Chunk149765 = require("./149765.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let o = [Chunk981631.Plq.ADMINISTRATOR, Chunk981631.Plq.MANAGE_GUILD, Chunk981631.Plq.MANAGE_ROLES, Chunk981631.Plq.MANAGE_CHANNELS, Chunk981631.Plq.KICK_MEMBERS, Chunk981631.Plq.BAN_MEMBERS, Chunk981631.Plq.CREATE_INSTANT_INVITE, Chunk981631.Plq.MANAGE_NICKNAMES, Chunk981631.Plq.CHANGE_NICKNAME, Chunk981631.Plq.MANAGE_GUILD_EXPRESSIONS, Chunk981631.Plq.CREATE_GUILD_EXPRESSIONS, Chunk981631.Plq.MANAGE_WEBHOOKS, Chunk981631.Plq.VIEW_AUDIT_LOG, Chunk981631.Plq.VIEW_CHANNEL, Chunk981631.Plq.MANAGE_EVENTS, Chunk981631.Plq.CREATE_EVENTS, Chunk981631.Plq.MODERATE_MEMBERS, Chunk981631.Plq.VIEW_GUILD_ANALYTICS, Chunk981631.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS, Chunk981631.Plq.USE_EXTERNAL_APPS, Chunk981631.Plq.SEND_MESSAGES, Chunk981631.Plq.SEND_MESSAGES_IN_THREADS, Chunk981631.Plq.CREATE_PUBLIC_THREADS, Chunk981631.Plq.CREATE_PRIVATE_THREADS, Chunk981631.Plq.SEND_TTS_MESSAGES, Chunk981631.Plq.MANAGE_MESSAGES, Chunk981631.Plq.MANAGE_THREADS, Chunk981631.Plq.EMBED_LINKS, Chunk981631.Plq.ATTACH_FILES, Chunk981631.Plq.READ_MESSAGE_HISTORY, Chunk981631.Plq.MENTION_EVERYONE, Chunk981631.Plq.ADD_REACTIONS, Chunk981631.Plq.USE_EXTERNAL_EMOJIS, Chunk981631.Plq.USE_EXTERNAL_STICKERS, Chunk981631.Plq.USE_APPLICATION_COMMANDS, Chunk981631.Plq.SEND_VOICE_MESSAGES, Chunk981631.Plq.SEND_POLLS, Chunk981631.Plq.PIN_MESSAGES, Chunk981631.Plq.BYPASS_SLOWMODE, Chunk981631.Plq.CONNECT, Chunk981631.Plq.SPEAK, Chunk981631.Plq.MUTE_MEMBERS, Chunk981631.Plq.DEAFEN_MEMBERS, Chunk981631.Plq.MOVE_MEMBERS, Chunk981631.Plq.USE_VAD, Chunk981631.Plq.PRIORITY_SPEAKER, Chunk981631.Plq.REQUEST_TO_SPEAK, Chunk981631.Plq.STREAM, Chunk981631.Plq.USE_EMBEDDED_ACTIVITIES, Chunk981631.Plq.USE_SOUNDBOARD, Chunk981631.Plq.USE_EXTERNAL_SOUNDS, Chunk981631.Plq.SET_VOICE_CHANNEL_STATUS];

function s(e) {
  return Object.values(i.Plq).some(t => r.e$(e, t) && !o.includes(t))
}
let l = {
  [Chunk981631.Plq.ADMINISTRATOR.toString()]: () => a.intl.string(a.t.PGvZqX),
  [Chunk981631.Plq.MANAGE_GUILD.toString()]: () => a.intl.string(a.t.QZRcfO),
  [Chunk981631.Plq.MANAGE_ROLES.toString()]: () => a.intl.string(a.t["C8d+oG"]),
  [Chunk981631.Plq.MANAGE_CHANNELS.toString()]: () => a.intl.string(a.t["9qLtWs"]),
  [Chunk981631.Plq.KICK_MEMBERS.toString()]: () => a.intl.string(a.t.pBNv6i),
  [Chunk981631.Plq.BAN_MEMBERS.toString()]: () => a.intl.string(a.t.oTBA7N),
  [Chunk981631.Plq.CREATE_INSTANT_INVITE.toString()]: () => a.intl.string(a.t.zJrgTG),
  [Chunk981631.Plq.MANAGE_NICKNAMES.toString()]: () => a.intl.string(a.t["t+Ct5x"]),
  [Chunk981631.Plq.CHANGE_NICKNAME.toString()]: () => a.intl.string(a.t.dilOF6),
  [Chunk981631.Plq.MANAGE_GUILD_EXPRESSIONS.toString()]: () => a.intl.string(a.t.bbuXIn),
  [Chunk981631.Plq.CREATE_GUILD_EXPRESSIONS.toString()]: () => a.intl.string(a.t.HarVuP),
  [Chunk981631.Plq.MANAGE_WEBHOOKS.toString()]: () => a.intl.string(a.t["/ADKmM"]),
  [Chunk981631.Plq.VIEW_AUDIT_LOG.toString()]: () => a.intl.string(a.t.fZgLpA),
  [Chunk981631.Plq.VIEW_CHANNEL.toString()]: () => a.intl.string(a.t.uV83yi),
  [Chunk981631.Plq.SEND_MESSAGES.toString()]: () => a.intl.string(a.t.T32rkC),
  [Chunk981631.Plq.SEND_TTS_MESSAGES.toString()]: () => a.intl.string(a.t.Mg7bku),
  [Chunk981631.Plq.MANAGE_MESSAGES.toString()]: () => a.intl.string(a.t["6lU9xM"]),
  [Chunk981631.Plq.EMBED_LINKS.toString()]: () => a.intl.string(a.t["969dEL"]),
  [Chunk981631.Plq.ATTACH_FILES.toString()]: () => a.intl.string(a.t["3AS4UM"]),
  [Chunk981631.Plq.READ_MESSAGE_HISTORY.toString()]: () => a.intl.string(a.t.l9ufaR),
  [Chunk981631.Plq.MENTION_EVERYONE.toString()]: () => a.intl.string(a.t.Y78KGC),
  [Chunk981631.Plq.ADD_REACTIONS.toString()]: () => a.intl.string(a.t.yEoJAr),
  [Chunk981631.Plq.USE_EXTERNAL_EMOJIS.toString()]: () => a.intl.string(a.t.BpBGZU),
  [Chunk981631.Plq.USE_EXTERNAL_STICKERS.toString()]: () => a.intl.string(a.t["UeRs+b"]),
  [Chunk981631.Plq.USE_APPLICATION_COMMANDS.toString()]: () => a.intl.string(a.t.shbR1a),
  [Chunk981631.Plq.SEND_VOICE_MESSAGES.toString()]: () => a.intl.string(a.t["+8GStU"]),
  [Chunk981631.Plq.CONNECT.toString()]: () => a.intl.string(a.t.S0W8Z5),
  [Chunk981631.Plq.SPEAK.toString()]: () => a.intl.string(a.t["8w1tIR"]),
  [Chunk981631.Plq.MUTE_MEMBERS.toString()]: () => a.intl.string(a.t["8EI30/"]),
  [Chunk981631.Plq.DEAFEN_MEMBERS.toString()]: () => a.intl.string(a.t["9L47Fr"]),
  [Chunk981631.Plq.MOVE_MEMBERS.toString()]: () => a.intl.string(a.t.YtjJPQ),
  [Chunk981631.Plq.USE_VAD.toString()]: () => a.intl.string(a.t["08zAV7"]),
  [Chunk981631.Plq.PRIORITY_SPEAKER.toString()]: () => a.intl.string(a.t.BVK71i),
  [Chunk981631.Plq.CREATE_PUBLIC_THREADS.toString()]: () => a.intl.string(a.t["25rKnX"]),
  [Chunk981631.Plq.CREATE_PRIVATE_THREADS.toString()]: () => a.intl.string(a.t.QwbTSa),
  [Chunk981631.Plq.SEND_MESSAGES_IN_THREADS.toString()]: () => a.intl.string(a.t.fTE74g),
  [Chunk981631.Plq.MANAGE_THREADS.toString()]: () => a.intl.string(a.t.kEqgr7),
  [Chunk981631.Plq.MANAGE_EVENTS.toString()]: () => a.intl.string(a.t.HIgA5a),
  [Chunk981631.Plq.CREATE_EVENTS.toString()]: () => a.intl.string(a.t.qyjZua),
  [Chunk981631.Plq.MODERATE_MEMBERS.toString()]: () => a.intl.string(a.t["7DgVBr"]),
  [Chunk981631.Plq.REQUEST_TO_SPEAK.toString()]: () => a.intl.string(a.t["5kicT2"]),
  [Chunk981631.Plq.VIEW_GUILD_ANALYTICS.toString()]: () => a.intl.string(a.t["rQJBE/"]),
  [Chunk981631.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => a.intl.string(a.t["0lTLTv"]),
  [Chunk981631.Plq.STREAM.toString()]: () => a.intl.string(a.t.FlNoSV),
  [Chunk981631.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: () => a.intl.string(a.t.rLSGeh),
  [Chunk981631.Plq.USE_SOUNDBOARD.toString()]: () => a.intl.string(a.t.Bco7NG),
  [Chunk981631.Plq.USE_EXTERNAL_SOUNDS.toString()]: () => a.intl.string(a.t.pwaVJ6),
  [Chunk981631.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: () => a.intl.string(a.t.VBwkUf),
  [Chunk981631.Plq.SEND_POLLS.toString()]: () => a.intl.string(a.t.UMQ7Ww),
  [Chunk981631.Plq.USE_EXTERNAL_APPS.toString()]: () => a.intl.string(a.t.TtA5rK),
  [Chunk981631.Plq.PIN_MESSAGES.toString()]: () => a.intl.string(a.t.Y5BI39),
  [Chunk981631.Plq.BYPASS_SLOWMODE.toString()]: () => a.intl.string(a.t.kqcjeV)
};

function c(e) {
  let t = l[e.toString()];
  if (null == t) throw Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
  return t()
}