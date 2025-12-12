/** Chunk was on web.js **/
/** chunk id: 158466, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./539854.js");
var Chunk878604 = require("./878604.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
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

function a(e) {
  return e / 32768
}

function s(e) {
  var t, n, r, i, o, a, s, l, c, u, d, f, p, _, m, h, g, E, b, y, O;
  let v = (null != (u = null == e ? true : e.headerBytes) ? u : 0) + (null != (d = null == e ? true : e.payloadBytes) ? d : 0) + (null != (f = null == e ? true : e.paddingBytes) ? f : 0);
  return (null != (p = null == e || null == (t = e.fec) ? true : t.headerBytes) ? p : 0) + (null != (_ = null == e || null == (n = e.fec) ? true : n.payloadBytes) ? _ : 0) + (null != (m = null == e || null == (r = e.fec) ? true : r.paddingBytes) ? m : 0) + (null != (h = null == e || null == (i = e.retransmitted) ? true : i.headerBytes) ? h : 0) + (null != (g = null == e || null == (o = e.retransmitted) ? true : o.payloadBytes) ? g : 0) + (null != (E = null == e || null == (a = e.retransmitted) ? true : a.paddingBytes) ? E : 0) + (null != (b = null == e || null == (s = e.transmitted) ? true : s.headerBytes) ? b : 0) + (null != (y = null == e || null == (l = e.transmitted) ? true : l.payloadBytes) ? y : 0) + (null != (O = null == e || null == (c = e.transmitted) ? true : c.paddingBytes) ? O : 0) + v
}

function l(e) {
  var t, n, r, i, o, a, s;
  let l = null != (i = null == e ? true : e.packets) ? i : 0;
  return (null != (o = null == e || null == (t = e.fec) ? true : t.packets) ? o : 0) + (null != (a = null == e || null == (n = e.retransmitted) ? true : n.packets) ? a : 0) + (null != (s = null == e || null == (r = e.transmitted) ? true : r.packets) ? s : 0) + l
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
  var n, i, o, a, c, u, d, f, p, _, m, h, g, E, b, y, O, v, S, I, T, C, A, N, P, R, w, D;
  let x = e.substreams.find(e => !e.isRTX && !e.isFlexFEC);
  if (null == x) return;
  let L = e.substreams.reduce((e, t) => e + s(t.rtpStats), 0),
    j = e.substreams.reduce((e, t) => e + l(t.rtpStats), 0);
  return {
    type: "video",
    ssrc: x.ssrc,
    sinkWant: (0, r.f)(t, x.ssrc, true),
    sinkWantAsInt: (0, r.F)(t, x.ssrc),
    codec: {
      id: e.codecPayloadType,
      name: e.codecName
    },
    keyFrameInterval: e.keyFrameInterval,
    bytesSent: L,
    packetsSent: j,
    packetsLost: null != (O = null == (n = x.rtcpStats) ? true : n.packetsLost) ? O : 0,
    fractionLost: null != (v = null == (i = x.rtcpStats) ? true : i.fractionLost) ? v : 0,
    bitrate: e.mediaBitrate,
    bitrateTarget: e.targetMediaBitrate,
    encoderImplementationName: e.encoderImplementationName,
    encodeUsage: e.encodeUsage,
    averageEncodeTime: e.avgEncodeTime,
    resolution: {
      height: x.height,
      width: x.width
    },
    framesSent: x.frameCounts.keyFrames + x.frameCounts.deltaFrames,
    keyFramesEncoded: x.frameCounts.keyFrames,
    framesEncoded: e.framesEncoded,
    frameRateInput: e.inputFrameRate,
    frameRateEncode: e.encodeFrameRate,
    firCount: null != (S = null == (o = x.rtcpStats) ? true : o.firPackets) ? S : 0,
    nackCount: null != (I = null == (a = x.rtcpStats) ? true : a.nackPackets) ? I : 0,
    pliCount: null != (T = null == (c = x.rtcpStats) ? true : c.pliPackets) ? T : 0,
    qpSum: e.qpSum,
    bandwidthLimitedResolution: e.bwLimitedResolution,
    framesDroppedRateLimiter: e.framesDroppedRateLimiter,
    framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
    framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
    framesDroppedEncoder: e.framesDroppedEncoder,
    cpuLimitedResolution: e.cpuLimitedResolution,
    encoderQualityVmaf: null != (C = null == (u = x.encoderQualityStats) ? true : u.imageQualityVmaf_v061) ? C : true,
    encoderQualityPsnr: null != (A = null == (d = x.encoderQualityStats) ? true : d.imageQualityWebrtcPsnrDb) ? A : true,
    qualityDecodeErrors: null != (N = null == (f = x.encoderQualityStats) ? true : f.decodeErrors) ? N : true,
    qualityDecoderReboots: null != (P = null == (p = x.encoderQualityStats) ? true : p.decoderReboots) ? P : true,
    qualityScoreErrors: null != (R = null == (_ = x.encoderQualityStats) ? true : _.scoreErrors) ? R : true,
    qualityFrameDrops: null != (w = null == (m = x.encoderQualityStats) ? true : m.frameDrops) ? w : true,
    qualitySizeMismatches: null != (D = null == (h = x.encoderQualityStats) ? true : h.sizeMismatches) ? D : true,
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
    freezeCount: null == (g = x.encoderQualityStats) ? true : g.freezeCount,
    totalFreezesDuration: null == (E = x.encoderQualityStats) ? true : E.totalFreezesDuration,
    totalFramesDuration: null == (b = x.encoderQualityStats) ? true : b.totalFramesDuration,
    videoEntropy: null == (y = x.encoderQualityStats) ? true : y.interFrameEntropy
  }
}

function f(e, t, n, i) {
  var a, c;
  let d = s(e.rtpStats),
    f = l(e.rtpStats);
  return o({
    type: "video",
    ssrc: e.ssrc,
    sinkWant: (0, r.f)(t, e.ssrc, true),
    sinkWantAsInt: (0, r.F)(t, e.ssrc),
    sinkWantLocal: (0, r.f)(n, e.ssrc, true),
    sinkWantLocalAsInt: (0, r.F)(n, e.ssrc),
    codec: {
      id: e.codecPayloadType,
      name: e.codecName
    },
    bytesReceived: d,
    packetsReceived: f,
    packetsLost: null != (a = e.rtpStats.packetsLost) ? a : e.rtcpStats.packetsLost,
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
  var l, c, p, _, m;
  let h = null,
    g = null,
    E = "string" == typeof t ? JSON.parse(t) : t,
    b = [];
  if (null != E.outbound) {
    let {
      audio: e,
      video: t,
      videos: i
    } = E.outbound;
    if (null != e && (g = (null != g ? g : 0) + e.bytesSent, b.push({
        type: "audio",
        ssrc: e.ssrc,
        sinkWant: (0, r.f)(n, e.ssrc, false),
        sinkWantAsInt: (0, r.F)(n, e.ssrc),
        codec: {
          id: e.codecPayloadType,
          name: e.codecName
        },
        bytesSent: e.bytesSent,
        packetsSent: e.packetsSent,
        packetsLost: Math.max(0, e.packetsLost),
        fractionLost: 100 * e.fractionLost,
        audioLevel: a(e.audioLevel),
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
      null != t && (g = (null != g ? g : 0) + t.bytesSent, b.push(t))
    });
    else if (null != t) {
      let e = d(t, n);
      null != e && (g = (null != g ? g : 0) + e.bytesSent, b.push(e))
    }
  }
  let y = {};
  null != E.inbound && E.inbound.forEach(e => {
    let {
      id: t,
      audio: l,
      video: c,
      videos: d,
      playout: p
    } = e;
    if (y[t] = [], null != l && (h = (null != h ? h : 0) + l.bytesReceived, y[t].push(o({
        type: "audio",
        ssrc: l.ssrc,
        sinkWant: (0, r.f)(n, l.ssrc, false),
        sinkWantAsInt: (0, r.F)(n, l.ssrc),
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
        audioLevel: a(l.audioLevel),
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
        h = (null != h ? h : 0) + n, y[t].push(r)
      }
    });
    else if (null != c) {
      let e = f(c, n, i, p);
      if (null != e) {
        let n = s(c.rtpStats);
        h = (null != h ? h : 0) + n, y[t].push(e)
      }
    }
  });
  let {
    transport: O,
    clips: v
  } = E, S = {};
  null != O && (S.availableOutgoingBitrate = O.sendBandwidth, S.ping = O.rtt, S.decryptionFailures = O.decryptionFailures, null != O.routingFailures && (S.routingFailures = O.routingFailures), S.localAddress = O.localAddress, S.pacerDelay = O.pacerDelay, null != O.receiverReports && (S.receiverReports = O.receiverReports), S.receiverBitrateEstimate = O.receiverBitrateEstimate, S.outboundBitrateEstimate = O.outboundBitrateEstimate, S.inboundBitrateEstimate = null != (l = O.inboundBitrateEstimate) ? l : 0, S.packetsReceived = O.packetsReceived, S.packetsSent = O.packetsSent, null != O.secureFramesProtocolVersion && (S.secureFramesProtocolVersion = O.secureFramesProtocolVersion)), (null == O ? true : O.bytesReceived) == null && (null == h || Number.isNaN(h)) || (S.bytesReceived = null != (p = null != (c = null == O ? true : O.bytesReceived) ? c : h) ? p : true), (null == O ? true : O.bytesSent) == null && (null == g || Number.isNaN(g)) || (S.bytesSent = null != (m = null != (_ = null == O ? true : O.bytesSent) ? _ : g) ? m : true);
  let {
    screenshare: I,
    camera: T,
    audioDevice: C
  } = E;
  return {
    mediaEngineConnectionId: e,
    transport: S,
    screenshare: I,
    camera: null != T ? {
      capturedFramesDropped: T.capturedFramesDropped,
      capturedFramesCount: T.capturedFramesCount,
      capturedFramesMean: T.capturedFramesMean,
      capturedFramesStdev: T.capturedFramesStdev
    } : null,
    clips: v,
    audioDevice: C,
    rtp: {
      inbound: y,
      outbound: b
    }
  }
}