/** Chunk was on web.js **/
/** chunk id: 959457, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => $
}), require("./388685.js");
var i, Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594190 = require("./594190.js"),
  Chunk444852 = require("./444852.js"),
  Chunk569545 = require("./569545.js"),
  Chunk687516 = require("./687516.js"),
  Chunk139656 = require("./139656.js"),
  Chunk358085 = require("./358085.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk158776 = require("./158776.js"),
  Chunk19780 = require("./19780.js"),
  Chunk981631 = require("./981631.js"),
  Chunk70722 = require("./70722.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let T = {},
  A = {},
  C = {},
  N = {},
  R = {},
  P = {},
  w = Chunk981631.hVg.THEATRE,
  D = {};

function L(e, t, n, i) {
  return o()(null != r, "Creating RTCConnection without session."), new _.Z({
    sessionId: r,
    streamKey: e,
    serverId: t,
    channelId: n,
    initialLayout: w,
    analyticsContext: i,
    isStreamer: null != A[e],
    parentMediaSessionId: O.Z.getMediaSessionId()
  })
}

function x() {
  l().forEach(D, (e, t) => {
    e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete D[t], delete P[t]
  })
}

function M(e) {
  r = e.sessionId, x()
}

function k() {
  r = null, x()
}

function j(e) {
  let {
    streamType: t,
    guildId: n,
    channelId: r,
    appContext: i,
    pid: a,
    sourceId: o,
    nativePickerStyleUsed: s,
    goLiveModalDurationMs: c,
    analyticsLocations: u
  } = e, d = (0, p.V9)({
    streamType: t,
    guildId: n,
    channelId: r,
    ownerId: E.default.getId()
  });
  if (T[d] = {
      appContext: i,
      analyticsLocations: u
    }, l().forEach(D, e => {
      let {
        analyticsContext: t,
        isOwner: n
      } = e;
      t.setActionContext(i), t.setNativePickerStyleUsed(s), n && t.trackStart()
    }), N[d] = o, C[d] = a, null != a) {
    let e = f.ZP.getGameForPID(a);
    null != e && (A[d] = {
      name: e.name,
      id: e.id,
      exe: e.exeName,
      distributor: e.distributor,
      sku: e.sku,
      gameMetadata: e.gameMetadata
    })
  }
  null != c ? R[d] = c : delete R[d]
}

function U(e) {
  let {
    appContext: t,
    streamKey: n
  } = e;
  T[n] = {
    appContext: t,
    analyticsLocations: true
  }, l().forEach(D, e => {
    let {
      analyticsContext: n,
      isOwner: r
    } = e;
    n.setActionContext(t), r && n.trackEnd()
  }), N[n] = null, C[n] = null, delete R[n]
}

function G(e) {
  let {
    streamKey: t,
    rtcServerId: n,
    rtcChannelId: r,
    region: i,
    viewerIds: a
  } = e, o = D[t], s = (0, p.my)(t);
  if (null == o && null != n) {
    var l, c;
    null == C[t] && (A[t] = null), null == A[t] && null == N[t] && (A[t] = (0, h.L2)(s, y.Z));
    let e = new _.A({
      streamRegion: i,
      streamApplication: A[t],
      streamSourceType: Q(N[t]),
      actionContext: null == (l = T[t]) ? true : l.appContext,
      numViewers: null != a ? a.length : 0,
      goLiveModalDurationMs: R[t],
      analyticsLocations: null == (c = T[t]) ? true : c.analyticsLocations
    });
    o = L(t, n, r, e), D[t] = o
  }
  delete P[t], d.Z.dispatch({
    type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
    mediaEngineConnectionId: o.getMediaEngineConnectionId()
  })
}

function B(e) {
  let t = D[e.streamKey];
  if (null == t) returnfalse;
  t.connect(e.endpoint, e.token)
}

function Z(e) {
  let {
    connectionStats: t
  } = e;
  l().forEach(D, (e, n) => {
    e.updateStats(t)
  })
}

function F(e) {
  let {
    streamKey: t,
    viewerIds: n,
    paused: r
  } = e, i = D[t];
  if (null == i) returnfalse;
  null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r)
}

function V(e) {
  let {
    streamKey: t
  } = e, n = D[t];
  if (null == n) returnfalse;
  d.Z.dispatch({
    type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
    mediaEngineConnectionId: n.getMediaEngineConnectionId()
  }), n.destroy("stream-end"), delete D[t]
}

function H(e) {
  let {
    layout: t
  } = e;
  w = t, Object.values(D).forEach(e => e.layoutChange(t))
}

function Y() {
  returntrue
}

function W(e) {
  let {
    context: t,
    wants: n,
    userId: r,
    guildId: i,
    channelId: a
  } = e, o = (0, p.V9)({
    streamType: null == i ? I.lo.CALL : I.lo.GUILD,
    guildId: i,
    channelId: a,
    ownerId: r
  });
  if (t !== u.Yn.STREAM || null == D[o] || !Object.entries(n).some(e => {
      let [t, n] = e;
      return "any" !== t && 0 !== n
    })) returnfalse;
  P[o] = performance.now()
}

function K(e) {
  return l().some(D, t => t === e.connection)
}

function z(e) {
  let {
    userId: t,
    context: n,
    quality: r
  } = e;
  l().forEach(D, e => {
    e.setSimulcastDebugOverride(t, n, r)
  })
}

function q(e) {
  let {
    streamId: t,
    width: n,
    height: r
  } = e;
  l().forEach(D, e => {
    null == e || e.setVideoSize(t, n, r)
  })
}

function X(e) {
  let {
    streamId: t,
    zoom: n
  } = e;
  l().forEach(D, e => {
    null == e || e.setVideoZoom(t, n)
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
class J extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk131951.Z, Chunk19780.Z, Chunk594190.ZP)
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
    return (0, m.Z)(b.Z) && null != e && null != (n = null == (t = D[e]) ? true : t.quality) ? n : v.IE4.UNKNOWN
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
    return P[e]
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
S(J, "displayName", "StreamRTCConnectionStore");
let $ = new J(Chunk570140.Z, !Chunk131951.Z.isSupported() || __OVERLAY__ ? {} : {
  CONNECTION_OPEN: M,
  CONNECTION_CLOSED: k,
  RTC_CONNECTION_STATE: Y,
  RTC_CONNECTION_PING: Y,
  RTC_CONNECTION_LOSS_RATE: Y,
  RTC_CONNECTION_UPDATE_ID: K,
  RTC_CONNECTION_SECURE_FRAMES_UPDATE: Y,
  RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: W,
  STREAM_START: j,
  STREAM_STOP: U,
  STREAM_CREATE: G,
  STREAM_SERVER_UPDATE: B,
  STREAM_UPDATE: F,
  STREAM_DELETE: V,
  MEDIA_ENGINE_CONNECTION_STATS: Z,
  STREAM_LAYOUT_UPDATE: H,
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: z,
  VIDEO_SIZE_UPDATE: q,
  VIDEO_ZOOM_UPDATE: X
})