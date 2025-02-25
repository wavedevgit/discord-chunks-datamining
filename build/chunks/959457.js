/** Chunk was on web.js **/
"use strict";
let r, i;
n.d(t, {
  Z: () => er
}), n(653041);
var o, a = n(512722),
  s = n.n(a),
  l = n(392711),
  c = n.n(l),
  u = n(442837),
  d = n(46973),
  f = n(570140),
  p = n(594190),
  _ = n(444852),
  h = n(569545),
  m = n(687516),
  g = n(139656),
  E = n(358085),
  v = n(199902),
  b = n(314897),
  y = n(131951),
  O = n(158776),
  S = n(19780),
  I = n(981631),
  T = n(65154);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let A = {},
  C = {},
  R = {},
  P = {},
  D = {},
  w = I.hVg.THEATRE,
  L = {},
  x = [],
  M = 30;

function j(e, t, n) {
  return s()(null != r, "Creating RTCConnection without session."), new _.Z({
    sessionId: r,
    streamKey: e,
    serverId: t,
    initialLayout: w,
    analyticsContext: n,
    isStreamer: null != C[e],
    parentMediaSessionId: S.Z.getMediaSessionId()
  })
}

function k() {
  c().forEach(L, (e, t) => {
    e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete L[t]
  })
}

function U(e) {
  c().forEach(L, (t, n) => {
    t.updateStats(e)
  }), e.filter(e => {
    let {
      connection: t
    } = e;
    return t.context === T.Yn.STREAM
  }).forEach(e => {
    let {
      stats: t
    } = e;
    f.Z.dispatch({
      type: "STREAM_STATS_UPDATE",
      stats: t
    })
  })
}

function G(e) {
  r = e.sessionId, i = null, k()
}

function B() {
  r = null, i = null, k()
}

function F(e) {
  let {
    streamType: t,
    guildId: n,
    channelId: r,
    appContext: i,
    pid: o,
    sourceId: a,
    nativePickerStyleUsed: s,
    goLiveModalDurationMs: l
  } = e, u = (0, h.V9)({
    streamType: t,
    guildId: n,
    channelId: r,
    ownerId: b.default.getId()
  });
  if (A[u] = i, c().forEach(L, e => {
      let {
        analyticsContext: t,
        isOwner: n
      } = e;
      t.setActionContext(i), t.setNativePickerStyleUsed(s), n && t.trackStart()
    }), P[u] = a, R[u] = o, null != o) {
    let e = p.ZP.getGameForPID(o);
    null != e && (C[u] = {
      name: e.name,
      id: e.id,
      exe: e.exeName,
      distributor: e.distributor
    })
  }
  null != l ? D[u] = l : delete D[u]
}

function V(e) {
  let {
    appContext: t,
    streamKey: n
  } = e;
  A[n] = t, c().forEach(L, e => {
    let {
      analyticsContext: n,
      isOwner: r
    } = e;
    n.setActionContext(t), r && n.trackEnd()
  }), P[n] = null, R[n] = null, delete D[n]
}

function Z(e) {
  let {
    streamKey: t,
    rtcServerId: n,
    region: r,
    viewerIds: o
  } = e;
  i = t;
  let a = L[t];
  if (null == a && null != n) {
    null == R[t] && (C[t] = null);
    let e = (0, h.my)(t);
    null == C[t] && null == P[t] && (C[t] = (0, m.L2)(e, O.Z));
    let i = new _.A({
      streamRegion: r,
      streamApplication: C[t],
      streamSourceType: et(P[t]),
      actionContext: A[t],
      numViewers: null != o ? o.length : 0,
      goLiveModalDurationMs: D[t]
    });
    a = j(t, n, i), L[t] = a
  }
  x = [], y.Z.getMediaEngine().on(d.aB.ConnectionStats, U)
}

function H(e) {
  let t = L[e.streamKey];
  if (null == t) return !1;
  t.connect(e.endpoint, e.token)
}

function W(e) {
  let {
    stats: t
  } = e;
  if (null == t) return !1;
  x.push(t), x.length > M && x.shift()
}

function Y(e) {
  let {
    streamKey: t,
    viewerIds: n,
    paused: r
  } = e, i = L[t];
  if (null == i) return !1;
  null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r)
}

function K(e) {
  let {
    streamKey: t
  } = e, n = L[t];
  if (null == n) return !1;
  t === i && (i = null, y.Z.getMediaEngine().off(d.aB.ConnectionStats, U)), n.destroy("stream-end"), delete L[t]
}

function z(e) {
  let {
    layout: t
  } = e;
  w = t, Object.values(L).forEach(e => e.layoutChange(t))
}

function q() {
  return !0
}

function Q(e) {
  return c().some(L, t => t === e.connection)
}

function X(e) {
  let {
    userId: t,
    context: n,
    quality: r
  } = e;
  c().forEach(L, e => {
    e.setSimulcastDebugOverride(t, n, r)
  })
}

function J(e) {
  let {
    streamId: t,
    width: n,
    height: r
  } = e;
  c().forEach(L, e => {
    null == e || e.setVideoSize(t, n, r)
  })
}

