/** Chunk was on web.js **/
/** chunk id: 412780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => Y,
  Bz: () => C,
  Xi: () => T,
  iA: () => E
}), require("./896048.js"), require("./747238.js"), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk205693 = require("./205693.js"),
  Chunk73153 = require("./73153.js"),
  Chunk233545 = require("./233545.js"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let _ = T(Chunk731854.x.DEFAULT, Chunk652215.zWA.TRANSPORT, 0),
  h = _,
  m = {},
  g = new Map,
  E = {
    availableOutgoingBitrate: true,
    bitrate: true,
    bitrateTarget: true,
    bytesReceived: true,
    bytesSent: true,
    encoderQualityPsnr: true,
    encoderQualityVmaf: true,
    encodeUsage: true,
    frameRateDecode: true,
    frameRateEncode: true,
    frameRateInput: true,
    frameRateNetwork: true,
    frameRateRender: true,
    keyFramesEncoded: true,
    keyFramesDecoded: true,
    inboundBitrateEstimate: true,
    packetsLost: true,
    packetsReceived: true,
    packetsSent: true,
    ping: true,
    qpSum: true,
    videoEntropy: true,
    audioLevel: true
  },
  y = 600;

function b(e, t, n) {
  return "".concat(e, ":").concat(t, ":").concat(n)
}

function O(e, t) {
  return "".concat(e, ":").concat(t)
}
class v {
  static empty() {
    return new v({})
  }
  put(e, t, n, r) {
    if ("" === r) {
      let r = p({}, this.state);
      return delete r[b(e, t, n)], new v(r)
    }
    return new v(p({
      [b(e, t, n)]: r
    }, this.state))
  }
  get(e, t, n) {
    let r = this.state[b(e, t, n)];
    return null != r ? r : null
  }
  constructor(e) {
    f(this, "state", true), this.state = e
  }
}
let A = v.empty(),
  I = false,
  S = null;

function T(e, t, n) {
  return "".concat(e, ":").concat(t, ":").concat(n)
}

function C(e) {
  let [t, n] = e.split(":");
  return {
    context: t,
    section: n
  }
}

function N() {
  Object.values(d.x).forEach(e => {
    m[e] = {}
  })
}

function R() {
  null != S && (S.destroy(), S = null)
}

function w(e) {
  var t;
  h = null != (t = e.section) ? t : _
}

function P() {
  R()
}

function D(e) {
  null != e.channelId && (N(), g.clear())
}

function x(e) {
  if (null === e.streamId) {
    let t = O(e.userId, e.context);
    g.set(t, d.r8.NO_OVERRIDE)
  }
}

function L(e) {
  h = e.section
}

function j(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : Date.now(),
    r = {};
  for (let [i, a] of Object.entries(e)) {
    let e = t[i];
    if (Array.isArray(a))
      if ("object" == typeof a[0]) {
        let t = Array.isArray(e) ? e : [],
          s = r[i] = [];
        for (let e = 0; e < a.length; e++) {
          let r = t[e],
            i = "object" == typeof r ? r : {};
          s.push(j(a[e], i, n))
        }
      } else r[i] = a;
    else if ("object" == typeof a && null !== a) {
      let t = "object" == typeof e && null !== e ? e : {};
      r[i] = j(a, t, n)
    } else if (i in E && "number" == typeof a) {
      let t = r[i] = Array.isArray(e) ? e : [];
      t.push({
        value: a,
        time: n
      }), t.length > y && t.shift()
    } else r[i] = a
  }
  return r
}

function M(e) {
  let {
    connectionStats: t
  } = e;
  Object.values(d.x).forEach(e => {
    t.filter(t => {
      let {
        context: n
      } = t;
      return n === e
    }).forEach((t, n) => {
      k({
        context: e,
        stats: t.stats,
        index: n
      })
    })
  })
}

function k(e) {
  let {
    context: t,
    stats: n,
    index: r
  } = e, i = m[t];
  if (null != n) {
    let [e, a, s] = h.split(":");
    if (e === t && parseInt(s) === r && null != c.default.getUser(a)) {
      let {
        rtp: {
          inbound: e
        }
      } = n;
      Object.keys(e).includes(a) || (h = _)
    }
    i[r] = j(n, i[r])
  } else delete i[r]
}

function U(e) {
  o._w()
}

function G(e) {
  let {
    path: t
  } = e, n = l.A.getMediaEngine();
  if (R(), !n.supports(d.O5.CONNECTION_REPLAY) || 0 === t.length) return;
  let r = n.createReplayConnection(d.x.DEFAULT, t);
  null != r && (S = r, r.on(a.yq.Video, (e, t, n, i, a) => {
    s.h.dispatch({
      type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
      mediaEngineConnectionId: r.mediaEngineConnectionId,
      userId: e,
      videoSsrc: null != i ? i : 0,
      streamId: null != t ? t : ""
    })
  }), s.h.wait(() => o.ho()))
}

function V(e) {
  A = A.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId)
}

function F(e) {
  let {
    value: t
  } = e;
  I = t
}

function B(e) {
  let {
    userId: t,
    context: n,
    quality: r
  } = e;
  g.set(O(t, n), r)
}
N();
class H extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.A, c.default)
  }
  getSection() {
    return h
  }
  getInboundStats(e, t) {
    var n, r;
    let i = null == (r = this.getAllStats(t)[0]) || null == (n = r.rtp) ? true : n.inbound[e],
      a = null == i ? true : i.find(e => "video" === e.type);
    return {
      codec: null == a ? true : a.codec.name,
      resolution: null == a ? true : a.resolution,
      bitrateEstimate: true
    }
  }
  getOutboundStats(e) {
    var t, n, r;
    let i, a = this.getAllStats(e),
      s = null == (t = a[0]) ? true : t.transport,
      o = null == (r = a[0]) || null == (n = r.rtp) ? true : n.outbound,
      l = null == o ? true : o.find(e => "video" === e.type);
    return Array.isArray(null == s ? true : s.availableOutgoingBitrate) && s.availableOutgoingBitrate.length > 0 && (i = s.availableOutgoingBitrate[s.availableOutgoingBitrate.length - 1].value), {
      codec: null == l ? true : l.codec.name,
      resolution: null == l ? true : l.resolution,
      bitrateEstimate: i
    }
  }
  getAllStats() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : d.x.DEFAULT;
    return Object.values(m[e])
  }
  getVideoStreams() {
    return A
  }
  shouldRecordNextConnection() {
    return I
  }
  getSimulcastDebugOverride(e, t) {
    let n = O(e, t);
    return g.has(n) ? g.get(n) : d.r8.NO_OVERRIDE
  }
}
f(H, "displayName", "RTCDebugStore");
let Y = new H(Chunk73153.h, {
  RTC_DEBUG_MODAL_OPEN: w,
  RTC_DEBUG_MODAL_CLOSE: P,
  RTC_DEBUG_MODAL_SET_SECTION: L,
  RTC_DEBUG_MODAL_OPEN_REPLAY: U,
  RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: G,
  RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: V,
  RTC_DEBUG_SET_RECORDING_FLAG: F,
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: B,
  VOICE_CHANNEL_SELECT: D,
  RTC_CONNECTION_VIDEO: x,
  MEDIA_ENGINE_CONNECTION_STATS: M
})