/** Chunk was on web.js **/
/** chunk id: 444852, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => F,
  Z: () => V
}), require("./539854.js"), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk46973 = require("./46973.js"),
  Chunk379649 = require("./379649.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk861687 = require("./861687.js"),
  Chunk437263 = require("./437263.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk631053 = require("./631053.js"),
  Chunk581567 = require("./581567.js"),
  Chunk594190 = require("./594190.js"),
  Chunk361291 = require("./361291.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk858340 = require("./858340.js"),
  Chunk131951 = require("./131951.js"),
  Chunk866960 = require("./866960.js"),
  Chunk19780 = require("./19780.js"),
  Chunk936349 = require("./936349.js"),
  Chunk704806 = require("./704806.js"),
  Chunk626135 = require("./626135.js"),
  Chunk12647 = require("./12647.js"),
  Chunk70956 = require("./70956.js"),
  Chunk756315 = require("./756315.js"),
  Chunk569545 = require("./569545.js"),
  Chunk502286 = require("./502286.js"),
  Chunk297733 = require("./297733.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let U = 10,
  G = 15e5,
  B = 15e5,
  Z = 5 * Chunk70956.Z.Millis.SECOND;
class F {
  setActionContext(e) {
    this.actionContext = e
  }
  setAnalyticsLocations(e) {
    this.analyticsLocations = e
  }
  trackViewerCount(e) {
    this.maxViewers = Math.max(e, this.maxViewers), this.numViewers = e
  }
  setNativePickerStyleUsed(e) {
    this.nativePickerStyleUsed = e
  }
  trackStart() {
    this.startTime = performance.now()
  }
  trackEnd() {
    this.endTime = performance.now()
  }
  getDuration() {
    var e;
    if (null == this.startTime) return null;
    let t = performance.now();
    return (null != (e = this.endTime) ? module : exports) - this.startTime
  }
  constructor({
    streamRegion: e,
    streamApplication: t,
    streamSourceType: n,
    actionContext: r,
    numViewers: i,
    goLiveModalDurationMs: a,
    analyticsLocations: o
  }) {
    x(this, "streamRegion", true), x(this, "streamApplication", true), x(this, "streamSourceType", true), x(this, "actionContext", true), x(this, "maxViewers", true), x(this, "nativePickerStyleUsed", true), x(this, "startTime", true), x(this, "endTime", true), x(this, "goLiveModalDurationMs", true), x(this, "numViewers", true), x(this, "analyticsLocations", true), this.streamRegion = e, this.streamApplication = t, this.streamSourceType = n, this.actionContext = r, this.maxViewers = i, this.goLiveModalDurationMs = a, this.numViewers = i, this.analyticsLocations = null != o ? o : []
  }
}
class V extends Chunk861687.Z {
  get isOwner() {
    let {
      ownerId: e
    } = this.streamContext;
    return Chunk314897.default.getId() === module
  }
  destroy(e) {
    this.videoStreamStats.stop(), this.trackVideoEndStats(e), this.updateVideoStreamId.cancel(), this.updateVideoStreamId(null, null), this.updateVideoStreamId.flush(), this.errorTimer.stop(), super.destroy()
  }
  streamUpdate(e) {
    let t = this._videoQuality;
    null != t && (e ? t.pause() : t.resume())
  }
  layoutChange(e) {
    this.videoStreamStats.layoutChange(e)
  }
  getVideoStats() {
    let {
      ownerId: e
    } = this.streamContext, t = this._videoQuality;
    if (null != exports) {
      var n, r;
      let {
        duration: i,
        avg_bitrate: a,
        avg_fps: o,
        avg_resolution: s,
        inbound_bitrate_estimate_percentile99: l
      } = this.isOwner ? null != (n = exports.getOutboundStats()[0]) ? require : {} : null != (r = exports.getInboundStats(module)) ? Chunk392711 : {};
      return {
        duration: i,
        avg_bitrate: Chunk46973,
        avg_fps: Chunk379649,
        avg_resolution: Chunk846519,
        inbound_bitrate_estimate_percentile99: Chunk570140
      }
    }
    return null
  }
  getRegion() {
    return this.analyticsContext.streamRegion
  }
  getMaxViewers() {
    return this.analyticsContext.maxViewers
  }
  getVoiceParticipantType() {
    return this.isOwner ? "streamer" : "receiver"
  }
  updateStats(e) {
    var t, n, r, a, o, s, l, c, u, d, f, _;
    let p, h = !this.isOwner && (null == (t = this._goLiveQualityManager) ? true : t.getUserID()) != null,
      m = true !== this.goliveCurrentMaxResolution && (this.goliveCurrentMaxResolution.height > 720 || 0 === this.goliveCurrentMaxResolution.height),
      g = "unknown",
      E = null == (n = e.find(e => {
        var t;
        return e.mediaEngineConnectionId === (null == (t = this._connection) ? true : t.mediaEngineConnectionId)
      })) ? true : n.stats;
    if (null != E && h) {
      let e = E.transport.inboundBitrateEstimate;
      null != e && e < 1e8 && (this.bandwidthSamples.push(e), this.bandwidthSamples.length > U && this.bandwidthSamples.shift(), this.bandwidthSamples.length === U && ((p = i().mean(this.bandwidthSamples)) > B ? g = "HQ" : p < G && (g = "LQ")))
    }
    let b = null != (a = null == (r = this._goLiveQualityManager) ? true : r.isDowngraded()) && a;
    if ("HQ" === g && b ? (this.logger.info("Attempting to upgrade to HQ simulcast stream, bandwidth estimate: ".concat(p)), null == (o = this._goLiveQualityManager) || o.setGoLiveStreamDowngraded(false)) : "LQ" === g && !b && m && (this.logger.info("Attempting to downgrade to LQ simulcast stream, bandwidth estimate: ".concat(p)), null == (s = this._goLiveQualityManager) || s.setGoLiveStreamDowngraded(true)), h) {
      let e = !(null == (l = this._goLiveQualityManager) ? true : l.senderSupportsSimulcast()) || (null == (c = this._goLiveQualityManager) ? true : c.isDowngraded()) === false;
      null == (u = this._videoQuality) || u.setViewedSimulcastQuality(e);
      let t = null != (_ = null == (d = this._goLiveQualityManager) ? true : d.isOneToOneCall()) && _,
        n = m && "LQ" === g && !t;
      null == (f = this._videoQuality) || f.setEligibleSimulcastQuality(!n)
    }
  }
  initializeEvents() {
    let e = false;
    this.on(Chunk437263.z.State, (e, t, n) => {
      if (l.Z.dispatch(j(M({
          type: "RTC_CONNECTION_STATE",
          state: e
        }, t, n), {
          streamKey: this.streamKey
        })), e === D.hes.RTC_CONNECTED) {
        var r, i, s, c, u, d, f, _;
        null == (r = this._connection) || r.on(a.Sh.ScreenshareFinish, (e, t, n, r, i, a, o, s, l, c, u, d, f, _) => {
          let m = this.getMediaSessionId(),
            g = this.getRTCConnectionId(),
            E = this.getGoLiveSource();
          (0, S.q)().then(b => {
            var y, O, v;
            let I = null;
            if (null != b) {
              let {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: r,
                gpu_memory: i
              } = b;
              I = {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: r,
                gpu_memory: i
              }
            }
            let S = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != r ? r : 0) + (null != i ? i : 0) + (null != a ? a : 0) + (null != c ? c : 0) + (null != _ ? _ : 0) + (null != f ? f : 0),
              A = (null == E || null == (y = E.desktopSource) ? true : y.sourcePid) != null ? h.ZP.getGameForPID(E.desktopSource.sourcePid) : null,
              {
                gameName: C,
                gameId: N,
                exe: R,
                distributor: P
              } = (0, p.G8)(A);
            T.default.track(D.rMx.SCREENSHARE_FINISHED, M({
              screenshare_frames: e,
              videohook_frames: t,
              hybrid_dxgi_frames: n,
              hybrid_gdi_frames: r,
              hybrid_videohook_frames: i,
              hybrid_graphics_capture_frames: a,
              hybrid_capture_method_switches: o,
              hybrid_gdi_bitblt_frames: s,
              hybrid_gdi_printwindow_frames: l,
              quartz_frames: c,
              screencapturekit_frames: _,
              go_live_camera_frames: f,
              total_frames: S,
              desktop_capturer_type: u,
              media_session_id: m,
              rtc_connection_id: g,
              context: L.Yn.STREAM,
              activity: d,
              soundshare_session: null != (v = null == E || null == (O = E.desktopSource) ? true : O.soundshareSession) ? v : true,
              share_game_name: C,
              share_game_id: N,
              share_game_exe: R,
              share_game_distributor: P,
              picker_type_used: null != this.analyticsContext.nativePickerStyleUsed ? "native" : "internal",
              duration: this.analyticsContext.getDuration()
            }, I))
          })
        }), null == (i = this._connection) || i.on(a.Sh.SoundshareAttached, () => {
          let e = this.getGoLiveSource();
          (null == e ? true : e.desktopSource) != null && T.default.track(D.rMx.SOUNDSHARE_ATTACHED, M({}, (0, P.Z)(null == e ? true : e.desktopSource), this.getSoundshareAnalyticsProperties()))
        }), null == (s = this._connection) || s.on(a.Sh.SoundshareFailed, e => {
          let {
            failureCode: t,
            failureReason: n,
            willRetry: r
          } = e, i = this.getGoLiveSource();
          this.reportSoundshareFailure(null == i ? true : i.desktopSource, t, n, r)
        }), null == (c = this._connection) || c.on(a.Sh.SoundshareSpeaking, () => {
          let e = this.getGoLiveSource();
          (null == e ? true : e.desktopSource) != null && (T.default.track(D.rMx.SOUNDSHARE_TRANSMITTING, M({}, (0, P.Z)(null == e ? true : e.desktopSource), this.getSoundshareAnalyticsProperties())), null != b.Z.getHookError(D.K3D.SOUND) && l.Z.dispatch({
            type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
          }))
        }), null == (u = this._connection) || u.on(a.Sh.SoundshareTrace, e => {
          let t = this.getGoLiveSource();
          switch (e.type) {
            case "soundshare_attach_requested":
              this.errorTimer.start(Z, () => {
                l.Z.dispatch({
                  type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                  errorMessage: "Sound Hook Failed"
                })
              });
              break;
            case "soundshare_recv_failed":
              let n = e.reason,
                r = e.code,
                i = e.retry;
              (null == t ? true : t.desktopSource) != null && (this.reportSoundshareFailure(null == t ? true : t.desktopSource, r, n, i), i || (this.errorTimer.stop(), l.Z.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                errorMessage: n,
                errorCode: r
              })));
              break;
            case "soundshare_state_transition":
              4 === e.newState && (this.errorTimer.stop(), l.Z.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
              }))
          }
        }), null == (d = this._connection) || d.on(a.Sh.FirstFrameStats, e => {
          if (this._firstFrameDelivered) return;
          this._firstFrameDelivered = true;
          let t = this.getStreamAnalyticsProperties();
          T.default.track(D.rMx.RECEIVER_FIRST_FRAME_DELIVERED, {
            guild_id: t.guild_id,
            channel_id: t.channel_id,
            rtc_connection_id: t.rtc_connection_id,
            media_session_id: t.media_session_id,
            parent_media_session_id: t.parent_media_session_id,
            num_viewers: this.analyticsContext.numViewers,
            time_connected_to_first_frame_delivered: this.getDuration(),
            time_total_to_first_frame: (0, o.zO)() - this.getCreatedTime(),
            time_remote_user_to_video_stream_created: true !== e.remoteVideoStreamCreatedTimestamp && true !== e.remoteUserCreatedTimestamp ? Number(e.remoteVideoStreamCreatedTimestamp - e.remoteUserCreatedTimestamp) : null,
            time_video_stream_created_to_video_data_received: true !== e.videoDataReceivedTimestamp && true !== e.remoteVideoStreamCreatedTimestamp ? Number(e.videoDataReceivedTimestamp - e.remoteVideoStreamCreatedTimestamp) : null,
            time_video_data_received_to_video_source_delivered_frame: true !== e.videoSourceDeliveredFrameTimestamp && true !== e.videoDataReceivedTimestamp ? Number(e.videoSourceDeliveredFrameTimestamp - e.videoDataReceivedTimestamp) : null,
            time_remote_user_to_mls_external_sender_updated: true !== e.updateMLSExternalSenderTimestamp && true !== e.remoteUserCreatedTimestamp ? Number(e.updateMLSExternalSenderTimestamp - e.remoteUserCreatedTimestamp) : null,
            time_remote_user_to_secure_frame_remote_key_ratchet_set: true !== e.setRemoteSecureFrameKeyRatchetTimestamp && true !== e.remoteUserCreatedTimestamp ? Number(e.setRemoteSecureFrameKeyRatchetTimestamp - e.remoteUserCreatedTimestamp) : null,
            time_remote_user_to_secure_frame_local_key_ratchet_set: true !== e.setLocalSecureFrameKeyRatchetTimestamp && true !== e.remoteUserCreatedTimestamp ? Number(e.setLocalSecureFrameKeyRatchetTimestamp - e.remoteUserCreatedTimestamp) : null,
            time_remote_user_to_first_frame_decrypted: true !== e.firstFrameDecryptedTimestamp && true !== e.remoteUserCreatedTimestamp ? Number(e.firstFrameDecryptedTimestamp - e.remoteUserCreatedTimestamp) : null
          })
        }), null == (f = this._connection) || f.on(a.Sh.FirstFrameEncryptedStats, e => {
          let t = this.getStreamAnalyticsProperties();
          T.default.track(D.rMx.STREAMER_FIRST_FRAME_ENCRYPTED, {
            guild_id: t.guild_id,
            channel_id: t.channel_id,
            rtc_connection_id: t.rtc_connection_id,
            media_session_id: t.media_session_id,
            parent_media_session_id: t.parent_media_session_id,
            time_local_user_to_video_receivers_set: true !== e.videoReceiversSetTimestamp && true !== e.localUserCreatedTimestamp ? Number(e.videoReceiversSetTimestamp - e.localUserCreatedTimestamp) : null,
            time_local_user_to_mls_external_sender_updated: true !== e.updateMLSExternalSenderTimestamp && true !== e.localUserCreatedTimestamp ? Number(e.updateMLSExternalSenderTimestamp - e.localUserCreatedTimestamp) : null,
            time_local_user_to_secure_frame_remote_key_ratchet_set: true !== e.setRemoteSecureFrameKeyRatchetTimestamp && true !== e.localUserCreatedTimestamp ? Number(e.setRemoteSecureFrameKeyRatchetTimestamp - e.localUserCreatedTimestamp) : null,
            time_local_user_to_secure_frame_local_key_ratchet_set: true !== e.setLocalSecureFrameKeyRatchetTimestamp && true !== e.localUserCreatedTimestamp ? Number(e.setLocalSecureFrameKeyRatchetTimestamp - e.localUserCreatedTimestamp) : null,
            time_local_user_to_first_frame_encrypted: true !== e.firstFrameEncryptedTimestamp && true !== e.localUserCreatedTimestamp ? Number(e.firstFrameEncryptedTimestamp - e.localUserCreatedTimestamp) : null
          })
        }), null == (_ = this._connection) || _.on(a.Sh.Destroy, () => {
          this.errorTimer.stop()
        })
      }
    }), this.on(Chunk437263.z.Video, (t, n, r, i, a) => {
      let o = (0, R.my)(this.streamKey);
      o.guildId === t && o.channelId === n && o.ownerId === r && (null == this.getMediaSessionId() || e || (this.trackVideoStartStats(), e = true), this.updateVideoStreamId(i, a))
    }), this.on(Chunk437263.z.VideoSourceQualityChanged, (e, t, n, r, i, a) => {
      var o;
      n === (null == (o = this._goLiveQualityManager) ? true : o.getUserID()) && (this.goliveCurrentMaxResolution = r), l.Z.dispatch({
        type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
        guildId: e,
        channelId: t,
        senderUserId: n,
        maxResolution: r,
        maxFrameRate: i,
        context: a
      })
    }), this.on(Chunk437263.z.SecureFramesUpdate, () => {
      Chunk570140.Z.dispatch({
        type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE"
      })
    }), this.on(Chunk437263.z.RosterMapUpdate, e => {
      l.Z.dispatch({
        type: "RTC_CONNECTION_ROSTER_MAP_UPDATE",
        userIds: e
      })
    })
  }
  reportSoundshareFailure(e, t, n, r) {
    var i;
    let a = null != (i = null == e ? true : e.soundshareSession) ? i : "";
    null == this.soundshareFailuresReported[a] && (this.soundshareFailuresReported[a] = new Set);
    let o = null != t && !this.soundshareFailuresReported[a].has(t);
    o && this.soundshareFailuresReported[a].add(t), (null == t || o) && T.default.track(D.rMx.SOUNDSHARE_FAILED, M({
      soundshare_failure_code: t,
      soundshare_failure_reason: n,
      soundshare_failure_will_retry: r
    }, (0, P.Z)(e), this.getSoundshareAnalyticsProperties()))
  }
  getStreamAnalyticsProperties() {
    let {
      streamRegion: e,
      streamApplication: t,
      streamSourceType: n,
      actionContext: r
    } = this.analyticsContext, {
      ownerId: i,
      guildId: a
    } = this.streamContext, o = Chunk936349.Z.getRegion(Chunk19780.Z.getHostname()), {
      gameName: s,
      gameId: l,
      exe: c,
      distributor: u,
      sku: d,
      gameMetadata: f
    } = (0, Chunk581567.G8)(exports);
    return {
      channel_id: this.channelId,
      rtc_connection_id: this.getRTCConnectionId(),
      media_session_id: this.getMediaSessionId(),
      parent_media_session_id: this.parentMediaSessionId,
      sender_user_id: i,
      context: Chunk65154.Yn.STREAM,
      guild_id: Chunk46973,
      stream_region: module,
      stream_source_type: require,
      guild_region: Chunk379649,
      participant_type: this.isOwner ? "streamer" : "receiver",
      share_application_name: Chunk846519,
      share_application_id: Chunk570140,
      share_application_executable: Chunk861687,
      share_application_distributor: Chunk437263,
      share_application_distributor_game_id: Chunk924557,
      share_application_game_metadata: Chunk435064,
      video_layout: this.videoStreamStats.getLayout(),
      client_event_source: Chunk392711,
      voice_backend_version: this.voiceVersion,
      rtc_worker_backend_version: this.rtcWorkerVersion
    }
  }
  getSoundshareAnalyticsProperties() {
    return {
      rtc_connection_id: this.getRTCConnectionId(),
      soundshare_experimental: Chunk131951.Z.getExperimentalSoundshare()
    }
  }
  trackVideoStartStats() {
    let e = this.isOwner ? (0, Chunk297733.Z)() : null;
    Chunk626135.default.track(Chunk981631.rMx.VIDEO_STREAM_STARTED, j(M({}, this.getStreamAnalyticsProperties(), module), {
      connection_type: Chunk866960.Z.getType(),
      effective_connection_speed: Chunk866960.Z.getEffectiveConnectionSpeed(),
      service_provider: Chunk866960.Z.getServiceProvider(),
      duration_go_live_modal: this.analyticsContext.goLiveModalDurationMs,
      source_location_stack: this.analyticsContext.analyticsLocations
    }))
  }
  trackVideoEndStats(e) {
    let t = E.Z.getChannel(this.channelId),
      n = null != t ? t.type : null,
      {
        ownerId: r
      } = this.streamContext,
      i = null,
      a = null,
      o = this._videoQuality;
    if (null == o) return;
    i = o.getNetworkStats(), a = this.isOwner ? o.getCodecUsageStats("streamer", this.userId) : o.getCodecUsageStats("receiver", r);
    let s = null,
      l = (0, d.ln)(),
      c = f.Z.getSettings(),
      u = this.isOwner ? {
        clips_enabled: c.clipsEnabled && l,
        clips_buffer_length: c.clipsLength
      } : {},
      p = this.isOwner ? {
        bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
      } : {};
    o.getOutboundStats().forEach(t => {
      var r;
      (null != (r = t.num_frames) ? r : 0) > 0 && T.default.track(D.rMx.VIDEO_STREAM_ENDED, j(M({}, a, i, s, this.videoStreamStats.getStats(), t, this._soundshareStats.getStats(), this.getStreamAnalyticsProperties(), u, p), {
        app_hardware_acceleration_enabled: A.Z.getAppHardwareAccelerationEnabled(),
        channel_type: n,
        reason: e,
        max_viewers: this.analyticsContext.maxViewers,
        hostname: this.hostname,
        hardware_enabled: y.Z.getHardwareEncoding(),
        device_performance_class: this.isOwner ? (0, _.Z)() : null,
        soundshare_experimental: y.Z.getExperimentalSoundshare(),
        quality_preset: m.Z.getState().preset
      }))
    }), o.getInboundParticipants().forEach(t => {
      var r;
      let l = o.getInboundStats(t);
      (null != (r = null == l ? true : l.num_frames) ? r : 0) > 0 && T.default.track(D.rMx.VIDEO_STREAM_ENDED, j(M({}, a, i, s, this.videoStreamStats.getStats(), l, this._soundshareStats.getStats(), this.getStreamAnalyticsProperties(), u, p), {
        app_hardware_acceleration_enabled: A.Z.getAppHardwareAccelerationEnabled(),
        channel_type: n,
        reason: e,
        max_viewers: this.analyticsContext.maxViewers,
        hostname: this.hostname,
        hardware_enabled: y.Z.getHardwareEncoding(),
        device_performance_class: this.isOwner ? (0, _.Z)() : null
      }))
    })
  }
  getExtraConnectionOptions() {
    return {
      streamUserId: (0, Chunk569545.my)(this.streamKey).ownerId
    }
  }
  constructor({
    sessionId: e,
    streamKey: t,
    serverId: n,
    initialLayout: r,
    analyticsContext: a,
    isStreamer: o,
    parentMediaSessionId: c,
    channelId: u
  }) {
    let d = (0, R.my)(t),
      {
        guildId: f,
        channelId: _
      } = d;
    super({
      userId: g.default.getId(),
      sessionId: e,
      guildId: f,
      channelId: _,
      context: L.Yn.STREAM,
      streamServerId: n,
      streamChannelId: u,
      parentMediaSessionId: c,
      joinVoiceId: null
    }), x(this, "analyticsContext", true), x(this, "videoStreamStats", true), x(this, "streamContext", true), x(this, "streamKey", true), x(this, "isStreamer", true), x(this, "updateVideoStreamId", true), x(this, "bandwidthSamples", []), x(this, "goliveCurrentMaxResolution", true), x(this, "_firstFrameDelivered", false), x(this, "soundshareFailuresReported", {}), x(this, "errorTimer", new s.V7), this.streamContext = d, this.streamKey = t, this.isStreamer = o, this.videoStreamStats = new N.Z(r, this.isOwner), this.analyticsContext = a, this.updateVideoStreamId = i().debounce((e, t) => {
      let {
        guildId: n,
        channelId: r,
        ownerId: i
      } = (0, R.my)(this.streamKey);
      l.Z.dispatch({
        type: "RTC_CONNECTION_VIDEO",
        guildId: n,
        channelId: r,
        userId: i,
        streamId: e,
        rtcServerId: t,
        mediaEngineConnectionId: this.getMediaEngineConnectionId(),
        context: L.Yn.STREAM
      })
    }, 200), this.videoStreamStats.start(), this.initializeEvents()
  }
}