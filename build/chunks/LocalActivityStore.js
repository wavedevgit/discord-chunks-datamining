/** Chunk was on web.js **/
/** chunk id: 375492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => W
}), require("./321073.js"), require("./896048.js"), require("./938796.js");
var r, Chunk812729 = require("./812729.js"),
  a = require.n(Chunk812729),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk933958 = require("./933958.js"),
  Chunk182892 = require("./182892.js"),
  Chunk587895 = require("./587895.js"),
  Chunk685396 = require("./685396.js"),
  Chunk15285 = require("./15285.js"),
  Chunk140547 = require("./140547.js"),
  Chunk242919 = require("./242919.js"),
  Chunk668731 = require("./668731.js"),
  Chunk589187 = require("./589187.js"),
  Chunk847521 = require("./847521.js"),
  Chunk655116 = require("./655116.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk760751 = require("./760751.js"),
  Chunk794383 = require("./794383.js"),
  Chunk309010 = require("./309010.js"),
  Chunk528767 = require("./528767.js"),
  Chunk652215 = require("./652215.js");

function P(e, t, n) {
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
      P(e, t, n[t])
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
    r = A.G2.getSetting();
  null != r && ("0" === r.expiresAtMs || new Date(Number(r.expiresAtMs)).getTime() - new Date().getTime() > 0) && n.push((0, _.F)(r));
  let i = E.A.getActivities();
  n.push(...i);
  let s = C.A.getStream();
  null != s && n.push(D({
    type: w.$pd.STREAMING
  }, s));
  let l = new Set;
  o().forEach(M, e => {
    let [, t] = e;
    null != t.application_id && (l.add(t.name), n.push(t))
  });
  let c = h.Ay.getVisibleGame(),
    u = null != c && null != c.name && (l.has(c.name) || (0, b.v)(c, [...n, ...R.A.getRemoteActivities()])),
    d = null != c && c.isLauncher,
    f = null != S.A.getCurrentUserActiveStream(),
    p = u || d && !f;
  if (null != c && null != c.name && !p) {
    let t = T.A.getGameByName(c.name);
    n.push(D({
      type: w.$pd.PLAYING,
      name: c.name,
      application_id: null != (e = c.id) ? e : null == t ? true : t.id,
      timestamps: {
        start: c.start
      }
    }, (0, y.CO)(c)))
  }
  let v = O.A.getActivity();
  null != v && n.push(D({
    type: w.$pd.LISTENING
  }, v));
  let P = g.A.getCurrentHangStatus();
  if (null != P) {
    let e = g.A.getCustomHangStatus(),
      {
        defaultStatusVariant: r
      } = (0, m.ko)({
        guildId: null == (t = I.A.getChannel(N.A.getVoiceChannelId())) ? true : t.guild_id,
        location: "LocalActivityStore"
      });
    n.push({
      type: w.$pd.HANG_STATUS,
      name: "Hang Status",
      state: "".concat(P, ":").concat(r),
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

function V(e) {
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
  for (let [i, [a, s, o]] of Object.entries(M)) {
    var n, r;
    let c = null != (n = s.flags) ? n : 0,
      u = (0, f.E)(s, (0, l.Lt)(null != (r = null == s ? true : s.flags) ? r : 0, w.jUm.INSTANCE), s.platform === w.yTV.EMBEDDED, (0, f.e)(s), o);
    u !== c ? (e[i] = [a, L(D({}, s), {
      flags: u
    }), o], t = true) : e[i] = [a, s, o]
  }
  return t ? (M = e, "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES"
}

function H() {
  B(), k()
}
class Y extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(p.A, S.A, I.A, d.Ay, C.A, E.A, T.A, g.A, h.Ay, N.A, R.A, O.A, v.A), this.syncWith([E.A, g.A], () => k())
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
    return this.findActivity(e => e.type === w.$pd.CUSTOM_STATUS)
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
P(Y, "displayName", "LocalActivityStore");
let W = new Y(Chunk73153.h, {
  ROBLOX_SUBGAME_UPDATE: k,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: k,
  OVERLAY_INITIALIZE: F,
  START_SESSION: U,
  LOCAL_ACTIVITY_UPDATE: G,
  RPC_APP_DISCONNECTED: V,
  RUNNING_GAMES_CHANGE: k,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: k,
  SPOTIFY_PLAYER_STATE: k,
  SPOTIFY_PLAYER_PLAY: k,
  STREAMING_UPDATE: k,
  USER_CONNECTIONS_UPDATE: k,
  STREAM_START: k,
  STREAM_STOP: k,
  USER_SETTINGS_PROTO_UPDATE: H,
  EMBEDDED_ACTIVITY_CLOSE: k,
  UPDATE_HANG_STATUS: k,
  RUNNING_GAME_TOGGLE_DETECTION: k
})