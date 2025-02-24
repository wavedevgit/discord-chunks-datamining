/** Chunk was on web.js **/
"use strict";
n.d(t, {
  S: () => y,
  d: () => b
}), n(47120), n(230036), n(653041);
var r = n(392711),
  i = n.n(r),
  o = n(47770),
  a = n(46973),
  s = n(379649),
  l = n(358085),
  c = n(709054),
  u = n(909766),
  d = n(140828),
  f = n(255914);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return null != e ? Math.round(e) : t
}

function E(e, t) {
  return e.size === t.size && Array.from(e).every(e => t.has(e))
}
class v {
  set value(e) {
    e && !this.state && (this.begin = this.timestampProducer.now()), !e && this.state && (this.total += this.timestampProducer.now() - Number(this.begin), this.begin = null), this.state = e
  }
  get value() {
    return this.state
  }
  totalDuration() {
    return null != this.begin ? this.total + this.timestampProducer.now() - this.begin : this.total
  }
  totalDurationSeconds() {
    return this.totalDuration() / 1e3
  }
  constructor(e, t) {
    p(this, "timestampProducer", void 0), p(this, "begin", void 0), p(this, "total", void 0), p(this, "state", void 0), this.timestampProducer = t, this.total = 0, this.state = e, this.begin = e ? t.now() : null
  }
}
var b = function(e) {
  return e.FpsUpdate = "fps-update", e
}({});
class y extends o.Z {
  addUserToStatsCollectionPausedSet(e) {
    this.statCollectionPausedUsers.add(e)
  }
  removeUserFromStatsCollectionPausedSet(e) {
    this.statCollectionPausedUsers.delete(e)
  }
  start() {
    this.streamStart = this.timestampProducer.now(), this.connection.on(a.Sh.Stats, this.sampleStats)
  }
  setOutboundSsrc(e) {
    null == this.outboundStats[e] && (this.outboundStats[e] = new f.nt(this.timestampProducer))
  }
  getOrCreateInboundStats(e) {
    return null == this.inboundStats[e] && (this.inboundStats[e] = new f.m7(this.timestampProducer)), this.inboundStats[e]
  }
  setInboundUser(e, t) {
    this.getOrCreateInboundStats(e).setVideoStopped(0 === t, f.Mq.SenderStopped)
  }
  setUserVideoDisabled(e, t) {
    let n = this.getOrCreateInboundStats(e);
    n.setVideoStopped(t, f.Mq.ClientSideDisableVideo), !t && n.statsWindow.length > 0 && 0 === n.statsWindow[0].packets && (n.startTime = this.timestampProducer.now())
  }
  setOcclusionIncomingVideoEnabled(e) {
    this.videoStoppedForOcclusion.value = !e
  }
  setWindowOcclusionState(e) {
    e !== this.windowOccluded.value && this.numWindowOcclusionChanges++, this.windowOccluded.value = e
  }
  pause() {
    !this.paused.value && this.pausedCount++, i().forEach(this.outboundStats, e => {
      e.statsWindow = []
    }), i().forEach(this.inboundStats, e => {
      e.statsWindow = []
    }), this.updateSendState({
      paused: !0
    })
  }
  resume() {
    this.updateSendState({
      paused: !1
    })
  }
  stop() {
    this.connection.off(a.Sh.Stats, this.sampleStats), this.streamEnd = this.timestampProducer.now(), this.removeAllListeners()
  }
  setViewedSimulcastQuality(e) {
    e !== this.hqSimulcastStreamWatched.value && (this.hqSimulcastStreamWatched.totalDuration() > 0 || this.lqSimulcastStreamWatched.totalDuration() > 0) && this.simulcastQualityChanges++, this.hqSimulcastStreamWatched.value = e, this.lqSimulcastStreamWatched.value = !e
  }
  setEligibleSimulcastQuality(e) {
    this.hqSimulcastStreamEligible.value = e, this.lqSimulcastStreamEligible.value = !e
  }
  getNetworkStats() {
    return this.networkQuality.getStats()
  }
  getEncoderUsageStats() {
    let e = new Map;
    for (let t in this.outboundStats) {
      let n = new Map;
      for (let r of this.outboundStats[t].getCodecsUsed()) {
        let i = r.toUpperCase();
        n.set(i, g(this.outboundStats[t].codecBuckets[i])), e.set(parseInt(t), n)
      }
    }
    return e
  }
  getDecoderUsageStats() {
    let e = new Map;
    for (let t in this.inboundStats) {
      let n = new Map;
      for (let r of this.inboundStats[t].getCodecsUsed()) {
        let i = r.toUpperCase();
        n.set(i, g(this.inboundStats[t].codecBuckets[i])), e.set(t, n)
      }
    }
    return e
  }
  getCodecUsageStats(e, t) {
    var n, r, i, o, a, s, l, c, u, d;
    let p = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
      _ = new Map;
    if ("sender" === e || "streamer" === e) {
      let e = this.getEncoderUsageStats();
      if (e.size > 0) {
        let t = [...e.keys()].sort()[0];
        _ = e.get(t)
      }
      return {
        codec_asymmetric_session: p,
        codec_h264_encode_duration_sec: null !== (n = _.get(f.u7.H264)) && void 0 !== n ? n : 0,
        codec_h265_encode_duration_sec: null !== (r = _.get(f.u7.H265)) && void 0 !== r ? r : 0,
        codec_vp8_encode_duration_sec: null !== (i = _.get(f.u7.VP8)) && void 0 !== i ? i : 0,
        codec_vp9_encode_duration_sec: null !== (o = _.get(f.u7.VP9)) && void 0 !== o ? o : 0,
        codec_av1_encode_duration_sec: null !== (a = _.get(f.u7.AV1)) && void 0 !== a ? a : 0
      }
    } {
      let e = this.getDecoderUsageStats();
      return e.has(t) && (_ = e.get(t)), {
        codec_asymmetric_session: p,
        codec_h264_decode_duration_sec: null !== (s = _.get(f.u7.H264)) && void 0 !== s ? s : 0,
        codec_h265_decode_duration_sec: null !== (l = _.get(f.u7.H265)) && void 0 !== l ? l : 0,
        codec_vp8_decode_duration_sec: null !== (c = _.get(f.u7.VP8)) && void 0 !== c ? c : 0,
        codec_vp9_decode_duration_sec: null !== (u = _.get(f.u7.VP9)) && void 0 !== u ? u : 0,
        codec_av1_decode_duration_sec: null !== (d = _.get(f.u7.AV1)) && void 0 !== d ? d : 0
      }
    }
  }
  getOutboundStats() {
    let e = [];
    return i().forEach(this.outboundStats, (t, n) => {
      var r, i, o, a, s;
      let l;
      let c = null === (r = this.connection) || void 0 === r ? void 0 : r.getStreamParameters();
      c.length > 1 && c.forEach(e => {
        if (parseInt(n) === e.ssrc) {
          var t;
          l = null !== (t = e.quality) && void 0 !== t ? t : 50
        }
      });
      let u = [1, 5, 10, 25, 50, 75],
        d = [1, 5, 10, 25, 50, 75, 99],
        p = t.vmafHistogram.getReport(u),
        h = t.psnrHistogram.getReport(u),
        E = t.targetBitrateHistogram.getReport(d),
        v = t.outboundBandwidthSurplus.getReport(d),
        b = this.videoEntropy.getReport(d),
        y = t.aggregationDuration / 1e3;
      e.push(m(_({}, this.getStats(t)), {
        target_fps: y > 0 ? Math.round((null !== (i = t.targetFrames) && void 0 !== i ? i : 0) / y) : 0,
        target_bitrate_network: y > 0 ? Math.round((null !== (o = t.targetBytesNetwork) && void 0 !== o ? o : 0) * 8 / y) : 0,
        target_bitrate_network_percentile1: E.count > 0 ? E.percentiles[1] : null,
        target_bitrate_network_percentile5: E.count > 0 ? E.percentiles[5] : null,
        target_bitrate_network_percentile10: E.count > 0 ? E.percentiles[10] : null,
        target_bitrate_network_percentile25: E.count > 0 ? E.percentiles[25] : null,
        target_bitrate_network_percentile50: E.count > 0 ? E.percentiles[50] : null,
        target_bitrate_network_percentile75: E.count > 0 ? E.percentiles[75] : null,
        target_bitrate_network_percentile99: E.count > 0 ? E.percentiles[99] : null,
        target_bitrate_max: y > 0 ? Math.round((null !== (a = t.targetBytesMax) && void 0 !== a ? a : 0) * 8 / y) : 0,
        outbound_bandwidth_estimate: y > 0 ? Math.round((null !== (s = t.outboundBytesAvailable) && void 0 !== s ? s : 0) * 8 / y) : 0,
        outbound_bandwidth_surplus_percentile1: v.count > 0 ? v.percentiles[1] : null,
        outbound_bandwidth_surplus_percentile5: v.count > 0 ? v.percentiles[5] : null,
        outbound_bandwidth_surplus_percentile10: v.count > 0 ? v.percentiles[10] : null,
        outbound_bandwidth_surplus_percentile25: v.count > 0 ? v.percentiles[25] : null,
        outbound_bandwidth_surplus_percentile50: v.count > 0 ? v.percentiles[50] : null,
        outbound_bandwidth_surplus_percentile75: v.count > 0 ? v.percentiles[75] : null,
        outbound_bandwidth_surplus_percentile99: v.count > 0 ? v.percentiles[99] : null,
        duration_encoder_nvidia_cuda: g(t.encoderBuckets[f.Su.NVIDIA_CUDA]),
        duration_encoder_nvidia_direct3d: g(t.encoderBuckets[f.Su.NVIDIA_DIRECT_3D]),
        duration_encoder_openh264: g(t.encoderBuckets[f.Su.OPENH264]),
        duration_encoder_videotoolbox: g(t.encoderBuckets[f.Su.VIDEOTOOLBOX]),
        duration_encoder_amd_direct3d: g(t.encoderBuckets[f.Su.AMD_DIRECT_3D]),
        duration_encoder_intel: g(t.encoderBuckets[f.Su.INTEL]),
        duration_encoder_intel_direct3d: g(t.encoderBuckets[f.Su.INTEL_DIRECT_3D]),
        duration_encoder_vp8_libvpx: g(t.encoderBuckets[f.Su.VP8_LIBVPX]),
        duration_encoder_uncategorized: g(t.encoderBuckets[f.Su.UNCATEGORIZED]),
        duration_encoder_unknown: g(t.encoderBuckets[f.Su.UNKNOWN]),
        quality: l,
        average_encode_time_ms: t.averageEncodeTime,
        average_encoder_vmaf_score: t.vmafScoreNum > 0 ? t.vmafScoreSum / t.vmafScoreNum : null,
        encoder_vmaf_score_percentile1: p.count > 0 ? p.percentiles[1] : null,
        encoder_vmaf_score_percentile5: p.count > 0 ? p.percentiles[5] : null,
        encoder_vmaf_score_percentile10: p.count > 0 ? p.percentiles[10] : null,
        encoder_vmaf_score_percentile25: p.count > 0 ? p.percentiles[25] : null,
        encoder_vmaf_score_percentile50: p.count > 0 ? p.percentiles[50] : null,
        encoder_vmaf_score_percentile75: p.count > 0 ? p.percentiles[75] : null,
        average_encoder_psnr_db: t.psnrDbNum > 0 ? t.psnrDbSum / t.psnrDbNum : null,
        encoder_psnr_db_percentile1: h.count > 0 ? h.percentiles[1] : null,
        encoder_psnr_db_percentile5: h.count > 0 ? h.percentiles[5] : null,
        encoder_psnr_db_percentile10: h.count > 0 ? h.percentiles[10] : null,
        encoder_psnr_db_percentile25: h.count > 0 ? h.percentiles[25] : null,
        encoder_psnr_db_percentile50: h.count > 0 ? h.percentiles[50] : null,
        encoder_psnr_db_percentile75: h.count > 0 ? h.percentiles[75] : null,
        average_outbound_want: t.outboundSinkWantNum > 0 ? t.outboundSinkWantSum / t.outboundSinkWantNum : null,
        frames_dropped_rate_limiter: t.framesDroppedRateLimiter,
        frames_dropped_encoder_queue: t.framesDroppedEncoderQueue,
        frames_dropped_congestion_window: t.framesDroppedCongestionWindow,
        frames_dropped_encoder: t.framesDroppedEncoder,
        duration_hq_simulcast_stream_encoded: g(this.hqSimulcastStreamEncoded.totalDurationSeconds()),
        duration_lq_simulcast_stream_encoded: g(this.lqSimulcastStreamEncoded.totalDurationSeconds()),
        duration_both_simulcast_streams_encoded: g(this.bothSimulcastStreamsEncoded.totalDurationSeconds()),
        duration_fps_bandwidth_limited: g(this.bandwidthLimitedFramerate.totalDurationSeconds()),
        duration_resolution_bandwidth_limited: g(this.bandwidthLimitedResolution.totalDurationSeconds()),
        video_entropy_percentile1: b.count > 0 ? b.percentiles[1] : null,
        video_entropy_percentile5: b.count > 0 ? b.percentiles[5] : null,
        video_entropy_percentile10: b.count > 0 ? b.percentiles[10] : null,
        video_entropy_percentile25: b.count > 0 ? b.percentiles[25] : null,
        video_entropy_percentile50: b.count > 0 ? b.percentiles[50] : null,
        video_entropy_percentile75: b.count > 0 ? b.percentiles[75] : null,
        video_entropy_percentile99: b.count > 0 ? b.percentiles[99] : null
      }))
    }), e
  }
  getInboundStats(e) {
    return this.getStats(this.inboundStats[e])
  }
  destroyUser(e) {
    delete this.inboundStats[e]
  }
  getInboundParticipants() {
    return c.default.keys(this.inboundStats)
  }
  updateSendState(e) {
    null != e.paused && (this.paused.value = e.paused), null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
    let t = this.paused.value || this.zeroReceivers.value,
      n = this.videoStopped.value;
    this.videoStopped.value = t, t !== n && i().forEach(this.outboundStats, e => e.statsWindow = [])
  }
  getStats(e) {
    if (null == e) return;
    let t = Number(this.streamStart),
      n = (null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t) / 1e3,
      r = Math.max(e.aggregationDuration, 0) / 1e3,
      i = [1, 5, 10, 25, 50, 75],
      o = [1, 5, 10, 25, 50, 75, 99],
      a = [1, 5, 10, 25, 50, 75, 99],
      s = [1, 5, 10, 25, 50, 75, 90, 95],
      l = e.fpsHistogram.getReport(i),
      c = e.bitrateHistogram.getReport(o),
      u = e.resolutionHistogram.getReport(i),
      d = e.inboundBitrateEstimateHistogram.getReport(a),
      p = e.localWantHistogram.getReport(s),
      h = e.systemResources.getStats(),
      E = _({
        duration: Math.floor(n),
        duration_aggregation: g(r),
        duration_stopped_receiving: g(e.videoStoppedDuration.asSeconds()),
        duration_stream_under_8mbps: g(e.bitrateBuckets[8e6]),
        duration_stream_under_7mbps: g(e.bitrateBuckets[7e6]),
        duration_stream_under_6mbps: g(e.bitrateBuckets[6e6]),
        duration_stream_under_5mbps: g(e.bitrateBuckets[5e6]),
        duration_stream_under_4mbps: g(e.bitrateBuckets[4e6]),
        duration_stream_under_3mbps: g(e.bitrateBuckets[3e6]),
        duration_stream_under_2mbps: g(e.bitrateBuckets[2e6]),
        duration_stream_under_1_5mbps: g(e.bitrateBuckets[15e5]),
        duration_stream_under_1mbps: g(e.bitrateBuckets[1e6]),
        duration_stream_under_0_5mbps: g(e.bitrateBuckets[5e5]),
        duration_stream_at_0mbps: g(e.bitrateBuckets[0]),
        duration_fps_under_60: g(e.fpsBuckets[60]),
        duration_fps_under_55: g(e.fpsBuckets[55]),
        duration_fps_under_50: g(e.fpsBuckets[50]),
        duration_fps_under_45: g(e.fpsBuckets[45]),
        duration_fps_under_40: g(e.fpsBuckets[40]),
        duration_fps_under_35: g(e.fpsBuckets[35]),
        duration_fps_under_30: g(e.fpsBuckets[30]),
        duration_fps_under_25: g(e.fpsBuckets[25]),
        duration_fps_under_20: g(e.fpsBuckets[20]),
        duration_fps_under_15: g(e.fpsBuckets[15]),
        duration_fps_under_10: g(e.fpsBuckets[10]),
        duration_fps_under_5: g(e.fpsBuckets[5]),
        duration_fps_at_0: g(e.fpsBuckets[0]),
        avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
        avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
        avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
        duration_resolution_under_720: g(e.resolutionBuckets[720]),
        duration_resolution_under_480: g(e.resolutionBuckets[480]),
        duration_resolution_under_360: g(e.resolutionBuckets[360]),
        num_pauses: this.pausedCount,
        duration_paused: g(this.paused.totalDuration() / 1e3),
        duration_zero_receivers: g(this.zeroReceivers.totalDuration() / 1e3),
        duration_video_stopped: g(this.videoStopped.totalDuration() / 1e3),
        duration_hq_simulcast_stream_watched: g(this.hqSimulcastStreamWatched.totalDurationSeconds()),
        duration_lq_simulcast_stream_watched: g(this.lqSimulcastStreamWatched.totalDurationSeconds()),
        duration_hq_simulcast_stream_eligible: g(this.hqSimulcastStreamEligible.totalDurationSeconds()),
        duration_lq_simulcast_stream_eligible: g(this.lqSimulcastStreamEligible.totalDurationSeconds()),
        num_quality_changes: this.simulcastQualityChanges,
        duration_window_occluded: g(this.windowOccluded.totalDurationSeconds()),
        duration_incoming_video_stopped_for_occlusion: g(this.videoStoppedForOcclusion.totalDurationSeconds()),
        num_window_occlusion_changes: this.numWindowOcclusionChanges,
        fps_percentile1: l.percentiles[1],
        fps_percentile5: l.percentiles[5],
        fps_percentile10: l.percentiles[10],
        fps_percentile25: l.percentiles[25],
        fps_percentile50: l.percentiles[50],
        fps_percentile75: l.percentiles[75],
        bitrate_percentile1: c.percentiles[1],
        bitrate_percentile5: c.percentiles[5],
        bitrate_percentile10: c.percentiles[10],
        bitrate_percentile25: c.percentiles[25],
        bitrate_percentile50: c.percentiles[50],
        bitrate_percentile75: c.percentiles[75],
        bitrate_percentile99: c.percentiles[99],
        resolution_percentile1: u.percentiles[1],
        resolution_percentile5: u.percentiles[5],
        resolution_percentile10: u.percentiles[10],
        resolution_percentile25: u.percentiles[25],
        resolution_percentile50: u.percentiles[50],
        resolution_percentile75: u.percentiles[75],
        inbound_bitrate_estimate_percentile1: d.percentiles[1],
        inbound_bitrate_estimate_percentile5: d.percentiles[5],
        inbound_bitrate_estimate_percentile10: d.percentiles[10],
        inbound_bitrate_estimate_percentile25: d.percentiles[25],
        inbound_bitrate_estimate_percentile50: d.percentiles[50],
        inbound_bitrate_estimate_percentile75: d.percentiles[75],
        inbound_bitrate_estimate_percentile99: d.percentiles[99],
        local_want_percentile1: p.percentiles[1],
        local_want_percentile5: p.percentiles[5],
        local_want_percentile10: p.percentiles[10],
        local_want_percentile25: p.percentiles[25],
        local_want_percentile50: p.percentiles[50],
        local_want_percentile75: p.percentiles[75],
        local_want_percentile90: p.percentiles[90],
        local_want_percentile95: p.percentiles[95],
        average_local_want: p.mean,
        duration_video_effect: g(this.videoEffectDuration.totalDuration() / 1e3),
        cryptor_max_attempts: e.cryptorMaxAttempts,
        duration_decoder_ffmpeg: g(e.decoderBuckets[f.gr.FFMPEG]),
        duration_decoder_dav1d: g(e.decoderBuckets[f.gr.DAV1D]),
        duration_decoder_vp8_libvpx: g(e.decoderBuckets[f.gr.VP8_LIBVPX]),
        duration_decoder_electron: g(e.decoderBuckets[f.gr.ELECTRON]),
        duration_decoder_videotoolbox: g(e.decoderBuckets[f.gr.VIDEOTOOLBOX]),
        duration_decoder_uncategorized: g(e.decoderBuckets[f.gr.UNCATEGORIZED]),
        duration_decoder_unknown: g(e.decoderBuckets[f.gr.UNKNOWN])
      }, h),
      {
        bytes: v,
        framesDropped: b,
        framesCodecError: y,
        framesCodec: O,
        framesNetwork: S,
        packets: I,
        packetsLost: T,
        nackCount: N,
        pliCount: A,
        qpSum: C,
        pauseCount: R,
        freezeCount: P,
        totalPausesDuration: w,
        totalFreezesDuration: D,
        totalFramesDuration: L,
        keyframes: x,
        passthroughCount: M,
        cryptorSuccessCount: k,
        cryptorFailureCount: j,
        cryptorDuration: U,
        cryptorAttempts: G,
        cryptorMissingKeyCount: B,
        cryptorInvalidNonceCount: Z,
        qualityDecodeErrors: F,
        qualityDecoderReboots: V,
        qualityScoreErrors: H,
        qualityFrameDrops: W,
        qualitySizeMismatches: Y
      } = e.aggregatedProperties;
    return e instanceof f.nt ? (E.sender_freeze_count = P, E.sender_total_freezes_duration = D, E.sender_total_frames_duration = L) : (E.receiver_freeze_count = P, E.receiver_total_freezes_duration = D, E.receiver_total_frames_duration = L, E.receiver_pause_count = R, E.receiver_total_pauses_duration = w), m(_({}, E), {
      avg_bitrate: r > 0 ? Math.round((null != v ? v : 0) * 8 / r) : 0,
      avg_fps: r > 0 ? Math.round((null != O ? O : 0) / r) : 0,
      num_bytes: v,
      num_packets_lost: T,
      num_packets: I,
      num_frames: S,
      num_frames_codec_error: y,
      time_to_first_frame_ms: e.timeToFirstFrame,
      num_frames_dropped: b,
      num_nacks: N,
      num_plis: A,
      qp_sum: C,
      num_keyframes: x,
      cryptor_passthrough_count: M,
      cryptor_success_count: k,
      cryptor_failure_count: j,
      cryptor_duration: U,
      cryptor_attempts: G,
      cryptor_missing_key_count: B,
      cryptor_invalid_nonce_count: Z,
      encoder_quality_decode_errors: F,
      encoder_quality_decoder_reboots: V,
      encoder_quality_score_errors: H,
      encoder_quality_frame_drops: W,
      encoder_quality_size_mismatches: Y
    })
  }
  receivedStats(e, t, n) {
    var r, o;
    let s = t.transport,
      c = (0, l.isWeb)() ? 1 : null !== (o = null === (r = s.receiverReports) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0,
      u = new Set,
      d = new Set;
    this.updateSendState({
      receivers: c
    });
    let p = i().max(n.map(e => e.quality)),
      _ = t.rtp.outbound.filter(e => "video" === e.type && (null == e ? void 0 : e.videoEntropy) != null)[0],
      h = null == _ ? void 0 : _.videoEntropy;
    t.rtp.outbound.filter(e => "video" === e.type).forEach(t => {
      let r = t;
      if (null != r) {
        let t = r.ssrc,
          I = this.outboundStats[t];
        null == I && (console.warn("Unknown outbound video stream with SSRC: ".concat(t)), I = new f.nt(this.timestampProducer), this.outboundStats[t] = I), null == I.timeToFirstFrame && (r.framesEncoded > 0 || (null !== (i = r.frameRateInput) && void 0 !== i ? i : 0) > 0) && (I.timeToFirstFrame = Math.max(0, e - I.startTime)), null != h && h >= 0 && this.videoEntropy.addSample(h);
        let T = n.find(e => e.ssrc === t);
        var i, o, l, c, d, _, m, g, E, v, b, y, O = !0;
        if (this.connection.context === a.Yn.STREAM) {
          var S = this.connection.getRemoteVideoSinkWants(t);
          (null == S || 0 === S) && (null == T ? void 0 : T.quality) === p && (S = this.connection.getRemoteVideoSinkWants("any")), O = (null != S ? S : 0) > 0
        }
        let N = this.videoStopped.value || !O;
        if (N !== I.isVideoStopped && I.setVideoStopped(N, f.Mq.SenderStopped), !N) {
          I.appendAndIncrementStats(f.z4.parseOutboundStats(r, e)), I.encoderCodec !== f.u7.UNKNOWN && u.add(I.encoderCodec);
          let t = null == T ? void 0 : T.maxBitrate;
          I.appendTargetRates(null == T ? void 0 : T.maxFrameRate, null !== (l = r.bitrateTarget) && void 0 !== l ? l : Math.min(null !== (o = s.availableOutgoingBitrate) && void 0 !== o ? o : 0, null != t ? t : 0), t, s.availableOutgoingBitrate), I.averageEncodeTime = null !== (c = r.averageEncodeTime) && void 0 !== c ? c : 0, I.framesDroppedRateLimiter = null !== (d = r.framesDroppedRateLimiter) && void 0 !== d ? d : null, I.framesDroppedEncoderQueue = null !== (_ = r.framesDroppedEncoderQueue) && void 0 !== _ ? _ : null, I.framesDroppedCongestionWindow = null !== (m = r.framesDroppedCongestionWindow) && void 0 !== m ? m : null, I.framesDroppedEncoder = null !== (g = r.framesDroppedEncoder) && void 0 !== g ? g : null, this.hqSimulcastStreamEncoded.value = null !== (E = r.hqSimulcastStreamEncoded) && void 0 !== E && E, this.lqSimulcastStreamEncoded.value = null !== (v = r.lqSimulcastStreamEncoded) && void 0 !== v && v, this.bothSimulcastStreamsEncoded.value = this.hqSimulcastStreamEncoded.value && this.lqSimulcastStreamEncoded.value, this.bandwidthLimitedResolution.value = null !== (b = r.bandwidthLimitedResolution) && void 0 !== b && b, this.bandwidthLimitedFramerate.value = null !== (y = r.bandwidthLimitedFrameRate) && void 0 !== y && y
        }
      }
    }), this.paused.value || i().forEach(t.rtp.inbound, (t, n) => {
      let r = t.find(e => "video" === e.type);
      if (null != r) {
        let t = this.inboundStats[n];
        null == t && (console.warn("Unknown inbound video stream for user: ".concat(n)), t = new f.m7(this.timestampProducer), this.inboundStats[n] = t);
        let i = f.z4.parseInboundStats(r, e);
        this.statCollectionPausedUsers.has(n) || (t.appendAndIncrementStats(i), t.appendTransportStats(s)), i.packets > 0 && this.emit("fps-update", n, i.framesCodec, i.timestamp), t.decoderCodec !== f.u7.UNKNOWN && d.add(t.decoderCodec), null == t.timeToFirstFrame && r.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime)
      }
    }), 0 !== u.size && 0 !== d.size && (E(u, d) ? this.symmetricCodecUpdates++ : this.asymmetricCodecUpdates++)
  }
  updateSystemResourceStats() {
    for (let e in this.outboundStats) this.outboundStats[e].addSystemResources();
    for (let e in this.inboundStats) this.inboundStats[e].addSystemResources()
  }
  updateVideoEffectStats(e) {
    let t = null == e ? void 0 : e.rtp.outbound.find(e => "video" === e.type);
    this.videoEffectDuration.value = (null == t ? void 0 : t.type) === "video" && null != t.filter
  }
  constructor(e, t = s.Z_) {
    super(), p(this, "connection", void 0), p(this, "timestampProducer", void 0), p(this, "networkQuality", void 0), p(this, "paused", void 0), p(this, "pausedCount", void 0), p(this, "zeroReceivers", void 0), p(this, "videoStopped", void 0), p(this, "videoEffectDuration", void 0), p(this, "hqSimulcastStreamEncoded", void 0), p(this, "lqSimulcastStreamEncoded", void 0), p(this, "bothSimulcastStreamsEncoded", void 0), p(this, "hqSimulcastStreamWatched", void 0), p(this, "lqSimulcastStreamWatched", void 0), p(this, "hqSimulcastStreamEligible", void 0), p(this, "lqSimulcastStreamEligible", void 0), p(this, "simulcastQualityChanges", void 0), p(this, "windowOccluded", void 0), p(this, "videoStoppedForOcclusion", void 0), p(this, "numWindowOcclusionChanges", void 0), p(this, "outboundStats", void 0), p(this, "inboundStats", void 0), p(this, "streamStart", void 0), p(this, "streamEnd", void 0), p(this, "symmetricCodecUpdates", void 0), p(this, "asymmetricCodecUpdates", void 0), p(this, "bandwidthLimitedFramerate", void 0), p(this, "bandwidthLimitedResolution", void 0), p(this, "videoEntropy", void 0), p(this, "statCollectionPausedUsers", void 0), p(this, "sampleStats", void 0), this.connection = e, this.timestampProducer = t, this.networkQuality = new d.Z, this.pausedCount = 0, this.simulcastQualityChanges = 0, this.numWindowOcclusionChanges = 0, this.outboundStats = {}, this.inboundStats = {}, this.symmetricCodecUpdates = 0, this.asymmetricCodecUpdates = 0, this.statCollectionPausedUsers = new Set, this.sampleStats = e => {
      if (null == e) return;
      let t = this.timestampProducer.now();
      if (this.networkQuality.incrementNetworkStats(t), this.updateSystemResourceStats(), this.updateVideoEffectStats(e), null == e) return;
      let n = this.connection.getStreamParameters();
      this.receivedStats(t, e, n)
    }, this.paused = new v(!1, t), this.zeroReceivers = new v(!1, t), this.videoStopped = new v(!1, t), this.videoEffectDuration = new v(!1, t), this.hqSimulcastStreamEncoded = new v(!1, t), this.lqSimulcastStreamEncoded = new v(!1, t), this.bothSimulcastStreamsEncoded = new v(!1, t), this.hqSimulcastStreamWatched = new v(!1, t), this.lqSimulcastStreamWatched = new v(!1, t), this.hqSimulcastStreamEligible = new v(!1, t), this.lqSimulcastStreamEligible = new v(!1, t), this.windowOccluded = new v(!1, t), this.videoStoppedForOcclusion = new v(!1, t), this.bandwidthLimitedFramerate = new v(!1, t), this.bandwidthLimitedResolution = new v(!1, t), this.videoEntropy = new u.b
  }
}