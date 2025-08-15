/** Chunk was on web.js **/
/** chunk id: 959457, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => ee
}), require("./388685.js");
var i, Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk570140 = require("./570140.js"),
  Chunk872810 = require("./872810.js"),
  Chunk594190 = require("./594190.js"),
  Chunk992817 = require("./992817.js"),
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

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let N = {},
  C = {},
  R = {},
  P = {},
  w = {},
  D = {},
  L = Chunk981631.hVg.THEATRE,
  x = {};

function M(e, t, n, i) {
  return o()(null != r, "Creating RTCConnection without session."), new h.Z({
    sessionId: r,
    streamKey: e,
    serverId: t,
    channelId: n,
    initialLayout: L,
    analyticsContext: i,
    isStreamer: null != C[e],
    parentMediaSessionId: I.Z.getMediaSessionId()
  })
}

function k() {
  l().forEach(x, (e, t) => {
    e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete x[t], delete D[t]
  })
}

function j(e) {
  r = e.sessionId, k()
}

function U() {
  r = null, k()
}

function G(e) {
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
  } = e, d = (0, m.V9)({
    streamType: t,
    guildId: n,
    channelId: r,
    ownerId: y.default.getId()
  });
  if (N[d] = {
      appContext: i,
      analyticsLocations: u
    }, l().forEach(x, e => {
      let {
        analyticsContext: t,
        isOwner: n
      } = e;
      t.setActionContext(i), t.setNativePickerStyleUsed(s), n && t.trackStart()
    }), P[d] = o, R[d] = a, null != a) {
    let e = _.ZP.getGameForPID(a);
    null != e && (C[d] = {
      name: e.name,
      id: e.id,
      exe: e.exeName,
      distributor: e.distributor,
      sku: e.sku,
      gameMetadata: e.gameMetadata
    })
  }
  null != c ? w[d] = c : delete w[d]
}

function B(e) {
  let {
    appContext: t,
    streamKey: n
  } = e;
  N[n] = {
    appContext: t,
    analyticsLocations: true
  }, l().forEach(x, e => {
    let {
      analyticsContext: n,
      isOwner: r
    } = e;
    n.setActionContext(t), r && n.trackEnd()
  }), P[n] = null, R[n] = null, delete w[n]
}

function V(e) {
  var t, n, r;
  let {
    streamKey: i,
    rtcServerId: a,
    rtcChannelId: o,
    region: s,
    viewerIds: l
  } = e, c = x[i], u = (0, m.my)(i);
  if (null == c && null != a) {
    null == R[i] && (C[i] = null), null == C[i] && null == P[i] && (C[i] = (0, g.L2)(u, v.Z));
    let e = new h.A({
      streamRegion: s,
      streamApplication: C[i],
      streamSourceType: J(P[i]),
      actionContext: null == (t = N[i]) ? true : t.appContext,
      numViewers: null != l ? l.length : 0,
      goLiveModalDurationMs: w[i],
      analyticsLocations: null == (n = N[i]) ? true : n.analyticsLocations
    });
    c = M(i, a, o, e), x[i] = c
  }
  delete D[i], d.Z.dispatch({
    type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
    mediaEngineConnectionId: c.getMediaEngineConnectionId()
  }), (0, p.Bx)({
    guildId: u.guildId,
    location: "StreamRTCConnectionStore"
  }) && u.ownerId === y.default.getId() && (0, f.zf)(i, null == (r = C[i]) ? true : r.id)
}

function F(e) {
  let t = x[e.streamKey];
  if (null == t) returnfalse;
  t.connect(e.endpoint, e.token)
}

function Z(e) {
  let {
    connectionStats: t
  } = e;
  l().forEach(x, (e, n) => {
    e.updateStats(t)
  })
}

function H(e) {
  let {
    streamKey: t,
    viewerIds: n,
    paused: r
  } = e, i = x[t];
  if (null == i) returnfalse;
  null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r)
}

function Y(e) {
  let {
    streamKey: t
  } = e, n = x[t];
  if (null == n) returnfalse;
  d.Z.dispatch({
    type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
    mediaEngineConnectionId: n.getMediaEngineConnectionId()
  }), n.destroy("stream-end"), delete x[t]
}

function W(e) {
  let {
    layout: t
  } = e;
  L = t, Object.values(x).forEach(e => e.layoutChange(t))
}

function K() {
  returntrue
}

function z(e) {
  let {
    context: t,
    wants: n,
    userId: r,
    guildId: i,
    channelId: a
  } = e, o = (0, m.V9)({
    streamType: null == i ? S.lo.CALL : S.lo.GUILD,
    guildId: i,
    channelId: a,
    ownerId: r
  });
  if (t !== u.Yn.STREAM || null == x[o] || !Object.entries(n).some(e => {
      let [t, n] = e;
      return "any" !== t && 0 !== n
    })) returnfalse;
  D[o] = performance.now()
}

function q(e) {
  return l().some(x, t => t === e.connection)
}

function X(e) {
  let {
    userId: t,
    context: n,
    quality: r
  } = e;
  l().forEach(x, e => {
    e.setSimulcastDebugOverride(t, n, r)
  })
}

function Q(e) {
  let {
    streamId: t,
    width: n,
    height: r
  } = e;
  l().forEach(x, e => {
    null == e || e.setVideoSize(t, n, r)
  })
}

function J(e) {
  var t, n, r;
  if (null == e) return "unknown";
  if (b.isPlatformEmbedded || (null == (t = platform) ? true : t.name) === "Chrome") {
    if (e.startsWith("web-contents-media-stream:")) return "tab";
    else if (e.startsWith("window:")) return "window";
    else if (e.startsWith("screen:")) return "screen"
  } else if ((null == (n = platform) ? true : n.name) === "Firefox")
    if ("" !== e) return "window";
    else return "screen";
  else if ((null == (r = platform) ? true : r.name) === "Safari") return "window";
  return "unknown"
}
class $ extends(i = Chunk442837.ZP.Store) {
  getRTCConnections() {
    return x
  }
  getAllActiveStreamKeys() {
    return Object.keys(x)
  }
  getRTCConnection(e) {
    return x[e]
  }
  getQuality(e) {
    var t, n;
    return (0, E.Z)(O.Z) && null != e && null != (n = null == (t = x[e]) ? true : t.quality) ? n : T.IE4.UNKNOWN
  }
  getMediaSessionId(e) {
    if (null == e) return null;
    let t = x[e];
    if (null != t) return null != t ? t.getMediaSessionId() : null
  }
  getRtcConnectionId(e) {
    if (null == e) return null;
    let t = x[e];
    if (null != t) return null != t ? t.getRTCConnectionId() : null
  }
  getVideoStats(e) {
    if (null == e) return null;
    let t = x[e];
    return null != t ? t.getVideoStats() : null
  }
  getHostname(e) {
    if (null == e) return "";
    let t = x[e];
    return null != t && null != t.hostname ? t.hostname : ""
  }
  getRegion(e) {
    if (null == e) return null;
    let t = x[e];
    return null != t ? t.getRegion() : null
  }
  getMaxViewers(e) {
    if (null == e) return null;
    let t = x[e];
    return null != t ? t.getMaxViewers() : null
  }
  getStreamSourceId(e) {
    return P[e]
  }
  getLastNonZeroRemoteVideoSinkWantsTime(e) {
    return D[e]
  }
  getUserIds(e) {
    let t = x[e];
    return null == t ? true : t.getUserIds()
  }
  isUserConnected(e, t) {
    let n = x[e];
    return null == n ? true : n.getIsUserConnected(t)
  }
  getSecureFramesState(e) {
    let t = x[e];
    return null == t ? true : t.getSecureFramesState()
  }
  getSecureFramesRosterMapEntry(e, t) {
    let n = x[e],
      r = null == n ? true : n.getSecureFramesRosterMap();
    return null == r ? true : r.get(t)
  }
}
A($, "displayName", "StreamRTCConnectionStore");
let ee = new $(Chunk570140.Z, !Chunk131951.Z.isSupported() || __OVERLAY__ ? {} : {
  CONNECTION_OPEN: j,
  CONNECTION_CLOSED: U,
  RTC_CONNECTION_STATE: K,
  RTC_CONNECTION_PING: K,
  RTC_CONNECTION_LOSS_RATE: K,
  RTC_CONNECTION_UPDATE_ID: q,
  RTC_CONNECTION_SECURE_FRAMES_UPDATE: K,
  RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: z,
  STREAM_START: G,
  STREAM_STOP: B,
  STREAM_CREATE: V,
  STREAM_SERVER_UPDATE: F,
  STREAM_UPDATE: H,
  STREAM_DELETE: Y,
  MEDIA_ENGINE_CONNECTION_STATS: Z,
  STREAM_LAYOUT_UPDATE: W,
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: X,
  VIDEO_SIZE_UPDATE: Q
})