/** Chunk was on web.js **/
/** chunk id: 162605, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => J
}), require("./896048.js");
var i, Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk205693 = require("./205693.js"),
  Chunk73153 = require("./73153.js"),
  Chunk15285 = require("./15285.js"),
  Chunk13433 = require("./13433.js"),
  Chunk652896 = require("./652896.js"),
  Chunk834757 = require("./834757.js"),
  Chunk254057 = require("./254057.js"),
  Chunk723702 = require("./723702.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk290863 = require("./290863.js"),
  Chunk383501 = require("./383501.js"),
  Chunk652215 = require("./652215.js"),
  Chunk502075 = require("./502075.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let S = {},
  T = {},
  C = {},
  N = {},
  w = {},
  R = {},
  P = Chunk652215.SO9.THEATRE,
  D = {};

function L(e, t, n, i) {
  return o()(null != r, "Creating RTCConnection without session."), new p.A({
    sessionId: r,
    streamKey: e,
    serverId: t,
    channelId: n,
    initialLayout: P,
    analyticsContext: i,
    parentMediaSessionId: O.A.getMediaSessionId()
  })
}

function x() {
  l().forEach(D, (e, t) => {
    e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete D[t], delete R[t]
  })
}

function M(e) {
  r = e.sessionId, x()
}

function j() {
  r = null, x()
}

function k(e) {
  var t, n;
  let {
    streamType: r,
    guildId: i,
    channelId: a,
    appContext: o,
    pid: s,
    sourceId: c,
    sourcePid: u,
    nativePickerStyleUsed: d,
    goLiveModalDurationMs: p,
    analyticsLocations: h
  } = e, m = (0, _._z)({
    streamType: r,
    guildId: i,
    channelId: a,
    ownerId: E.default.getId()
  });
  if (S[m] = {
      appContext: o,
      analyticsLocations: h
    }, l().forEach(D, e => {
      let {
        analyticsContext: t,
        isOwner: n
      } = e;
      t.setActionContext(o), t.setNativePickerStyleUsed(d), n && t.trackStart()
    }), null == s && (s = u), N[m] = c, C[m] = s, null != s) {
    let e = f.Ay.getGameForPID(s);
    null != e && (T[m] = {
      name: e.name,
      id: e.id,
      exe: e.exeName,
      distributor: e.distributor,
      sku: e.sku,
      gameMetadata: e.gameMetadata
    }), null == (t = D[m]) || t.analyticsContext.updateStreamApplication(T[m])
  } else null == (n = D[m]) || n.analyticsContext.updateStreamApplication(null);
  null != p ? w[m] = p : delete w[m]
}

function U(e) {
  let {
    appContext: t,
    streamKey: n
  } = e;
  S[n] = {
    appContext: t,
    analyticsLocations: true
  }, l().forEach(D, e => {
    let {
      analyticsContext: n,
      isOwner: r
    } = e;
    n.setActionContext(t), r && n.trackEnd()
  }), N[n] = null, C[n] = null, delete w[n]
}

function G(e) {
  let {
    streamKey: t,
    rtcServerId: n,
    rtcChannelId: r,
    region: i,
    viewerIds: a
  } = e, o = D[t], s = (0, _.Iy)(t);
  if (null == o && null != n) {
    var l, c;
    null == C[t] && (T[t] = null), null == T[t] && null == N[t] && (T[t] = (0, h.Ee)(s, b.A));
    let e = new p.t({
      streamRegion: i,
      streamApplication: T[t],
      streamSourceType: Q(N[t]),
      actionContext: null == (l = S[t]) ? true : l.appContext,
      numViewers: null != a ? a.length : 0,
      goLiveModalDurationMs: w[t],
      analyticsLocations: null == (c = S[t]) ? true : c.analyticsLocations
    });
    o = L(t, n, r, e), D[t] = o
  }
  delete R[t], d.h.dispatch({
    type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
    mediaEngineConnectionId: o.getMediaEngineConnectionId()
  })
}

function V(e) {
  let t = D[e.streamKey];
  if (null == t) returnfalse;
  t.connect(e.endpoint, e.token)
}

function F(e) {
  let {
    connectionStats: t
  } = e;
  l().forEach(D, (e, n) => {
    e.updateStats(t)
  })
}

function B(e) {
  let {
    streamKey: t,
    viewerIds: n,
    paused: r
  } = e, i = D[t];
  if (null == i) returnfalse;
  null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r)
}

function H(e) {
  let {
    streamKey: t
  } = e, n = D[t];
  if (null == n) returnfalse;
  d.h.dispatch({
    type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
    mediaEngineConnectionId: n.getMediaEngineConnectionId()
  }), n.destroy("stream-end"), delete D[t]
}

function Y(e) {
  let {
    layout: t
  } = e;
  P = t, Object.values(D).forEach(e => e.layoutChange(t))
}

function W() {
  returntrue
}

function K(e) {
  let {
    context: t,
    wants: n,
    userId: r,
    guildId: i,
    channelId: a
  } = e, o = (0, _._z)({
    streamType: null == i ? A.U4.CALL : A.U4.GUILD,
    guildId: i,
    channelId: a,
    ownerId: r
  });
  if (t !== u.x.STREAM || null == D[o] || !Object.entries(n).some(e => {
      let [t, n] = e;
      return "any" !== t && 0 !== n
    })) returnfalse;
  R[o] = performance.now()
}

function z(e) {
  return l().some(D, t => t === e.connection)
}

function q(e) {
  let {
    userId: t,
    context: n,
    quality: r
  } = e;
  l().forEach(D, e => {
    e.setSimulcastDebugOverride(t, n, r)
  })
}

function Z(e) {
  let {
    streamId: t,
    dimensions: n,
    zoom: r
  } = e;
  l().forEach(D, e => {
    null == e || e.setVideoSize(t, n, r)
  })
}

function Q(e) {
  var t, n, r;
  if (null == e) return "unknown";
  if (g.isPlatformEmbedded || (null == (t = platform) ? true : t.name) === "Chrome") {
    if (e.startsWith("web-contents-media-stream:")) return "tab";
    else if (e.startsWith("window:")) return "window";
    else if (e.startsWith("screen:")) return "screen"
  } else if ((null == (n = platform) ? true : n.name) === "Firefox")
    if ("" !== e) return "window";
    else return "screen";
  else if ((null == (r = platform) ? true : r.name) === "Safari") return "window";
  return "unknown"
}
class X extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(E.default, y.A, O.A, f.Ay)
  }
  getRTCConnections() {
    return D
  }
  getAllActiveStreamKeys() {
    return Object.keys(D)
  }
  getRTCConnection(e) {
    return D[e]
  }
  getQuality(e) {
    var t, n;
    return (0, m.A)(y.A) && null != e && null != (t = null == (n = D[e]) ? true : n.quality) ? t : v.bFR.UNKNOWN
  }
  getMediaSessionId(e) {
    if (null == e) return null;
    let t = D[e];
    if (null != t) return null != t ? t.getMediaSessionId() : null
  }
  getRtcConnectionId(e) {
    if (null == e) return null;
    let t = D[e];
    if (null != t) return null != t ? t.getRTCConnectionId() : null
  }
  getVideoStats(e) {
    if (null == e) return null;
    let t = D[e];
    return null != t ? t.getVideoStats() : null
  }
  getHostname(e) {
    if (null == e) return "";
    let t = D[e];
    return null != t && null != t.hostname ? t.hostname : ""
  }
  getRegion(e) {
    if (null == e) return null;
    let t = D[e];
    return null != t ? t.getRegion() : null
  }
  getMaxViewers(e) {
    if (null == e) return null;
    let t = D[e];
    return null != t ? t.getMaxViewers() : null
  }
  getStreamSourceId(e) {
    return N[e]
  }
  getLastNonZeroRemoteVideoSinkWantsTime(e) {
    return R[e]
  }
  getUserIds(e) {
    let t = D[e];
    return null == t ? true : t.getUserIds()
  }
  isUserConnected(e, t) {
    let n = D[e];
    return null == n ? true : n.getIsUserConnected(t)
  }
  getSecureFramesState(e) {
    let t = D[e];
    return null == t ? true : t.getSecureFramesState()
  }
  getSecureFramesRosterMapEntry(e, t) {
    let n = D[e],
      r = null == n ? true : n.getSecureFramesRosterMap();
    return null == r ? true : r.get(t)
  }
}
I(X, "displayName", "StreamRTCConnectionStore");
let J = new X(Chunk73153.h, !Chunk430452.A.isSupported() || __OVERLAY__ ? {} : {
  CONNECTION_OPEN: M,
  CONNECTION_CLOSED: j,
  RTC_CONNECTION_STATE: W,
  RTC_CONNECTION_PING: W,
  RTC_CONNECTION_LOSS_RATE: W,
  RTC_CONNECTION_UPDATE_ID: z,
  RTC_CONNECTION_SECURE_FRAMES_UPDATE: W,
  RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: K,
  STREAM_START: k,
  STREAM_STOP: U,
  STREAM_CREATE: G,
  STREAM_SERVER_UPDATE: V,
  STREAM_UPDATE: B,
  STREAM_DELETE: H,
  MEDIA_ENGINE_CONNECTION_STATS: F,
  STREAM_LAYOUT_UPDATE: Y,
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: q,
  VIDEO_SIZE_UPDATE: Z
})