/** Chunk was on web.js **/
/** chunk id: 422559, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VY: () => a,
  _$: () => s,
  wt: () => c
}), require("./415506.js");
var Chunk149765 = require("./149765.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let a = [Chunk981631.Plq.ADMINISTRATOR, Chunk981631.Plq.MANAGE_GUILD, Chunk981631.Plq.MANAGE_ROLES, Chunk981631.Plq.MANAGE_CHANNELS, Chunk981631.Plq.KICK_MEMBERS, Chunk981631.Plq.BAN_MEMBERS, Chunk981631.Plq.CREATE_INSTANT_INVITE, Chunk981631.Plq.MANAGE_NICKNAMES, Chunk981631.Plq.CHANGE_NICKNAME, Chunk981631.Plq.MANAGE_GUILD_EXPRESSIONS, Chunk981631.Plq.CREATE_GUILD_EXPRESSIONS, Chunk981631.Plq.MANAGE_WEBHOOKS, Chunk981631.Plq.VIEW_AUDIT_LOG, Chunk981631.Plq.VIEW_CHANNEL, Chunk981631.Plq.MANAGE_EVENTS, Chunk981631.Plq.CREATE_EVENTS, Chunk981631.Plq.MODERATE_MEMBERS, Chunk981631.Plq.VIEW_GUILD_ANALYTICS, Chunk981631.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS, Chunk981631.Plq.USE_EXTERNAL_APPS, Chunk981631.Plq.SEND_MESSAGES, Chunk981631.Plq.SEND_MESSAGES_IN_THREADS, Chunk981631.Plq.CREATE_PUBLIC_THREADS, Chunk981631.Plq.CREATE_PRIVATE_THREADS, Chunk981631.Plq.SEND_TTS_MESSAGES, Chunk981631.Plq.MANAGE_MESSAGES, Chunk981631.Plq.MANAGE_THREADS, Chunk981631.Plq.EMBED_LINKS, Chunk981631.Plq.ATTACH_FILES, Chunk981631.Plq.READ_MESSAGE_HISTORY, Chunk981631.Plq.MENTION_EVERYONE, Chunk981631.Plq.ADD_REACTIONS, Chunk981631.Plq.USE_EXTERNAL_EMOJIS, Chunk981631.Plq.USE_EXTERNAL_STICKERS, Chunk981631.Plq.USE_APPLICATION_COMMANDS, Chunk981631.Plq.SEND_VOICE_MESSAGES, Chunk981631.Plq.SEND_POLLS, Chunk981631.Plq.PIN_MESSAGES, Chunk981631.Plq.BYPASS_SLOWMODE, Chunk981631.Plq.CONNECT, Chunk981631.Plq.SPEAK, Chunk981631.Plq.MUTE_MEMBERS, Chunk981631.Plq.DEAFEN_MEMBERS, Chunk981631.Plq.MOVE_MEMBERS, Chunk981631.Plq.USE_VAD, Chunk981631.Plq.PRIORITY_SPEAKER, Chunk981631.Plq.REQUEST_TO_SPEAK, Chunk981631.Plq.STREAM, Chunk981631.Plq.USE_EMBEDDED_ACTIVITIES, Chunk981631.Plq.USE_SOUNDBOARD, Chunk981631.Plq.USE_EXTERNAL_SOUNDS, Chunk981631.Plq.SET_VOICE_CHANNEL_STATUS];

function s(e) {
  return Object.values(i.Plq).some(t => r.e$(e, t) && !a.includes(t))
}
let l = {
  [Chunk981631.Plq.ADMINISTRATOR.toString()]: () => Chunk388032.intl.string(Chunk388032.t.PGvZqX),
  [Chunk981631.Plq.MANAGE_GUILD.toString()]: () => Chunk388032.intl.string(Chunk388032.t.QZRcfO),
  [Chunk981631.Plq.MANAGE_ROLES.toString()]: () => Chunk388032.intl.string(Chunk388032.t["C8d+oG"]),
  [Chunk981631.Plq.MANAGE_CHANNELS.toString()]: () => Chunk388032.intl.string(Chunk388032.t["9qLtWs"]),
  [Chunk981631.Plq.KICK_MEMBERS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.pBNv6i),
  [Chunk981631.Plq.BAN_MEMBERS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.oTBA7N),
  [Chunk981631.Plq.CREATE_INSTANT_INVITE.toString()]: () => Chunk388032.intl.string(Chunk388032.t.zJrgTG),
  [Chunk981631.Plq.MANAGE_NICKNAMES.toString()]: () => Chunk388032.intl.string(Chunk388032.t["t+Ct5x"]),
  [Chunk981631.Plq.CHANGE_NICKNAME.toString()]: () => Chunk388032.intl.string(Chunk388032.t.dilOF6),
  [Chunk981631.Plq.MANAGE_GUILD_EXPRESSIONS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.bbuXIn),
  [Chunk981631.Plq.CREATE_GUILD_EXPRESSIONS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.HarVuP),
  [Chunk981631.Plq.MANAGE_WEBHOOKS.toString()]: () => Chunk388032.intl.string(Chunk388032.t["/ADKmM"]),
  [Chunk981631.Plq.VIEW_AUDIT_LOG.toString()]: () => Chunk388032.intl.string(Chunk388032.t.fZgLpA),
  [Chunk981631.Plq.VIEW_CHANNEL.toString()]: () => Chunk388032.intl.string(Chunk388032.t.uV83yi),
  [Chunk981631.Plq.SEND_MESSAGES.toString()]: () => Chunk388032.intl.string(Chunk388032.t.T32rkC),
  [Chunk981631.Plq.SEND_TTS_MESSAGES.toString()]: () => Chunk388032.intl.string(Chunk388032.t.Mg7bku),
  [Chunk981631.Plq.MANAGE_MESSAGES.toString()]: () => Chunk388032.intl.string(Chunk388032.t["6lU9xM"]),
  [Chunk981631.Plq.EMBED_LINKS.toString()]: () => Chunk388032.intl.string(Chunk388032.t["969dEL"]),
  [Chunk981631.Plq.ATTACH_FILES.toString()]: () => Chunk388032.intl.string(Chunk388032.t["3AS4UM"]),
  [Chunk981631.Plq.READ_MESSAGE_HISTORY.toString()]: () => Chunk388032.intl.string(Chunk388032.t.l9ufaR),
  [Chunk981631.Plq.MENTION_EVERYONE.toString()]: () => Chunk388032.intl.string(Chunk388032.t.Y78KGC),
  [Chunk981631.Plq.ADD_REACTIONS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.yEoJAr),
  [Chunk981631.Plq.USE_EXTERNAL_EMOJIS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.BpBGZU),
  [Chunk981631.Plq.USE_EXTERNAL_STICKERS.toString()]: () => Chunk388032.intl.string(Chunk388032.t["UeRs+b"]),
  [Chunk981631.Plq.USE_APPLICATION_COMMANDS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.shbR1a),
  [Chunk981631.Plq.SEND_VOICE_MESSAGES.toString()]: () => Chunk388032.intl.string(Chunk388032.t["+8GStU"]),
  [Chunk981631.Plq.CONNECT.toString()]: () => Chunk388032.intl.string(Chunk388032.t.S0W8Z5),
  [Chunk981631.Plq.SPEAK.toString()]: () => Chunk388032.intl.string(Chunk388032.t["8w1tIR"]),
  [Chunk981631.Plq.MUTE_MEMBERS.toString()]: () => Chunk388032.intl.string(Chunk388032.t["8EI30/"]),
  [Chunk981631.Plq.DEAFEN_MEMBERS.toString()]: () => Chunk388032.intl.string(Chunk388032.t["9L47Fr"]),
  [Chunk981631.Plq.MOVE_MEMBERS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.YtjJPQ),
  [Chunk981631.Plq.USE_VAD.toString()]: () => Chunk388032.intl.string(Chunk388032.t["08zAV7"]),
  [Chunk981631.Plq.PRIORITY_SPEAKER.toString()]: () => Chunk388032.intl.string(Chunk388032.t.BVK71i),
  [Chunk981631.Plq.CREATE_PUBLIC_THREADS.toString()]: () => Chunk388032.intl.string(Chunk388032.t["25rKnX"]),
  [Chunk981631.Plq.CREATE_PRIVATE_THREADS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.QwbTSa),
  [Chunk981631.Plq.SEND_MESSAGES_IN_THREADS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.fTE74g),
  [Chunk981631.Plq.MANAGE_THREADS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.kEqgr7),
  [Chunk981631.Plq.MANAGE_EVENTS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.HIgA5a),
  [Chunk981631.Plq.CREATE_EVENTS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.qyjZua),
  [Chunk981631.Plq.MODERATE_MEMBERS.toString()]: () => Chunk388032.intl.string(Chunk388032.t["7DgVBr"]),
  [Chunk981631.Plq.REQUEST_TO_SPEAK.toString()]: () => Chunk388032.intl.string(Chunk388032.t["5kicT2"]),
  [Chunk981631.Plq.VIEW_GUILD_ANALYTICS.toString()]: () => Chunk388032.intl.string(Chunk388032.t["rQJBE/"]),
  [Chunk981631.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => Chunk388032.intl.string(Chunk388032.t["0lTLTv"]),
  [Chunk981631.Plq.STREAM.toString()]: () => Chunk388032.intl.string(Chunk388032.t.FlNoSV),
  [Chunk981631.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: () => Chunk388032.intl.string(Chunk388032.t.rLSGeh),
  [Chunk981631.Plq.USE_SOUNDBOARD.toString()]: () => Chunk388032.intl.string(Chunk388032.t.Bco7NG),
  [Chunk981631.Plq.USE_EXTERNAL_SOUNDS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.pwaVJ6),
  [Chunk981631.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.VBwkUf),
  [Chunk981631.Plq.SEND_POLLS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.UMQ7Ww),
  [Chunk981631.Plq.USE_EXTERNAL_APPS.toString()]: () => Chunk388032.intl.string(Chunk388032.t.TtA5rK),
  [Chunk981631.Plq.PIN_MESSAGES.toString()]: () => Chunk388032.intl.string(Chunk388032.t.Y5BI39),
  [Chunk981631.Plq.BYPASS_SLOWMODE.toString()]: () => Chunk388032.intl.string(Chunk388032.t.kqcjeV)
};

function c(e) {
  let t = l[e.toString()];
  if (null == t) throw Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
  return t()
}