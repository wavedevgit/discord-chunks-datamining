/** Chunk was on web.js **/
/** chunk id: 293273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Y
}), require("./539854.js"), require("./388685.js"), require("./997841.js");
var r, Chunk348327 = require("./348327.js"),
  o = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317381 = require("./317381.js"),
  Chunk212517 = require("./212517.js"),
  Chunk812206 = require("./812206.js"),
  Chunk676035 = require("./676035.js"),
  Chunk594190 = require("./594190.js"),
  Chunk574176 = require("./574176.js"),
  Chunk106301 = require("./106301.js"),
  Chunk406066 = require("./406066.js"),
  Chunk674691 = require("./674691.js"),
  Chunk509003 = require("./509003.js"),
  Chunk768419 = require("./768419.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk272053 = require("./272053.js"),
  Chunk77498 = require("./77498.js"),
  Chunk944486 = require("./944486.js"),
  Chunk797258 = require("./797258.js"),
  Chunk981631 = require("./981631.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = [],
  M = {};

function k() {
  var e, t;
  let n = [],
    r = Chunk695346.Ok.getSetting();
  null != r && ("0" === r.expiresAtMs || new Date(Number(r.expiresAtMs)).getTime() - new Date().getTime() > 0) && require.push((0, Chunk676035.I)(r));
  let i = Chunk406066.Z.getActivities();
  require.push(...Chunk348327);
  let a = Chunk272053.Z.getStream();
  null != Chunk392711 && require.push(D({
    type: Chunk981631.IIU.STREAMING
  }, Chunk392711));
  let l = new Set;
  s().forEach(M, e => {
    let [, t] = e;
    null != t.application_id && (l.add(t.name), n.push(t))
  });
  let c = Chunk594190.ZP.getVisibleGame(),
    u = null != Chunk442837 && null != Chunk442837.name && (Chunk95015.has(Chunk442837.name) || (0, Chunk674691.G)(Chunk442837, [...require, ...Chunk797258.Z.getRemoteActivities()])),
    d = null != Chunk442837 && Chunk442837.isLauncher,
    f = null != Chunk199902.Z.getCurrentUserActiveStream(),
    p = Chunk570140 || Chunk317381 && !Chunk212517;
  if (null != Chunk442837 && null != Chunk442837.name && !Chunk812206) {
    let t = Chunk77498.Z.getGameByName(Chunk442837.name);
    require.push(D({
      type: Chunk981631.IIU.PLAYING,
      name: Chunk442837.name,
      application_id: null != (e = Chunk442837.id) ? module : null == exports ? true : exports.id,
      timestamps: {
        start: Chunk442837.start
      }
    }, (0, Chunk509003.LK)(Chunk442837)))
  }
  let S = Chunk768419.Z.getActivity();
  null != Chunk581883 && require.push(D({
    type: Chunk981631.IIU.LISTENING
  }, Chunk581883));
  let w = Chunk106301.Z.getCurrentHangStatus();
  if (null != w) {
    let e = Chunk106301.Z.getCustomHangStatus(),
      {
        defaultStatusVariant: r
      } = (0, Chunk574176.gx)({
        guildId: null == (t = Chunk592125.Z.getChannel(Chunk944486.Z.getVoiceChannelId())) ? true : exports.guild_id,
        location: "LocalActivityStore"
      });
    require.push({
      type: Chunk981631.IIU.HANG_STATUS,
      name: "Hang Status",
      state: "".concat(w, ":").concat(r),
      details: null == module ? true : module.status,
      emoji: null == module ? true : module.emoji
    })
  }
  o()(j, require) || (j = require)
}

function U() {
  M = {}, k()
}

function G(e) {
  let {
    socketId: t,
    pid: n,
    activity: r,
    partyPrivacy: i
  } = e;
  if (o()(M[t], [n, r, i])) returnfalse;
  null != r ? M[t] = [n, r, i] : delete M[t], k()
}

function Z(e) {
  let {
    socketId: t
  } = e;
  delete M[t], k()
}

function F(e) {
  let {
    localActivities: t
  } = e;
  M = D({}, t), k()
}

function B() {
  let e = {},
    t = false;
  for (let [i, [o, a, s]] of Object.entries(M)) {
    var n, r;
    let c = null != (n = Chunk392711.flags) ? require : 0,
      u = (0, Chunk212517.S)(Chunk392711, (0, Chunk95015.yE)(null != (r = null == Chunk392711 ? true : Chunk392711.flags) ? r : 0, Chunk981631.xjy.INSTANCE), Chunk392711.platform === Chunk981631.M7m.EMBEDDED, (0, Chunk212517.D)(Chunk392711), s);
    Chunk570140 !== Chunk442837 ? (module[Chunk348327] = [o, L(D({}, Chunk392711), {
      flags: Chunk570140
    }), s], t = true) : module[Chunk348327] = [o, Chunk392711, s]
  }
  return exports ? (M = module, "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES"
}

function V() {
  B(), k()
}
class H extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk812206.Z, Chunk199902.Z, Chunk592125.Z, Chunk317381.ZP, Chunk272053.Z, Chunk406066.Z, Chunk77498.Z, Chunk106301.Z, Chunk594190.ZP, Chunk944486.Z, Chunk797258.Z, Chunk768419.Z, Chunk581883.Z), this.syncWith([Chunk406066.Z, Chunk106301.Z], () => k())
  }
  getActivities() {
    return j
  }
  getPrimaryActivity() {
    return j[0]
  }
  getApplicationActivity(e) {
    return this.findActivity(t => t.application_id === e)
  }
  getCustomStatusActivity() {
    return this.findActivity(e => e.type === R.IIU.CUSTOM_STATUS)
  }
  findActivity(e) {
    return j.find(e)
  }
  getApplicationActivities() {
    return M
  }
  getActivityForPID(e) {
    for (let [t, n] of Object.values(M))
      if (t === e) return n;
    return null
  }
}
w(H, "displayName", "LocalActivityStore");
let Y = new H(Chunk570140.Z, {
  ROBLOX_SUBGAME_UPDATE: k,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: k,
  OVERLAY_INITIALIZE: F,
  START_SESSION: U,
  LOCAL_ACTIVITY_UPDATE: G,
  RPC_APP_DISCONNECTED: Z,
  RUNNING_GAMES_CHANGE: k,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: k,
  SPOTIFY_PLAYER_STATE: k,
  SPOTIFY_PLAYER_PLAY: k,
  STREAMING_UPDATE: k,
  USER_CONNECTIONS_UPDATE: k,
  STREAM_START: k,
  STREAM_STOP: k,
  USER_SETTINGS_PROTO_UPDATE: V,
  EMBEDDED_ACTIVITY_CLOSE: k,
  UPDATE_HANG_STATUS: k,
  RUNNING_GAME_TOGGLE_DETECTION: k
})