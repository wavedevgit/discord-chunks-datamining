/** Chunk was on web.js **/
/** chunk id: 768419, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  Z: () => eZ
}), require("./388685.js"), require("./49124.js"), require("./35282.js"), require("./539854.js"), require("./704826.js"), require("./997841.js");
var o, Chunk392711 = require("./392711.js"),
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

function x(e) {
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

function L(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
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
  X = "message",
  Q = "ping",
  J = "single",
  $ = new Chunk710845.Z("Spotify"),
  ee = new Chunk846519.V7,
  et = new Chunk846519.V7,
  en = new Chunk846519.V7,
  er = new Chunk846519.V7,
  ei = new Chunk846519.V7,
  ea = {},
  eo = {},
  es = {},
  el = false,
  ec = null;

function eu() {
  for (let e in ea) {
    let t = ea[module];
    if (!exports.connected || null == eo[module]) continue;
    let n = eo[module].find(e => e.is_active);
    if (null != require) return {
      socket: exports,
      device: require
    }
  }
}

function ed(e, t) {
  let n = Date.now(),
    r = null != e ? e.startTime : 0,
    i = n - t;
  return Math.abs(i - r) > H ? i : r
}

function ef(e) {
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

function e_(e) {
  return v.Z.findActivity(e, e => null != e.party && null != e.party.id && (0, P.Ps)(e.party.id))
}
let ep = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class eh {
  get connected() {
    return null != this.socket && ep.has(this.socket.readyState)
  }
  connect() {
    this.connected || this._requestedConnect || ($.info("WS Connecting"), this._requestedDisconnect = false, this._requestedConnect = true, eU(this.accountId, this.accessToken).then(() => {
      this._requestedConnect = false, this.socket = new WebSocket("".concat(j).concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
    }).catch(e => {
      $.error(e), this._requestedConnect = false, this.handleClose()
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
      type: Q
    })))
  }
  handleOpen() {
    $.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(G, () => this.ping()), (0, Chunk781518.Ai)(this.accountId, this.accessToken), (0, Chunk781518.PW)(this.accountId, this.accessToken)
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
    if (n === X) {
      if ("string" == typeof r && r.startsWith(U)) this.connectionId = decodeURIComponent(r.split(U)[1]), (0, R.am)(this.accountId, this.accessToken, this.connectionId);
      else if (Array.isArray(i)) {
        for (let {
            events: e
          }
          of i)
          if (null != e)
            for (let t of e) this.handleEvent(t)
      }
    }
  }
  handleClose() {
    if (this.pingInterval.stop(), !this._requestedDisconnect) try {
      let e = this.backoff.fail(() => {
        this._requestedDisconnect || this.connect()
      });
      $.info("WS Disconnected. Next retry in ".concat(Math.round(module), "ms"))
    } catch (e) {}
  }
  handleEvent(e) {
    let {
      type: t,
      event: n
    } = e;
    switch (t) {
      case "PLAYER_STATE_CHANGED":
        null != n && null != n.state && ej(this.accountId, this.accessToken, n.state);
        break;
      case "DEVICE_STATE_CHANGED":
        this.handleDeviceStateChange()
    }
  }
  constructor(e, t) {
    D(this, "accessToken", true), D(this, "accountId", true), D(this, "connectionId", true), D(this, "isPremium", true), D(this, "pingInterval", true), D(this, "backoff", true), D(this, "socket", true), D(this, "_requestedDisconnect", false), D(this, "_requestedConnect", false), D(this, "handleDeviceStateChange", l().throttle(() => {
      (0, R.PW)(this.accountId, this.accessToken), eU(this.accountId, this.accessToken)
    }, z)), this.accountId = e, this.accessToken = t, this.pingInterval = new f.Xp, this.backoff = new c.Z(true, K), this.connect()
  }
}

function em(e, t) {
  e in ea ? (ea[e].accessToken = t, $.info("Updated account access token: ".concat(e))) : (ea[e] = new eh(e, t), $.info("Added account: ".concat(e)))
}

function eg(e) {
  if (!(e in ea)) return;
  ea[e].disconnect(), delete ea[e];
  let t = es[e];
  null != t && null != r && t.track.id === r.track.id && (r = null), delete es[e], $.info("Removed account: ".concat(e))
}

function eE(e, t) {
  for (let n of eo[e]) n.is_active = n.id === t
}

function eb(e, t, n) {
  var r, a;
  let o = eu();
  if (null == o) returnfalse;
  let {
    socket: s,
    device: l
  } = o, {
    sync_id: c,
    party: u,
    timestamps: d
  } = t;
  if (null == c || null == u || null == u.id || !(0, P.Ps)(u.id)) returnfalse;
  let f = null != d && null != d.start ? d.start : Date.now(),
    _ = Math.max(0, Date.now() - f),
    p = false,
    h = es[s.accountId];
  null != h && false === h.repeat && (p = null);
  let m = (0, P.c8)(null != (a = null == (r = t.metadata) ? true : r.type) ? a : P.Hw.TRACK);
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
  })), $.info("Listen along ".concat(g, ": ").concat(s.accountId, " to ").concat(e, " playing ").concat(c, " on ").concat(l.name))
}

function ey() {
  Chunk626135.default.track(Chunk981631.rMx.SPOTIFY_LISTEN_ALONG_ENDED, {
    party_id: null != i ? i.partyId : null,
    other_user_id: null != i ? i.userId : null
  });
  let e = null != i ? i.trackId : null;
  i = null, $.info("Listen along stopped");
  let t = eu();
  if (null == exports) return;
  let {
    socket: n
  } = exports, r = es[require.accountId];
  null != r && r.track.id === module && (0, Chunk781518.wO)(require.accountId, require.accessToken)
}

function eO() {
  let e = Object.keys(ea),
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
  for (let t of module) require.includes(exports) || eg(exports);
  let i = false;
  for (let n of exports)
    if (null != r && r.account.id === require.id && (r.account = require, i = true), !module.includes(require.id)) {
      if (null != require.accessToken) {
        em(require.id, require.accessToken);
        continue
      }(0, Chunk781518.hP)(require.id)
    } return i
}

function ev(e) {
  let {
    accountId: t,
    accessToken: n
  } = e;
  return em(t, n), false
}

function eI(e) {
  let {
    accountId: t
  } = e;
  eg(t)
}

function eT(e) {
  let {
    accountId: t,
    isPlaying: n,
    repeat: a,
    track: o,
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
      null == e ? (eo[t].push(c), f = true) : (0, d.Z)(e, c) || (Object.assign(e, c), f = true), eE(t, c.id)
    } else eo[t] = [c], f = true;
  n ? null == ec || ec.start(B, ew) : (o = null, null == ec || ec.stop());
  let p = y.Z.getAccount(t, w.ABu.SPOTIFY);
  if (null == p) return f;
  let h = es[t],
    g = null != o ? {
      account: p,
      track: o,
      startTime: ed(h, s),
      context: u,
      repeat: a
    } : null,
    E = null != c && null != i && 0 === s && !n;
  E || (es[t] = g);
  let O = r;
  if (r = l().values(es).find(e => null != e), eD(b.default.getId()), null == o || E ? er.stop() : er.start(o.duration - s + V, () => ef(p.id)), null != i && (!n && s > 0 || null == c || null != g && i.trackId !== g.track.id) ? ($.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(V, "ms")), ei.start(V, () => {
      $.info("Stopping listening along"), (0, m.Z)(), ef(p.id)
    })) : ei.isStarted() && ($.info("Listen along stop cancelled as playback of track resumed"), ei.stop()), O === r || null == h && null == g || null != h && null != g && h.track.id === g.track.id && h.startTime === g.startTime) return f;
  null != o && (_.Z.dispatch({
    type: "SPOTIFY_NEW_TRACK",
    track: o,
    connectionId: t
  }), S.default.track(w.rMx.ACTIVITY_UPDATED, {
    party_platform: w.ABu.SPOTIFY,
    track_id: o.id,
    has_images: true,
    details: o.album.name,
    state: o.name,
    album_id: o.album.id,
    author_ids: o.artists.map(e => e.id),
    author_names: o.artists.map(e => e.name)
  }))
}

function eS(e) {
  let {
    id: t
  } = e;
  a = t
}

function eA(e) {
  let {
    accountId: t,
    devices: n
  } = e;
  eo[t] = n, $.info("Devices updated for ".concat(t, ":"), n)
}

function eC(e) {
  let {
    accountId: t,
    deviceId: n
  } = e;
  eE(t, n)
}

function eN(e) {
  var t;
  let n, {
      activity: r,
      metadata: a
    } = e,
    o = eu();
  if (null == o) returnfalse;
  let {
    socket: s,
    device: l
  } = o, {
    sync_id: c,
    party: u
  } = r;
  return null != c && null != u && null != u.id && !!(0, P.Ps)(u.id) && (null != a && (n = a.context_uri), null != i && ey(), null != a && void((0, R.hY)(s.accountId, s.accessToken, c, null != (t = a.type) ? t : P.Hw.TRACK, {
    contextUri: n,
    deviceId: l.id
  }), $.info("Play started: ".concat(s.accountId, " playing ").concat(c, " on ").concat(l.name))))
}

function eR(e) {
  let {
    activity: t,
    userId: n
  } = e;
  return eb(n, t, true)
}

function eP() {
  if (null == i || null == eu()) returnfalse;
  let {
    userId: e
  } = i, t = e_(module);
  if (null == exports) return en.start(F, () => {
    null != i && i.userId === module && (0, Chunk524331.Z)()
  }), false;
  en.stop();
  let {
    sync_id: n,
    timestamps: r,
    party: a
  } = exports, o = null != require && i.trackId !== require, s = null != r && i.startTime !== r.start;
  return o || Chunk392711 ? eb(module, exports, false) : null != a && a.id !== i.partyId && (i.partyId = a.id, true)
}

function ew() {
  if (null == r) return;
  let e = eu();
  if (null == module) return;
  let {
    socket: t
  } = module;
  el = true, (0, Chunk781518.wO)(exports.accountId, exports.accessToken), Chunk626135.default.track(Chunk981631.rMx.SPOTIFY_AUTO_PAUSED), $.info("Playback auto paused")
}

function eD(e) {
  if (e === b.default.getId()) {
    let t = T.Z.isCurrentClientInVoiceChannel(),
      n = (0, p.O)({
        userId: e,
        checkSoundSharing: true,
        checkSoundboardSounds: false
      });
    t && n && null != r ? (ee.start(B, ew, false), et.stop()) : et.start(Z, () => ee.stop(), false)
  }
  returnfalse
}

function ex(e) {
  let {
    userId: t
  } = e;
  return eD(t)
}

function eL(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    let {
      userId: n
    } = t;
    return eD(n) || e
  }, false)
}

function eM(e) {
  let {
    accountId: t,
    isPremium: n
  } = e, r = ea[t];
  if (null == r) returnfalse;
  r.isPremium = n, $.info("Profile updated for ".concat(t, ": isPremium = ").concat(n))
}

function ek(e) {
  let {
    settings: t
  } = e;
  if ((null == t ? true : t.desktopSettings) != null) {
    null == ec || ec.stop();
    let {
      sourceId: e,
      sound: n
    } = null == t ? true : t.desktopSettings;
    null != e && E.ZP.getObservedAppNameForWindow(e) === k.name && n ? (ec = new f.Xp).start(B, ew) : (null == ec || ec.stop(), ec = null)
  } else null == t && (null == ec || ec.stop(), ec = null)
}

function ej(e, t, n) {
  var r, i, a, o, s, l, c, u, d, f, p, h, m, g;
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
        image: null == (a = T.album) ? true : a.images[0],
        type: null != (c = null == (o = T.album) ? true : o.type) ? c : P.Hw.ALBUM
      },
      artists: Array.isArray(T.artists) ? T.artists.filter(e => (0, N.lm)(e.id) && (0, N.lm)(e.name)) : [],
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
  if (null != y && true !== y.is_active && (y = M(x({}, y), {
      is_active: true
    })), null != S && [P.Hw.PLAYLIST, P.Hw.ALBUM].includes(S.type)) {
    let n = eB.getPlayerState(e);
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

function eU(e, t) {
  return R.rC.get(e, t, {
    url: P.C7.PLAYER,
    query: {
      additional_types: "".concat(P.Hw.TRACK, ",").concat(P.Hw.EPISODE)
    },
    onlyRetryOnAuthorizationErrors: true
  }).then(n => {
    let r = n.body;
    null != r ? ej(e, t, r).then(() => n) : ef(e)
  }).catch(() => ef(e))
}
class eG extends(o = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk553795.Z, Chunk517100.Z, Chunk158776.Z, Chunk594190.ZP, Chunk606304.Z, Chunk979651.Z), this.syncWith([Chunk158776.Z], () => eP()), (0, Chunk781518.k1)()
  }
  hasConnectedAccount() {
    return Object.keys(ea).length > 0
  }
  getActiveSocketAndDevice() {
    return eu()
  }
  getPlayableComputerDevices() {
    let e = [];
    for (let t in ea) {
      let n = ea[exports];
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
    return null != eu() && null != t && null != n && null != n.id && (0, P.Ps)(n.id)
  }
  getSyncingWith() {
    return i
  }
  wasAutoPaused() {
    return el
  }
  getLastPlayedTrackId() {
    return a
  }
  getTrack() {
    return null != r ? r.track : null
  }
  getPlayerState(e) {
    return es[e]
  }
  shouldShowActivity() {
    return null != r && r.account.showActivity && !Chunk517100.Z.isIdle()
  }
  getActivity() {
    let e, t, n;
    if (null == r) return null != i ? e_(i.userId) : null;
    let {
      track: {
        artists: a,
        album: o,
        name: s,
        id: l,
        duration: c,
        isLocal: u,
        type: d
      },
      startTime: f,
      context: _
    } = r, p = a.slice(0, W);
    a.length > 0 && (e = Chunk586902.map(e => {
      let {
        name: t
      } = e;
      return t.replace(/;/g, "")
    }).join("; "));
    let h = {},
      m = null != o.image ? (0, Chunk81063.f)(Chunk981631.ABu.SPOTIFY, o.image.url) : null;
    null != o.image && null != Chunk524331 && (Chunk726542.large_image = Chunk524331), o.type !== J && (Chunk726542.large_text = o.name), null != Chunk570140 && (t = Chunk570140.uri), n = null != i && null != i.partyId ? i.partyId : "".concat(Chunk616922.lS).concat(Chunk314897.default.getId());
    let g = Chunk392711.length > q ? Chunk392711.substring(0, q - 3) + "..." : Chunk392711,
      E = {
        context_uri: exports,
        album_id: o.id,
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
D(eG, "displayName", "SpotifyStore");
let eB = new eG(Chunk570140.Z, {
    USER_CONNECTIONS_UPDATE: eO,
    CONNECTION_OPEN: eO,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN: ev,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: eI,
    SPOTIFY_PROFILE_UPDATE: eM,
    SPOTIFY_PLAYER_STATE: eT,
    SPOTIFY_PLAYER_PLAY: eS,
    ACTIVITY_PLAY: eN,
    ACTIVITY_SYNC: eR,
    ACTIVITY_SYNC_STOP: ey,
    SPOTIFY_SET_DEVICES: eA,
    SPOTIFY_SET_ACTIVE_DEVICE: eC,
    SPEAKING: ex,
    VOICE_STATE_UPDATES: eL,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: ek
  }),
  eZ = eB