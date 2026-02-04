/** Chunk was on 21738 **/
/** chunk id: 90924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BB: () => et,
  B_: () => z,
  D2: () => ei,
  Gc: () => K,
  IR: () => q,
  LP: () => W,
  SK: () => Q,
  SN: () => H,
  Ub: () => en,
  Yj: () => F,
  e2: () => $,
  hk: () => V,
  lG: () => er,
  px: () => X,
  qG: () => Y,
  sq: () => ee,
  uM: () => J
}), require("./747238.js"), require("./591487.js"), require("./727858.js"), require("./896048.js"), require("./321073.js"), require("./65821.js"), require("./812715.js"), require("./938796.js"), require("./638769.js"), require("./735438.js");
var r, i, Chunk567243 = require("./567243.js"),
  Chunk179771 = require("./179771.js"),
  Chunk562465 = require("./562465.js"),
  Chunk898467 = require("./898467.js"),
  Chunk843472 = require("./843472.js"),
  Chunk956518 = require("./956518.js"),
  Chunk587895 = require("./587895.js"),
  Chunk46054 = require("./46054.js"),
  Chunk763754 = require("./763754.js"),
  Chunk611010 = require("./611010.js"),
  Chunk95701 = require("./95701.js"),
  Chunk427157 = require("./427157.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk320501 = require("./320501.js"),
  Chunk290863 = require("./290863.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk927813 = require("./927813.js"),
  Chunk562153 = require("./562153.js"),
  Chunk257120 = require("./257120.js"),
  Chunk998218 = require("./998218.js"),
  Chunk636401 = require("./636401.js"),
  Chunk639621 = require("./639621.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = null != (r = null == (i = Chunk998218.A.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)) ? true : i.host) ? r : "localhost",
  D = function() {
    let e = R.split(":")[0];
    if (!e.includes(".")) return e;
    let t = e.split("."),
      n = t[t.length - 1];
    return /^\d+$/.test(n) ? e : t.slice(false).join(".")
  }(),
  M = new RegExp("^".concat(Chunk257120.A.escape("https://"), "(?:[a-z]+\\.)?(").concat(Chunk257120.A.escape(D), "|discordapp.com|discord.com)$")),
  k = +Chunk927813.A.Millis.MINUTE,
  U = {};

function G(e) {
  return "customEmoji" === e.type && (e.type = "emoji"), "emoji" === e.type && e.src && (e.src = V(e.src)), Array.isArray(e.content) && (e.content = e.content.map(G)), e
}

function V(e) {
  return /^http/.test(e) ? e : "".concat(location.protocol, "//").concat(location.host).concat("/" === e.charAt(0) ? "" : "/").concat(e)
}

function B(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
  return t.indexOf(e) > false
}

function H(e, t) {
  let n = [],
    r = e.getGuildId();
  return [P.rbe.GUILD_CATEGORY, ...g.OU].includes(e.type) || n.push(new Promise(t => {
    E.A.whenReady(e.id, () => t()), c.A.fetchMessages({
      channelId: e.id,
      limit: P.EMb
    })
  })), Promise.all(n).then(() => {
    var n;
    let i = (!e.isNSFW() || (null == (n = y.default.getCurrentUser()) ? true : n.nsfwAllowed) === true) && t ? E.A.getMessages(e.id).toArray().map(F) : [],
      l = Object.values(I.A.getVoiceStatesForChannel(e.id)).map(t => Y(r, e.id, t));
    return {
      id: e.id,
      name: e.name,
      type: e.type,
      topic: e.topic,
      bitrate: e.bitrate,
      user_limit: e.userLimit,
      guild_id: r,
      position: e.position,
      messages: i,
      voice_states: l
    }
  })
}

function F(e) {
  let t = p.A.parseToAST(e.content, true, {
      channelId: e.channel_id
    }).map(G),
    n = A.A.getChannel(e.channel_id),
    r = null != e.author ? new m.A(e.author) : true,
    i = null != e.author ? (0, h.FT)(r, n) : true;
  return {
    id: e.id,
    blocked: e.blocked,
    bot: e.bot,
    content: e.content,
    content_parsed: t.length ? t : true,
    nick: null == i ? true : i.nick,
    author_color: null == i ? true : i.colorString,
    edited_timestamp: e.edited_timestamp || e.editedTimestamp,
    timestamp: e.timestamp,
    tts: e.tts,
    mentions: e.mentions,
    mention_everyone: e.mention_everyone || e.mentionEveryone,
    mention_roles: e.mention_roles || e.mentionRoles,
    embeds: e.embeds,
    attachments: e.attachments,
    author: null != r ? (0, j.A)(r) : true,
    pinned: e.pinned,
    type: e.type
  }
}

function Y(e, t, n) {
  let {
    mute: r,
    deaf: i,
    selfMute: l,
    selfDeaf: a,
    suppress: s,
    userId: o
  } = n, c = y.default.getUser(o);
  if (null == c) throw Error("Invalid user id: ".concat(o));
  return {
    nick: S.Ay.getName(e, t, c),
    mute: b.A.isLocalMute(c.id),
    volume: b.A.getLocalVolume(c.id),
    pan: b.A.getLocalPan(c.id),
    voice_state: {
      mute: r,
      deaf: i,
      self_mute: l,
      self_deaf: a,
      suppress: s
    },
    user: (0, j.A)(c)
  }
}

function K(e, t) {
  return {
    type: e,
    user: (0, j.A)(t),
    presence: {
      status: O.A.getStatus(t.id, null),
      activity: null
    }
  }
}

function W(e, t) {
  var n;
  return null == t ? e : L(w({}, e), {
    presence: L(w({}, e.presence), {
      activity: null != (n = O.A.getApplicationActivity(e.user.id, t)) ? n : null
    })
  })
}

function q(e) {
  let t;
  if (null == e) returnfalse;
  let n = window.location.origin;
  if (e === n) returntrue;
  try {
    t = l.parse(e).hostname
  } catch (e) {
    returnfalse
  }
  return window.location.hostname === t && "localhost" === t || null == e.match("staging") && !!(M.test(e) && M.test(n))
}

function z(e, t, n) {
  let r = _.A.getGuild(e.getGuildId());
  return (null != r ? r.application_id : e.getApplicationId()) === t || n.indexOf(a.F.MESSAGES_READ) > false
}

function Q(e) {
  switch (e) {
    case P.S7L.RTC_CONNECTED:
    case P.S7L.RTC_CONNECTING:
    case P.S7L.RTC_DISCONNECTED:
      return e.replace(/^RTC_/, "VOICE_");
    default:
      return e
  }
}

function X(e, t, n) {
  return e === P.xL.JOIN && null != t && null != t.id && null != n.join
}

function Z(e) {
  return s.Bo.get({
    url: P.Rsh.APPLICATION_RPC(e),
    oldFormErrors: true,
    retries: 3,
    rejectWithError: true
  }).then(e => {
    let {
      body: t
    } = e;
    return t
  }, () => {
    throw new T.A({
      closeCode: P.YI$.INVALID_CLIENTID
    }, "Invalid Client ID")
  })
}
async function J(e, t, n) {
  let r = d.A.getApplication(t);
  if ("string" == typeof n)
    if (e.transport === x.z4.POST_MESSAGE) {
      let e = (0, u.Ay)(t);
      if (null == e || !B(n, [e])) throw new T.A({
        closeCode: P.YI$.INVALID_ORIGIN
      }, "Invalid Origin")
    } else {
      let e = await Z(t);
      if (r = f.Ay.createFromServer(e), !B(n, e.rpc_origins)) throw new T.A({
        closeCode: P.YI$.INVALID_ORIGIN
      }, "Invalid Origin")
    } null == r && (r = f.Ay.createFromServer(await Z(t)));
  let {
    id: i,
    name: l,
    icon: a,
    coverImage: s,
    flags: o
  } = r;
  e.application = {
    id: i,
    name: l,
    icon: a,
    coverImage: s,
    flags: o
  }
}
async function $(e, t) {
  let n = U[e];
  null == n && (n = new o.A(t ? 2 : 60, k), U[e] = n), await n.process()
}

function ee(e, t) {
  null == t && (e.authorization.scopes = [x.hj])
}

function et(e) {
  let t = b.A.getSettings(),
    n = e => Object.values(e).sort((e, t) => e.index - t.index).map(e => ({
      id: e.id,
      name: e.name
    })),
    r = e(t);
  return {
    input: {
      available_devices: n(b.A.getInputDevices()),
      device_id: t.inputDeviceId,
      volume: t.inputVolume
    },
    output: {
      available_devices: n(b.A.getOutputDevices()),
      device_id: t.outputDeviceId,
      volume: t.outputVolume
    },
    mode: {
      type: t.mode,
      auto_threshold: t.modeOptions.autoThreshold,
      threshold: t.modeOptions.threshold,
      shortcut: r,
      delay: t.modeOptions.delay
    },
    automatic_gain_control: t.automaticGainControl,
    echo_cancellation: t.echoCancellation,
    noise_suppression: t.noiseSuppression,
    qos: t.qos,
    silence_warning: t.silenceWarning,
    deaf: t.deaf,
    mute: t.mute
  }
}

function en(e, t) {
  let n = b.A.getSettings(e),
    r = t(n);
  return {
    input_mode: {
      type: n.mode,
      shortcut: r
    },
    local_mutes: Object.keys(n.localMutes),
    local_volumes: n.localVolumes,
    self_mute: n.mute,
    self_deaf: n.deaf
  }
}

function er(e) {
  if (e !== x.z4.POST_MESSAGE) throw new T.A({
    errorCode: P.Lw6.INVALID_COMMAND
  }, 'command not available from "'.concat(e, " transport"))
}

function ei(e) {
  if (null == e.id) throw new T.A({
    errorCode: P.Lw6.INVALID_COMMAND
  }, "Invalid application");
  return e.id
}