function $(e) {
  var t, n, r, i, o;
  let a = e.find(e => "video" === e.type);
  return null != a && "video" === a.type ? {
    type: "streamer",
    packetsSentOrReceived: null !== (n = a.packetsSent) && void 0 !== n ? n : 0,
    packetsLost: null !== (r = a.packetsLost) && void 0 !== r ? r : 0,
    frameRate: null !== (i = a.frameRateEncode) && void 0 !== i ? i : 0,
    resolution: null !== (o = null === (t = a.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== o ? o : 0,
    bitrate: 0
  } : null
}

function ee(e) {
  var t, n, r, i, o, a;
  if (null == e) return null;
  let s = e.find(e => "video" === e.type);
  return null != s && "video" === s.type ? {
    type: "spectator",
    packetsSentOrReceived: null !== (n = s.packetsReceived) && void 0 !== n ? n : 0,
    packetsLost: null !== (r = s.packetsLost) && void 0 !== r ? r : 0,
    frameRate: null !== (i = s.frameRateDecode) && void 0 !== i ? i : 0,
    bitrate: null !== (o = s.bitrate) && void 0 !== o ? o : 0,
    resolution: null !== (a = null === (t = s.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== a ? a : 0
  } : null
}

function et(e) {
  var t, n, r;
  if (null == e) return "unknown";
  if (E.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === "Chrome") {
    if (e.startsWith("web-contents-media-stream:")) return "tab";
    if (e.startsWith("window:")) return "window";
    if (e.startsWith("screen:")) return "screen"
  } else if ((null === (n = platform) || void 0 === n ? void 0 : n.name) === "Firefox") return "" !== e ? "window" : "screen";
  else if ((null === (r = platform) || void 0 === r ? void 0 : r.name) === "Safari") return "window";
  return "unknown"
}
class en extends(o = u.ZP.Store) {
  getActiveStreamKey() {
    return (0, g.Z)(y.Z) ? i : null
  }
  getRTCConnections() {
    return L
  }
  getAllActiveStreamKeys() {
    return Object.keys(L)
  }
  getRTCConnection(e) {
    return L[e]
  }
  getStatsHistory(e, t, n) {
    if (!(0, g.Z)(y.Z) || null == t) return null;
    if (n) {
      let n = v.Z.getActiveStreamForUser(t, e);
      if (null == n || 0 === v.Z.getViewerIds(n).length) return null
    }
    return x.map(e => n ? $(e.rtp.outbound) : ee(e.rtp.inbound[t]))
  }
  getQuality() {
    if (!(0, g.Z)(y.Z)) return I.IE4.UNKNOWN;
    let e = this.getActiveStreamKey(),
      t = null != e ? L[e] : null;
    return null != t ? t.quality : I.IE4.UNKNOWN
  }
  getMediaSessionId(e) {
    if (null == e) return null;
    let t = L[e];
    if (null != t) return null != t ? t.getMediaSessionId() : null
  }
  getRtcConnectionId(e) {
    if (null == e) return null;
    let t = L[e];
    if (null != t) return null != t ? t.getRTCConnectionId() : null
  }
  getVideoStats(e) {
    if (null == e) return null;
    let t = L[e];
    return null != t ? t.getVideoStats() : null
  }
  getHostname(e) {
    if (null == e) return "";
    let t = L[e];
    return null != t && null != t.hostname ? t.hostname : ""
  }
  getRegion(e) {
    if (null == e) return null;
    let t = L[e];
    return null != t ? t.getRegion() : null
  }
  getMaxViewers(e) {
    if (null == e) return null;
    let t = L[e];
    return null != t ? t.getMaxViewers() : null
  }
  getStreamSourceId(e) {
    return P[e]
  }
  getUserIds(e) {
    let t = L[e];
    return null == t ? void 0 : t.getUserIds()
  }
  isUserConnected(e, t) {
    let n = L[e];
    return null == n ? void 0 : n.getIsUserConnected(t)
  }
  getSecureFramesState(e) {
    let t = L[e];
    return null == t ? void 0 : t.getSecureFramesState()
  }
  getSecureFramesRosterMapEntry(e, t) {
    let n = L[e],
      r = null == n ? void 0 : n.getSecureFramesRosterMap();
    return null == r ? void 0 : r.get(t)
  }
}
N(en, "displayName", "StreamRTCConnectionStore");
let er = new en(f.Z, !y.Z.isSupported() || __OVERLAY__ ? {} : {
  CONNECTION_OPEN: G,
  CONNECTION_CLOSED: B,
  RTC_CONNECTION_STATE: q,
  RTC_CONNECTION_PING: q,
  RTC_CONNECTION_LOSS_RATE: q,
  RTC_CONNECTION_UPDATE_ID: Q,
  RTC_CONNECTION_SECURE_FRAMES_UPDATE: q,
  STREAM_START: F,
  STREAM_STOP: V,
  STREAM_CREATE: Z,
  STREAM_SERVER_UPDATE: H,
  STREAM_UPDATE: Y,
  STREAM_DELETE: K,
  STREAM_STATS_UPDATE: W,
  STREAM_LAYOUT_UPDATE: z,
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: X,
  VIDEO_SIZE_UPDATE: J
})