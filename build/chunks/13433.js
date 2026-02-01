/** Chunk was on web.js **/
/** chunk id: 13433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => H,
  t: () => B
}), require("./896048.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk205693 = require("./205693.js"),
  Chunk499979 = require("./499979.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk767065 = require("./767065.js"),
  Chunk507821 = require("./507821.js"),
  Chunk202460 = require("./202460.js"),
  Chunk274372 = require("./274372.js"),
  Chunk572164 = require("./572164.js"),
  Chunk680725 = require("./680725.js"),
  Chunk973522 = require("./973522.js"),
  Chunk929921 = require("./929921.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk877717 = require("./877717.js"),
  Chunk430452 = require("./430452.js"),
  Chunk544180 = require("./544180.js"),
  Chunk383501 = require("./383501.js"),
  Chunk873985 = require("./873985.js"),
  Chunk851581 = require("./851581.js"),
  Chunk954571 = require("./954571.js"),
  Chunk353835 = require("./353835.js"),
  Chunk927813 = require("./927813.js"),
  Chunk934560 = require("./934560.js"),
  Chunk652896 = require("./652896.js"),
  Chunk540305 = require("./540305.js"),
  Chunk6542 = require("./6542.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

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

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let U = 10,
  G = 15e5,
  V = 15e5,
  F = 5 * Chunk927813.A.Millis.SECOND;
class B {
  setActionContext(e) {
    this.actionContext = e
  }
  updateStreamApplication(e) {
    this.streamApplication = e, this.streamApplicationHistory = [...this.streamApplicationHistory, e]
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
  getStreamApplicationFromHistory(e) {
    return this.streamApplicationHistory[e]
  }
  getDuration() {
    var e;
    if (null == this.startTime) return null;
    let t = performance.now();
    return (null != (e = this.endTime) ? e : t) - this.startTime
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
    x(this, "streamRegion", true), x(this, "streamApplication", true), x(this, "streamApplicationHistory", true), x(this, "streamSourceType", true), x(this, "actionContext", true), x(this, "maxViewers", true), x(this, "nativePickerStyleUsed", true), x(this, "startTime", true), x(this, "endTime", true), x(this, "goLiveModalDurationMs", true), x(this, "numViewers", true), x(this, "analyticsLocations", true), this.streamRegion = e, this.streamApplication = t, this.streamApplicationHistory = [t], this.streamSourceType = n, this.actionContext = r, this.maxViewers = i, this.goLiveModalDurationMs = a, this.numViewers = i, this.analyticsLocations = null != o ? o : []
  }
}
class H extends Chunk767065.A {
  get isOwner() {
    let {
      ownerId: e
    } = this.streamContext;
    return g.default.getId() === e
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
  autoQualityChange() {
    this.videoStreamStats.autoQualityChange()
  }
  getVideoStats() {
    let {
      ownerId: e
    } = this.streamContext, t = this._videoQuality;
    if (null != t) {
      var n, r;
      let {
        duration: i,
        avg_bitrate: a,
        avg_fps: o,
        avg_resolution: s,
        inbound_bitrate_estimate_percentile99: l
      } = this.isOwner ? null != (n = t.getOutboundStats()[0]) ? n : {} : null != (r = t.getInboundStats(e)) ? r : {};
      return {
        duration: i,
        avg_bitrate: a,
        avg_fps: o,
        avg_resolution: s,
        inbound_bitrate_estimate_percentile99: l
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
    var t, n, r, a, o, s, l, c, u, d, f, p;
    let _, h = !this.isOwner && (null == (n = this._goLiveQualityManager) ? true : n.getUserID()) != null,
      m = true !== this.goliveCurrentMaxResolution && (this.goliveCurrentMaxResolution.height > 720 || 0 === this.goliveCurrentMaxResolution.height),
      g = "unknown",
      E = null == (r = e.find(e => {
        var t;
        return e.mediaEngineConnectionId === (null == (t = this._connection) ? true : t.mediaEngineConnectionId)
      })) ? true : r.stats;
    if (null != E && h) {
      let e = E.transport.inboundBitrateEstimate;
      null != e && e < 1e8 && (this.bandwidthSamples.push(e), this.bandwidthSamples.length > U && this.bandwidthSamples.shift(), this.bandwidthSamples.length === U && ((_ = i().mean(this.bandwidthSamples)) > V ? g = "HQ" : _ < G && (g = "LQ")))
    }
    let y = null != (t = null == (a = this._goLiveQualityManager) ? true : a.isDowngraded()) && t;
    if ("HQ" === g && y ? (this.logger.info("Attempting to upgrade to HQ simulcast stream, bandwidth estimate: ".concat(_)), null == (o = this._goLiveQualityManager) || o.setGoLiveStreamDowngraded(false)) : "LQ" === g && !y && m && (this.logger.info("Attempting to downgrade to LQ simulcast stream, bandwidth estimate: ".concat(_)), null == (s = this._goLiveQualityManager) || s.setGoLiveStreamDowngraded(true)), h) {
      let e = !(null == (c = this._goLiveQualityManager) ? true : c.senderSupportsSimulcast()) || (null == (u = this._goLiveQualityManager) ? true : u.isDowngraded()) === false;
      null == (d = this._videoQuality) || d.setViewedSimulcastQuality(e);
      let t = null != (l = null == (f = this._goLiveQualityManager) ? true : f.isOneToOneCall()) && l,
        n = m && "LQ" === g && !t;
      null == (p = this._videoQuality) || p.setEligibleSimulcastQuality(!n)
    }
  }
  initializeEvents() {
    let e = false;
    this.on(u.q.State, (e, t, n) => {
      if (l.h.dispatch(k(M({
          type: "RTC_CONNECTION_STATE",
          state: e
        }, t, n), {
          streamKey: this.streamKey
        })), e === D.S7L.RTC_CONNECTED) {
        var r, i, s, c, u, d, f, p;
        null == (r = this._connection) || r.on(a.yq.ScreenshareFinish, (e, t, n, r, i, a, o, s, l, c, u, d, f, p, _, m, g, E, y) => {
          let b = this.analyticsContext.getStreamApplicationFromHistory(this.screenshareFinishedCount);
          this.screenshareFinishedCount++;
          let {
            gameName: O,
            gameId: v,
            exe: A,
            distributor: T
          } = (0, h.wH)(b), C = this.getMediaSessionId(), N = this.getRTCConnectionId();
          (0, I.w)().then(h => {
            let b = null;
            if (null != h) {
              let {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: r,
                gpu_memory: i
              } = h;
              b = {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: r,
                gpu_memory: i
              }
            }
            let I = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != r ? r : 0) + (null != i ? i : 0) + (null != a ? a : 0) + (null != _ ? _ : 0) + (null != y ? y : 0) + (null != E ? E : 0),
              w = (null != c ? c : 0) + (null != u ? u : 0) + (null != d ? d : 0) + (null != f ? f : 0) + (null != p ? p : 0);
            S.default.track(D.HAw.SCREENSHARE_FINISHED, M({
              screenshare_frames: e,
              videohook_frames: t,
              hybrid_dxgi_frames: n,
              hybrid_gdi_frames: r,
              hybrid_videohook_frames: i,
              hybrid_graphics_capture_frames: a,
              hybrid_capture_method_switches: o,
              hybrid_gdi_bitblt_frames: s,
              hybrid_gdi_printwindow_frames: l,
              hybrid_graphics_capture_frames_unique: c,
              hybrid_dxgi_frames_unique: u,
              hybrid_videohook_frames_unique: d,
              hybrid_gdi_bitblt_frames_unique: f,
              hybrid_gdi_printwindow_frames_unique: p,
              quartz_frames: _,
              screencapturekit_frames: y,
              go_live_camera_frames: E,
              total_frames: I,
              total_frames_unique: w,
              desktop_capturer_type: m,
              media_session_id: C,
              rtc_connection_id: N,
              context: L.x.STREAM,
              activity: g,
              soundshare_session: this.soundshareStats.getStats().soundshare_last_session,
              picker_type_used: null != this.analyticsContext.nativePickerStyleUsed ? "native" : "internal",
              duration: this.analyticsContext.getDuration(),
              share_game_name: O,
              share_game_id: v,
              share_game_exe: A,
              share_game_distributor: T
            }, b))
          })
        }), null == (i = this._connection) || i.on(a.yq.SoundshareAttached, () => {
          let e = b.A.getGoLiveSource();
          (null == e ? true : e.desktopSource) != null && S.default.track(D.HAw.SOUNDSHARE_ATTACHED, M({}, (0, R.A)(null == e ? true : e.desktopSource), this.getSoundshareAnalyticsProperties()))
        }), null == (s = this._connection) || s.on(a.yq.SoundshareFailed, e => {
          let {
            failureCode: t,
            failureReason: n,
            willRetry: r
          } = e, i = b.A.getGoLiveSource();
          this.reportSoundshareFailure(null == i ? true : i.desktopSource, t, n, r)
        }), null == (c = this._connection) || c.on(a.yq.SoundshareSpeaking, () => {
          let e = b.A.getGoLiveSource();
          (null == e ? true : e.desktopSource) != null && (S.default.track(D.HAw.SOUNDSHARE_TRANSMITTING, M({}, (0, R.A)(null == e ? true : e.desktopSource), this.getSoundshareAnalyticsProperties())), null != y.A.getHookError(D.LU7.SOUND) && l.h.dispatch({
            type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
          }))
        }), null == (u = this._connection) || u.on(a.yq.SoundshareTrace, e => {
          var t;
          let n = b.A.getGoLiveSource();
          switch (this.soundshareStats.traceEvent(null == n || null == (t = n.desktopSource) ? true : t.soundshareSession, e), e.type) {
            case "soundshare_attach_requested":
              this.errorTimer.start(F, () => {
                l.h.dispatch({
                  type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                  errorMessage: "Sound Hook Failed"
                })
              });
              break;
            case "soundshare_recv_failed":
              let r = e.reason,
                i = e.code,
                a = e.retry;
              (null == n ? true : n.desktopSource) != null && (this.reportSoundshareFailure(null == n ? true : n.desktopSource, i, r, a), a || (this.errorTimer.stop(), l.h.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                errorMessage: r,
                errorCode: i
              })));
              break;
            case "soundshare_state_transition":
              4 === e.newState && (this.errorTimer.stop(), l.h.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
              }))
          }
        }), null == (d = this._connection) || d.on(a.yq.FirstFrameStats, e => {
          if (this._firstFrameDelivered) return;
          this._firstFrameDelivered = true;
          let t = this.getStreamAnalyticsProperties();
          S.default.track(D.HAw.RECEIVER_FIRST_FRAME_DELIVERED, {
            guild_id: t.guild_id,
            channel_id: t.channel_id,
            rtc_connection_id: t.rtc_connection_id,
            media_session_id: t.media_session_id,
            parent_media_session_id: t.parent_media_session_id,
            num_viewers: this.analyticsContext.numViewers,
            time_connected_to_first_frame_delivered: this.getDuration(),
            time_total_to_first_frame: (0, o.tB)() - this.getCreatedTime(),
            time_remote_user_to_video_stream_created: true !== e.remoteVideoStreamCreatedTimestamp && true !== e.remoteUserCreatedTimestamp ? Number(e.remoteVideoStreamCreatedTimestamp - e.remoteUserCreatedTimestamp) : null,
            time_video_stream_created_to_video_data_received: true !== e.videoDataReceivedTimestamp && true !== e.remoteVideoStreamCreatedTimestamp ? Number(e.videoDataReceivedTimestamp - e.remoteVideoStreamCreatedTimestamp) : null,
            time_video_data_received_to_video_source_delivered_frame: true !== e.videoSourceDeliveredFrameTimestamp && true !== e.videoDataReceivedTimestamp ? Number(e.videoSourceDeliveredFrameTimestamp - e.videoDataReceivedTimestamp) : null,
            time_remote_user_to_mls_external_sender_updated: true !== e.updateMLSExternalSenderTimestamp && true !== e.remoteUserCreatedTimestamp ? Number(e.updateMLSExternalSenderTimestamp - e.remoteUserCreatedTimestamp) : null,
            time_remote_user_to_secure_frame_remote_key_ratchet_set: true !== e.setRemoteSecureFrameKeyRatchetTimestamp && true !== e.remoteUserCreatedTimestamp ? Number(e.setRemoteSecureFrameKeyRatchetTimestamp - e.remoteUserCreatedTimestamp) : null,
            time_remote_user_to_secure_frame_local_key_ratchet_set: true !== e.setLocalSecureFrameKeyRatchetTimestamp && true !== e.remoteUserCreatedTimestamp ? Number(e.setLocalSecureFrameKeyRatchetTimestamp - e.remoteUserCreatedTimestamp) : null,
            time_remote_user_to_first_frame_decrypted: true !== e.firstFrameDecryptedTimestamp && true !== e.remoteUserCreatedTimestamp ? Number(e.firstFrameDecryptedTimestamp - e.remoteUserCreatedTimestamp) : null
          })
        }), null == (f = this._connection) || f.on(a.yq.FirstFrameEncryptedStats, e => {
          let t = this.getStreamAnalyticsProperties();
          S.default.track(D.HAw.STREAMER_FIRST_FRAME_ENCRYPTED, {
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
        }), null == (p = this._connection) || p.on(a.yq.Destroy, () => {
          this.errorTimer.stop()
        })
      }
    }), this.on(u.q.Video, (t, n, r, i, a) => {
      let o = (0, w.Iy)(this.streamKey);
      o.guildId === t && o.channelId === n && o.ownerId === r && (null == this.getMediaSessionId() || e || (this.trackVideoStartStats(), e = true), this.updateVideoStreamId(i, a))
    }), this.on(u.q.VideoSourceQualityChanged, (e, t, n, r, i, a) => {
      var o;
      n === (null == (o = this._goLiveQualityManager) ? true : o.getUserID()) && (this.goliveCurrentMaxResolution = r), l.h.dispatch({
        type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
        guildId: e,
        channelId: t,
        senderUserId: n,
        maxResolution: r,
        maxFrameRate: i,
        context: a
      })
    }), this.on(u.q.SecureFramesUpdate, () => {
      l.h.dispatch({
        type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE"
      })
    }), this.on(u.q.RosterMapUpdate, e => {
      l.h.dispatch({
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
    o && this.soundshareFailuresReported[a].add(t), (null == t || o) && S.default.track(D.HAw.SOUNDSHARE_FAILED, M({
      soundshare_failure_code: t,
      soundshare_failure_reason: n,
      soundshare_failure_will_retry: r
    }, (0, R.A)(e), this.getSoundshareAnalyticsProperties()))
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
    } = this.streamContext, o = A.A.getRegion(v.A.getHostname()), {
      gameName: s,
      gameId: l,
      exe: c,
      distributor: u,
      sku: d,
      gameMetadata: f
    } = (0, h.wH)(t);
    return {
      channel_id: this.channelId,
      rtc_connection_id: this.getRTCConnectionId(),
      media_session_id: this.getMediaSessionId(),
      parent_media_session_id: this.parentMediaSessionId,
      sender_user_id: i,
      context: L.x.STREAM,
      guild_id: a,
      stream_region: e,
      stream_source_type: n,
      guild_region: o,
      participant_type: this.isOwner ? "streamer" : "receiver",
      share_application_name: s,
      share_application_id: l,
      share_application_executable: c,
      share_application_distributor: u,
      share_application_distributor_game_id: d,
      share_application_game_metadata: f,
      video_layout: this.videoStreamStats.getLayout(),
      client_event_source: r,
      voice_backend_version: this.voiceVersion,
      rtc_worker_backend_version: this.rtcWorkerVersion
    }
  }
  getSoundshareAnalyticsProperties() {
    return {
      rtc_connection_id: this.getRTCConnectionId(),
      soundshare_experimental: b.A.getExperimentalSoundshare()
    }
  }
  trackVideoStartStats() {
    let e = this.isOwner ? (0, P.A)() : null;
    S.default.track(D.HAw.VIDEO_STREAM_STARTED, k(M({}, this.getStreamAnalyticsProperties(), e), {
      connection_type: O.A.getType(),
      effective_connection_speed: O.A.getEffectiveConnectionSpeed(),
      service_provider: O.A.getServiceProvider(),
      duration_go_live_modal: this.analyticsContext.goLiveModalDurationMs,
      source_location_stack: this.analyticsContext.analyticsLocations
    }))
  }
  trackVideoEndStats(e) {
    let t = E.A.getChannel(this.channelId),
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
      l = f.A.getSettings(),
      c = this.isOwner ? {
        clips_enabled: (0, p.TD)(),
        clips_buffer_length: l.clipsLength
      } : {},
      u = this.isOwner ? {
        bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
      } : {};
    o.getOutboundStats().forEach(t => {
      var r;
      (null != (r = t.num_frames) ? r : 0) > 0 && S.default.track(D.HAw.VIDEO_STREAM_ENDED, k(M({}, a, i, s, this.videoStreamStats.getStats(), t, this.soundshareStats.getStats(), this.getStreamAnalyticsProperties(), c, u), {
        app_hardware_acceleration_enabled: T.A.getAppHardwareAccelerationEnabled(),
        channel_type: n,
        reason: e,
        max_viewers: this.analyticsContext.maxViewers,
        hostname: this.hostname,
        hardware_enabled: b.A.getHardwareEncoding(),
        device_performance_class: this.isOwner ? (0, _.A)() : null,
        soundshare_experimental: b.A.getExperimentalSoundshare(),
        quality_preset: m.A.getState().preset
      }))
    }), o.getInboundParticipants().forEach(t => {
      var r;
      let l = o.getInboundStats(t);
      (null != (r = null == l ? true : l.num_frames) ? r : 0) > 0 && S.default.track(D.HAw.VIDEO_STREAM_ENDED, k(M({}, a, i, s, this.videoStreamStats.getStats(), l, this.soundshareStats.getStats(), this.getStreamAnalyticsProperties(), c, u), {
        app_hardware_acceleration_enabled: T.A.getAppHardwareAccelerationEnabled(),
        channel_type: n,
        reason: e,
        max_viewers: this.analyticsContext.maxViewers,
        hostname: this.hostname,
        hardware_enabled: b.A.getHardwareEncoding(),
        device_performance_class: this.isOwner ? (0, _.A)() : null
      }))
    })
  }
  getExtraConnectionOptions() {
    return {
      streamUserId: (0, w.Iy)(this.streamKey).ownerId
    }
  }
  constructor({
    sessionId: e,
    streamKey: t,
    serverId: n,
    initialLayout: r,
    analyticsContext: a,
    parentMediaSessionId: o,
    channelId: c
  }) {
    const u = (0, w.Iy)(t),
      {
        guildId: f,
        channelId: p
      } = u;
    super({
      userId: g.default.getId(),
      sessionId: e,
      guildId: f,
      channelId: p,
      context: L.x.STREAM,
      streamServerId: n,
      streamChannelId: c,
      parentMediaSessionId: o,
      joinVoiceId: null
    }), x(this, "analyticsContext", true), x(this, "videoStreamStats", true), x(this, "streamContext", true), x(this, "streamKey", true), x(this, "soundshareStats", new d.A), x(this, "updateVideoStreamId", true), x(this, "bandwidthSamples", []), x(this, "goliveCurrentMaxResolution", true), x(this, "_firstFrameDelivered", false), x(this, "screenshareFinishedCount", 0), x(this, "soundshareFailuresReported", {}), x(this, "errorTimer", new s.Ep), this.streamContext = u, this.streamKey = t, this.videoStreamStats = new N.A(r, this.isOwner), this.analyticsContext = a, this.updateVideoStreamId = i().debounce((e, t) => {
      let {
        guildId: n,
        channelId: r,
        ownerId: i
      } = (0, w.Iy)(this.streamKey);
      l.h.dispatch({
        type: "RTC_CONNECTION_VIDEO",
        guildId: n,
        channelId: r,
        userId: i,
        streamId: e,
        rtcServerId: t,
        mediaEngineConnectionId: this.getMediaEngineConnectionId(),
        context: L.x.STREAM
      })
    }, 200), this.videoStreamStats.start(), this.initializeEvents()
  }
}