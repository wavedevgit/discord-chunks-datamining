/** Chunk was on web.js **/
/** chunk id: 293273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./539854.js"), require("./388685.js"), require("./997841.js");
var r, Chunk348327 = require("./348327.js"),
  o = require.n(Chunk348327),
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
  Chunk199902 = require("./199902.js"),
  Chunk272053 = require("./272053.js"),
  Chunk77498 = require("./77498.js"),
  Chunk797258 = require("./797258.js"),
  Chunk981631 = require("./981631.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = [],
  D = {};

function x() {
  let e = [],
    t = Chunk695346.Ok.getSetting();
  null != exports && ("0" === exports.expiresAtMs || new Date(Number(exports.expiresAtMs)).getTime() - new Date().getTime() > 0) && module.push((0, Chunk676035.I)(exports));
  let n = Chunk406066.Z.getActivities();
  module.push(...require);
  let r = Chunk272053.Z.getStream();
  null != r && module.push(N({
    type: Chunk981631.IIU.STREAMING
  }, r));
  let i = new Set;
  s().forEach(D, t => {
    let [, n] = t;
    null != n.application_id && (i.add(n.name), e.push(n))
  });
  let a = Chunk594190.ZP.getVisibleGame(),
    l = null != Chunk392711 && null != Chunk392711.name && (Chunk348327.has(Chunk392711.name) || (0, Chunk674691.G)(Chunk392711, [...module, ...Chunk797258.Z.getRemoteActivities()])),
    c = null != Chunk392711 && Chunk392711.isLauncher,
    u = null != Chunk199902.Z.getCurrentUserActiveStream(),
    d = Chunk442837 || Chunk570140 && !Chunk317381;
  if (null != Chunk392711 && null != Chunk392711.name && !Chunk212517) {
    var f, O, C;
    module.push(N({
      type: Chunk981631.IIU.PLAYING,
      name: Chunk392711.name,
      application_id: null != (O = Chunk392711.id) ? Chunk581883 : null == (f = Chunk77498.Z.getGameByName(Chunk392711.name)) ? true : Chunk812206.id,
      metadata: {
        distributor: null != (C = Chunk392711.distributor) ? C : true
      },
      timestamps: {
        start: Chunk392711.start
      }
    }, (0, Chunk509003.LK)(Chunk392711)))
  }
  let R = Chunk768419.Z.getActivity();
  null != R && module.push(N({
    type: Chunk981631.IIU.LISTENING
  }, R));
  let P = Chunk106301.Z.getCurrentHangStatus();
  if (null != P) {
    let t = Chunk106301.Z.getCustomHangStatus();
    module.push({
      type: Chunk981631.IIU.HANG_STATUS,
      name: "Hang Status",
      state: P,
      details: null == exports ? true : exports.status,
      emoji: null == exports ? true : exports.emoji
    })
  }
  o()(w, module) || (w = module)
}

function L() {
  D = {}, x()
}

function j(e) {
  let {
    socketId: t,
    pid: n,
    activity: r
  } = e;
  if (o()(D[t], [n, r])) returnfalse;
  null != r ? D[t] = [n, r] : delete D[t], x()
}

function k(e) {
  let {
    socketId: t
  } = e;
  delete D[t], x()
}

function M(e) {
  let {
    localActivities: t
  } = e;
  D = N({}, t), x()
}

function U() {
  let e = {},
    t = false;
  for (let [r, [i, o]] of Object.entries(D)) {
    var n;
    let a = null != (n = o.flags) ? require : 0,
      s = (0, Chunk212517.Ix)(Chunk392711);
    s !== Chunk392711 ? (module[r] = [Chunk348327, P(N({}, o), {
      flags: s
    })], t = true) : module[r] = [Chunk348327, o]
  }
  return exports ? (D = module, "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES"
}

function G() {
  U(), x()
}
class B extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594190.ZP, Chunk317381.ZP, Chunk272053.Z, Chunk199902.Z, Chunk768419.Z, Chunk581883.Z, Chunk77498.Z, Chunk106301.Z, Chunk797258.Z, Chunk812206.Z), this.syncWith([Chunk406066.Z, Chunk106301.Z], () => x())
  }
  getActivities() {
    return w
  }
  getPrimaryActivity() {
    return w[0]
  }
  getApplicationActivity(e) {
    return this.findActivity(t => t.application_id === e)
  }
  getCustomStatusActivity() {
    return this.findActivity(e => e.type === A.IIU.CUSTOM_STATUS)
  }
  findActivity(e) {
    return w.find(e)
  }
  getApplicationActivities() {
    return D
  }
  getActivityForPID(e) {
    for (let [t, n] of Object.values(D))
      if (t === e) return n;
    return null
  }
}
C(B, "displayName", "LocalActivityStore");
let Z = new B(Chunk570140.Z, {
  ROBLOX_SUBGAME_UPDATE: x,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: x,
  OVERLAY_INITIALIZE: M,
  START_SESSION: L,
  LOCAL_ACTIVITY_UPDATE: j,
  RPC_APP_DISCONNECTED: k,
  RUNNING_GAMES_CHANGE: x,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: x,
  SPOTIFY_PLAYER_STATE: x,
  SPOTIFY_PLAYER_PLAY: x,
  STREAMING_UPDATE: x,
  USER_CONNECTIONS_UPDATE: x,
  STREAM_START: x,
  STREAM_STOP: x,
  USER_SETTINGS_PROTO_UPDATE: G,
  EMBEDDED_ACTIVITY_CLOSE: x,
  UPDATE_HANG_STATUS: x,
  RUNNING_GAME_TOGGLE_DETECTION: x
})