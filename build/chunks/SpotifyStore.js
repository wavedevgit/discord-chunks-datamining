/** Chunk was on web.js **/
/** chunk id: 768419, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, o;
require.d(exports, {
  Z: () => eF
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

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let M = Chunk726542.Z.get(Chunk981631.ABu.SPOTIFY),
  k = "wss://dealer.spotify.com/?access_token=",
  U = "hm://pusher/v1/connections/",
  G = 30 * Chunk70956.Z.Millis.SECOND,
  Z = 30 * Chunk70956.Z.Millis.SECOND,
  F = 100,
  B = 5 * Chunk70956.Z.Millis.MINUTE,
  V = 5 * Chunk70956.Z.Millis.SECOND,
  H = 1.5 * Chunk70956.Z.Millis.SECOND,
  Y = "Computer",
  W = 5,
  K = +Chunk70956.Z.Millis.MINUTE,
  z = 3 * Chunk70956.Z.Millis.SECOND,
  q = 128,
  Q = "message",
  X = "ping",
  J = "single",
  $ = new Chunk710845.Z("Spotify"),
  ee = new Chunk846519.V7,
  et = new Chunk846519.V7,
  en = new Chunk846519.V7,
  er = new Chunk846519.V7,
  ei = new Chunk846519.V7,
  eo = {},
  ea = {},
  es = {},
  el = false,
  ec = null;

function eu() {
  for (let e in eo) {
    let t = eo[module];
    if (!exports.connected || null == ea[module]) continue;
    let n = ea[module].find(e => e.is_active);
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
  p.Z.dispatch({
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

function ep(e) {
  return v.Z.findActivity(e, e => null != e.party && null != e.party.id && (0, R.Ps)(e.party.id))
}
let e_ = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class em {
  get connected() {
    return null != this.socket && e_.has(this.socket.readyState)
  }
  connect() {
    this.connected || this._requestedConnect || ($.info("WS Connecting"), this._requestedDisconnect = false, this._requestedConnect = true, eU(this.accountId, this.accessToken).then(() => {
      this._requestedConnect = false, this.socket = new WebSocket("".concat(k).concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
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
      type: X
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
    if (n === Q) {
      if ("string" == typeof r && r.startsWith(U)) this.connectionId = decodeURIComponent(r.split(U)[1]), (0, P.am)(this.accountId, this.accessToken, this.connectionId);
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
        null != n && null != n.state && ek(this.accountId, this.accessToken, n.state);
        break;
      case "DEVICE_STATE_CHANGED":
        this.handleDeviceStateChange()
    }
  }
  constructor(e, t) {
    D(this, "accessToken", true), D(this, "accountId", true), D(this, "connectionId", true), D(this, "isPremium", true), D(this, "pingInterval", true), D(this, "backoff", true), D(this, "socket", true), D(this, "_requestedDisconnect", false), D(this, "_requestedConnect", false), D(this, "handleDeviceStateChange", l().throttle(() => {
      (0, P.PW)(this.accountId, this.accessToken), eU(this.accountId, this.accessToken)
    }, z)), this.accountId = e, this.accessToken = t, this.pingInterval = new f.Xp, this.backoff = new c.Z(true, K), this.connect()
  }
}

function eh(e, t) {
  e in eo ? (eo[e].accessToken = t, $.info("Updated account access token: ".concat(e))) : (eo[e] = new em(e, t), $.info("Added account: ".concat(e)))
}

function eg(e) {
  if (!(e in eo)) return;
  eo[e].disconnect(), delete eo[e];
  let t = es[e];
  null != t && null != r && t.track.id === r.track.id && (r = null), delete es[e], $.info("Removed account: ".concat(e))
}

function eE(e, t) {
  for (let n of ea[e]) n.is_active = n.id === t
}

function eb(e, t, n) {
  var r, o;
  let a = eu();
  if (null == a) returnfalse;
  let {
    socket: s,
    device: l
  } = a, {
    sync_id: c,
    party: u,
    timestamps: d
  } = t;
  if (null == c || null == u || null == u.id || !(0, R.Ps)(u.id)) returnfalse;
  let f = null != d && null != d.start ? d.start : Date.now(),
    p = Math.max(0, Date.now() - f),
    _ = false,
    m = es[s.accountId];
  null != m && false === m.repeat && (_ = null);
  let h = (0, R.c8)(null != (o = null == (r = t.metadata) ? true : r.type) ? o : R.Hw.TRACK);
  if (null == h) return;
  (0, P.hY)(s.accountId, s.accessToken, c, h, {
    position: +p,
    deviceId: l.id,
    repeat: _
  }), i = {
    userId: e,
    partyId: u.id,
    trackId: c,
    startTime: f
  };
  let g = "presence change";
  n && (g = "started", T.default.track(w.rMx.SPOTIFY_LISTEN_ALONG_STARTED, {
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
  let e = Object.keys(eo),
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
        eh(require.id, require.accessToken);
        continue
      }(0, Chunk781518.hP)(require.id)
    } return i
}

function ev(e) {
  let {
    accountId: t,
    accessToken: n
  } = e;
  return eh(t, n), false
}

function eS(e) {
  let {
    accountId: t
  } = e;
  eg(t)
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
    if (null != ea[t]) {
      let e = ea[t].find(e => {
        let {
          id: t
        } = e;
        return t === c.id
      });
      null == e ? (ea[t].push(c), f = true) : (0, d.Z)(e, c) || (Object.assign(e, c), f = true), eE(t, c.id)
    } else ea[t] = [c], f = true;
  n ? null == ec || ec.start(Z, ew) : (a = null, null == ec || ec.stop());
  let _ = y.Z.getAccount(t, w.ABu.SPOTIFY);
  if (null == _) return f;
  let m = es[t],
    g = null != a ? {
      account: _,
      track: a,
      startTime: ed(m, s),
      context: u,
      repeat: o
    } : null,
    E = null != c && null != i && 0 === s && !n;
  E || (es[t] = g);
  let O = r;
  if (r = l().values(es).find(e => null != e), eD(b.default.getId()), null == a || E ? er.stop() : er.start(a.duration - s + V, () => ef(_.id)), null != i && (!n && s > 0 || null == c || null != g && i.trackId !== g.track.id) ? ($.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(V, "ms")), ei.start(V, () => {
      $.info("Stopping listening along"), (0, h.Z)(), ef(_.id)
    })) : ei.isStarted() && ($.info("Listen along stop cancelled as playback of track resumed"), ei.stop()), O === r || null == m && null == g || null != m && null != g && m.track.id === g.track.id && m.startTime === g.startTime) return f;
  null != a && (p.Z.dispatch({
    type: "SPOTIFY_NEW_TRACK",
    track: a,
    connectionId: t
  }), T.default.track(w.rMx.ACTIVITY_UPDATED, {
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

function eC(e) {
  let {
    accountId: t,
    devices: n
  } = e;
  ea[t] = n, $.info("Devices updated for ".concat(t, ":"), n)
}

function eA(e) {
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
      metadata: o
    } = e,
    a = eu();
  if (null == a) returnfalse;
  let {
    socket: s,
    device: l
  } = a, {
    sync_id: c,
    party: u
  } = r;
  return null != c && null != u && null != u.id && !!(0, R.Ps)(u.id) && (null != o && (n = o.context_uri), null != i && ey(), null != o && void((0, P.hY)(s.accountId, s.accessToken, c, null != (t = o.type) ? t : R.Hw.TRACK, {
    contextUri: n,
    deviceId: l.id
  }), $.info("Play started: ".concat(s.accountId, " playing ").concat(c, " on ").concat(l.name))))
}

function eP(e) {
  let {
    activity: t,
    userId: n
  } = e;
  return eb(n, t, true)
}

function eR() {
  if (null == i || null == eu()) returnfalse;
  let {
    userId: e
  } = i, t = ep(module);
  if (null == exports) return en.start(B, () => {
    null != i && i.userId === module && (0, Chunk524331.Z)()
  }), false;
  en.stop();
  let {
    sync_id: n,
    timestamps: r,
    party: o
  } = exports, a = null != require && i.trackId !== require, s = null != r && i.startTime !== r.start;
  return a || Chunk392711 ? eb(module, exports, false) : null != o && o.id !== i.partyId && (i.partyId = o.id, true)
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
    let t = I.Z.isCurrentClientInVoiceChannel(),
      n = (0, _.O)({
        userId: e,
        checkSoundSharing: true,
        checkSoundboardSounds: false
      });
    t && n && null != r ? (ee.start(Z, ew, false), et.stop()) : et.start(F, () => ee.stop(), false)
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

function ej(e) {
  let {
    accountId: t,
    isPremium: n
  } = e, r = eo[t];
  if (null == r) returnfalse;
  r.isPremium = n, $.info("Profile updated for ".concat(t, ": isPremium = ").concat(n))
}

function eM(e) {
  let {
    settings: t
  } = e;
  if ((null == t ? true : t.desktopSettings) != null) {
    null == ec || ec.stop();
    let {
      sourceId: e,
      sound: n
    } = null == t ? true : t.desktopSettings;
    null != e && E.ZP.getObservedAppNameForWindow(e) === M.name && n ? (ec = new f.Xp).start(Z, ew) : (null == ec || ec.stop(), ec = null)
  } else null == t && (null == ec || ec.stop(), ec = null)
}

function ek(e, t, n) {
  var r, i, o, a, s, l, c, u, d, f, _, m, h, g;
  let E, b, {
    device: y,
    progress_ms: O,
    is_playing: v,
    repeat_state: S,
    item: I,
    context: T
  } = n;
  if (null != I && I.type === R.Hw.TRACK) {
    let e = I.id;
    null != I.linked_from && null != I.linked_from.id && (e = I.linked_from.id), E = {
      id: e,
      name: I.name,
      duration: I.duration_ms,
      type: R.Hw.TRACK,
      album: {
        id: null != (s = null == (r = I.album) ? true : r.id) ? s : "",
        name: null != (l = null == (i = I.album) ? true : i.name) ? l : "",
        image: null == (o = I.album) ? true : o.images[0],
        type: null != (c = null == (a = I.album) ? true : a.type) ? c : R.Hw.ALBUM
      },
      artists: Array.isArray(I.artists) ? I.artists.filter(e => (0, N.lm)(e.id) && (0, N.lm)(e.name)) : [],
      isLocal: I.is_local || false
    }
  } else null != I && I.type === R.Hw.EPISODE && (E = {
    id: I.id,
    name: I.name,
    duration: I.duration_ms,
    type: R.Hw.EPISODE,
    album: {
      id: null != (m = null == (u = I.show) ? true : u.id) ? m : "",
      name: null != (h = null == (d = I.show) ? true : d.name) ? h : "",
      image: null == (f = I.show) ? true : f.images[0],
      type: null != (g = null == (_ = I.album) ? true : _.type) ? g : R.Hw.SHOW
    },
    artists: [],
    isLocal: false
  });
  if (null != y && true !== y.is_active && (y = j(x({}, y), {
      is_active: true
    })), null != T && [R.Hw.PLAYLIST, R.Hw.ALBUM].includes(T.type)) {
    let n = eZ.getPlayerState(e);
    b = null != n && null != n.context && n.context.uri === T.uri ? Promise.resolve(n.context) : T.type === R.Hw.ALBUM ? Promise.resolve(T) : P.rC.get(e, t, {
      url: T.href
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
    null == t || t.type !== R.Hw.PLAYLIST || t.public || (t = null), p.Z.dispatch({
      type: "SPOTIFY_PLAYER_STATE",
      accountId: e,
      track: E,
      volumePercent: null != y ? y.volume_percent : 0,
      isPlaying: v,
      repeat: "off" !== S,
      position: O,
      context: t,
      device: y
    })
  })
}

function eU(e, t) {
  return P.rC.get(e, t, {
    url: R.C7.PLAYER,
    query: {
      additional_types: "".concat(R.Hw.TRACK, ",").concat(R.Hw.EPISODE)
    },
    onlyRetryOnAuthorizationErrors: true
  }).then(n => {
    let r = n.body;
    null != r ? ek(e, t, r).then(() => n) : ef(e)
  }).catch(() => ef(e))
}
class eG extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk553795.Z, Chunk517100.Z, Chunk158776.Z, Chunk594190.ZP, Chunk606304.Z, Chunk979651.Z), this.syncWith([Chunk158776.Z], () => eR()), (0, Chunk781518.k1)()
  }
  hasConnectedAccount() {
    return Object.keys(eo).length > 0
  }
  getActiveSocketAndDevice() {
    return eu()
  }
  getPlayableComputerDevices() {
    let e = [];
    for (let t in eo) {
      let n = eo[exports];
      if (!require.connected || null == ea[exports]) continue;
      let r = ea[exports].find(e => !e.is_restricted && e.type === Y);
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
    return null != eu() && null != t && null != n && null != n.id && (0, R.Ps)(n.id)
  }
  getSyncingWith() {
    return i
  }
  wasAutoPaused() {
    return el
  }
  getLastPlayedTrackId() {
    return o
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
    if (null == r) return null != i ? ep(i.userId) : null;
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
      context: p
    } = r, _ = o.slice(0, W);
    o.length > 0 && (e = Chunk586902.map(e => {
      let {
        name: t
      } = e;
      return t.replace(/;/g, "")
    }).join("; "));
    let m = {},
      h = null != a.image ? (0, Chunk81063.f)(Chunk981631.ABu.SPOTIFY, a.image.url) : null;
    null != a.image && null != Chunk524331 && (Chunk726542.large_image = Chunk524331), a.type !== J && (Chunk726542.large_text = a.name), null != Chunk570140 && (t = Chunk570140.uri), n = null != i && null != i.partyId ? i.partyId : "".concat(Chunk616922.lS).concat(Chunk314897.default.getId());
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
        name: M.name,
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
let eZ = new eG(Chunk570140.Z, {
    USER_CONNECTIONS_UPDATE: eO,
    CONNECTION_OPEN: eO,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN: ev,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: eS,
    SPOTIFY_PROFILE_UPDATE: ej,
    SPOTIFY_PLAYER_STATE: eI,
    SPOTIFY_PLAYER_PLAY: eT,
    ACTIVITY_PLAY: eN,
    ACTIVITY_SYNC: eP,
    ACTIVITY_SYNC_STOP: ey,
    SPOTIFY_SET_DEVICES: eC,
    SPOTIFY_SET_ACTIVE_DEVICE: eA,
    SPEAKING: ex,
    VOICE_STATE_UPDATES: eL,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: eM
  }),
  eF = eZ