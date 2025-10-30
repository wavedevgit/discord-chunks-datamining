/** Chunk was on web.js **/
/** chunk id: 450279, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./35282.js"), require("./388685.js"), require("./539854.js");
var Chunk878604 = require("./878604.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function o(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function l(e) {
  return {
    id: e.payloadType,
    name: e.mimeType.split("/").slice(1)[0]
  }
}

function c(e) {
  return null === e || 0 === e
}

function u(e, t, n, i, o) {
  var u, d, f, _, p, h, m;
  let g = {},
    E = {},
    b = [],
    y = [];
  for (let t of e.values()) switch (t.type) {
    case "candidate-pair":
      g[t.id] = t;
      break;
    case "codec":
      E[t.id] = t;
      break;
    case "inbound-rtp":
      b.push(t);
      break;
    case "outbound-rtp":
      y.push(t)
  }
  let O = Object.values(g).find(e => "succeeded" === e.state);
  if (true === O) return null;
  let v = [];
  for (let e of y) {
    let t = E[e.codecId];
    if (null == t) continue;
    let i = {
      type: e.kind,
      ssrc: e.ssrc,
      timestamp: e.timestamp,
      sinkWant: (0, r.f)(n, e.ssrc, "video" === e.kind),
      sinkWantAsInt: (0, r.F)(n, e.ssrc),
      codec: l(t),
      bytesSent: e.bytesSent,
      packetsSent: e.packetsSent,
      bitrateTarget: e.targetBitrate
    };
    if ("audio" === e.kind) v.push(s(a({}, i), {
      type: "audio"
    }));
    else if ("video" === e.kind && o) {
      let t = null !== e.frameWidth ? {
        width: e.frameWidth,
        height: e.frameHeight
      } : true;
      v.push(s(a({}, i), {
        framesEncoded: e.framesEncoded,
        keyFramesEncoded: e.keyFramesEncoded,
        firCount: e.firCount,
        nackCount: e.nackCount,
        pliCount: e.pliCount,
        qpSum: e.qpSum,
        averageEncodeTime: null == e.framesEncoded || c(e.totalEncodeTime) ? true : (1e3 * e.totalEncodeTime / e.framesEncoded).toFixed(1),
        resolution: t,
        framesSent: e.framesSent,
        frameRateInput: e.framesPerSecond,
        type: "video"
      }))
    }
  }
  let I = {};
  for (let e of b) {
    let o = E[e.codecId];
    if (null == o) continue;
    let c = t(e.ssrc);
    if (null == c) continue;
    let _ = {
      type: e.kind,
      ssrc: e.ssrc,
      timestamp: e.timestamp,
      sinkWant: (0, r.f)(n, e.ssrc, "video" === e.kind),
      sinkWantAsInt: (0, r.F)(n, e.ssrc),
      sinkWantLocal: (0, r.f)(i, e.ssrc, "video" === e.kind),
      sinkWantLocalAsInt: (0, r.F)(i, e.ssrc),
      codec: l(o),
      bytesReceived: e.bytesReceived,
      packetsReceived: e.packetsReceived,
      packetsLost: e.packetsLost,
      nackCount: e.nackCount
    };
    if ("audio" === e.kind) {
      let t = true !== e.jitterBufferDelay && true !== e.jitterBufferEmittedCount ? Math.round(1e3 * e.jitterBufferDelay / e.jitterBufferEmittedCount) : 0;
      null == I[c] && (I[c] = []), I[c].push(s(a({}, _), {
        audioLevel: e.audioLevel,
        jitter: 1e3 * e.jitter,
        jitterBuffer: t
      }))
    } else if ("video" === e.kind) {
      null == I[c] && (I[c] = []);
      let t = null !== e.frameWidth ? {
        width: e.frameWidth,
        height: e.frameHeight
      } : true;
      I[c].push(s(a({}, _), {
        resolution: t,
        framesDecoded: e.framesDecoded,
        keyFramesDecoded: e.keyFramesDecoded,
        framesDropped: e.framesDropped,
        framesReceived: e.framesReceived,
        frameRateDecode: e.framesPerSecond,
        averageDecodeTime: null == e.framesDecoded || null == e.totalDecodeTime ? true : (1e3 * e.totalDecodeTime / e.framesDecoded).toFixed(1),
        firCount: e.firCount,
        pliCount: e.pliCount,
        freezeCount: e.freezeCount,
        pauseCount: e.pauseCount,
        totalFreezesDuration: 1e3 * (null != (u = e.totalFreezesDuration) ? u : 0),
        totalPausesDuration: 1e3 * (null != (d = e.totalPausesDuration) ? d : 0),
        totalFramesDuration: 1e3 * (null != (f = e.totalInterFrameDelay) ? f : 0),
        sumOfSquaredFramesDurations: e.totalSquaredInterFrameDelay,
        qpSum: e.qpSum,
        decoderImplementationName: "WebRTC"
      }))
    }
  }
  let S = "firefox" === (null != (_ = platform.name) ? _ : "unknown").toLowerCase() && 142 === parseInt(null != (p = platform.version) ? p : "", 10),
    T = (null != (h = O.currentRoundTripTime) ? h : 0) * (S ? 1 : 1e3);
  return {
    transport: {
      availableOutgoingBitrate: null != (m = O.availableOutgoingBitrate) ? m : 0,
      bytesReceived: O.bytesReceived,
      bytesSent: O.bytesSent,
      ping: T
    },
    rtp: {
      inbound: I,
      outbound: v
    }
  }
}