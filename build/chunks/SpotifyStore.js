/** Chunk was on web.js **/
/** chunk id: 655116, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  A: () => eF
}), require("./896048.js"), require("./457529.js"), require("./747238.js"), require("./321073.js"), require("./812715.js"), require("./938796.js");
var s, Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk158390 = require("./158390.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk717558 = require("./717558.js"),
  Chunk573648 = require("./573648.js"),
  Chunk504337 = require("./504337.js"),
  Chunk626584 = require("./626584.js"),
  Chunk15285 = require("./15285.js"),
  Chunk961350 = require("./961350.js"),
  Chunk962173 = require("./962173.js"),
  Chunk885576 = require("./885576.js"),
  Chunk290863 = require("./290863.js"),
  Chunk485296 = require("./485296.js"),
  Chunk977997 = require("./977997.js"),
  Chunk954571 = require("./954571.js"),
  Chunk139675 = require("./139675.js"),
  Chunk927813 = require("./927813.js"),
  Chunk403362 = require("./403362.js"),
  Chunk107750 = require("./107750.js"),
  Chunk272984 = require("./272984.js"),
  Chunk652215 = require("./652215.js");

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
let M = Chunk573648.A.get(Chunk652215.fg2.SPOTIFY),
  k = "wss://dealer.spotify.com/?access_token=",
  U = "hm://pusher/v1/connections/",
  G = 30 * Chunk927813.A.Millis.SECOND,
  V = 30 * Chunk927813.A.Millis.SECOND,
  F = 100,
  B = 5 * Chunk927813.A.Millis.MINUTE,
  H = 5 * Chunk927813.A.Millis.SECOND,
  Y = 1.5 * Chunk927813.A.Millis.SECOND,
  W = "Computer",
  K = 5,
  z = +Chunk927813.A.Millis.MINUTE,
  q = 3 * Chunk927813.A.Millis.SECOND,
  X = 128,
  Z = "message",
  Q = "ping",
  $ = "single",
  J = new Chunk626584.A("Spotify"),
  ee = new Chunk451988.Ep,
  et = new Chunk451988.Ep,
  en = new Chunk451988.Ep,
  er = new Chunk451988.Ep,
  ei = new Chunk451988.Ep,
  ea = {},
  es = {},
  eo = {},
  el = false,
  ec = null;

function eu() {
  for (let e in ea) {
    let t = ea[e];
    if (!t.connected || null == es[e]) continue;
    let n = es[e].find(e => e.is_active);
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
  return Math.abs(i - r) > Y ? i : r
}

function ef(e) {
  p.h.dispatch({
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
  return v.A.findActivity(e, e => null != e.party && null != e.party.id && (0, w.pH)(e.party.id))
}
let e_ = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class eh {
  get connected() {
    return null != this.socket && e_.has(this.socket.readyState)
  }
  connect() {
    this.connected || this._requestedConnect || (J.info("WS Connecting"), this._requestedDisconnect = false, this._requestedConnect = true, eU(this.accountId, this.accessToken).then(() => {
      this._requestedConnect = false, this.socket = new WebSocket("".concat(k).concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
    }).catch(e => {
      J.error(e), this._requestedConnect = false, this.handleClose()
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
      type: Q
    })))
  }
  handleOpen() {
    J.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(G, () => this.ping()), (0, R.E$)(this.accountId, this.accessToken), (0, R.oG)(this.accountId, this.accessToken)
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
    if (n === Z) {
      if ("string" == typeof r && r.startsWith(U)) this.connectionId = decodeURIComponent(r.split(U)[1]), (0, R.tO)(this.accountId, this.accessToken, this.connectionId);
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
      J.info("WS Disconnected. Next retry in ".concat(Math.round(e), "ms"))
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
      (0, R.oG)(this.accountId, this.accessToken), eU(this.accountId, this.accessToken)
    }, q)), this.accountId = e, this.accessToken = t, this.pingInterval = new f.IX, this.backoff = new c.A(true, z), this.connect()
  }
}

function em(e, t) {
  e in ea ? (ea[e].accessToken = t, J.info("Updated account access token: ".concat(e))) : (ea[e] = new eh(e, t), J.info("Added account: ".concat(e)))
}

function eg(e) {
  if (!(e in ea)) return;
  ea[e].disconnect(), delete ea[e];
  let t = eo[e];
  null != t && null != r && t.track.id === r.track.id && (r = null), delete eo[e], J.info("Removed account: ".concat(e))
}

function eE(e, t) {
  for (let n of es[e]) n.is_active = n.id === t
}

function ey(e, t, n) {
  var r, a;
  let s = eu();
  if (null == s) returnfalse;
  let {
    socket: o,
    device: l
  } = s, {
    sync_id: c,
    party: u,
    timestamps: d
  } = t;
  if (null == c || null == u || null == u.id || !(0, w.pH)(u.id)) returnfalse;
  let f = null != d && null != d.start ? d.start : Date.now(),
    p = Math.max(0, Date.now() - f),
    _ = false,
    h = eo[o.accountId];
  null != h && false === h.repeat && (_ = null);
  let m = (0, w.NJ)(null != (r = null == (a = t.metadata) ? true : a.type) ? r : w.M0.TRACK);
  if (null == m) return;
  (0, R.ZH)(o.accountId, o.accessToken, c, m, {
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
  n && (g = "started", S.default.track(P.HAw.SPOTIFY_LISTEN_ALONG_STARTED, {
    party_id: u.id,
    other_user_id: e
  })), J.info("Listen along ".concat(g, ": ").concat(o.accountId, " to ").concat(e, " playing ").concat(c, " on ").concat(l.name))
}

function eb() {
  S.default.track(P.HAw.SPOTIFY_LISTEN_ALONG_ENDED, {
    party_id: null != i ? i.partyId : null,
    other_user_id: null != i ? i.userId : null
  });
  let e = null != i ? i.trackId : null;
  i = null, J.info("Listen along stopped");
  let t = eu();
  if (null == t) return;
  let {
    socket: n
  } = t, r = eo[n.accountId];
  null != r && r.track.id === e && (0, R.v7)(n.accountId, n.accessToken)
}

function eO() {
  let e = Object.keys(ea),
    t = b.A.getAccounts().filter(e => {
      let {
        type: t
      } = e;
      return t === P.fg2.SPOTIFY
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
        em(n.id, n.accessToken);
        continue
      }(0, R.iD)(n.id)
    } return i
}

function ev(e) {
  let {
    accountId: t,
    accessToken: n
  } = e;
  return em(t, n), false
}

function eA(e) {
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
    track: s,
    position: o,
    device: c,
    context: u
  } = e, f = false;
  if (null != c)
    if (null != es[t]) {
      let e = es[t].find(e => {
        let {
          id: t
        } = e;
        return t === c.id
      });
      null == e ? (es[t].push(c), f = true) : (0, d.A)(e, c) || (Object.assign(e, c), f = true), eE(t, c.id)
    } else es[t] = [c], f = true;
  n ? null == ec || ec.start(V, eP) : (s = null, null == ec || ec.stop());
  let _ = b.A.getAccount(t, P.fg2.SPOTIFY);
  if (null == _) return f;
  let h = eo[t],
    g = null != s ? {
      account: _,
      track: s,
      startTime: ed(h, o),
      context: u,
      repeat: a
    } : null,
    E = null != c && null != i && 0 === o && !n;
  E || (eo[t] = g);
  let O = r;
  if (r = l().values(eo).find(e => null != e), eD(y.default.getId()), null == s || E ? er.stop() : er.start(s.duration - o + H, () => ef(_.id)), null != i && (!n && o > 0 || null == c || null != g && i.trackId !== g.track.id) ? (J.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(H, "ms")), ei.start(H, () => {
      J.info("Stopping listening along"), (0, m.A)(), ef(_.id)
    })) : ei.isStarted() && (J.info("Listen along stop cancelled as playback of track resumed"), ei.stop()), O === r || null == h && null == g || null != h && null != g && h.track.id === g.track.id && h.startTime === g.startTime) return f;
  null != s && (p.h.dispatch({
    type: "SPOTIFY_NEW_TRACK",
    track: s,
    connectionId: t
  }), S.default.track(P.HAw.ACTIVITY_UPDATED, {
    party_platform: P.fg2.SPOTIFY,
    track_id: s.id,
    has_images: true,
    details: s.album.name,
    state: s.name,
    album_id: s.album.id,
    author_ids: s.artists.map(e => e.id),
    author_names: s.artists.map(e => e.name)
  }))
}

function eS(e) {
  let {
    id: t
  } = e;
  a = t
}

function eT(e) {
  let {
    accountId: t,
    devices: n
  } = e;
  es[t] = n, J.info("Devices updated for ".concat(t, ":"), n)
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
    s = eu();
  if (null == s) returnfalse;
  let {
    socket: o,
    device: l
  } = s, {
    sync_id: c,
    party: u
  } = r;
  return null != c && null != u && null != u.id && !!(0, w.pH)(u.id) && (null != a && (n = a.context_uri), null != i && eb(), null != a && void((0, R.ZH)(o.accountId, o.accessToken, c, null != (t = a.type) ? t : w.M0.TRACK, {
    contextUri: n,
    deviceId: l.id
  }), J.info("Play started: ".concat(o.accountId, " playing ").concat(c, " on ").concat(l.name))))
}

function eR(e) {
  let {
    activity: t,
    userId: n
  } = e;
  return ey(n, t, true)
}

function ew() {
  if (null == i || null == eu()) returnfalse;
  let {
    userId: e
  } = i, t = ep(e);
  if (null == t) return en.start(B, () => {
    null != i && i.userId === e && (0, m.A)()
  }), false;
  en.stop();
  let {
    sync_id: n,
    timestamps: r,
    party: a
  } = t, s = null != n && i.trackId !== n, o = null != r && i.startTime !== r.start;
  return s || o ? ey(e, t, false) : null != a && a.id !== i.partyId && (i.partyId = a.id, true)
}

function eP() {
  if (null == r) return;
  let e = eu();
  if (null == e) return;
  let {
    socket: t
  } = e;
  el = true, (0, R.v7)(t.accountId, t.accessToken), S.default.track(P.HAw.SPOTIFY_AUTO_PAUSED), J.info("Playback auto paused")
}

function eD(e) {
  if (e === y.default.getId()) {
    let t = I.A.isCurrentClientInVoiceChannel(),
      n = (0, _.R)({
        userId: e,
        checkSoundSharing: true,
        checkSoundboardSounds: false
      });
    t && n && null != r ? (ee.start(V, eP, false), et.stop()) : et.start(F, () => ee.stop(), false)
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
  r.isPremium = n, J.info("Profile updated for ".concat(t, ": isPremium = ").concat(n))
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
    null != e && E.Ay.getObservedAppNameForWindow(e) === M.name && n ? (ec = new f.IX).start(V, eP) : (null == ec || ec.stop(), ec = null)
  } else null == t && (null == ec || ec.stop(), ec = null)
}

function ek(e, t, n) {
  var r, i, a, s, o, l, c, u, d, f, _, h, m, g;
  let E, y, {
    device: b,
    progress_ms: O,
    is_playing: v,
    repeat_state: A,
    item: I,
    context: S
  } = n;
  if (null != I && I.type === w.M0.TRACK) {
    let e = I.id;
    null != I.linked_from && null != I.linked_from.id && (e = I.linked_from.id), E = {
      id: e,
      name: I.name,
      duration: I.duration_ms,
      type: w.M0.TRACK,
      album: {
        id: null != (r = null == (s = I.album) ? true : s.id) ? r : "",
        name: null != (i = null == (o = I.album) ? true : o.name) ? i : "",
        image: null == (l = I.album) ? true : l.images[0],
        type: null != (a = null == (c = I.album) ? true : c.type) ? a : w.M0.ALBUM
      },
      artists: Array.isArray(I.artists) ? I.artists.filter(e => (0, N.Vq)(e.id) && (0, N.Vq)(e.name)) : [],
      isLocal: I.is_local || false
    }
  } else null != I && I.type === w.M0.EPISODE && (E = {
    id: I.id,
    name: I.name,
    duration: I.duration_ms,
    type: w.M0.EPISODE,
    album: {
      id: null != (u = null == (_ = I.show) ? true : _.id) ? u : "",
      name: null != (d = null == (h = I.show) ? true : h.name) ? d : "",
      image: null == (m = I.show) ? true : m.images[0],
      type: null != (f = null == (g = I.album) ? true : g.type) ? f : w.M0.SHOW
    },
    artists: [],
    isLocal: false
  });
  if (null != b && true !== b.is_active && (b = j(x({}, b), {
      is_active: true
    })), null != S && [w.M0.PLAYLIST, w.M0.ALBUM].includes(S.type)) {
    let n = eV.getPlayerState(e);
    y = null != n && null != n.context && n.context.uri === S.uri ? Promise.resolve(n.context) : S.type === w.M0.ALBUM ? Promise.resolve(S) : R.tB.get(e, t, {
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
  } else y = Promise.resolve(true);
  return y.then(t => {
    null == t || t.type !== w.M0.PLAYLIST || t.public || (t = null), p.h.dispatch({
      type: "SPOTIFY_PLAYER_STATE",
      accountId: e,
      track: E,
      volumePercent: null != b ? b.volume_percent : 0,
      isPlaying: v,
      repeat: "off" !== A,
      position: O,
      context: t,
      device: b
    })
  })
}

function eU(e, t) {
  return R.tB.get(e, t, {
    url: w.RQ.PLAYER,
    query: {
      additional_types: "".concat(w.M0.TRACK, ",").concat(w.M0.EPISODE)
    },
    onlyRetryOnAuthorizationErrors: true
  }).then(n => {
    let r = n.body;
    null != r ? ek(e, t, r).then(() => n) : ef(e)
  }).catch(() => ef(e))
}
class eG extends(s = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(y.default, b.A, O.A, v.A, E.Ay, A.A, I.A), this.syncWith([v.A], () => ew()), (0, R.f0)()
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
      if (!n.connected || null == es[t]) continue;
      let r = es[t].find(e => !e.is_restricted && e.type === W);
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
    return null != eu() && null != t && null != n && null != n.id && (0, w.pH)(n.id)
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
    return eo[e]
  }
  shouldShowActivity() {
    return null != r && r.account.showActivity && !O.A.isIdle()
  }
  getActivity() {
    let e, t, n;
    if (null == r) return null != i ? ep(i.userId) : null;
    let {
      track: {
        artists: a,
        album: s,
        name: o,
        id: l,
        duration: c,
        isLocal: u,
        type: d
      },
      startTime: f,
      context: p
    } = r, _ = a.slice(0, K);
    a.length > 0 && (e = _.map(e => {
      let {
        name: t
      } = e;
      return t.replace(/;/g, "")
    }).join("; "));
    let h = {},
      m = null != s.image ? (0, T.Di)(P.fg2.SPOTIFY, s.image.url) : null;
    null != s.image && null != m && (h.large_image = m), s.type !== $ && (h.large_text = s.name), null != p && (t = p.uri), n = null != i && null != i.partyId ? i.partyId : "".concat(w.HS).concat(y.default.getId());
    let g = o.length > X ? o.substring(0, X - 3) + "..." : o,
      E = {
        context_uri: t,
        album_id: s.id,
        artist_ids: _.map(e => {
          let {
            id: t
          } = e;
          return t
        }),
        type: d,
        button_urls: []
      },
      b = {
        name: M.name,
        assets: h,
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
    return u || (b.sync_id = l, b.flags = P.jUm.PLAY | P.jUm.SYNC, b.metadata = E), b
  }
}
D(eG, "displayName", "SpotifyStore");
let eV = new eG(Chunk73153.h, {
    USER_CONNECTIONS_UPDATE: eO,
    CONNECTION_OPEN: eO,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN: ev,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: eA,
    SPOTIFY_PROFILE_UPDATE: ej,
    SPOTIFY_PLAYER_STATE: eI,
    SPOTIFY_PLAYER_PLAY: eS,
    ACTIVITY_PLAY: eN,
    ACTIVITY_SYNC: eR,
    ACTIVITY_SYNC_STOP: eb,
    SPOTIFY_SET_DEVICES: eT,
    SPOTIFY_SET_ACTIVE_DEVICE: eC,
    SPEAKING: ex,
    VOICE_STATE_UPDATES: eL,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: eM
  }),
  eF = eV