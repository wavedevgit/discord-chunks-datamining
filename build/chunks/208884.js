/** Chunk was on 96795 **/
/** chunk id: 208884, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  FX: () => d,
  Ny: () => P,
  WV: () => _,
  WW: () => S,
  _u: () => u,
  aW: () => N,
  ih: () => M,
  kv: () => p,
  s4: () => a,
  uu: () => T,
  vq: () => g,
  xU: () => c,
  zO: () => A
}), require("./539854.js"), require("./781311.js");
var Chunk823379 = require("./823379.js"),
  Chunk110259 = require("./110259.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  let i = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return i || (t.permissions = t.permissions.filter(t => {
    let {
      isExperimental: i
    } = t;
    return !i
  })), t
}

function o(t, i) {
  return t.map(t => i[t.toString()])
}

function S(t) {
  var i, n;
  return {
    [r.Pl.VIEW_CHANNEL.toString()]: {
      title: E.intl.string(E.t.uV83yi),
      description: E.t.ybTHLk,
      flag: r.Pl.VIEW_CHANNEL
    },
    [r.Pl.MANAGE_CHANNELS.toString()]: {
      title: E.intl.string(E.t["9qLtWs"]),
      description: E.t.qfJnug,
      flag: r.Pl.MANAGE_CHANNELS
    },
    [r.Pl.MANAGE_ROLES.toString()]: {
      title: E.intl.string(E.t["C8d+oG"]),
      description: E.t.buo9uw,
      flag: r.Pl.MANAGE_ROLES
    },
    [r.Pl.MANAGE_GUILD_EXPRESSIONS.toString()]: {
      title: E.intl.string(E.t.bbuXIn),
      description: E.t["4vb3/6"],
      flag: r.Pl.MANAGE_GUILD_EXPRESSIONS
    },
    [r.Pl.CREATE_GUILD_EXPRESSIONS.toString()]: {
      title: E.intl.string(E.t.HarVuP),
      description: E.t.gkdHvH,
      flag: r.Pl.CREATE_GUILD_EXPRESSIONS
    },
    [r.Pl.VIEW_AUDIT_LOG.toString()]: {
      title: E.intl.string(E.t.fZgLpA),
      description: E.t["0hx75i"],
      flag: r.Pl.VIEW_AUDIT_LOG
    },
    [r.Pl.VIEW_GUILD_ANALYTICS.toString()]: {
      title: E.intl.string(E.t["rQJBE/"]),
      description: E.t.whVKhX,
      flag: r.Pl.VIEW_GUILD_ANALYTICS
    },
    [r.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
      title: E.intl.string(E.t["0lTLTv"]),
      description: E.t.mut6NV,
      flag: r.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS
    },
    [r.Pl.MANAGE_WEBHOOKS.toString()]: {
      title: E.intl.string(E.t["/ADKmM"]),
      description: E.t.LczYqC,
      flag: r.Pl.MANAGE_WEBHOOKS
    },
    [r.Pl.MANAGE_GUILD.toString()]: {
      title: E.intl.string(E.t.QZRcfO),
      description: E.t["KoQe/G"],
      flag: r.Pl.MANAGE_GUILD
    },
    [r.Pl.CREATE_INSTANT_INVITE.toString()]: {
      title: E.intl.string(E.t.zJrgTG),
      description: E.t.PCFOZa,
      flag: r.Pl.CREATE_INSTANT_INVITE
    },
    [r.Pl.CHANGE_NICKNAME.toString()]: {
      title: E.intl.string(E.t.dilOF6),
      description: E.t["b8B++j"],
      flag: r.Pl.CHANGE_NICKNAME
    },
    [r.Pl.MANAGE_NICKNAMES.toString()]: {
      title: E.intl.string(E.t["t+Ct5x"]),
      description: E.t.hTnlMb,
      flag: r.Pl.MANAGE_NICKNAMES
    },
    [r.Pl.KICK_MEMBERS.toString()]: {
      title: t.showMembershipManualApprovalPermissions ? E.intl.string(E.t["9TxXwb"]) : E.intl.string(E.t.pBNv6i),
      description: t.showMembershipManualApprovalPermissions ? E.t.hGBAnw : E.t.rwdPaE,
      flag: r.Pl.KICK_MEMBERS
    },
    [r.Pl.BAN_MEMBERS.toString()]: {
      title: E.intl.string(E.t.oTBA7N),
      description: E.t["OqNY0/"],
      flag: r.Pl.BAN_MEMBERS
    },
    [r.Pl.MODERATE_MEMBERS.toString()]: {
      title: E.intl.string(E.t["+RL6pz"]),
      description: E.t.T6bZsX,
      flag: r.Pl.MODERATE_MEMBERS
    },
    [r.Pl.SEND_MESSAGES.toString()]: {
      title: E.intl.string(E.t.S1VOwd),
      description: E.t.prvWKm,
      flag: r.Pl.SEND_MESSAGES
    },
    [r.Pl.EMBED_LINKS.toString()]: {
      title: E.intl.string(E.t["969dEL"]),
      description: E.t.ChoIiy,
      flag: r.Pl.EMBED_LINKS
    },
    [r.Pl.ATTACH_FILES.toString()]: {
      title: E.intl.string(E.t["3AS4UM"]),
      description: E.t["/87mYH"],
      flag: r.Pl.ATTACH_FILES
    },
    [r.Pl.ADD_REACTIONS.toString()]: {
      title: E.intl.string(E.t.yEoJAr),
      description: E.t.FEYwX7,
      flag: r.Pl.ADD_REACTIONS
    },
    [r.Pl.USE_EXTERNAL_EMOJIS.toString()]: {
      title: E.intl.string(E.t["+bxf3H"]),
      description: E.t.POeVIu,
      flag: r.Pl.USE_EXTERNAL_EMOJIS
    },
    [r.Pl.USE_EXTERNAL_STICKERS.toString()]: {
      title: E.intl.string(E.t.ERNhYf),
      description: E.t.AdXVhI,
      flag: r.Pl.USE_EXTERNAL_STICKERS
    },
    [r.Pl.MENTION_EVERYONE.toString()]: {
      title: t.inGameMentionsExperiment ? E.intl.string(E.t.lEO7Wr) : E.intl.string(E.t.Y78KGC),
      description: t.inGameMentionsExperiment ? E.intl.string(E.t.wdHpIC) : E.intl.string(E.t.ryj6N5),
      flag: r.Pl.MENTION_EVERYONE
    },
    [r.Pl.MANAGE_MESSAGES.toString()]: {
      title: E.intl.string(E.t["6lU9xM"]),
      description: E.t["RXMG/+"],
      flag: r.Pl.MANAGE_MESSAGES
    },
    [r.Pl.PIN_MESSAGES.toString()]: {
      title: E.intl.string(E.t.Y5BI39),
      description: E.t["LN/K3x"],
      flag: r.Pl.PIN_MESSAGES
    },
    [r.Pl.BYPASS_SLOWMODE.toString()]: {
      title: E.intl.string(E.t.kqcjeV),
      description: E.t.S2ZE5c,
      flag: r.Pl.BYPASS_SLOWMODE
    },
    [r.Pl.READ_MESSAGE_HISTORY.toString()]: {
      title: E.intl.string(E.t.l9ufaR),
      description: E.t.rmHPFR,
      flag: r.Pl.READ_MESSAGE_HISTORY
    },
    [r.Pl.SEND_TTS_MESSAGES.toString()]: {
      title: E.intl.string(E.t.mMbwh7),
      description: E.t.D6x8Nr,
      flag: r.Pl.SEND_TTS_MESSAGES
    },
    [r.Pl.USE_APPLICATION_COMMANDS.toString()]: {
      title: E.intl.string(E.t.nkoPOt),
      description: E.t.pJrJ35,
      flag: r.Pl.USE_APPLICATION_COMMANDS
    },
    [r.Pl.USE_EXTERNAL_APPS.toString()]: {
      title: E.intl.string(E.t.TtA5rK),
      description: E.t.mzLoDY,
      flag: r.Pl.USE_EXTERNAL_APPS
    },
    [r.Pl.SEND_VOICE_MESSAGES.toString()]: {
      title: E.intl.string(E.t.WlWSBT),
      description: E.t.pDuyi0,
      flag: r.Pl.SEND_VOICE_MESSAGES
    },
    [r.Pl.SEND_POLLS.toString()]: {
      title: E.intl.string(E.t.UMQ7Ww),
      description: E.t["Xl6W+F"],
      flag: r.Pl.SEND_POLLS
    },
    [r.Pl.CONNECT.toString()]: {
      title: E.intl.string(E.t.S0W8Z5),
      description: E.t["3GCm/f"],
      flag: r.Pl.CONNECT
    },
    [r.Pl.SPEAK.toString()]: {
      title: E.intl.string(E.t["8w1tIR"]),
      description: E.t.y4MncF,
      flag: r.Pl.SPEAK
    },
    [r.Pl.STREAM.toString()]: {
      title: E.intl.string(E.t.FlNoSV),
      description: E.t["6Z0j9v"],
      flag: r.Pl.STREAM
    },
    [r.Pl.USE_EMBEDDED_ACTIVITIES.toString()]: {
      title: E.intl.string(E.t.rLSGeh),
      description: E.t.BEqU5H,
      flag: r.Pl.USE_EMBEDDED_ACTIVITIES
    },
    [r.Pl.USE_SOUNDBOARD.toString()]: {
      title: E.intl.string(E.t.Bco7NG),
      description: null != (i = null == t ? true : t.SOUNDBOARD_DESCRIPTION) ? i : E.t["+8p+fc"],
      flag: r.Pl.USE_SOUNDBOARD
    },
    [r.Pl.USE_EXTERNAL_SOUNDS.toString()]: {
      title: E.intl.string(E.t.pwaVJ6),
      description: E.t.qDpPtX,
      flag: r.Pl.USE_EXTERNAL_SOUNDS
    },
    [r.Pl.USE_VAD.toString()]: {
      title: E.intl.string(E.t["08zAV7"]),
      description: E.t["7CHjmc"],
      flag: r.Pl.USE_VAD
    },
    [r.Pl.PRIORITY_SPEAKER.toString()]: {
      title: E.intl.string(E.t.BVK71i),
      description: null != (n = null == t ? true : t.PRIORITY_SPEAKER_DESCRIPTION) ? n : E.t.OJkrro,
      flag: r.Pl.PRIORITY_SPEAKER
    },
    [r.Pl.MUTE_MEMBERS.toString()]: {
      title: E.intl.string(E.t["8EI30/"]),
      description: E.t.PIhGA1,
      flag: r.Pl.MUTE_MEMBERS
    },
    [r.Pl.DEAFEN_MEMBERS.toString()]: {
      title: E.intl.string(E.t["9L47Fr"]),
      description: E.t["FQr3+t"],
      flag: r.Pl.DEAFEN_MEMBERS
    },
    [r.Pl.MOVE_MEMBERS.toString()]: {
      title: E.intl.string(E.t.YtjJPQ),
      description: E.t.SEe0Gp,
      flag: r.Pl.MOVE_MEMBERS
    },
    [r.Pl.REQUEST_TO_SPEAK.toString()]: {
      title: E.intl.string(E.t["5kicT2"]),
      description: E.t["yNE+Q5"],
      flag: r.Pl.REQUEST_TO_SPEAK,
      isExperimental: true
    },
    [r.Pl.ADMINISTRATOR.toString()]: {
      title: E.intl.string(E.t.PGvZqX),
      description: "string" == typeof E.t.UJxMrK ? E.t.UJxMrK : E.intl.format(E.t.UJxMrK, {}),
      flag: r.Pl.ADMINISTRATOR
    },
    [r.Pl.MANAGE_EVENTS.toString()]: {
      title: E.intl.string(E.t.HIgA5a),
      description: E.t["SL+qgG"],
      flag: r.Pl.MANAGE_EVENTS
    },
    [r.Pl.CREATE_EVENTS.toString()]: {
      title: E.intl.string(E.t.qyjZua),
      description: E.t.bQEFJZ,
      flag: r.Pl.CREATE_EVENTS
    },
    [r.Pl.MANAGE_THREADS.toString()]: {
      title: E.intl.string(E.t.QKe7Q3),
      description: E.t.QAxIIt,
      flag: r.Pl.MANAGE_THREADS
    },
    [r.Pl.CREATE_PUBLIC_THREADS.toString()]: {
      title: E.intl.string(E.t["25rKnX"]),
      description: E.t.ODCYj8,
      flag: r.Pl.CREATE_PUBLIC_THREADS
    },
    [r.Pl.CREATE_PRIVATE_THREADS.toString()]: {
      title: E.intl.string(E.t.QwbTSa),
      description: E.t["G/cc3l"],
      flag: r.Pl.CREATE_PRIVATE_THREADS
    },
    [r.Pl.SEND_MESSAGES_IN_THREADS.toString()]: {
      title: E.intl.string(E.t["5QlVGy"]),
      description: E.t.C2ZPE3,
      flag: r.Pl.SEND_MESSAGES_IN_THREADS
    },
    [r.Pl.SET_VOICE_CHANNEL_STATUS.toString()]: {
      title: E.intl.string(E.t.VBwkUf),
      description: E.t.C6BzXx,
      flag: r.Pl.SET_VOICE_CHANNEL_STATUS
    }
  }
}

function a(t) {
  let i, n = S(t),
    e = [function(t, i) {
      let n = [r.Pl.VIEW_CHANNEL, r.Pl.MANAGE_CHANNELS, r.Pl.MANAGE_ROLES, r.Pl.CREATE_GUILD_EXPRESSIONS, r.Pl.MANAGE_GUILD_EXPRESSIONS, r.Pl.VIEW_AUDIT_LOG, r.Pl.VIEW_GUILD_ANALYTICS];
      return i.showCreatorMonetizationAnalyticsPermission && n.push(r.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS), n.push(r.Pl.MANAGE_WEBHOOKS), n.push(r.Pl.MANAGE_GUILD), s({
        title: E.intl.string(E.t["mYck+B"]),
        permissions: o(n, t)
      })
    }(n, t), function(t) {
      let i = [r.Pl.CREATE_INSTANT_INVITE, r.Pl.CHANGE_NICKNAME, r.Pl.MANAGE_NICKNAMES, r.Pl.KICK_MEMBERS, r.Pl.BAN_MEMBERS, r.Pl.MODERATE_MEMBERS];
      return s({
        title: E.intl.string(E.t.Ny49TN),
        permissions: o(i, t)
      })
    }(n), (i = [r.Pl.SEND_MESSAGES, r.Pl.SEND_MESSAGES_IN_THREADS, r.Pl.CREATE_PUBLIC_THREADS, r.Pl.CREATE_PRIVATE_THREADS, r.Pl.EMBED_LINKS, r.Pl.ATTACH_FILES, r.Pl.ADD_REACTIONS, r.Pl.USE_EXTERNAL_EMOJIS, r.Pl.USE_EXTERNAL_STICKERS, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.MENTION_EVERYONE, r.Pl.MANAGE_MESSAGES, r.Pl.PIN_MESSAGES, r.Pl.BYPASS_SLOWMODE, r.Pl.MANAGE_THREADS, r.Pl.READ_MESSAGE_HISTORY, r.Pl.SEND_TTS_MESSAGES, r.Pl.SEND_VOICE_MESSAGES, r.Pl.SEND_POLLS], t.inSoundmojiExperiment || (i = i.filter(t => t !== r.Pl.USE_EXTERNAL_SOUNDS)), t.inBypassSlowmodePermissionExperiment || (i = i.filter(t => t !== r.Pl.BYPASS_SLOWMODE)), s({
      title: E.intl.string(E.t.cKobO5),
      permissions: o(i, n)
    })), function(t, i) {
      let n = [r.Pl.CONNECT, r.Pl.SPEAK, r.Pl.STREAM, r.Pl.USE_SOUNDBOARD, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.USE_VAD, r.Pl.PRIORITY_SPEAKER, r.Pl.MUTE_MEMBERS, r.Pl.DEAFEN_MEMBERS, r.Pl.MOVE_MEMBERS, r.Pl.SET_VOICE_CHANNEL_STATUS];
      return s({
        title: E.intl.string(E.t["46Ra1b"]),
        permissions: o(n, t)
      })
    }(n, 0), function(t) {
      let i = [r.Pl.USE_APPLICATION_COMMANDS, r.Pl.USE_EMBEDDED_ACTIVITIES, r.Pl.USE_EXTERNAL_APPS];
      return s({
        title: E.intl.string(E.t["rrh/W6"]),
        permissions: o(i, t)
      })
    }(n)];
  return t.showStageChannelPermissions && e.push(s({
    title: E.intl.string(E.t.yniauk),
    permissions: o([r.Pl.REQUEST_TO_SPEAK], n)
  }, t.showExperimental)), e.push(s({
    title: E.intl.string(E.t.b8lplT),
    permissions: o([r.Pl.CREATE_EVENTS, r.Pl.MANAGE_EVENTS], n)
  }, t.showExperimental)), e.push(s({
    title: E.intl.string(E.t["3uI5CX"]),
    permissions: o([r.Pl.ADMINISTRATOR], n)
  })), e
}

function A(t, i) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
    showManageWebhooks: true
  };
  return {
    title: i,
    permissions: o((null == n ? true : n.showManageWebhooks) ? [r.Pl.VIEW_CHANNEL, r.Pl.MANAGE_CHANNELS, r.Pl.MANAGE_ROLES, r.Pl.MANAGE_WEBHOOKS] : [r.Pl.VIEW_CHANNEL, r.Pl.MANAGE_CHANNELS, r.Pl.MANAGE_ROLES], t)
  }
}

function P(t, i) {
  return {
    title: i,
    permissions: o([r.Pl.CREATE_INSTANT_INVITE], t)
  }
}

function g(t, i, n) {
  let e = [r.Pl.SEND_MESSAGES, r.Pl.SEND_MESSAGES_IN_THREADS, r.Pl.CREATE_PUBLIC_THREADS, r.Pl.CREATE_PRIVATE_THREADS, r.Pl.EMBED_LINKS, r.Pl.ATTACH_FILES, r.Pl.ADD_REACTIONS, r.Pl.USE_EXTERNAL_EMOJIS, r.Pl.USE_EXTERNAL_STICKERS, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.MENTION_EVERYONE, r.Pl.MANAGE_MESSAGES, r.Pl.PIN_MESSAGES, r.Pl.BYPASS_SLOWMODE, r.Pl.MANAGE_THREADS, r.Pl.READ_MESSAGE_HISTORY, r.Pl.SEND_TTS_MESSAGES, r.Pl.SEND_VOICE_MESSAGES, r.Pl.SEND_POLLS];
  return n.inSoundmojiExperiment || (e = e.filter(t => t !== r.Pl.USE_EXTERNAL_SOUNDS)), n.showPrivateThreads && n.showCreateThreads || (e = e.filter(t => t !== r.Pl.CREATE_PRIVATE_THREADS)), n.showCreateThreads || (e = e.filter(t => t !== r.Pl.CREATE_PUBLIC_THREADS)), n.inBypassSlowmodePermissionExperiment || (e = e.filter(t => t !== r.Pl.BYPASS_SLOWMODE)), {
    title: i,
    description: n.sectionDescription,
    permissions: o(e, t)
  }
}

function _(t, i) {
  return {
    title: i,
    permissions: o([r.Pl.CONNECT, r.Pl.SPEAK, r.Pl.STREAM, r.Pl.USE_SOUNDBOARD, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.USE_VAD, r.Pl.PRIORITY_SPEAKER, r.Pl.MUTE_MEMBERS, r.Pl.DEAFEN_MEMBERS, r.Pl.MOVE_MEMBERS, r.Pl.SET_VOICE_CHANNEL_STATUS], t)
  }
}

function N(t, i, n) {
  let e = [r.Pl.SEND_MESSAGES, r.Pl.EMBED_LINKS, r.Pl.ATTACH_FILES, r.Pl.ADD_REACTIONS, r.Pl.USE_EXTERNAL_EMOJIS, r.Pl.USE_EXTERNAL_STICKERS, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.MENTION_EVERYONE, r.Pl.MANAGE_MESSAGES, r.Pl.BYPASS_SLOWMODE, r.Pl.READ_MESSAGE_HISTORY, r.Pl.SEND_TTS_MESSAGES, r.Pl.SEND_VOICE_MESSAGES, r.Pl.SEND_POLLS];
  return n.inSoundmojiExperiment || (e = e.filter(t => t !== r.Pl.USE_EXTERNAL_SOUNDS)), n.inBypassSlowmodePermissionExperiment || (e = e.filter(t => t !== r.Pl.BYPASS_SLOWMODE)), {
    title: i,
    description: n.sectionDescription,
    permissions: o(e, t)
  }
}

function c(t, i) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
    showActivities: true
  };
  return {
    title: i,
    permissions: o([r.Pl.USE_APPLICATION_COMMANDS, n.showActivities ? r.Pl.USE_EMBEDDED_ACTIVITIES : null, r.Pl.USE_EXTERNAL_APPS].filter(e.lm), t)
  }
}

function d(t, i, n) {
  return {
    title: i,
    permissions: o(n ? [r.Pl.CONNECT, r.Pl.STREAM, r.Pl.MUTE_MEMBERS, r.Pl.MOVE_MEMBERS] : [r.Pl.CONNECT, r.Pl.MUTE_MEMBERS, r.Pl.MOVE_MEMBERS], t)
  }
}

function p(t, i) {
  return {
    title: i,
    permissions: o([r.Pl.REQUEST_TO_SPEAK, r.Pl.MENTION_EVERYONE], t)
  }
}

function T(t, i) {
  return {
    title: i,
    permissions: o([r.Pl.CREATE_EVENTS, r.Pl.MANAGE_EVENTS], t)
  }
}

function u(t) {
  return null == t ? t : "string" == typeof t ? t.trim() : "function" == typeof t ? E.intl.format(t, {}) : t
}

function M(t, i, n) {
  if (l.Z.getCurrentConfig({
      guildId: n,
      location: "getMigrationWarning"
    }).enabled) return i ? t === r.Pl.MANAGE_CHANNELS || t === r.Pl.MANAGE_THREADS ? E.intl.string(E.t.JD3HnA) : t === r.Pl.MANAGE_MESSAGES ? E.intl.string(E.t["62sGhW"]) : null : t === r.Pl.MANAGE_MESSAGES ? E.intl.string(E.t.bU1J1V) : null;
  return i ? t === r.Pl.MANAGE_CHANNELS || t === r.Pl.MANAGE_THREADS ? E.intl.string(E.t.Han3PH) : t === r.Pl.MANAGE_MESSAGES ? E.intl.string(E.t.zSc2tb) : null : t === r.Pl.MANAGE_MESSAGES ? E.intl.string(E.t["2XIdPp"]) : null
}