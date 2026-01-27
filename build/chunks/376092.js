/** Chunk was on web.js **/
/** chunk id: 376092, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F7: () => s,
  Q: () => o,
  hx: () => c
}), require("./65821.js");
var Chunk136722 = require("./136722.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let o = [Chunk652215.xBc.ADMINISTRATOR, Chunk652215.xBc.MANAGE_GUILD, Chunk652215.xBc.MANAGE_ROLES, Chunk652215.xBc.MANAGE_CHANNELS, Chunk652215.xBc.KICK_MEMBERS, Chunk652215.xBc.BAN_MEMBERS, Chunk652215.xBc.CREATE_INSTANT_INVITE, Chunk652215.xBc.MANAGE_NICKNAMES, Chunk652215.xBc.CHANGE_NICKNAME, Chunk652215.xBc.MANAGE_GUILD_EXPRESSIONS, Chunk652215.xBc.CREATE_GUILD_EXPRESSIONS, Chunk652215.xBc.MANAGE_WEBHOOKS, Chunk652215.xBc.VIEW_AUDIT_LOG, Chunk652215.xBc.VIEW_CHANNEL, Chunk652215.xBc.MANAGE_EVENTS, Chunk652215.xBc.CREATE_EVENTS, Chunk652215.xBc.MODERATE_MEMBERS, Chunk652215.xBc.VIEW_GUILD_ANALYTICS, Chunk652215.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS, Chunk652215.xBc.USE_EXTERNAL_APPS, Chunk652215.xBc.SEND_MESSAGES, Chunk652215.xBc.SEND_MESSAGES_IN_THREADS, Chunk652215.xBc.CREATE_PUBLIC_THREADS, Chunk652215.xBc.CREATE_PRIVATE_THREADS, Chunk652215.xBc.SEND_TTS_MESSAGES, Chunk652215.xBc.MANAGE_MESSAGES, Chunk652215.xBc.MANAGE_THREADS, Chunk652215.xBc.EMBED_LINKS, Chunk652215.xBc.ATTACH_FILES, Chunk652215.xBc.READ_MESSAGE_HISTORY, Chunk652215.xBc.MENTION_EVERYONE, Chunk652215.xBc.ADD_REACTIONS, Chunk652215.xBc.USE_EXTERNAL_EMOJIS, Chunk652215.xBc.USE_EXTERNAL_STICKERS, Chunk652215.xBc.USE_APPLICATION_COMMANDS, Chunk652215.xBc.SEND_VOICE_MESSAGES, Chunk652215.xBc.SEND_POLLS, Chunk652215.xBc.PIN_MESSAGES, Chunk652215.xBc.BYPASS_SLOWMODE, Chunk652215.xBc.CONNECT, Chunk652215.xBc.SPEAK, Chunk652215.xBc.MUTE_MEMBERS, Chunk652215.xBc.DEAFEN_MEMBERS, Chunk652215.xBc.MOVE_MEMBERS, Chunk652215.xBc.USE_VAD, Chunk652215.xBc.PRIORITY_SPEAKER, Chunk652215.xBc.REQUEST_TO_SPEAK, Chunk652215.xBc.STREAM, Chunk652215.xBc.USE_EMBEDDED_ACTIVITIES, Chunk652215.xBc.USE_SOUNDBOARD, Chunk652215.xBc.USE_EXTERNAL_SOUNDS, Chunk652215.xBc.SET_VOICE_CHANNEL_STATUS];

function s(e) {
  return Object.values(i.xBc).some(t => r.zy(e, t) && !o.includes(t))
}
let l = {
  [Chunk652215.xBc.ADMINISTRATOR.toString()]: () => a.intl.string(a.t.PGvZqX),
  [Chunk652215.xBc.MANAGE_GUILD.toString()]: () => a.intl.string(a.t.QZRcfO),
  [Chunk652215.xBc.MANAGE_ROLES.toString()]: () => a.intl.string(a.t["C8d+oG"]),
  [Chunk652215.xBc.MANAGE_CHANNELS.toString()]: () => a.intl.string(a.t["9qLtWs"]),
  [Chunk652215.xBc.KICK_MEMBERS.toString()]: () => a.intl.string(a.t.pBNv6i),
  [Chunk652215.xBc.BAN_MEMBERS.toString()]: () => a.intl.string(a.t.oTBA7N),
  [Chunk652215.xBc.CREATE_INSTANT_INVITE.toString()]: () => a.intl.string(a.t.zJrgTG),
  [Chunk652215.xBc.MANAGE_NICKNAMES.toString()]: () => a.intl.string(a.t["t+Ct5x"]),
  [Chunk652215.xBc.CHANGE_NICKNAME.toString()]: () => a.intl.string(a.t.dilOF6),
  [Chunk652215.xBc.MANAGE_GUILD_EXPRESSIONS.toString()]: () => a.intl.string(a.t.bbuXIn),
  [Chunk652215.xBc.CREATE_GUILD_EXPRESSIONS.toString()]: () => a.intl.string(a.t.HarVuP),
  [Chunk652215.xBc.MANAGE_WEBHOOKS.toString()]: () => a.intl.string(a.t["/ADKmM"]),
  [Chunk652215.xBc.VIEW_AUDIT_LOG.toString()]: () => a.intl.string(a.t.fZgLpA),
  [Chunk652215.xBc.VIEW_CHANNEL.toString()]: () => a.intl.string(a.t.uV83yi),
  [Chunk652215.xBc.SEND_MESSAGES.toString()]: () => a.intl.string(a.t.T32rkC),
  [Chunk652215.xBc.SEND_TTS_MESSAGES.toString()]: () => a.intl.string(a.t.Mg7bku),
  [Chunk652215.xBc.MANAGE_MESSAGES.toString()]: () => a.intl.string(a.t["6lU9xM"]),
  [Chunk652215.xBc.EMBED_LINKS.toString()]: () => a.intl.string(a.t["969dEL"]),
  [Chunk652215.xBc.ATTACH_FILES.toString()]: () => a.intl.string(a.t["3AS4UM"]),
  [Chunk652215.xBc.READ_MESSAGE_HISTORY.toString()]: () => a.intl.string(a.t.l9ufaR),
  [Chunk652215.xBc.MENTION_EVERYONE.toString()]: () => a.intl.string(a.t.Y78KGC),
  [Chunk652215.xBc.ADD_REACTIONS.toString()]: () => a.intl.string(a.t.yEoJAr),
  [Chunk652215.xBc.USE_EXTERNAL_EMOJIS.toString()]: () => a.intl.string(a.t.BpBGZU),
  [Chunk652215.xBc.USE_EXTERNAL_STICKERS.toString()]: () => a.intl.string(a.t["UeRs+b"]),
  [Chunk652215.xBc.USE_APPLICATION_COMMANDS.toString()]: () => a.intl.string(a.t.shbR1a),
  [Chunk652215.xBc.SEND_VOICE_MESSAGES.toString()]: () => a.intl.string(a.t["+8GStU"]),
  [Chunk652215.xBc.CONNECT.toString()]: () => a.intl.string(a.t.S0W8Z5),
  [Chunk652215.xBc.SPEAK.toString()]: () => a.intl.string(a.t["8w1tIR"]),
  [Chunk652215.xBc.MUTE_MEMBERS.toString()]: () => a.intl.string(a.t["8EI30/"]),
  [Chunk652215.xBc.DEAFEN_MEMBERS.toString()]: () => a.intl.string(a.t["9L47Fr"]),
  [Chunk652215.xBc.MOVE_MEMBERS.toString()]: () => a.intl.string(a.t.YtjJPQ),
  [Chunk652215.xBc.USE_VAD.toString()]: () => a.intl.string(a.t["08zAV7"]),
  [Chunk652215.xBc.PRIORITY_SPEAKER.toString()]: () => a.intl.string(a.t.BVK71i),
  [Chunk652215.xBc.CREATE_PUBLIC_THREADS.toString()]: () => a.intl.string(a.t["25rKnX"]),
  [Chunk652215.xBc.CREATE_PRIVATE_THREADS.toString()]: () => a.intl.string(a.t.QwbTSa),
  [Chunk652215.xBc.SEND_MESSAGES_IN_THREADS.toString()]: () => a.intl.string(a.t.fTE74g),
  [Chunk652215.xBc.MANAGE_THREADS.toString()]: () => a.intl.string(a.t.kEqgr7),
  [Chunk652215.xBc.MANAGE_EVENTS.toString()]: () => a.intl.string(a.t.HIgA5a),
  [Chunk652215.xBc.CREATE_EVENTS.toString()]: () => a.intl.string(a.t.qyjZua),
  [Chunk652215.xBc.MODERATE_MEMBERS.toString()]: () => a.intl.string(a.t["7DgVBr"]),
  [Chunk652215.xBc.REQUEST_TO_SPEAK.toString()]: () => a.intl.string(a.t["5kicT2"]),
  [Chunk652215.xBc.VIEW_GUILD_ANALYTICS.toString()]: () => a.intl.string(a.t["rQJBE/"]),
  [Chunk652215.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => a.intl.string(a.t["0lTLTv"]),
  [Chunk652215.xBc.STREAM.toString()]: () => a.intl.string(a.t.FlNoSV),
  [Chunk652215.xBc.USE_EMBEDDED_ACTIVITIES.toString()]: () => a.intl.string(a.t.rLSGeh),
  [Chunk652215.xBc.USE_SOUNDBOARD.toString()]: () => a.intl.string(a.t.Bco7NG),
  [Chunk652215.xBc.USE_EXTERNAL_SOUNDS.toString()]: () => a.intl.string(a.t.pwaVJ6),
  [Chunk652215.xBc.SET_VOICE_CHANNEL_STATUS.toString()]: () => a.intl.string(a.t.VBwkUf),
  [Chunk652215.xBc.SEND_POLLS.toString()]: () => a.intl.string(a.t.UMQ7Ww),
  [Chunk652215.xBc.USE_EXTERNAL_APPS.toString()]: () => a.intl.string(a.t.TtA5rK),
  [Chunk652215.xBc.PIN_MESSAGES.toString()]: () => a.intl.string(a.t.Y5BI39),
  [Chunk652215.xBc.BYPASS_SLOWMODE.toString()]: () => a.intl.string(a.t.kqcjeV)
};

function c(e) {
  let t = l[e.toString()];
  if (null == t) throw Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
  return t()
}