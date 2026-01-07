/** Chunk was on web.js **/
/** chunk id: 768419, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  Z: () => eF
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
  ea = {},
  eo = {},
  es = {},
  el = false,
  ec = null;

function eu() {
  for (let e in ea) {
    let t = ea[e];
    if (!t.connected || null == eo[e]) continue;
    let n = eo[e].find(e => e.is_active);
    if (null != n) return {
      socket: t,
      device: n
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
      null == (e = this.socket) || e.close()
    } catch (e) {}
  }
  ping() {
    var e;
    this.connected && (null == (e = this.socket) || e.send(JSON.stringify({
      type: X
    })))
  }
  handleOpen() {
    $.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(G, () => this.ping()), (0, P.Ai)(this.accountId, this.accessToken), (0, P.PW)(this.accountId, this.accessToken)
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
      $.info("WS Disconnected. Next retry in ".concat(Math.round(e), "ms"))
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
  e in ea ? (ea[e].accessToken = t, $.info("Updated account access token: ".concat(e))) : (ea[e] = new em(e, t), $.info("Added account: ".concat(e)))
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
  if (null == c || null == u || null == u.id || !(0, R.Ps)(u.id)) returnfalse;
  let f = null != d && null != d.start ? d.start : Date.now(),
    p = Math.max(0, Date.now() - f),
    _ = false,
    m = es[s.accountId];
  null != m && false === m.repeat && (_ = null);
  let h = (0, R.c8)(null != (a = null == (r = t.metadata) ? true : r.type) ? a : R.Hw.TRACK);
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
  T.default.track(w.rMx.SPOTIFY_LISTEN_ALONG_ENDED, {
    party_id: null != i ? i.partyId : null,
    other_user_id: null != i ? i.userId : null
  });
  let e = null != i ? i.trackId : null;
  i = null, $.info("Listen along stopped");
  let t = eu();
  if (null == t) return;
  let {
    socket: n
  } = t, r = es[n.accountId];
  null != r && r.track.id === e && (0, P.wO)(n.accountId, n.accessToken)
}

function eO() {
  let e = Object.keys(ea),
    t = y.Z.getAccounts().filter(e => {
      let {
        type: t
      } = e;
      return t === w.ABu.SPOTIFY
    });
  if (null == t) returnfalse;
  let n = t.map(e => {
    let {
      id: t
    } = e;
    return t
  });
  for (let t of e) n.includes(t) || eg(t);
  let i = false;
  for (let n of t)
    if (null != r && r.account.id === n.id && (r.account = n, i = true), !e.includes(n.id)) {
      if (null != n.accessToken) {
        eh(n.id, n.accessToken);
        continue
      }(0, P.hP)(n.id)
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
  n ? null == ec || ec.start(Z, ew) : (o = null, null == ec || ec.stop());
  let _ = y.Z.getAccount(t, w.ABu.SPOTIFY);
  if (null == _) return f;
  let m = es[t],
    g = null != o ? {
      account: _,
      track: o,
      startTime: ed(m, s),
      context: u,
      repeat: a
    } : null,
    E = null != c && null != i && 0 === s && !n;
  E || (es[t] = g);
  let O = r;
  if (r = l().values(es).find(e => null != e), eD(b.default.getId()), null == o || E ? er.stop() : er.start(o.duration - s + V, () => ef(_.id)), null != i && (!n && s > 0 || null == c || null != g && i.trackId !== g.track.id) ? ($.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(V, "ms")), ei.start(V, () => {
      $.info("Stopping listening along"), (0, h.Z)(), ef(_.id)
    })) : ei.isStarted() && ($.info("Listen along stop cancelled as playback of track resumed"), ei.stop()), O === r || null == m && null == g || null != m && null != g && m.track.id === g.track.id && m.startTime === g.startTime) return f;
  null != o && (p.Z.dispatch({
    type: "SPOTIFY_NEW_TRACK",
    track: o,
    connectionId: t
  }), T.default.track(w.rMx.ACTIVITY_UPDATED, {
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

function eT(e) {
  let {
    id: t
  } = e;
  a = t
}

function eC(e) {
  let {
    accountId: t,
    devices: n
  } = e;
  eo[t] = n, $.info("Devices updated for ".concat(t, ":"), n)
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
  return null != c && null != u && null != u.id && !!(0, R.Ps)(u.id) && (null != a && (n = a.context_uri), null != i && ey(), null != a && void((0, P.hY)(s.accountId, s.accessToken, c, null != (t = a.type) ? t : R.Hw.TRACK, {
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
  } = i, t = ep(e);
  if (null == t) return en.start(B, () => {
    null != i && i.userId === e && (0, h.Z)()
  }), false;
  en.stop();
  let {
    sync_id: n,
    timestamps: r,
    party: a
  } = t, o = null != n && i.trackId !== n, s = null != r && i.startTime !== r.start;
  return o || s ? eb(e, t, false) : null != a && a.id !== i.partyId && (i.partyId = a.id, true)
}

function ew() {
  if (null == r) return;
  let e = eu();
  if (null == e) return;
  let {
    socket: t
  } = e;
  el = true, (0, P.wO)(t.accountId, t.accessToken), T.default.track(w.rMx.SPOTIFY_AUTO_PAUSED), $.info("Playback auto paused")
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
  } = e, r = ea[t];
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
  var r, i, a, o, s, l, c, u, d, f, _, m, h, g;
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
        image: null == (a = I.album) ? true : a.images[0],
        type: null != (c = null == (o = I.album) ? true : o.type) ? c : R.Hw.ALBUM
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
class eG extends(o = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(b.default, y.Z, O.Z, v.Z, E.ZP, S.Z, I.Z), this.syncWith([v.Z], () => eR()), (0, P.k1)()
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
      let n = ea[t];
      if (!n.connected || null == eo[t]) continue;
      let r = eo[t].find(e => !e.is_restricted && e.type === Y);
      null != r && e.push({
        socket: n,
        device: r
      })
    }
    return e
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
    return a
  }
  getTrack() {
    return null != r ? r.track : null
  }
  getPlayerState(e) {
    return es[e]
  }
  shouldShowActivity() {
    return null != r && r.account.showActivity && !O.Z.isIdle()
  }
  getActivity() {
    let e, t, n;
    if (null == r) return null != i ? ep(i.userId) : null;
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
      context: p
    } = r, _ = a.slice(0, W);
    a.length > 0 && (e = _.map(e => {
      let {
        name: t
      } = e;
      return t.replace(/;/g, "")
    }).join("; "));
    let m = {},
      h = null != o.image ? (0, C.f)(w.ABu.SPOTIFY, o.image.url) : null;
    null != o.image && null != h && (m.large_image = h), o.type !== J && (m.large_text = o.name), null != p && (t = p.uri), n = null != i && null != i.partyId ? i.partyId : "".concat(R.lS).concat(b.default.getId());
    let g = s.length > q ? s.substring(0, q - 3) + "..." : s,
      E = {
        context_uri: t,
        album_id: o.id,
        artist_ids: _.map(e => {
          let {
            id: t
          } = e;
          return t
        }),
        type: d,
        button_urls: []
      },
      y = {
        name: M.name,
        assets: m,
        details: g,
        state: e,
        timestamps: {
          start: f,
          end: f + c
        },
        party: {
          id: n
        }
      };
    return u || (y.sync_id = l, y.flags = w.xjy.PLAY | w.xjy.SYNC, y.metadata = E), y
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