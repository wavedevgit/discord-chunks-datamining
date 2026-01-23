/** Chunk was on web.js **/
/** chunk id: 83774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./747238.js"), require("./896048.js"), require("./321073.js");
var Chunk752163 = require("./752163.js");

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

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function o(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
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

function u(e, t, n, i, s) {
  var u, d, f, p, _, h, m;
  let g = {},
    E = {},
    y = [],
    b = [];
  for (let t of e.values()) switch (t.type) {
    case "candidate-pair":
      g[t.id] = t;
      break;
    case "codec":
      E[t.id] = t;
      break;
    case "inbound-rtp":
      y.push(t);
      break;
    case "outbound-rtp":
      b.push(t)
  }
  let O = Object.values(g).find(e => "succeeded" === e.state);
  if (true === O) return null;
  let v = [];
  for (let e of b) {
    let t = E[e.codecId];
    if (null == t) continue;
    let i = {
      type: e.kind,
      ssrc: e.ssrc,
      timestamp: e.timestamp,
      sinkWant: (0, r.D)(n, e.ssrc, "video" === e.kind),
      sinkWantAsInt: (0, r.q)(n, e.ssrc),
      codec: l(t),
      bytesSent: e.bytesSent,
      packetsSent: e.packetsSent,
      bitrateTarget: e.targetBitrate
    };
    if ("audio" === e.kind) v.push(o(a({}, i), {
      type: "audio"
    }));
    else if ("video" === e.kind && s) {
      let t = null !== e.frameWidth ? {
        width: e.frameWidth,
        height: e.frameHeight
      } : true;
      v.push(o(a({}, i), {
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
  let A = {};
  for (let e of y) {
    let s = E[e.codecId];
    if (null == s) continue;
    let c = t(e.ssrc);
    if (null == c) continue;
    let u = {
      type: e.kind,
      ssrc: e.ssrc,
      timestamp: e.timestamp,
      sinkWant: (0, r.D)(n, e.ssrc, "video" === e.kind),
      sinkWantAsInt: (0, r.q)(n, e.ssrc),
      sinkWantLocal: (0, r.D)(i, e.ssrc, "video" === e.kind),
      sinkWantLocalAsInt: (0, r.q)(i, e.ssrc),
      codec: l(s),
      bytesReceived: e.bytesReceived,
      packetsReceived: e.packetsReceived,
      packetsLost: e.packetsLost,
      nackCount: e.nackCount
    };
    if ("audio" === e.kind) {
      let t = true !== e.jitterBufferDelay && true !== e.jitterBufferEmittedCount ? Math.round(1e3 * e.jitterBufferDelay / e.jitterBufferEmittedCount) : 0;
      null == A[c] && (A[c] = []), A[c].push(o(a({}, u), {
        audioLevel: e.audioLevel,
        jitter: 1e3 * e.jitter,
        jitterBuffer: t
      }))
    } else if ("video" === e.kind) {
      null == A[c] && (A[c] = []);
      let t = null !== e.frameWidth ? {
        width: e.frameWidth,
        height: e.frameHeight
      } : true;
      A[c].push(o(a({}, u), {
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
        totalFreezesDuration: 1e3 * (null != (_ = e.totalFreezesDuration) ? _ : 0),
        totalPausesDuration: 1e3 * (null != (h = e.totalPausesDuration) ? h : 0),
        totalFramesDuration: 1e3 * (null != (m = e.totalInterFrameDelay) ? m : 0),
        sumOfSquaredFramesDurations: e.totalSquaredInterFrameDelay,
        qpSum: e.qpSum,
        decoderImplementationName: "WebRTC"
      }))
    }
  }
  let I = "firefox" === (null != (u = platform.name) ? u : "unknown").toLowerCase() && 142 === parseInt(null != (d = platform.version) ? d : "", 10),
    S = (null != (f = O.currentRoundTripTime) ? f : 0) * (I ? 1 : 1e3);
  return {
    transport: {
      availableOutgoingBitrate: null != (p = O.availableOutgoingBitrate) ? p : 0,
      bytesReceived: O.bytesReceived,
      bytesSent: O.bytesSent,
      ping: S
    },
    rtp: {
      inbound: A,
      outbound: v
    }
  }
}