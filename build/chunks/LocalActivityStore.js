/** Chunk was on web.js **/
/** chunk id: 293273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Y
}), require("./539854.js"), require("./388685.js"), require("./997841.js");
var r, Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327),
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

function R(e, t, n) {
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
      R(e, t, n[t])
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
    r = v.Ok.getSetting();
  null != r && ("0" === r.expiresAtMs || new Date(Number(r.expiresAtMs)).getTime() - new Date().getTime() > 0) && n.push((0, _.I)(r));
  let i = E.Z.getActivities();
  n.push(...i);
  let o = C.Z.getStream();
  null != o && n.push(D({
    type: w.IIU.STREAMING
  }, o));
  let l = new Set;
  s().forEach(M, e => {
    let [, t] = e;
    null != t.application_id && (l.add(t.name), n.push(t))
  });
  let c = h.ZP.getVisibleGame(),
    u = null != c && null != c.name && (l.has(c.name) || (0, b.G)(c, [...n, ...P.Z.getRemoteActivities()])),
    d = null != c && c.isLauncher,
    f = null != I.Z.getCurrentUserActiveStream(),
    p = u || d && !f;
  if (null != c && null != c.name && !p) {
    let t = A.Z.getGameByName(c.name);
    n.push(D({
      type: w.IIU.PLAYING,
      name: c.name,
      application_id: null != (e = c.id) ? e : null == t ? true : t.id,
      timestamps: {
        start: c.start
      }
    }, (0, y.LK)(c)))
  }
  let S = O.Z.getActivity();
  null != S && n.push(D({
    type: w.IIU.LISTENING
  }, S));
  let R = g.Z.getCurrentHangStatus();
  if (null != R) {
    let e = g.Z.getCustomHangStatus(),
      {
        defaultStatusVariant: r
      } = (0, m.gx)({
        guildId: null == (t = T.Z.getChannel(N.Z.getVoiceChannelId())) ? true : t.guild_id,
        location: "LocalActivityStore"
      });
    n.push({
      type: w.IIU.HANG_STATUS,
      name: "Hang Status",
      state: "".concat(R, ":").concat(r),
      details: null == e ? true : e.status,
      emoji: null == e ? true : e.emoji
    })
  }
  a()(j, n) || (j = n)
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
  if (a()(M[t], [n, r, i])) returnfalse;
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
  for (let [i, [a, o, s]] of Object.entries(M)) {
    var n, r;
    let c = null != (n = o.flags) ? n : 0,
      u = (0, f.S)(o, (0, l.yE)(null != (r = null == o ? true : o.flags) ? r : 0, w.xjy.INSTANCE), o.platform === w.M7m.EMBEDDED, (0, f.D)(o), s);
    u !== c ? (e[i] = [a, L(D({}, o), {
      flags: u
    }), s], t = true) : e[i] = [a, o, s]
  }
  return t ? (M = e, "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES"
}

function V() {
  B(), k()
}
class H extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(p.Z, I.Z, T.Z, d.ZP, C.Z, E.Z, A.Z, g.Z, h.ZP, N.Z, P.Z, O.Z, S.Z), this.syncWith([E.Z, g.Z], () => k())
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
    return this.findActivity(e => e.type === w.IIU.CUSTOM_STATUS)
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
R(H, "displayName", "LocalActivityStore");
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