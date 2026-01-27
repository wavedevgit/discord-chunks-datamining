/** Chunk was on web.js **/
/** chunk id: 807908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./321073.js");
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

function o(e) {
  return e / 32768
}

function s(e) {
  var t, n, r, i, a, o, s, l, c, u, d, f, p, _, h, m, g, E, y, b, O;
  let v = (null != (t = null == e ? true : e.headerBytes) ? t : 0) + (null != (n = null == e ? true : e.payloadBytes) ? n : 0) + (null != (r = null == e ? true : e.paddingBytes) ? r : 0);
  return (null != (i = null == e || null == (p = e.fec) ? true : p.headerBytes) ? i : 0) + (null != (a = null == e || null == (_ = e.fec) ? true : _.payloadBytes) ? a : 0) + (null != (o = null == e || null == (h = e.fec) ? true : h.paddingBytes) ? o : 0) + (null != (s = null == e || null == (m = e.retransmitted) ? true : m.headerBytes) ? s : 0) + (null != (l = null == e || null == (g = e.retransmitted) ? true : g.payloadBytes) ? l : 0) + (null != (c = null == e || null == (E = e.retransmitted) ? true : E.paddingBytes) ? c : 0) + (null != (u = null == e || null == (y = e.transmitted) ? true : y.headerBytes) ? u : 0) + (null != (d = null == e || null == (b = e.transmitted) ? true : b.payloadBytes) ? d : 0) + (null != (f = null == e || null == (O = e.transmitted) ? true : O.paddingBytes) ? f : 0) + v
}

function l(e) {
  var t, n, r, i, a, o, s;
  let l = null != (t = null == e ? true : e.packets) ? t : 0;
  return (null != (n = null == e || null == (a = e.fec) ? true : a.packets) ? n : 0) + (null != (r = null == e || null == (o = e.retransmitted) ? true : o.packets) ? r : 0) + (null != (i = null == e || null == (s = e.transmitted) ? true : s.packets) ? i : 0) + l
}

function c(e) {
  return null != e ? {
    last: Math.round(1e3 * e.last),
    mean: Math.round(1e3 * e.mean),
    p75: Math.round(1e3 * e.p75),
    p95: Math.round(1e3 * e.p95),
    p99: Math.round(1e3 * e.p99),
    max: Math.round(1e3 * e.max)
  } : null
}

function u(e) {
  let t = {};
  for (let n in e) t[n] = c(e[n]);
  return t
}

function d(e, t) {
  var n, i, a, o, c, u, d, f, p, _, h, m, g, E, y, b, O, v, A, I, S, T, C, N, w, R, P, D;
  let L = e.substreams.find(e => !e.isRTX && !e.isFlexFEC);
  if (null == L) return;
  let x = e.substreams.reduce((e, t) => e + s(t.rtpStats), 0),
    M = e.substreams.reduce((e, t) => e + l(t.rtpStats), 0);
  return {
    type: "video",
    ssrc: L.ssrc,
    sinkWant: (0, r.D)(t, L.ssrc, true),
    sinkWantAsInt: (0, r.q)(t, L.ssrc),
    codec: {
      id: e.codecPayloadType,
      name: e.codecName
    },
    keyFrameInterval: e.keyFrameInterval,
    bytesSent: x,
    packetsSent: M,
    packetsLost: null != (n = null == (g = L.rtcpStats) ? true : g.packetsLost) ? n : 0,
    fractionLost: null != (i = null == (E = L.rtcpStats) ? true : E.fractionLost) ? i : 0,
    bitrate: e.mediaBitrate,
    bitrateTarget: e.targetMediaBitrate,
    encoderImplementationName: e.encoderImplementationName,
    encodeUsage: e.encodeUsage,
    averageEncodeTime: e.avgEncodeTime,
    resolution: {
      height: L.height,
      width: L.width
    },
    framesSent: L.frameCounts.keyFrames + L.frameCounts.deltaFrames,
    keyFramesEncoded: L.frameCounts.keyFrames,
    framesEncoded: e.framesEncoded,
    frameRateInput: e.inputFrameRate,
    frameRateEncode: e.encodeFrameRate,
    firCount: null != (a = null == (y = L.rtcpStats) ? true : y.firPackets) ? a : 0,
    nackCount: null != (o = null == (b = L.rtcpStats) ? true : b.nackPackets) ? o : 0,
    pliCount: null != (c = null == (O = L.rtcpStats) ? true : O.pliPackets) ? c : 0,
    qpSum: e.qpSum,
    bandwidthLimitedResolution: e.bwLimitedResolution,
    framesDroppedRateLimiter: e.framesDroppedRateLimiter,
    framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
    framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
    framesDroppedEncoder: e.framesDroppedEncoder,
    cpuLimitedResolution: e.cpuLimitedResolution,
    encoderQualityVmaf: null != (u = null == (v = L.encoderQualityStats) ? true : v.imageQualityVmaf_v061) ? u : true,
    encoderQualityPsnr: null != (d = null == (A = L.encoderQualityStats) ? true : A.imageQualityWebrtcPsnrDb) ? d : true,
    qualityDecodeErrors: null != (f = null == (I = L.encoderQualityStats) ? true : I.decodeErrors) ? f : true,
    qualityDecoderReboots: null != (p = null == (S = L.encoderQualityStats) ? true : S.decoderReboots) ? p : true,
    qualityScoreErrors: null != (_ = null == (T = L.encoderQualityStats) ? true : T.scoreErrors) ? _ : true,
    qualityFrameDrops: null != (h = null == (C = L.encoderQualityStats) ? true : C.frameDrops) ? h : true,
    qualitySizeMismatches: null != (m = null == (N = L.encoderQualityStats) ? true : N.sizeMismatches) ? m : true,
    filter: e.filter,
    passthroughCount: e.passthroughCount,
    encryptSuccessCount: e.encryptSuccessCount,
    encryptFailureCount: e.encryptFailureCount,
    encryptDuration: e.encryptDuration,
    encryptAttempts: e.encryptAttempts,
    encryptMaxAttempts: e.encryptMaxAttempts,
    encryptMissingKeyCount: e.encryptMissingKeyCount,
    hqSimulcastStreamEncoded: e.hqSimulcastStreamEncoded,
    lqSimulcastStreamEncoded: e.lqSimulcastStreamEncoded,
    bandwidthLimitedFrameRate: e.bwLimitedFrameRate,
    freezeCount: null == (w = L.encoderQualityStats) ? true : w.freezeCount,
    totalFreezesDuration: null == (R = L.encoderQualityStats) ? true : R.totalFreezesDuration,
    totalFramesDuration: null == (P = L.encoderQualityStats) ? true : P.totalFramesDuration,
    videoEntropy: null == (D = L.encoderQualityStats) ? true : D.interFrameEntropy
  }
}

function f(e, t, n, i) {
  var o, c;
  let d = s(e.rtpStats),
    f = l(e.rtpStats);
  return a({
    type: "video",
    ssrc: e.ssrc,
    sinkWant: (0, r.D)(t, e.ssrc, true),
    sinkWantAsInt: (0, r.q)(t, e.ssrc),
    sinkWantLocal: (0, r.D)(n, e.ssrc, true),
    sinkWantLocalAsInt: (0, r.q)(n, e.ssrc),
    codec: {
      id: e.codecPayloadType,
      name: e.codecName
    },
    bytesReceived: d,
    packetsReceived: f,
    packetsLost: null != (o = e.rtpStats.packetsLost) ? o : e.rtcpStats.packetsLost,
    fractionLost: e.rtcpStats.fractionLost,
    bitrate: e.totalBitrate,
    jitterBuffer: e.jitterBuffer,
    currentDelay: e.currentDelay,
    targetDelay: e.targetDelay,
    minPlayoutDelay: e.minPlayoutDelay,
    renderDelay: e.renderDelay,
    averageDecodeTime: e.decode,
    resolution: {
      height: e.height,
      width: e.width
    },
    decoderImplementationName: e.decoderImplementationName,
    framesDecoded: e.framesDecoded,
    framesDropped: e.framesDropped,
    framesDecodeErrors: e.framesDecodeErrors,
    framesReceived: e.frameCounts.keyFrames + e.frameCounts.deltaFrames,
    networkFramesDropped: null != (c = e.networkFramesDropped) ? c : 0,
    keyFramesDecoded: e.frameCounts.keyFrames,
    frameRateDecode: e.decodeFrameRate,
    frameRateNetwork: e.networkFrameRate,
    frameRateRender: e.renderFrameRate,
    firCount: e.rtcpStats.firPackets,
    nackCount: e.rtcpStats.nackPackets,
    pliCount: e.rtcpStats.pliPackets,
    qpSum: e.qpSum,
    freezeCount: e.freezeCount,
    pauseCount: e.pauseCount,
    totalFreezesDuration: e.totalFreezesDuration,
    totalPausesDuration: e.totalPausesDuration,
    totalFramesDuration: e.totalFramesDuration,
    sumOfSquaredFramesDurations: e.sumOfSquaredFramesDurations,
    passthroughCount: e.passthroughCount,
    decryptSuccessCount: e.decryptSuccessCount,
    decryptFailureCount: e.decryptFailureCount,
    decryptDuration: e.decryptDuration,
    decryptAttempts: e.decryptAttempts,
    decryptMissingKeyCount: e.decryptMissingKeyCount,
    decryptInvalidNonceCount: e.decryptInvalidNonceCount
  }, null != i ? u({
    videoJitterBuffer: i.videoJitterBuffer,
    videoJitterDelay: i.videoJitterDelay,
    videoJitterTarget: i.videoJitterTarget
  }) : {})
}

function p(e, t, n, i) {
  var l, c, p, _, h;
  let m = null,
    g = null,
    E = "string" == typeof t ? JSON.parse(t) : t,
    y = [];
  if (null != E.outbound) {
    let {
      audio: e,
      video: t,
      videos: i
    } = E.outbound;
    if (null != e && (g = (null != g ? g : 0) + e.bytesSent, y.push({
        type: "audio",
        ssrc: e.ssrc,
        sinkWant: (0, r.D)(n, e.ssrc, false),
        sinkWantAsInt: (0, r.q)(n, e.ssrc),
        codec: {
          id: e.codecPayloadType,
          name: e.codecName
        },
        bytesSent: e.bytesSent,
        packetsSent: e.packetsSent,
        packetsLost: Math.max(0, e.packetsLost),
        fractionLost: 100 * e.fractionLost,
        audioLevel: o(e.audioLevel),
        bitrate: e.mediaBitrate,
        bitrateTarget: e.targetMediaBitrate,
        audioDetected: e.speaking,
        framesCaptured: e.framesCaptured,
        framesRendered: e.framesRendered,
        noiseCancellerFrames: e.noiseCancellerFrames,
        noiseCancellerProcessTime: e.noiseCancellerProcessTime,
        voiceActivityDetectorProcessTime: e.voiceActivityDetectorProcessTime,
        passthroughCount: e.passthroughCount,
        encryptSuccessCount: e.encryptSuccessCount,
        encryptFailureCount: e.encryptFailureCount,
        encryptDuration: e.encryptDuration,
        encryptAttempts: e.encryptAttempts,
        encryptMaxAttempts: e.encryptMaxAttempts,
        encryptMissingKeyCount: e.encryptMissingKeyCount,
        pttQueueLatencyMicrosSamples: e.pttQueueLatencyMicrosSamples,
        sampleRateMismatchPercent: e.sampleRateMismatchPercent,
        currentSampleRate: e.currentSampleRate
      })), null != i) i.forEach(e => {
      let t = d(e, n);
      null != t && (g = (null != g ? g : 0) + t.bytesSent, y.push(t))
    });
    else if (null != t) {
      let e = d(t, n);
      null != e && (g = (null != g ? g : 0) + e.bytesSent, y.push(e))
    }
  }
  let b = {};
  null != E.inbound && E.inbound.forEach(e => {
    let {
      id: t,
      audio: l,
      video: c,
      videos: d,
      playout: p
    } = e;
    if (b[t] = [], null != l && (m = (null != m ? m : 0) + l.bytesReceived, b[t].push(a({
        type: "audio",
        ssrc: l.ssrc,
        sinkWant: (0, r.D)(n, l.ssrc, false),
        sinkWantAsInt: (0, r.q)(n, l.ssrc),
        codec: {
          id: l.codecPayloadType,
          name: l.codecName
        },
        bytesReceived: l.bytesReceived,
        packetsReceived: l.packetsReceived,
        packetsLost: l.packetsLost,
        fractionLost: 100 * l.fractionLost,
        fecPacketsReceived: l.fecPacketsReceived,
        fecPacketsDiscarded: l.fecPacketsDiscarded,
        audioLevel: o(l.audioLevel),
        audioDetected: l.speaking,
        currentSampleRate: l.currentSampleRate,
        jitter: l.jitter,
        jitterBuffer: l.jitterBuffer,
        jitterBufferPreferred: l.jitterBufferPreferred,
        decodingCNG: l.decodingCNG,
        decodingMutedOutput: l.decodingMutedOutput,
        decodingNormal: l.decodingNormal,
        decodingPLC: l.decodingPLC,
        decodingPLCCNG: l.decodingPLCCNG,
        nackCount: l.nackCount,
        accelerateRate: 100 * l.accelerateRate,
        expandRate: 100 * l.expandRate,
        preemptiveExpandRate: 100 * l.preemptiveExpandRate,
        speechExpandRate: 100 * l.speechExpandRate,
        secondaryDecodedRate: 100 * l.secondaryDecodedRate,
        opSilence: l.opSilence,
        opNormal: l.opNormal,
        opMerge: l.opMerge,
        opExpand: l.opExpand,
        opAccelerate: l.opAccelerate,
        opPreemptiveExpand: l.opPreemptiveExpand,
        opCNG: l.opCNG,
        delayEstimate: l.delayEstimate,
        passthroughCount: l.passthroughCount,
        decryptSuccessCount: l.decryptSuccessCount,
        decryptFailureCount: l.decryptFailureCount,
        decryptDuration: l.decryptDuration,
        decryptAttempts: l.decryptAttempts,
        decryptMissingKeyCount: l.decryptMissingKeyCount,
        decryptInvalidNonceCount: l.decryptInvalidNonceCount
      }, null != p ? u({
        audioJitterBuffer: p.audioJitterBuffer,
        audioJitterDelay: p.audioJitterDelay,
        audioJitterTarget: p.audioJitterTarget,
        audioPlayoutUnderruns: p.audioPlayoutUnderruns,
        relativeReceptionDelay: p.relativeReceptionDelay,
        relativePlayoutDelay: p.relativePlayoutDelay
      }) : {}))), null != d) d.forEach(e => {
      let r = f(e, n, i, p);
      if (null != r) {
        let n = s(e.rtpStats);
        m = (null != m ? m : 0) + n, b[t].push(r)
      }
    });
    else if (null != c) {
      let e = f(c, n, i, p);
      if (null != e) {
        let n = s(c.rtpStats);
        m = (null != m ? m : 0) + n, b[t].push(e)
      }
    }
  });
  let {
    transport: O,
    clips: v
  } = E, A = {};
  null != O && (A.availableOutgoingBitrate = O.sendBandwidth, A.ping = O.rtt, A.decryptionFailures = O.decryptionFailures, null != O.routingFailures && (A.routingFailures = O.routingFailures), A.localAddress = O.localAddress, A.pacerDelay = O.pacerDelay, null != O.receiverReports && (A.receiverReports = O.receiverReports), A.receiverBitrateEstimate = O.receiverBitrateEstimate, A.outboundBitrateEstimate = O.outboundBitrateEstimate, A.inboundBitrateEstimate = null != (l = O.inboundBitrateEstimate) ? l : 0, A.packetsReceived = O.packetsReceived, A.packetsSent = O.packetsSent, null != O.secureFramesProtocolVersion && (A.secureFramesProtocolVersion = O.secureFramesProtocolVersion)), (null == O ? true : O.bytesReceived) == null && (null == m || Number.isNaN(m)) || (A.bytesReceived = null != (c = null != (p = null == O ? true : O.bytesReceived) ? p : m) ? c : true), (null == O ? true : O.bytesSent) == null && (null == g || Number.isNaN(g)) || (A.bytesSent = null != (_ = null != (h = null == O ? true : O.bytesSent) ? h : g) ? _ : true);
  let {
    screenshare: I,
    camera: S,
    audioDevice: T
  } = E;
  return {
    mediaEngineConnectionId: e,
    transport: A,
    screenshare: I,
    camera: null != S ? {
      capturedFramesDropped: S.capturedFramesDropped,
      capturedFramesCount: S.capturedFramesCount,
      capturedFramesMean: S.capturedFramesMean,
      capturedFramesStdev: S.capturedFramesStdev
    } : null,
    clips: v,
    audioDevice: T,
    rtp: {
      inbound: b,
      outbound: y
    }
  }
}