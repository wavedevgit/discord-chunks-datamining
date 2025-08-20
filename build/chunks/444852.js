/** Chunk was on web.js **/
/** chunk id: 444852, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => B,
  Z: () => Z
}), require("./539854.js"), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk46973 = require("./46973.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk861687 = require("./861687.js"),
  Chunk437263 = require("./437263.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk631053 = require("./631053.js"),
  Chunk581567 = require("./581567.js"),
  Chunk594190 = require("./594190.js"),
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

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let M = 10,
  k = 15e5,
  U = 15e5,
  G = 5 * Chunk70956.Z.Millis.SECOND;
class B {
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
    D(this, "streamRegion", true), D(this, "streamApplication", true), D(this, "streamSourceType", true), D(this, "actionContext", true), D(this, "maxViewers", true), D(this, "nativePickerStyleUsed", true), D(this, "startTime", true), D(this, "endTime", true), D(this, "goLiveModalDurationMs", true), D(this, "numViewers", true), D(this, "analyticsLocations", true), this.streamRegion = e, this.streamApplication = t, this.streamSourceType = n, this.actionContext = r, this.maxViewers = i, this.goLiveModalDurationMs = a, this.numViewers = i, this.analyticsLocations = null != o ? o : []
  }
}
class Z extends Chunk861687.Z {
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
        avg_fps: Chunk846519,
        avg_resolution: Chunk570140,
        inbound_bitrate_estimate_percentile99: Chunk861687
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
      null != e && e < 1e8 && (this.bandwidthSamples.push(e), this.bandwidthSamples.length > M && this.bandwidthSamples.shift(), this.bandwidthSamples.length === M && ((p = i().mean(this.bandwidthSamples)) > U ? g = "HQ" : p < k && (g = "LQ")))
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
      if (s.Z.dispatch(j(x({
          type: "RTC_CONNECTION_STATE",
          state: e
        }, t, n), {
          streamKey: this.streamKey
        })), e === P.hes.RTC_CONNECTED) {
        var r, i, o, l, c, u;
        null == (r = this._connection) || r.on(a.Sh.ScreenshareFinish, (e, t, n, r, i, a, o, s, l, c, u, d, f, h, m, g) => {
          let E = this.getMediaSessionId(),
            b = this.getRTCConnectionId(),
            y = this.getGoLiveSource();
          (0, v.q)().then(O => {
            var v, T, S;
            let A = null;
            if (null != O) {
              let {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: r,
                gpu_memory: i
              } = O;
              A = {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: r,
                gpu_memory: i
              }
            }
            let C = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != r ? r : 0) + (null != i ? i : 0) + (null != a ? a : 0) + (null != c ? c : 0) + (null != g ? g : 0) + (null != m ? m : 0),
              N = (null == y || null == (v = y.desktopSource) ? true : v.sourcePid) != null ? p.ZP.getGameForPID(y.desktopSource.sourcePid) : null,
              {
                gameName: R,
                gameId: D,
                exe: L,
                distributor: j
              } = (0, _.G8)(N);
            I.default.track(P.rMx.SCREENSHARE_FINISHED, x({
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
              screencapturekit_frames: g,
              go_live_camera_frames: m,
              total_frames: C,
              desktop_capturer_type: u,
              media_session_id: E,
              rtc_connection_id: b,
              context: w.Yn.STREAM,
              screens: d,
              windows: f,
              activity: h,
              soundshare_session: null != (S = null == y || null == (T = y.desktopSource) ? true : T.soundshareSession) ? S : true,
              share_game_name: R,
              share_game_id: D,
              share_game_exe: L,
              share_game_distributor: j,
              picker_type_used: null != this.analyticsContext.nativePickerStyleUsed ? "native" : "internal",
              duration: this.analyticsContext.getDuration()
            }, A))
          })
        }), null == (i = this._connection) || i.on(a.Sh.SoundshareAttached, () => {
          let e = this.getGoLiveSource();
          (null == e ? true : e.desktopSource) != null && I.default.track(P.rMx.SOUNDSHARE_ATTACHED, x({}, (0, N.Z)(null == e ? true : e.desktopSource), this.getSoundshareAnalyticsProperties()))
        }), null == (o = this._connection) || o.on(a.Sh.SoundshareFailed, e => {
          let {
            failureCode: t,
            failureReason: n,
            willRetry: r
          } = e, i = this.getGoLiveSource();
          this.reportSoundshareFailure(null == i ? true : i.desktopSource, t, n, r)
        }), null == (l = this._connection) || l.on(a.Sh.SoundshareSpeaking, () => {
          let e = this.getGoLiveSource();
          (null == e ? true : e.desktopSource) != null && (I.default.track(P.rMx.SOUNDSHARE_TRANSMITTING, x({}, (0, N.Z)(null == e ? true : e.desktopSource), this.getSoundshareAnalyticsProperties())), null != g.Z.getHookError(P.K3D.SOUND) && s.Z.dispatch({
            type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
          }))
        }), null == (c = this._connection) || c.on(a.Sh.SoundshareTrace, e => {
          let t = this.getGoLiveSource();
          switch (e.type) {
            case "soundshare_attach_requested":
              this.errorTimer.start(G, () => {
                s.Z.dispatch({
                  type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                  errorMessage: "Sound Hook Failed"
                })
              });
              break;
            case "soundshare_recv_failed":
              let n = e.reason,
                r = e.code,
                i = e.retry;
              (null == t ? true : t.desktopSource) != null && (this.reportSoundshareFailure(null == t ? true : t.desktopSource, r, n, i), i || (this.errorTimer.stop(), s.Z.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                errorMessage: n,
                errorCode: r
              })));
              break;
            case "soundshare_state_transition":
              4 === e.newState && (this.errorTimer.stop(), s.Z.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
              }))
          }
        }), null == (u = this._connection) || u.on(a.Sh.Destroy, () => {
          this.errorTimer.stop()
        })
      }
    }), this.on(Chunk437263.z.Video, (t, n, r, i, a) => {
      let o = (0, C.my)(this.streamKey);
      o.guildId === t && o.channelId === n && o.ownerId === r && (null == this.getMediaSessionId() || e || (this.trackVideoStartStats(), e = true), this.updateVideoStreamId(i, a))
    }), this.on(Chunk437263.z.VideoSourceQualityChanged, (e, t, n, r, i, a) => {
      var o;
      n === (null == (o = this._goLiveQualityManager) ? true : o.getUserID()) && (this.goliveCurrentMaxResolution = r), s.Z.dispatch({
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
      s.Z.dispatch({
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
    o && this.soundshareFailuresReported[a].add(t), (null == t || o) && I.default.track(P.rMx.SOUNDSHARE_FAILED, x({
      soundshare_failure_code: t,
      soundshare_failure_reason: n,
      soundshare_failure_will_retry: r
    }, (0, N.Z)(e), this.getSoundshareAnalyticsProperties()))
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
      guild_region: Chunk846519,
      participant_type: this.isOwner ? "streamer" : "receiver",
      share_application_name: Chunk570140,
      share_application_id: Chunk861687,
      share_application_executable: Chunk437263,
      share_application_distributor: Chunk924557,
      share_application_distributor_game_id: Chunk435064,
      share_application_game_metadata: Chunk631053,
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
    Chunk626135.default.track(Chunk981631.rMx.VIDEO_STREAM_STARTED, j(x({}, this.getStreamAnalyticsProperties(), module), {
      connection_type: Chunk866960.Z.getType(),
      effective_connection_speed: Chunk866960.Z.getEffectiveConnectionSpeed(),
      service_provider: Chunk866960.Z.getServiceProvider(),
      duration_go_live_modal: this.analyticsContext.goLiveModalDurationMs,
      source_location_stack: this.analyticsContext.analyticsLocations
    }))
  }
  trackVideoEndStats(e) {
    let t = m.Z.getChannel(this.channelId),
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
      l = (0, u.ln)(),
      c = d.Z.getSettings(),
      _ = this.isOwner ? {
        clips_enabled: c.clipsEnabled && l,
        clips_buffer_length: c.clipsLength
      } : {},
      p = this.isOwner ? {
        bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
      } : {};
    o.getOutboundStats().forEach(t => {
      var r;
      (null != (r = t.num_frames) ? r : 0) > 0 && I.default.track(P.rMx.VIDEO_STREAM_ENDED, j(x({}, a, i, s, this.videoStreamStats.getStats(), t, this._soundshareStats.getStats(), this.getStreamAnalyticsProperties(), _, p), {
        app_hardware_acceleration_enabled: T.Z.getAppHardwareAccelerationEnabled(),
        channel_type: n,
        reason: e,
        max_viewers: this.analyticsContext.maxViewers,
        hostname: this.hostname,
        hardware_enabled: E.Z.getHardwareEncoding(),
        device_performance_class: this.isOwner ? (0, f.Z)() : null,
        soundshare_experimental: E.Z.getExperimentalSoundshare()
      }))
    }), o.getInboundParticipants().forEach(t => {
      var r;
      let l = o.getInboundStats(t);
      (null != (r = null == l ? true : l.num_frames) ? r : 0) > 0 && I.default.track(P.rMx.VIDEO_STREAM_ENDED, j(x({}, a, i, s, this.videoStreamStats.getStats(), l, this._soundshareStats.getStats(), this.getStreamAnalyticsProperties(), _, p), {
        app_hardware_acceleration_enabled: T.Z.getAppHardwareAccelerationEnabled(),
        channel_type: n,
        reason: e,
        max_viewers: this.analyticsContext.maxViewers,
        hostname: this.hostname,
        hardware_enabled: E.Z.getHardwareEncoding(),
        device_performance_class: this.isOwner ? (0, f.Z)() : null
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
    isStreamer: l,
    parentMediaSessionId: c,
    channelId: u
  }) {
    let d = (0, C.my)(t),
      {
        guildId: f,
        channelId: _
      } = d;
    super({
      userId: h.default.getId(),
      sessionId: e,
      guildId: f,
      channelId: _,
      context: w.Yn.STREAM,
      streamServerId: n,
      streamChannelId: u,
      parentMediaSessionId: c,
      joinVoiceId: null
    }), D(this, "analyticsContext", true), D(this, "videoStreamStats", true), D(this, "streamContext", true), D(this, "streamKey", true), D(this, "isStreamer", true), D(this, "updateVideoStreamId", true), D(this, "bandwidthSamples", []), D(this, "goliveCurrentMaxResolution", true), D(this, "soundshareFailuresReported", {}), D(this, "errorTimer", new o.V7), this.streamContext = d, this.streamKey = t, this.isStreamer = l, this.videoStreamStats = new A.Z(r, this.isOwner), this.analyticsContext = a, this.updateVideoStreamId = i().debounce((e, t) => {
      let {
        guildId: n,
        channelId: r,
        ownerId: i
      } = (0, C.my)(this.streamKey);
      s.Z.dispatch({
        type: "RTC_CONNECTION_VIDEO",
        guildId: n,
        channelId: r,
        userId: i,
        streamId: e,
        rtcServerId: t,
        mediaEngineConnectionId: this.getMediaEngineConnectionId(),
        context: w.Yn.STREAM
      })
    }, 200), this.videoStreamStats.start(), this.initializeEvents()
  }
}