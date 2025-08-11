/** Chunk was on web.js **/
/** chunk id: 768419, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, o;
require.d(exports, {
  Z: () => eB
}), require("./388685.js"), require("./49124.js"), require("./35282.js"), require("./539854.js"), require("./704826.js"), require("./997841.js");
var a, Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk261470 = require("./261470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk586902 = require("./586902.js"),
  Chunk726542 = require("./726542.js"),
  Chunk524331 = require("./524331.js"),
  Chunk710845 = require("./710845.js"),
  Chunk594190 = require("./594190.js"),
  Chunk314897 = require("./314897.js"),
  Chunk553795 = require("./553795.js"),
  Chunk517100 = require("./517100.js"),
  Chunk158776 = require("./158776.js"),
  Chunk606304 = require("./606304.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk81063 = require("./81063.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk781518 = require("./781518.js"),
  Chunk616922 = require("./616922.js"),
  Chunk981631 = require("./981631.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
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

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = Chunk726542.Z.get(Chunk981631.ABu.SPOTIFY),
  j = "wss://dealer.spotify.com/?access_token=",
  U = "hm://pusher/v1/connections/",
  G = 30 * Chunk70956.Z.Millis.SECOND,
  B = 30 * Chunk70956.Z.Millis.SECOND,
  Z = 100,
  F = 5 * Chunk70956.Z.Millis.MINUTE,
  V = 5 * Chunk70956.Z.Millis.SECOND,
  H = 1.5 * Chunk70956.Z.Millis.SECOND,
  Y = "Computer",
  W = 5,
  K = +Chunk70956.Z.Millis.MINUTE,
  z = 3 * Chunk70956.Z.Millis.SECOND,
  q = 128,
  X = {
    MESSAGE: "message",
    PING: "ping",
    PONG: "pong"
  },
  Q = {
    SINGLE: "single"
  },
  J = new Chunk710845.Z("Spotify"),
  $ = new Chunk846519.V7,
  ee = new Chunk846519.V7,
  et = new Chunk846519.V7,
  en = new Chunk846519.V7,
  er = new Chunk846519.V7,
  ei = {},
  eo = {},
  ea = {},
  es = false,
  el = null;

function ec() {
  for (let e in ei) {
    let t = ei[module];
    if (!exports.connected || null == eo[module]) continue;
    let n = eo[module].find(e => e.is_active);
    if (null != require) return {
      socket: exports,
      device: require
    }
  }
}

function eu(e, t) {
  let n = Date.now(),
    r = null != e ? e.startTime : 0,
    i = n - t;
  return Math.abs(i - r) > H ? i : r
}

function ed(e) {
  _.Z.dispatch({
    type: "SPOTIFY_PLAYER_STATE",
    accountId: e,
    track: null,
    volumePercent: 0,
    isPlaying: false,
    repeat: false,
    position: 0,
    context: null
  })
}

function ef(e) {
  return v.Z.findActivity(e, e => null != e.party && null != e.party.id && (0, P.Ps)(e.party.id))
}
let e_ = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class ep {
  get connected() {
    return null != this.socket && e_.has(this.socket.readyState)
  }
  connect() {
    this.connected || this._requestedConnect || (J.info("WS Connecting"), this._requestedDisconnect = false, this._requestedConnect = true, ej(this.accountId, this.accessToken).then(() => {
      this._requestedConnect = false, this.socket = new WebSocket("".concat(j).concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
    }).catch(e => {
      J.error(e), this._requestedConnect = false, this.handleClose()
    }))
  }
  disconnect() {
    this._requestedDisconnect = true, this.backoff.cancel();
    try {
      var e;
      null == (e = this.socket) || module.close()
    } catch (e) {}
  }
  ping() {
    var e;
    this.connected && (null == (e = this.socket) || module.send(JSON.stringify({
      type: X.PING
    })))
  }
  handleOpen() {
    J.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(G, () => this.ping()), (0, Chunk781518.Ai)(this.accountId, this.accessToken), (0, Chunk781518.PW)(this.accountId, this.accessToken)
  }
  handleMessage(e) {
    let {
      data: t
    } = e;
    if ("string" != typeof t) return;
    let {
      type: n,
      uri: r,
      payloads: i
    } = JSON.parse(t);
    switch (n) {
      case X.MESSAGE:
        if ("string" == typeof r && r.startsWith(U)) this.connectionId = decodeURIComponent(r.split(U)[1]), (0, R.am)(this.accountId, this.accessToken, this.connectionId);
        else if (Array.isArray(i)) {
          for (let {
              events: e
            }
            of i)
            if (null != e)
              for (let t of e) this.handleEvent(t)
        }
      case X.PONG:
    }
  }
  handleClose() {
    if (this.pingInterval.stop(), !this._requestedDisconnect) try {
      let e = this.backoff.fail(() => {
        this._requestedDisconnect || this.connect()
      });
      J.info("WS Disconnected. Next retry in ".concat(Math.round(module), "ms"))
    } catch (e) {}
  }
  handleEvent(e) {
    let {
      type: t,
      event: n
    } = e;
    switch (t) {
      case "PLAYER_STATE_CHANGED":
        null != n && null != n.state && ek(this.accountId, this.accessToken, n.state);
        break;
      case "DEVICE_STATE_CHANGED":
        this.handleDeviceStateChange()
    }
  }
  constructor(e, t) {
    D(this, "accessToken", true), D(this, "accountId", true), D(this, "connectionId", true), D(this, "isPremium", true), D(this, "pingInterval", true), D(this, "backoff", true), D(this, "socket", true), D(this, "_requestedDisconnect", false), D(this, "_requestedConnect", false), D(this, "handleDeviceStateChange", l().throttle(() => {
      (0, R.PW)(this.accountId, this.accessToken), ej(this.accountId, this.accessToken)
    }, z)), this.accountId = e, this.accessToken = t, this.pingInterval = new f.Xp, this.backoff = new c.Z(true, K), this.connect()
  }
}

function eh(e, t) {
  e in ei ? (ei[e].accessToken = t, J.info("Updated account access token: ".concat(e))) : (ei[e] = new ep(e, t), J.info("Added account: ".concat(e)))
}

function em(e) {
  if (!(e in ei)) return;
  ei[e].disconnect(), delete ei[e];
  let t = ea[e];
  null != t && null != r && t.track.id === r.track.id && (r = null), delete ea[e], J.info("Removed account: ".concat(e))
}

function eg(e, t) {
  for (let n of eo[e]) n.is_active = n.id === t
}

function eE(e, t, n) {
  var r, o;
  let a = ec();
  if (null == a) returnfalse;
  let {
    socket: s,
    device: l
  } = a, {
    sync_id: c,
    party: u,
    timestamps: d
  } = t;
  if (null == c || null == u || null == u.id || !(0, P.Ps)(u.id)) returnfalse;
  let f = null != d && null != d.start ? d.start : Date.now(),
    _ = Math.max(0, Date.now() - f),
    p = false,
    h = ea[s.accountId];
  null != h && false === h.repeat && (p = null);
  let m = (0, P.c8)(null != (o = null == (r = t.metadata) ? true : r.type) ? o : P.Hw.TRACK);
  if (null == m) return;
  (0, R.hY)(s.accountId, s.accessToken, c, m, {
    position: +_,
    deviceId: l.id,
    repeat: p
  }), i = {
    userId: e,
    partyId: u.id,
    trackId: c,
    startTime: f
  };
  let g = "presence change";
  n && (g = "started", S.default.track(w.rMx.SPOTIFY_LISTEN_ALONG_STARTED, {
    party_id: u.id,
    other_user_id: e
  })), J.info("Listen along ".concat(g, ": ").concat(s.accountId, " to ").concat(e, " playing ").concat(c, " on ").concat(l.name))
}

function eb() {
  Chunk626135.default.track(Chunk981631.rMx.SPOTIFY_LISTEN_ALONG_ENDED, {
    party_id: null != i ? i.partyId : null,
    other_user_id: null != i ? i.userId : null
  });
  let e = null != i ? i.trackId : null;
  i = null, J.info("Listen along stopped");
  let t = ec();
  if (null == exports) return;
  let {
    socket: n
  } = exports, r = ea[require.accountId];
  null != r && r.track.id === module && (0, Chunk781518.wO)(require.accountId, require.accessToken)
}

function ey() {
  let e = Object.keys(ei),
    t = Chunk553795.Z.getAccounts().filter(e => {
      let {
        type: t
      } = e;
      return t === w.ABu.SPOTIFY
    });
  if (null == exports) returnfalse;
  let n = exports.map(e => {
    let {
      id: t
    } = e;
    return t
  });
  for (let t of module) require.includes(exports) || em(exports);
  let i = false;
  for (let n of exports)
    if (null != r && r.account.id === require.id && (r.account = require, i = true), !module.includes(require.id)) {
      if (null != require.accessToken) {
        eh(require.id, require.accessToken);
        continue
      }(0, Chunk781518.hP)(require.id)
    } return i
}

function eO(e) {
  let {
    accountId: t,
    accessToken: n
  } = e;
  return eh(t, n), false
}

function ev(e) {
  let {
    accountId: t
  } = e;
  em(t)
}

function eI(e) {
  let {
    accountId: t,
    isPlaying: n,
    repeat: o,
    track: a,
    position: s,
    device: c,
    context: u
  } = e, f = false;
  if (null != c)
    if (null != eo[t]) {
      let e = eo[t].find(e => {
        let {
          id: t
        } = e;
        return t === c.id
      });
      null == e ? (eo[t].push(c), f = true) : (0, d.Z)(e, c) || (Object.assign(e, c), f = true), eg(t, c.id)
    } else eo[t] = [c], f = true;
  n ? null == el || el.start(B, eP) : (a = null, null == el || el.stop());
  let p = y.Z.getAccount(t, w.ABu.SPOTIFY);
  if (null == p) return f;
  let h = ea[t],
    g = null != a ? {
      account: p,
      track: a,
      startTime: eu(h, s),
      context: u,
      repeat: o
    } : null,
    E = null != c && null != i && 0 === s && !n;
  E || (ea[t] = g);
  let O = r;
  if (r = l().values(ea).find(e => null != e), ew(b.default.getId()), null == a || E ? en.stop() : en.start(a.duration - s + V, () => ed(p.id)), null != i && (!n && s > 0 || null == c || null != g && i.trackId !== g.track.id) ? (J.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(V, "ms")), er.start(V, () => {
      J.info("Stopping listening along"), (0, m.Z)(), ed(p.id)
    })) : er.isStarted() && (J.info("Listen along stop cancelled as playback of track resumed"), er.stop()), O === r || null == h && null == g || null != h && null != g && h.track.id === g.track.id && h.startTime === g.startTime) return f;
  null != a && (_.Z.dispatch({
    type: "SPOTIFY_NEW_TRACK",
    track: a,
    connectionId: t
  }), S.default.track(w.rMx.ACTIVITY_UPDATED, {
    party_platform: w.ABu.SPOTIFY,
    track_id: a.id,
    has_images: true,
    details: a.album.name,
    state: a.name,
    album_id: a.album.id,
    author_ids: a.artists.map(e => e.id),
    author_names: a.artists.map(e => e.name)
  }))
}

function eT(e) {
  let {
    id: t
  } = e;
  o = t
}

function eS(e) {
  let {
    accountId: t,
    devices: n
  } = e;
  eo[t] = n, J.info("Devices updated for ".concat(t, ":"), n)
}

function eA(e) {
  let {
    accountId: t,
    deviceId: n
  } = e;
  eg(t, n)
}

function eN(e) {
  var t;
  let n, {
      activity: r,
      metadata: o
    } = e,
    a = ec();
  if (null == a) returnfalse;
  let {
    socket: s,
    device: l
  } = a, {
    sync_id: c,
    party: u
  } = r;
  return null != c && null != u && null != u.id && !!(0, P.Ps)(u.id) && (null != o && (n = o.context_uri), null != i && eb(), null != o && void((0, R.hY)(s.accountId, s.accessToken, c, null != (t = o.type) ? t : P.Hw.TRACK, {
    contextUri: n,
    deviceId: l.id
  }), J.info("Play started: ".concat(s.accountId, " playing ").concat(c, " on ").concat(l.name))))
}

function eC(e) {
  let {
    activity: t,
    userId: n
  } = e;
  return eE(n, t, true)
}

function eR() {
  if (null == i || null == ec()) returnfalse;
  let {
    userId: e
  } = i, t = ef(module);
  if (null == exports) return et.start(F, () => {
    null != i && i.userId === module && (0, Chunk524331.Z)()
  }), false;
  et.stop();
  let {
    sync_id: n,
    timestamps: r,
    party: o
  } = exports, a = null != require && i.trackId !== require, s = null != r && i.startTime !== r.start;
  return a || Chunk392711 ? eE(module, exports, false) : null != o && o.id !== i.partyId && (i.partyId = o.id, true)
}

function eP() {
  if (null == r) return;
  let e = ec();
  if (null == module) return;
  let {
    socket: t
  } = module;
  es = true, (0, Chunk781518.wO)(exports.accountId, exports.accessToken), Chunk626135.default.track(Chunk981631.rMx.SPOTIFY_AUTO_PAUSED), J.info("Playback auto paused")
}

function ew(e) {
  if (e === b.default.getId()) {
    let t = T.Z.isCurrentClientInVoiceChannel(),
      n = (0, p.O)({
        userId: e,
        checkSoundSharing: true,
        checkSoundboardSounds: false
      });
    t && n && null != r ? ($.start(B, eP, false), ee.stop()) : ee.start(Z, () => $.stop(), false)
  }
  returnfalse
}

function eD(e) {
  let {
    userId: t
  } = e;
  return ew(t)
}

function eL(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    let {
      userId: n
    } = t;
    return ew(n) || e
  }, false)
}

function ex(e) {
  let {
    accountId: t,
    isPremium: n
  } = e, r = ei[t];
  if (null == r) returnfalse;
  r.isPremium = n, J.info("Profile updated for ".concat(t, ": isPremium = ").concat(n))
}

function eM(e) {
  let {
    settings: t
  } = e;
  if ((null == t ? true : t.desktopSettings) != null) {
    null == el || el.stop();
    let {
      sourceId: e,
      sound: n
    } = null == t ? true : t.desktopSettings;
    null != e && E.ZP.getObservedAppNameForWindow(e) === k.name && n ? (el = new f.Xp).start(B, eP) : (null == el || el.stop(), el = null)
  } else null == t && (null == el || el.stop(), el = null)
}

function ek(e, t, n) {
  var r, i, o, a, s, l, c, u, d, f, p, h, m, g;
  let E, b, {
    device: y,
    progress_ms: O,
    is_playing: v,
    repeat_state: I,
    item: T,
    context: S
  } = n;
  if (null != T && T.type === P.Hw.TRACK) {
    let e = T.id;
    null != T.linked_from && null != T.linked_from.id && (e = T.linked_from.id), E = {
      id: e,
      name: T.name,
      duration: T.duration_ms,
      type: P.Hw.TRACK,
      album: {
        id: null != (s = null == (r = T.album) ? true : r.id) ? s : "",
        name: null != (l = null == (i = T.album) ? true : i.name) ? l : "",
        image: null == (o = T.album) ? true : o.images[0],
        type: null != (c = null == (a = T.album) ? true : a.type) ? c : P.Hw.ALBUM
      },
      artists: Array.isArray(T.artists) ? T.artists.filter(e => (0, C.lm)(e.id) && (0, C.lm)(e.name)) : [],
      isLocal: T.is_local || false
    }
  } else null != T && T.type === P.Hw.EPISODE && (E = {
    id: T.id,
    name: T.name,
    duration: T.duration_ms,
    type: P.Hw.EPISODE,
    album: {
      id: null != (h = null == (u = T.show) ? true : u.id) ? h : "",
      name: null != (m = null == (d = T.show) ? true : d.name) ? m : "",
      image: null == (f = T.show) ? true : f.images[0],
      type: null != (g = null == (p = T.album) ? true : p.type) ? g : P.Hw.SHOW
    },
    artists: [],
    isLocal: false
  });
  if (null != y && true !== y.is_active && (y = M(L({}, y), {
      is_active: true
    })), null != S && [P.Hw.PLAYLIST, P.Hw.ALBUM].includes(S.type)) {
    let n = eG.getPlayerState(e);
    b = null != n && null != n.context && n.context.uri === S.uri ? Promise.resolve(n.context) : S.type === P.Hw.ALBUM ? Promise.resolve(S) : R.rC.get(e, t, {
      url: S.href
    }).then(e => {
      let {
        body: t
      } = e;
      return t
    }).catch(e => {
      if (e && 404 === e.status) return null;
      throw e
    })
  } else b = Promise.resolve(true);
  return b.then(t => {
    null == t || t.type !== P.Hw.PLAYLIST || t.public || (t = null), _.Z.dispatch({
      type: "SPOTIFY_PLAYER_STATE",
      accountId: e,
      track: E,
      volumePercent: null != y ? y.volume_percent : 0,
      isPlaying: v,
      repeat: "off" !== I,
      position: O,
      context: t,
      device: y
    })
  })
}

function ej(e, t) {
  return R.rC.get(e, t, {
    url: P.C7.PLAYER,
    query: {
      additional_types: "".concat(P.Hw.TRACK, ",").concat(P.Hw.EPISODE)
    },
    onlyRetryOnAuthorizationErrors: true
  }).then(n => {
    let r = n.body;
    null != r ? ek(e, t, r).then(() => n) : ed(e)
  }).catch(() => ed(e))
}
class eU extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk553795.Z, Chunk606304.Z), this.syncWith([Chunk158776.Z], () => eR()), (0, Chunk781518.k1)()
  }
  hasConnectedAccount() {
    return Object.keys(ei).length > 0
  }
  getActiveSocketAndDevice() {
    return ec()
  }
  getPlayableComputerDevices() {
    let e = [];
    for (let t in ei) {
      let n = ei[exports];
      if (!require.connected || null == eo[exports]) continue;
      let r = eo[exports].find(e => !e.is_restricted && e.type === Y);
      null != r && module.push({
        socket: require,
        device: r
      })
    }
    return module
  }
  canPlay(e) {
    let {
      sync_id: t,
      party: n
    } = e;
    return null != ec() && null != t && null != n && null != n.id && (0, P.Ps)(n.id)
  }
  getSyncingWith() {
    return i
  }
  wasAutoPaused() {
    return es
  }
  getLastPlayedTrackId() {
    return o
  }
  getTrack() {
    return null != r ? r.track : null
  }
  getPlayerState(e) {
    return ea[e]
  }
  shouldShowActivity() {
    return null != r && r.account.showActivity && !Chunk517100.Z.isIdle()
  }
  getActivity() {
    let e, t, n;
    if (null == r) return null != i ? ef(i.userId) : null;
    let {
      track: {
        artists: o,
        album: a,
        name: s,
        id: l,
        duration: c,
        isLocal: u,
        type: d
      },
      startTime: f,
      context: _
    } = r, p = o.slice(0, W);
    o.length > 0 && (e = Chunk586902.map(e => {
      let {
        name: t
      } = e;
      return t.replace(/;/g, "")
    }).join("; "));
    let h = {},
      m = null != a.image ? (0, Chunk81063.f)(Chunk981631.ABu.SPOTIFY, a.image.url) : null;
    null != a.image && null != Chunk524331 && (Chunk726542.large_image = Chunk524331), a.type !== Q.SINGLE && (Chunk726542.large_text = a.name), null != Chunk570140 && (t = Chunk570140.uri), n = null != i && null != i.partyId ? i.partyId : "".concat(Chunk616922.lS).concat(Chunk314897.default.getId());
    let g = Chunk392711.length > q ? Chunk392711.substring(0, q - 3) + "..." : Chunk392711,
      E = {
        context_uri: exports,
        album_id: a.id,
        artist_ids: Chunk586902.map(e => {
          let {
            id: t
          } = e;
          return t
        }),
        type: Chunk902704,
        button_urls: []
      },
      y = {
        name: k.name,
        assets: Chunk726542,
        details: Chunk710845,
        state: module,
        timestamps: {
          start: Chunk846519,
          end: Chunk846519 + Chunk261470
        },
        party: {
          id: require
        }
      };
    return Chunk442837 || (Chunk553795.sync_id = l, Chunk553795.flags = Chunk981631.xjy.PLAY | Chunk981631.xjy.SYNC, Chunk553795.metadata = Chunk594190), Chunk553795
  }
}
D(eU, "displayName", "SpotifyStore");
let eG = new eU(Chunk570140.Z, {
    USER_CONNECTIONS_UPDATE: ey,
    CONNECTION_OPEN: ey,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN: eO,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: ev,
    SPOTIFY_PROFILE_UPDATE: ex,
    SPOTIFY_PLAYER_STATE: eI,
    SPOTIFY_PLAYER_PLAY: eT,
    ACTIVITY_PLAY: eN,
    ACTIVITY_SYNC: eC,
    ACTIVITY_SYNC_STOP: eb,
    SPOTIFY_SET_DEVICES: eS,
    SPOTIFY_SET_ACTIVE_DEVICE: eA,
    SPEAKING: eD,
    VOICE_STATE_UPDATES: eL,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: eM
  }),
  eB = eG