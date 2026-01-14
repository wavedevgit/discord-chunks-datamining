/** Chunk was on 1272 **/
/** chunk id: 914946, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FJ: () => en,
  RE: () => G,
  T5: () => B,
  Xb: () => V,
  YK: () => ee,
  YS: () => X,
  _J: () => z,
  _f: () => ei,
  aE: () => F,
  bu: () => er,
  kb: () => Y,
  s9: () => W,
  t9: () => Q,
  tr: () => et,
  vv: () => $,
  zM: () => K,
  zy: () => q
}), require("./35282.js"), require("./413496.js"), require("./433524.js"), require("./388685.js"), require("./539854.js"), require("./415506.js"), require("./704826.js"), require("./997841.js"), require("./642613.js"), require("./392711.js");
var r, i, Chunk729594 = require("./729594.js"),
  Chunk243814 = require("./243814.js"),
  Chunk544891 = require("./544891.js"),
  Chunk63023 = require("./63023.js"),
  Chunk904245 = require("./904245.js"),
  Chunk155268 = require("./155268.js"),
  Chunk812206 = require("./812206.js"),
  Chunk454585 = require("./454585.js"),
  Chunk739566 = require("./739566.js"),
  Chunk973616 = require("./973616.js"),
  Chunk131704 = require("./131704.js"),
  Chunk598077 = require("./598077.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk375954 = require("./375954.js"),
  Chunk158776 = require("./158776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk70956 = require("./70956.js"),
  Chunk5192 = require("./5192.js"),
  Chunk226951 = require("./226951.js"),
  Chunk591759 = require("./591759.js"),
  Chunk996106 = require("./996106.js"),
  Chunk863141 = require("./863141.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");

function Z(e) {
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

function w(e, t) {
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
let L = null != (i = null == (r = Chunk591759.Z.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT)) ? true : r.host) ? i : "localhost",
  R = function() {
    let e = L.split(":")[0];
    if (!e.includes(".")) return e;
    let t = e.split("."),
      n = t[t.length - 1];
    return /^\d+$/.test(n) ? e : t.slice(false).join(".")
  }(),
  D = new RegExp("^".concat(Chunk226951.Z.escape("https://"), "(?:[a-z]+\\.)?(").concat(Chunk226951.Z.escape(R), "|discordapp.com|discord.com)$")),
  M = +Chunk70956.Z.Millis.MINUTE,
  k = {};

function U(e) {
  return "customEmoji" === e.type && (e.type = "emoji"), "emoji" === e.type && e.src && (e.src = G(e.src)), Array.isArray(e.content) && (e.content = e.content.map(U)), e
}

function G(e) {
  return /^http/.test(e) ? e : "".concat(location.protocol, "//").concat(location.host).concat("/" === e.charAt(0) ? "" : "/").concat(e)
}

function H(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
  return t.indexOf(e) > false
}

function B(e, t) {
  let n = [],
    r = e.getGuildId();
  return [A.d4z.GUILD_CATEGORY, ...h.tx].includes(e.type) || n.push(new Promise(t => {
    O.Z.whenReady(e.id, () => t()), c.Z.fetchMessages({
      channelId: e.id,
      limit: A.AQB
    })
  })), Promise.all(n).then(() => {
    var n;
    let i = (!e.isNSFW() || (null == (n = I.default.getCurrentUser()) ? true : n.nsfwAllowed) === true) && t ? O.Z.getMessages(e.id).toArray().map(V) : [],
      l = Object.values(y.Z.getVoiceStatesForChannel(e.id)).map(t => F(r, e.id, t));
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

function V(e) {
  let t = p.Z.parseToAST(e.content, true, {
      channelId: e.channel_id
    }).map(U),
    n = b.Z.getChannel(e.channel_id),
    r = null != e.author ? new m.Z(e.author) : true,
    i = null != e.author ? (0, f.ij)(r, n) : true;
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
    author: null != r ? (0, x.Z)(r) : true,
    pinned: e.pinned,
    type: e.type
  }
}

function F(e, t, n) {
  let {
    mute: r,
    deaf: i,
    selfMute: l,
    selfDeaf: a,
    suppress: o,
    userId: s
  } = n, c = I.default.getUser(s);
  if (null == c) throw Error("Invalid user id: ".concat(s));
  return {
    nick: S.ZP.getName(e, t, c),
    mute: E.Z.isLocalMute(c.id),
    volume: E.Z.getLocalVolume(c.id),
    pan: E.Z.getLocalPan(c.id),
    voice_state: {
      mute: r,
      deaf: i,
      self_mute: l,
      self_deaf: a,
      suppress: o
    },
    user: (0, x.Z)(c)
  }
}

function z(e, t) {
  return {
    type: e,
    user: (0, x.Z)(t),
    presence: {
      status: v.Z.getStatus(t.id, null),
      activity: null
    }
  }
}

function Y(e, t) {
  var n;
  return null == t ? e : w(Z({}, e), {
    presence: w(Z({}, e.presence), {
      activity: null != (n = v.Z.getApplicationActivity(e.user.id, t)) ? n : null
    })
  })
}

function W(e) {
  let t;
  if (null == e) returnfalse;
  let n = window.location.origin;
  if (e === n) returntrue;
  try {
    t = l.parse(e).hostname
  } catch (e) {
    returnfalse
  }
  return window.location.hostname === t && "localhost" === t || null == e.match("staging") && !!(D.test(e) && D.test(n))
}

function K(e, t, n) {
  let r = _.Z.getGuild(e.getGuildId());
  return (null != r ? r.application_id : e.getApplicationId()) === t || n.indexOf(a.x.MESSAGES_READ) > false
}

function q(e) {
  switch (e) {
    case A.hes.RTC_CONNECTED:
    case A.hes.RTC_CONNECTING:
    case A.hes.RTC_DISCONNECTED:
      return e.replace(/^RTC_/, "VOICE_");
    default:
      return e
  }
}

function Q(e, t, n) {
  return e === A.mFx.JOIN && null != t && null != t.id && null != n.join
}

function J(e) {
  return o.tn.get({
    url: A.ANM.APPLICATION_RPC(e),
    oldFormErrors: true,
    retries: 3,
    rejectWithError: true
  }).then(e => {
    let {
      body: t
    } = e;
    return t
  }, () => {
    throw new j.Z({
      closeCode: A.$VG.INVALID_CLIENTID
    }, "Invalid Client ID")
  })
}
async function X(e, t, n) {
  let r = d.Z.getApplication(t);
  if ("string" == typeof n)
    if (e.transport === P.He.POST_MESSAGE) {
      let e = (0, u.ZP)(t);
      if (null == e || !H(n, [e])) throw new j.Z({
        closeCode: A.$VG.INVALID_ORIGIN
      }, "Invalid Origin")
    } else {
      let e = await J(t);
      if (r = g.ZP.createFromServer(e), !H(n, e.rpc_origins)) throw new j.Z({
        closeCode: A.$VG.INVALID_ORIGIN
      }, "Invalid Origin")
    } null == r && (r = g.ZP.createFromServer(await J(t)));
  let {
    id: i,
    name: l,
    icon: a,
    coverImage: o,
    flags: s
  } = r;
  e.application = {
    id: i,
    name: l,
    icon: a,
    coverImage: o,
    flags: s
  }
}
async function $(e, t) {
  let n = k[e];
  null == n && (n = new s.Z(t ? 2 : 60, M), k[e] = n), await n.process()
}

function ee(e, t) {
  null == t && (e.authorization.scopes = [P.lH])
}

function et(e) {
  let t = E.Z.getSettings(),
    n = e => Object.values(e).sort((e, t) => e.index - t.index).map(e => ({
      id: e.id,
      name: e.name
    })),
    r = e(t);
  return {
    input: {
      available_devices: n(E.Z.getInputDevices()),
      device_id: t.inputDeviceId,
      volume: t.inputVolume
    },
    output: {
      available_devices: n(E.Z.getOutputDevices()),
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
  let n = E.Z.getSettings(e),
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
  if (e !== P.He.POST_MESSAGE) throw new j.Z({
    errorCode: A.lTL.INVALID_COMMAND
  }, 'command not available from "'.concat(e, " transport"))
}

function ei(e) {
  if (null == e.id) throw new j.Z({
    errorCode: A.lTL.INVALID_COMMAND
  }, "Invalid application");
  return e.id
}