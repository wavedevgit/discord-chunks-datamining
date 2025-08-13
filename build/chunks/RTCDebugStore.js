/** Chunk was on web.js **/
/** chunk id: 226961, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J$: () => A,
  Pz: () => E,
  ZP: () => H,
  fZ: () => N
}), require("./388685.js"), require("./35282.js"), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk570140 = require("./570140.js"),
  Chunk304680 = require("./304680.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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
let p = A(Chunk65154.Yn.DEFAULT, Chunk981631._s_.TRANSPORT, 0),
  h = p,
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
  b = 600;

function y(e, t, n) {
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
      let r = _({}, this.state);
      return delete r[y(e, t, n)], new v(r)
    }
    return new v(_({
      [y(e, t, n)]: r
    }, this.state))
  }
  get(e, t, n) {
    let r = this.state[y(e, t, n)];
    return null != r ? r : null
  }
  constructor(e) {
    f(this, "state", true), this.state = e
  }
}
let I = v.empty(),
  T = false,
  S = null;

function A(e, t, n) {
  return "".concat(e, ":").concat(t, ":").concat(n)
}

function N(e) {
  let [t, n] = e.split(":");
  return {
    context: t,
    section: n
  }
}

function C() {
  Object.values(Chunk65154.Yn).forEach(e => {
    m[e] = {}
  })
}

function R() {
  null != S && (S.destroy(), S = null)
}

function P(e) {
  var t;
  h = null != (t = e.section) ? t : p
}

function w() {
  R()
}

function D(e) {
  null != e.channelId && (C(), g.clear())
}

function L(e) {
  if (null === e.streamId) {
    let t = O(e.userId, e.context);
    g.set(t, d.Z.NO_OVERRIDE)
  }
}

function x(e) {
  h = e.section
}

function M(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : Date.now(),
    r = {};
  for (let [i, o] of Object.entries(e)) {
    let e = t[i];
    if (Array.isArray(o))
      if ("object" == typeof o[0]) {
        let t = Array.isArray(e) ? e : [],
          a = r[i] = [];
        for (let e = 0; e < o.length; e++) {
          let r = t[e],
            i = "object" == typeof r ? r : {};
          a.push(M(o[e], i, n))
        }
      } else r[i] = o;
    else if ("object" == typeof o && null !== o) {
      let t = "object" == typeof e && null !== e ? e : {};
      r[i] = M(o, t, n)
    } else if (i in E && "number" == typeof o) {
      let t = r[i] = Array.isArray(e) ? e : [];
      t.push({
        value: o,
        time: n
      }), t.length > b && t.shift()
    } else r[i] = o
  }
  return r
}

function j(e) {
  let {
    connectionStats: t
  } = e;
  Object.values(d.Yn).forEach(e => {
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
    let [e, o, a] = h.split(":");
    if (e === t && parseInt(a) === r && null != c.default.getUser(o)) {
      let {
        rtp: {
          inbound: e
        }
      } = n;
      Object.keys(e).includes(o) || (h = p)
    }
    i[r] = M(n, i[r])
  } else delete i[r]
}

function U(e) {
  s.gl()
}

function G(e) {
  let {
    path: t
  } = e, n = l.Z.getMediaEngine();
  if (R(), !n.supports(d.AN.CONNECTION_REPLAY) || 0 === t.length) return;
  let r = n.createReplayConnection(d.Yn.DEFAULT, t);
  null != r && (S = r, r.on(o.Sh.Video, (e, t, n, i, o) => {
    a.Z.dispatch({
      type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
      mediaEngineConnectionId: r.mediaEngineConnectionId,
      userId: e,
      videoSsrc: null != i ? i : 0,
      streamId: null != t ? t : ""
    })
  }), a.Z.wait(() => s.bA()))
}

function B(e) {
  I = I.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId)
}

function Z(e) {
  let {
    value: t
  } = e;
  T = t
}

function F(e) {
  let {
    userId: t,
    context: n,
    quality: r
  } = e;
  g.set(O(t, n), r)
}
C();
class V extends(r = Chunk442837.ZP.Store) {
  getSection() {
    return h
  }
  getInboundStats(e, t) {
    var n, r;
    let i = null == (r = this.getAllStats(t)[0]) || null == (n = r.rtp) ? true : n.inbound[e],
      o = null == i ? true : i.find(e => "video" === e.type);
    return {
      codec: null == o ? true : o.codec.name,
      resolution: null == o ? true : o.resolution,
      bitrateEstimate: true
    }
  }
  getOutboundStats(e) {
    var t, n, r;
    let i, o = this.getAllStats(e),
      a = null == (t = o[0]) ? true : t.transport,
      s = null == (r = o[0]) || null == (n = r.rtp) ? true : n.outbound,
      l = null == s ? true : s.find(e => "video" === e.type);
    return Array.isArray(null == a ? true : a.availableOutgoingBitrate) && a.availableOutgoingBitrate.length > 0 && (i = a.availableOutgoingBitrate[a.availableOutgoingBitrate.length - 1].value), {
      codec: null == l ? true : l.codec.name,
      resolution: null == l ? true : l.resolution,
      bitrateEstimate: i
    }
  }
  getAllStats() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return Object.values(m[module])
  }
  getVideoStreams() {
    return I
  }
  shouldRecordNextConnection() {
    return T
  }
  getSimulcastDebugOverride(e, t) {
    let n = O(e, t);
    return g.has(n) ? g.get(n) : d.Z.NO_OVERRIDE
  }
}
f(V, "displayName", "RTCDebugStore");
let H = new V(Chunk570140.Z, {
  RTC_DEBUG_MODAL_OPEN: P,
  RTC_DEBUG_MODAL_CLOSE: w,
  RTC_DEBUG_MODAL_SET_SECTION: x,
  RTC_DEBUG_MODAL_OPEN_REPLAY: U,
  RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: G,
  RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: B,
  RTC_DEBUG_SET_RECORDING_FLAG: Z,
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: F,
  VOICE_CHANNEL_SELECT: D,
  RTC_CONNECTION_VIDEO: L,
  MEDIA_ENGINE_CONNECTION_STATS: j
})