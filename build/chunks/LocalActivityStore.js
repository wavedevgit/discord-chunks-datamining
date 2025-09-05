/** Chunk was on web.js **/
/** chunk id: 293273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./539854.js"), require("./388685.js"), require("./997841.js");
var r, Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317381 = require("./317381.js"),
  Chunk212517 = require("./212517.js"),
  Chunk812206 = require("./812206.js"),
  Chunk676035 = require("./676035.js"),
  Chunk594190 = require("./594190.js"),
  Chunk106301 = require("./106301.js"),
  Chunk406066 = require("./406066.js"),
  Chunk674691 = require("./674691.js"),
  Chunk509003 = require("./509003.js"),
  Chunk768419 = require("./768419.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
  Chunk630388 = require("./630388.js"),
  Chunk199902 = require("./199902.js"),
  Chunk272053 = require("./272053.js"),
  Chunk77498 = require("./77498.js"),
  Chunk797258 = require("./797258.js"),
  Chunk981631 = require("./981631.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = [],
  x = {};

function L() {
  let e = [],
    t = Chunk695346.Ok.getSetting();
  null != exports && ("0" === exports.expiresAtMs || new Date(Number(exports.expiresAtMs)).getTime() - new Date().getTime() > 0) && module.push((0, Chunk676035.I)(exports));
  let n = Chunk406066.Z.getActivities();
  module.push(...require);
  let r = Chunk272053.Z.getStream();
  null != r && module.push(R({
    type: Chunk981631.IIU.STREAMING
  }, r));
  let i = new Set;
  s().forEach(x, t => {
    let [, n] = t;
    null != n.application_id && (i.add(n.name), e.push(n))
  });
  let o = Chunk594190.ZP.getVisibleGame(),
    l = null != Chunk392711 && null != Chunk392711.name && (Chunk348327.has(Chunk392711.name) || (0, Chunk674691.G)(Chunk392711, [...module, ...Chunk797258.Z.getRemoteActivities()])),
    c = null != Chunk392711 && Chunk392711.isLauncher,
    u = null != Chunk199902.Z.getCurrentUserActiveStream(),
    d = Chunk442837 || Chunk570140 && !Chunk317381;
  if (null != Chunk392711 && null != Chunk392711.name && !Chunk212517) {
    var f;
    let t = Chunk77498.Z.getGameByName(Chunk392711.name);
    module.push(R({
      type: Chunk981631.IIU.PLAYING,
      name: Chunk392711.name,
      application_id: null != (f = Chunk392711.id) ? Chunk812206 : null == exports ? true : exports.id,
      timestamps: {
        start: Chunk392711.start
      }
    }, (0, Chunk509003.LK)(Chunk392711)))
  }
  let O = Chunk768419.Z.getActivity();
  null != Chunk581883 && module.push(R({
    type: Chunk981631.IIU.LISTENING
  }, Chunk581883));
  let v = Chunk106301.Z.getCurrentHangStatus();
  if (null != Chunk630388) {
    let t = Chunk106301.Z.getCustomHangStatus();
    module.push({
      type: Chunk981631.IIU.HANG_STATUS,
      name: "Hang Status",
      state: Chunk630388,
      details: null == exports ? true : exports.status,
      emoji: null == exports ? true : exports.emoji
    })
  }
  a()(D, module) || (D = module)
}

function j() {
  x = {}, L()
}

function M(e) {
  let {
    socketId: t,
    pid: n,
    activity: r,
    partyPrivacy: i
  } = e;
  if (a()(x[t], [n, r, i])) returnfalse;
  null != r ? x[t] = [n, r, i] : delete x[t], L()
}

function k(e) {
  let {
    socketId: t
  } = e;
  delete x[t], L()
}

function U(e) {
  let {
    localActivities: t
  } = e;
  x = R({}, t), L()
}

function G() {
  let e = {},
    t = false;
  for (let [i, [a, o, s]] of Object.entries(x)) {
    var n, r;
    let l = null != (n = Chunk392711.flags) ? require : 0,
      c = (0, Chunk212517.S)(Chunk392711, (0, Chunk630388.yE)(null != (r = null == Chunk392711 ? true : Chunk392711.flags) ? r : 0, Chunk981631.xjy.INSTANCE), Chunk392711.platform === Chunk981631.M7m.EMBEDDED, (0, Chunk212517.D)(Chunk392711), s);
    Chunk570140 !== Chunk442837 ? (module[Chunk348327] = [a, w(R({}, Chunk392711), {
      flags: Chunk570140
    }), s], t = true) : module[Chunk348327] = [a, Chunk392711, s]
  }
  return exports ? (x = module, "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES"
}

function B() {
  G(), L()
}
class Z extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594190.ZP, Chunk317381.ZP, Chunk272053.Z, Chunk199902.Z, Chunk768419.Z, Chunk581883.Z, Chunk77498.Z, Chunk106301.Z, Chunk797258.Z, Chunk812206.Z), this.syncWith([Chunk406066.Z, Chunk106301.Z], () => L())
  }
  getActivities() {
    return D
  }
  getPrimaryActivity() {
    return D[0]
  }
  getApplicationActivity(e) {
    return this.findActivity(t => t.application_id === e)
  }
  getCustomStatusActivity() {
    return this.findActivity(e => e.type === C.IIU.CUSTOM_STATUS)
  }
  findActivity(e) {
    return D.find(e)
  }
  getApplicationActivities() {
    return x
  }
  getActivityForPID(e) {
    for (let [t, n] of Object.values(x))
      if (t === e) return n;
    return null
  }
}
N(Z, "displayName", "LocalActivityStore");
let F = new Z(Chunk570140.Z, {
  ROBLOX_SUBGAME_UPDATE: L,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: L,
  OVERLAY_INITIALIZE: U,
  START_SESSION: j,
  LOCAL_ACTIVITY_UPDATE: M,
  RPC_APP_DISCONNECTED: k,
  RUNNING_GAMES_CHANGE: L,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: L,
  SPOTIFY_PLAYER_STATE: L,
  SPOTIFY_PLAYER_PLAY: L,
  STREAMING_UPDATE: L,
  USER_CONNECTIONS_UPDATE: L,
  STREAM_START: L,
  STREAM_STOP: L,
  USER_SETTINGS_PROTO_UPDATE: B,
  EMBEDDED_ACTIVITY_CLOSE: L,
  UPDATE_HANG_STATUS: L,
  RUNNING_GAME_TOGGLE_DETECTION: L
})