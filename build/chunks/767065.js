/** Chunk was on web.js **/
/** chunk id: 767065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eR
}), require("./747238.js"), require("./321073.js"), require("./896048.js"), require("./457529.js"), require("./65821.js"), require("./492834.js");
var Chunk824120 = require("./824120.js"),
  i = require.n(Chunk824120),
  Chunk111956 = require("./111956.js"),
  s = require.n(Chunk111956),
  Chunk181370 = require("./181370.js"),
  l = require.n(Chunk181370),
  Chunk835245 = require("./835245.js"),
  Chunk158390 = require("./158390.js"),
  Chunk665260 = require("./665260.js"),
  Chunk972347 = require("./972347.js"),
  Chunk205693 = require("./205693.js"),
  Chunk499979 = require("./499979.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk827343 = require("./827343.js"),
  Chunk233545 = require("./233545.js"),
  Chunk894539 = require("./894539.js"),
  Chunk124838 = require("./124838.js"),
  Chunk626584 = require("./626584.js"),
  Chunk655087 = require("./655087.js"),
  Chunk680725 = require("./680725.js"),
  Chunk892038 = require("./892038.js"),
  Chunk461285 = require("./461285.js"),
  Chunk641967 = require("./641967.js"),
  Chunk747809 = require("./747809.js"),
  Chunk835498 = require("./835498.js"),
  Chunk525286 = require("./525286.js"),
  Chunk624694 = require("./624694.js"),
  Chunk204912 = require("./204912.js"),
  Chunk226210 = require("./226210.js"),
  Chunk276006 = require("./276006.js"),
  Chunk559633 = require("./559633.js"),
  Chunk714763 = require("./714763.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk412780 = require("./412780.js"),
  Chunk873985 = require("./873985.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk353835 = require("./353835.js"),
  Chunk209489 = require("./209489.js"),
  Chunk723702 = require("./723702.js"),
  Chunk728458 = require("./728458.js"),
  Chunk998218 = require("./998218.js"),
  Chunk77729 = require("./77729.js"),
  Chunk257506 = require("./257506.js"),
  Chunk507821 = require("./507821.js"),
  Chunk531184 = require("./531184.js"),
  Chunk351185 = require("./351185.js"),
  Chunk710966 = require("./710966.js"),
  Chunk499954 = require("./499954.js"),
  Chunk591186 = require("./591186.js"),
  Chunk738586 = require("./738586.js"),
  Chunk426978 = require("./426978.js"),
  Chunk200458 = require("./200458.js"),
  Chunk128587 = require("./128587.js"),
  Chunk808180 = require("./808180.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

function ed(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ed(e, t, n[t])
    })
  }
  return e
}

function ep(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function e_(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ep(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eh = /^https/.test("https:") ? "wss:" : "ws:",
  em = 200,
  eg = 20,
  eE = 500,
  eb = 250,
  ey = 10,
  eO = 5,
  eA = "1",
  ev = 0;

function eS(e) {
  return e
}
let eI = 0,
  eT = [],
  eC = 50;

function eN() {
  let e = [],
    t = (0, _.tB)();
  for (let n of eT) e.push(e_(ef({}, n), {
    t: t - n.t
  }));
  return JSON.stringify(e)
}
class eR extends Chunk972347.A {
  recordEvent(e) {
    for (eT.push(e_(ef({}, e), {
        t: (0, _.tB)(),
        n: this._connectionSerial
      })); eT.length > eC;) eT.shift()
  }
  get quality() {
    let e = this.getLastPing();
    return this.state !== el.S7L.RTC_CONNECTED || true === e ? el.bFR.UNKNOWN : e > eE || null != this._outboundLossRate && this._outboundLossRate > ey ? el.bFR.BAD : e > eb || null != this._outboundLossRate && this._outboundLossRate > eO ? el.bFR.AVERAGE : el.bFR.FINE
  }
  get endpoint() {
    return this._endpoint
  }
  set endpoint(e) {
    if (this.recordEvent({
        c: 6,
        e: null != e
      }), null == e) this._endpoint = null, this.hostname = null;
    else {
      var t;
      e = "".concat(eh, "//").concat(e);
      let {
        hostname: n,
        port: r
      } = null != (t = q.A.toURLSafe(e)) ? t : {}, i = null != r ? parseInt(r) : NaN;
      null != n && (80 === i || 443 === i) && (e = "".concat(eh, "//").concat(n)), this._endpoint = e + "/", this.hostname = n
    }
  }
  connect(e, t) {
    if (this._destroyed) throw Error("RTCConnection.connect(...): Attempting to connect on destroyed instance.");
    this.recordEvent({
      c: 2,
      e: null != e,
      h: null != t
    }), this._backoff.cancel();
    let {
      endpoint: n,
      token: r
    } = this;
    if (this.endpoint = e, this.token = t, (n !== this.endpoint || r !== t) && (this._cleanupSocket(), this._mediaSessionId = null, null != n && (this._rtcConnectionId = (0, c.A)(), h.h.dispatch({
        type: "RTC_CONNECTION_UPDATE_ID",
        connection: this
      }))), null == this.endpoint) return void this.setState(el.S7L.AWAITING_ENDPOINT);
    let i = this._socket;
    null != i && this._cleanupSocket(), null != this._nextChannelId && (this._channelId = this._nextChannelId, this._nextChannelId = true), (i = this._socket = new J.Ay(this.endpoint, this.context)).on(J.yg.Connecting, this._handleConnecting.bind(this, i)), i.on(J.yg.Connect, this._handleConnect.bind(this, i)), i.on(J.yg.Disconnect, this._handleDisconnect.bind(this, i)), i.on(J.yg.Resuming, this._handleResuming.bind(this, i)), i.on(J.yg.Ready, this._handleReady.bind(this, i)), i.on(J.yg.Speaking, this._handleSpeaking.bind(this, i)), i.on(J.yg.Video, this._handleVideo.bind(this, i)), i.on(J.yg.Ping, this._handleControlPing.bind(this)), i.on(J.yg.ClientDisconnect, this._handleClientDisconnect.bind(this)), i.on(J.yg.ClientConnect, this._handleClientConnect.bind(this)), i.on(J.yg.Codecs, this._handleCodecs.bind(this)), i.on(J.yg.MediaSessionId, this._handleMediaSessionId.bind(this)), i.on(J.yg.MediaSinkWants, this._handleMediaSinkWants.bind(this)), i.on(J.yg.VoiceBackendVersion, this._handleCodeVersion.bind(this)), i.on(J.yg.KeyframeInterval, this._handleKeyframeInterval.bind(this)), i.on(J.yg.Flags, this.handleFlags.bind(this)), i.on(J.yg.Platform, this.handlePlatform.bind(this)), i.on(J.yg.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), i.on(J.yg.SecureFramesInit, this._handleSecureFramesInit.bind(this)), i.on(J.yg.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), i.on(J.yg.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), i.on(J.yg.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), i.on(J.yg.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), i.on(J.yg.MLSProposals, this._handleMLSProposals.bind(this, i)), i.on(J.yg.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), i.on(J.yg.MLSWelcome, this._handleMLSWelcome.bind(this)), i.on(J.yg.ReceiveMessage, this._recordMessageEvent.bind(this, 4)), i.on(J.yg.SendMessage, this._recordMessageEvent.bind(this, 5)), this._connectStartTime = (0, _.tB)(), this._connectCount++, this._connecting = true, null != i && this._socket === i && (this._trackVoiceConnectionConnecting(), this._encountered_socket_failure = false, i.connect())
  }
  _recordMessageEvent(e, t) {
    this.recordEvent({
      c: e,
      o: t
    })
  }
  destroy() {
    var e, t, n, r, i, a, s, o;
    if (this.logger.info("Destroy RTCConnection"), W.A.removeOnlineCallback(this._handleNetworkOnline), W.A.removeOfflineCallback(this._handleNetworkOffline), (0, K.isDesktop)() && (null == (s = (o = this).powerMonitorListener) || s.call(o)), this.recordEvent({
        c: 1
      }), eo.X.off(eo.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged), eo.X.off(eo.N.WindowVisibilityChanged, this.windowVisibilityChanged), this._backoff.cancel(), this._cleanupSocket(), null == (e = this._voiceQuality) || e.stop(), null == (t = this._voiceQuality) || t.removeAllListeners(), this._voiceQuality = null, clearInterval(this._voiceQualityPeriodicStatsInterval), this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, null == (n = this._systemResponsiveness) || n.stop(), this._systemResponsiveness = null, this._noiseCancellationError = 0, null == (r = this._voiceDuration) || r.stop(), this._voiceDuration = null, null == (i = this._videoQuality) || i.stop(), this._videoQuality = null, this._videoHealthManager = null, this._secureFramesState = null, null == (a = this._localMediaSinkWantsManager) || a.reset(), null != this._connection) {
      let e = this._connection;
      this._connection = null, e.destroy()
    }
    this.removeAllListeners(), this._destroyed = true
  }
  shouldSendSpeaking(e, t) {
    if ((0, K.isWeb)()) returntrue;
    let n = (0, d.Lt)(e, ec.ME.PRIORITY),
      r = (0, d.Lt)(this._lastSentSpeakingStatus, ec.ME.PRIORITY);
    return (this._lastSentSSRC !== t || n !== r) && (true !== this._lastSentSSRC || e !== ec.ME.NONE) && (this._lastSentSSRC === t || e !== ec.ME.NONE) && (this._lastSentSpeakingStatus = e, this._lastSentSSRC = t, true)
  }
  sendSpeaking(e, t) {
    let n = this._socket;
    if (null == n || !this.shouldSendSpeaking(e, t)) return;
    let r = U.A.getPacketDelay();
    n.speaking(e, r, t)
  }
  sendVideo(e, t, n, r) {
    let i = this._socket;
    null != i && (0 !== t && (this._sentVideo = true), this._sentVideo && i.video(e, t, n, r))
  }
  getPings() {
    return this._pings
  }
  getAveragePing() {
    let e = this._pings.slice(0, Math.min(this._pings.length, eg));
    return 0 === e.length || null == this._socket ? 0 : e.reduce((e, t) => e + t.value, 0) / e.length
  }
  getLastPing() {
    var e;
    return null == (e = this._pings[this._pings.length - 1]) ? true : e.value
  }
  getOutboundLossRate() {
    return this._outboundLossRate
  }
  getMediaSessionId() {
    return this._mediaSessionId
  }
  getVoiceParticipantType() {}
  getRTCConnectionId() {
    return this._rtcConnectionId
  }
  getMediaEngineConnectionId() {
    return this._mediaEngineConnectionId
  }
  getVoiceVersion() {
    return this.voiceVersion
  }
  getRtcWorkerVersion() {
    return this.rtcWorkerVersion
  }
  getDuration() {
    let e = this._connectCompletedTime > 0 ? (0, _.tB)() - this._connectCompletedTime : 0;
    return e > 0 ? e : 0
  }
  getDurationSeconds() {
    return this.getDuration() / 1e3
  }
  getVoiceFilterSpeakingDurationMs() {
    return null == this._voiceDuration ? null : this._voiceDuration.getVoiceFilterSpeakingDurationMs()
  }
  getPacketStats() {
    var e;
    return null == (e = this._voiceQuality) ? true : e.getPacketStats()
  }
  getCreatedTime() {
    return this._createdTime
  }
  getSecureFramesState() {
    return this._secureFramesState
  }
  getSecureFramesRosterMap() {
    return this._secureFramesRosterMap
  }
  getUserIds() {
    return this._userIds
  }
  getIsUserConnected(e) {
    return this._userIds.has(e)
  }
  getVideoHealthManager() {
    return this._videoHealthManager
  }
  getBandwidthEstimationExperiment() {
    return this._bandwidthEstimationExperiment
  }
  hasActiveRemoteWants() {
    return Object.entries(this._remoteVideoSinkWants).some(e => {
      let [t, n] = e;
      return Number.isInteger(t) ? 0 !== n : "any" !== t && ("pixelCounts" === t ? Object.values(n).some(e => 0 !== e) : true)
    })
  }
  pauseStatsCollectionForUser(e, t) {
    let n = this.getOrCreateVideoQuality();
    null == n ? this.logger.error("pauseStatsCollectionForUser: Unable to create videoQuality.") : t ? n.addUserToStatsCollectionPausedSet(e) : n.removeUserFromStatsCollectionPausedSet(e)
  }
  getOutboundStats() {
    let e = this.getOrCreateVideoQuality();
    return null != e ? e.getOutboundStats() : null
  }
  getInboundStats(e) {
    let t = this.getOrCreateVideoQuality();
    return null != t ? t.getInboundStats(e) : null
  }
  setState(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    this.recordEvent({
      c: 8,
      s: e
    }), this.logger.info("RTC connection state: ".concat(this.state, " => ").concat(e)), this.state = e, this.stateHistory.update(this.state), this.emit(Q.q.State, e, {
      hostname: this.hostname,
      channelId: this.trueChannelId,
      context: this.context
    }, t)
  }
  expeditedHeartbeat(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "",
      n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = this._socket;
    null != r && r.expeditedHeartbeat(e, t, n) && this._backoff.cancel()
  }
  resetBackoff() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "",
      t = this._socket;
    null != t && t.resetBackoff(e) && this._backoff.cancel()
  }
  setSelectedParticipant(e) {
    var t;
    null == (t = this._localMediaSinkWantsManager) || t.setSelectedParticipant(e)
  }
  setPipOpen(e) {
    var t;
    null == (t = this._localMediaSinkWantsManager) || t.setPipOpen(e)
  }
  setClipRecordUser(e, t, n) {
    var r, i;
    null == (i = this._connection) || null == (r = i.setClipRecordUser) || r.call(i, e, t, n)
  }
  setNoiseCancellationEnabled(e) {
    var t;
    this._numNoiseCancellationChanges++, null == (t = this._voiceDuration) || t.setNoiseCancellationEnabled(e)
  }
  setSimulcastDebugOverride(e, t, n) {
    var r, i;
    t === this.context && (t === ec.x.DEFAULT ? null == (r = this._localMediaSinkWantsManager) || r.setSimulcastDebugOverride(e, n) : null == (i = this._goLiveQualityManager) || i.setSimulcastDebugOverride(n))
  }
  setVideoSize(e, t, n) {
    var r, i;
    null == t || (0, K.isAndroid)() || (0, K.isIOS)() || null == (i = this._localMediaSinkWantsManager) || i.setVideoSize(e, t.width * t.height), null == (r = this._goLiveQualityManager) || r.setVideoSize(e, t, n)
  }
  clearJoinVoiceId() {
    this.joinVoiceId = null
  }
  setNextChannelId(e) {
    this.recordEvent({
      c: 9
    });
    let t = k.A.getChannel(this.channelId),
      n = null == t ? true : t.type;
    this.logger.info("Updating channel: ".concat(e, "(").concat(n, ")")), this._nextChannelId = e, this.channelIds.add(e)
  }
  getNextChannelId() {
    var e;
    return null != (e = this._nextChannelId) ? e : this._channelId
  }
  get channelId() {
    return this._channelId
  }
  get trueServerId() {
    var e, t;
    return null != (e = null != (t = this.streamServerId) ? t : this.guildId) ? e : this.channelId
  }
  get trueChannelId() {
    return null == this.streamServerId ? this.channelId : null != this.streamChannelId ? this.streamChannelId : i()(this.streamServerId).prev().toString()
  }
  _cleanupSocket() {
    let e = this._socket;
    null != e && (e.close(), e.removeAllListeners(), this._socket = null)
  }
  _chooseExperiments(e) {
    let t = [];
    if (this._recordingEnabled && t.push("connection_log"), U.A.supports(ec.O5.FIXED_KEYFRAME_INTERVAL) && t.push("fixed_keyframe_interval"), 0 !== this._supportedBandwidthEstimationExperiments.length) {
      let e = R.A.workerExperimentString();
      null != e && t.push(e)
    }
    this.context === ec.x.DEFAULT && (0, I.I)("RtcConnection").enabled && t.push("audio_transport_cc");
    let {
      enabled: n
    } = (0, y.r)({
      location: "_chooseExperiments"
    });
    n && t.push("should_analyze_user_voice_volume"), t.push("keyframe_on_join"), P.A.getCurrentConfig({
      location: "_chooseExperiments"
    }, {
      autoTrackExposure: true
    }).enabled && t.push("network_aware_socket");
    let r = C.A.getCurrentConfig({
      location: "_chooseExperiments"
    }, {
      disable: !(0, K.isWindows)(),
      autoTrackExposure: true
    });
    r.prewarm && t.push("prewarm_cuda_cache"), r.clear && t.push("clear_cuda_cache"), this._selectedExperiments = t
  }
  _handleConnecting(e) {
    if (null != this.endpoint) {
      let e = k.A.getChannel(this.channelId),
        t = null == e ? true : e.type;
      this.logger.info("Connecting to RTC server ".concat(this.endpoint, ", rtc-connection-id: ").concat(this.getRTCConnectionId(), ", channel: ").concat(this.channelId, "(").concat(t, ")"))
    }
    this.setState(el.S7L.CONNECTING)
  }
  _handleConnect(e) {
    let t = this.token;
    if (this.reconnecting = false, null == t) throw Error("RTCConnection._handleConnect(...): Token is missing.");
    this.logger.info("Connected to RTC server."), this._fetchAsyncResourcesPromise.finally(() => {
      e.identify({
        serverId: this.trueServerId,
        channelId: this.trueChannelId,
        userId: this.userId,
        sessionId: this.sessionId,
        token: t,
        maxDaveProtocolVersion: U.A.getSupportedSecureFramesProtocolVersion(),
        video: U.A.supports(ec.O5.VIDEO),
        streamParameters: U.A.getVideoStreamParameters(this.context)
      }), this.setState(el.S7L.AUTHENTICATING)
    })
  }
  _handleDisconnect(e, t, n, r) {
    var i, a, s, o, l, c, u, d, f, p, _, h, m, g, E, b, y, O, A, S, I, T;
    this.logger.info("Disconnected from RTC server, clean: ".concat(t, ", code: ").concat(n, ", reason: ").concat(r, ", state: ").concat(this.state)), t || !this._connecting || this._encountered_socket_failure || (H.default.track(el.HAw.VOICE_CONNECTION_SOCKET_FAILURE, e_(ef({}, this._getAnalyticsProperties()), {
      hostname: this.hostname,
      connect_count: this._connectCount,
      code: n,
      reason: r
    })), this._encountered_socket_failure = true), G.A.getRemoteDisconnectVoiceChannelId() === this.channelId && (null == (l = this._connection) || l.wasRemoteDisconnected());
    let C = "Force Close" !== r;
    if (C) {
      let e = this._backoff.fail(this.reconnect);
      this.logger.warn("Disconnect was not clean! reason=".concat(r, ". Reconnecting in ").concat((e / 1e3).toFixed(2), " seconds."))
    }
    if (this.state !== el.S7L.DISCONNECTED) {
      let e = this._videoQuality;
      if (null != e && this.context === ec.x.DEFAULT) {
        if (e.stop(), this._sentVideo) {
          e.getOutboundStats().forEach(t => {
            var n;
            (null != (n = t.num_frames) ? n : 0) > 0 && H.default.track(el.HAw.VIDEO_STREAM_ENDED, e_(ef(e_(ef({}, this._getAnalyticsProperties()), {
              app_hardware_acceleration_enabled: Y.A.getAppHardwareAccelerationEnabled(),
              media_session_id: this.getMediaSessionId(),
              sender_user_id: this.userId,
              reason: r,
              participant_type: "sender",
              guild_region: F.A.getRegion(this.hostname),
              hostname: this.hostname,
              hardware_enabled: U.A.getHardwareEncoding()
            }), t, e.getNetworkStats(), e.getCodecUsageStats("sender", this.userId)), {
              device_performance_class: (0, v.A)()
            }))
          });
          let t = e.getCameraDurationStats();
          null != t && t.camera_enabled_duration > 0 && H.default.track(el.HAw.VIDEO_CALL_ENDED, e_(ef({}, t), {
            media_session_id: this.getMediaSessionId()
          }))
        }
        e.getInboundParticipants().forEach(t => {
          var n;
          let i = e.getInboundStats(t);
          (null != (n = null == i ? true : i.num_frames) ? n : 0) > 0 && H.default.track(el.HAw.VIDEO_STREAM_ENDED, ef(e_(ef({}, this._getAnalyticsProperties()), {
            app_hardware_acceleration_enabled: Y.A.getAppHardwareAccelerationEnabled(),
            media_session_id: this.getMediaSessionId(),
            sender_user_id: t,
            reason: r,
            participant_type: "receiver",
            guild_region: F.A.getRegion(this.hostname),
            hostname: this.hostname,
            hardware_enabled: U.A.getHardwareEncoding()
          }), i, e.getNetworkStats(), e.getCodecUsageStats("receiver", t)))
        })
      }
      let t = this.getMediaSessionId();
      U.A.getMediaEngine().getCodecSurvey().then(e => {
        let n = JSON.parse(e);
        if (null == n || null == n.available_video_encoders || null == n.available_video_decoders) throw Error("codec survey is not available");
        H.default.track(el.HAw.VOICE_CODEC_DETECTED, e_(ef({}, n), {
          rtc_connection_id: this.getRTCConnectionId(),
          media_session_id: t
        }))
      }).catch(e => {
        this.logger.warn(e)
      }), this._trackMLSFailures({
        recovered: false,
        downgraded: false
      });
      let n = F.A.shouldIncludePreferredRegion() ? F.A.getPreferredRegion() : null,
        i = U.A.getSettings(),
        a = k.A.getChannel(this.channelId),
        s = null == (u = w.A.getConnectionStats(this.getMediaEngineConnectionId())) || null == (c = u.stats.rtp.outbound.find(e => "audio" === e.type)) ? true : c.sampleRateMismatchPercent,
        o = e_(ef(e_(ef({}, this._getAnalyticsProperties()), {
          hostname: this.hostname,
          port: this.port,
          protocol: this.protocol,
          reconnect: C,
          reason: r,
          duration: this.getDuration()
        }), G.A.getUserVoiceSettingsStats(this.context), null == (d = this._voiceQuality) ? true : d.getMosStats(), null == (f = this._voiceQuality) ? true : f.getPacketStats(), null == (p = this._voiceQuality) ? true : p.getBytesStats(), null == (_ = this._voiceQuality) ? true : _.getBufferStats(), null == (h = this._voiceQuality) ? true : h.getNetworkStats(), null == (m = this._voiceQuality) ? true : m.getSystemResourceStats(), null == (g = this._voiceQuality) ? true : g.getFrameOpStats(), null == (E = this._voiceQuality) ? true : E.getDurationStats(), null == (b = this._voiceQuality) ? true : b.getTransportStats(), null == (y = this._voiceQuality) ? true : y.getE2EEStats(), null == (O = this._voiceQuality) ? true : O.getAudioDeviceStats(), null == (A = this._voiceQuality) ? true : A.getAudioLevelStats(), null == (S = this._voiceDuration) ? true : S.getDurationStats(), N.A.getUsageStats(), this.getAudioDeviceStates(), null == (I = this._systemResponsiveness) ? true : I.getPttQueueLatencyStats()), {
          num_noise_cancellation_changes: this._numNoiseCancellationChanges,
          media_session_id: this.getMediaSessionId(),
          channel_bitrate: null != a ? a.bitrate : null,
          cloudflare_best_region: n,
          connect_count: this._connectCount,
          ping_average: Math.round(this.getAveragePing()),
          ping_bad_count: this._pingBadCount,
          ping_timeout: this._pingTimeouts.length,
          input_detected: this._inputDetected,
          no_input_detected_notice: U.A.getNoInputDetectedNotice(),
          audio_input_mode: i.mode,
          automatic_audio_input_sensitivity_enabled: i.modeOptions.autoThreshold,
          audio_input_sensitivity: i.modeOptions.threshold,
          echo_cancellation_enabled: i.echoCancellation,
          sidechain_compression_enabled: i.sidechainCompression,
          noise_suppression_enabled: i.noiseSuppression,
          noise_cancellation_enabled: i.noiseCancellation,
          noise_canceller_error: this._noiseCancellationError,
          automatic_gain_control_enabled: i.automaticGainControl,
          voice_output_volume: i.outputVolume,
          voice_input_volume: i.inputVolume,
          encryption_mode: this._encryptionMode,
          channel_count: this.channelIds.size,
          device_performance_class: (0, v.A)(),
          num_fast_udp_reconnects: null != this._connection ? null == (T = this._connection) ? true : T.getNumFastUdpReconnects() : null,
          parent_media_session_id: this.parentMediaSessionId,
          audio_subsystem: U.A.getMediaEngine().getAudioSubsystem(),
          audio_layer: U.A.getMediaEngine().getAudioLayer(),
          automatic_audio_subsystem: i.automaticAudioSubsystem,
          participant_type: this.getVoiceParticipantType(),
          audio_capture_sample_rate_mismatch_percent: s,
          krisp_sdk_version: U.A.getState().krispVersion,
          secure_frames_max_concurrent_transitions: this._secureFramesMaxConcurrentTransitions,
          secure_frames_transition_prepare_count: this._secureFramesTransitionPrepareCount,
          secure_frames_transition_execute_count: this._secureFramesTransitionExecuteCount,
          vad_use_advanced_voice_activity: i.modeOptions.vadUseKrisp,
          soundshare_experimental: U.A.getExperimentalSoundshare(),
          join_voice_id: this.joinVoiceId,
          bypass_system_input_processing: i.bypassSystemInputProcessing,
          system_microphone_mode: U.A.getSystemMicrophoneMode()
        });
      Promise.all([(async () => {
        var e, t;
        return null != (e = await (null == (t = this._systemResources) ? true : t.getBatteryLevelStats())) ? e : {
          batteryUsageRounded: null
        }
      })(), L.A.getKrispModel(), U.A.getKrispEnableStats() ? U.A.getMediaEngine().getNoiseCancellationStats() : Promise.resolve(null)]).then(e => {
        let [{
          batteryUsageRounded: t
        }, n, r] = e;
        H.default.track(el.HAw.VOICE_DISCONNECT, e_(ef({}, o), {
          battery_usage: t,
          krisp_nc_model: n,
          duration_low_noise_detected_ms: null == r ? true : r.lowNoiseMs,
          duration_medium_noise_detected_ms: null == r ? true : r.mediumNoiseMs,
          duration_high_noise_detected_ms: null == r ? true : r.highNoiseMs,
          duration_noise_cancellation_voice_detected_ms: null == r ? true : r.talkTimeMs
        }))
      }), this._trackRemainingSecureFrameTransitions()
    }
    if (this._pingTimeouts = [], this._pings = [], this._connectCompletedTime = 0, this._pingBadCount = 0, this._inputDetected = false, this._mediaSessionId = null, null == (i = this._voiceQuality) || i.stop(), this._voiceQuality = null, clearInterval(this._voiceQualityPeriodicStatsInterval), this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, this._noiseCancellationError = 0, this._numNoiseCancellationChanges = 0, null == (a = this._voiceDuration) || a.stop(), this._voiceDuration = null, null == (s = this._videoQuality) || s.stop(), this._videoQuality = null, this._videoHealthManager = null, null == (o = this._localMediaSinkWantsManager) || o.reset(), this._secureFramesState = null, this._userIds = new Set([this.userId]), this._secureFramesRosterMap.clear(), this._secureFramesTransitionStates.clear(), this._secureFramesNextTransitionState = true, this._secureFramesMaxConcurrentTransitions = 0, this._secureFramesTransitionPrepareCount = 0, this._secureFramesTransitionExecuteCount = 0, null != this._connection) {
      let e = this._connection;
      this._connection = null, e.destroy(this.reconnecting)
    }
    this.setState(el.S7L.DISCONNECTED, {
      willReconnect: C
    })
  }
  _handleResuming(e) {
    var t, n;
    null == (t = this._connection) || t.fastUdpReconnect(), null == (n = this._connection) || n.clearAllSpeaking()
  }
  _handleReady(e, t, n, r, i, a, s) {
    var o;
    this.setState(el.S7L.RTC_CONNECTING), this.port = n, this._chooseExperiments(null != s ? s : []), 0 === a.length && a.push({
      type: ec.mI.VIDEO,
      rid: "100",
      ssrc: i + 1,
      rtxSsrc: i + 2,
      quality: 100,
      active: false
    });
    let l = U.A.getMediaEngine(),
      c = j.A.getPersistentCodesEnabled(),
      u = null != (o = M.default.getStaticAuthSessionId()) ? o : true,
      d = (0, _.tB)(),
      f = l.connect(this.context, this.userId, ef({
        ssrc: i,
        address: t,
        port: n,
        modes: r,
        experiments: this._selectedExperiments,
        streamParameters: a,
        qosEnabled: U.A.getQoS(),
        signingKeyId: c ? u : true
      }, this.getExtraConnectionOptions())),
      m = (0, _.tB)() - d;
    f.setUseElectronVideo(l.supports(ec.O5.ELECTRON_VIDEO)), U.A.supports(ec.O5.IMAGE_QUALITY_MEASUREMENT) && f.setVideoQualityMeasurement("imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec");
    let E = ["unk"];
    if (this.context === ec.x.STREAM) E.push("nvRelaxRc=250"), E.push("nvNewPresets");
    else {
      let {
        vbvBufferSize: e
      } = (0, D.N)("handleReady");
      e > 0 && (E.push("nvRelaxRc=".concat(e)), E.push("nvNewPresets"))
    }
    U.A.getUseVaapiEncoder() && E.push("vaapi"), this.context === ec.x.STREAM && "streamer" === this.getVoiceParticipantType() && (0, x.b)("handleReady").enabled && E.push("useCaptureDeviceForEncode"), f.setVideoEncoderExperiments(E.join(",")), f.on(p.yq.Speaking, (e, t, n) => {
      this.userId === e && this.sendSpeaking(t, n), this.emit(Q.q.Speaking, eS(e), t)
    }), f.on(p.yq.ToggleMuteFromNative, () => {
      this.context === ec.x.DEFAULT && g.A.toggleSelfMute({
        playSoundEffect: false
      })
    }), f.on(p.yq.NativeMuteChanged, e => {
      this.context === ec.x.DEFAULT && b.A.nativeMuteChanged(e)
    }), f.on(p.yq.Video, (e, t, n, r, i, a) => {
      this._handleVideoStreamId({
        userId: eS(e),
        streamId: t,
        audioSsrc: n,
        videoSsrc: null != r ? r : 0,
        rtxSsrc: i,
        videoStreamParameters: a
      }), this.userId === e && (this.sendVideo(null != n ? n : 0, null != r ? r : 0, null != i ? i : 0, a), null == a || a.forEach(t => {
        100 === t.quality && this.emit(Q.q.VideoSourceQualityChanged, this.guildId, this.channelId, eS(e), t.maxResolution, t.maxFrameRate, this.context)
      }))
    }), f.on(p.yq.FirstFrame, (e, t, n) => {
      null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.setFirstFrameReceived(t), this.emit(Q.q.Video, this.guildId, this.channelId, eS(e), n, this.streamServerId)), null != this._goLiveQualityManager && (this._goLiveQualityManager.setFirstFrameReceived(t), this.emit(Q.q.Video, this.guildId, this.channelId, eS(e), n, this.streamServerId))
    }), f.on(p.yq.Silence, e => {
      this._inputDetected = this._inputDetected || !e
    }), f.on(p.yq.Connected, (r, i) => {
      if (this.logger.info("RTC connected to media server: ".concat(t, ":").concat(n)), e !== this._socket) return void this.logger.warn("Socket mismatch, disconnecting");
      switch (this._voiceQuality = new es.A(f), this._voiceQuality.start(), this._voiceQuality.on(es.w.InputDeviceSampleRateChanged, e => {
          h.h.dispatch({
            type: "AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED",
            sampleRate: e
          })
        }), this._voiceQualityPeriodicStatsSequenceId = 0, this._voiceQualityPeriodicStatsInterval = setInterval(this._handleVoiceQualityPeriodicsStats, 3e5), this._systemResponsiveness = new en.A(f), this._systemResponsiveness.start(), this._systemResources = new et.A, this._systemResources.setLastBattery(), this._noiseCancellationError = 0, this._voiceDuration = new ea.A(this.userId, f), this._voiceDuration.start(f.getSelfMute(), f.getSelfDeaf(), f.getVoiceFilterId()), this.protocol = r, r) {
        case "udp":
          this.logger.info("Sending UDP info to RTC server.", i, this._selectedExperiments), e.once(J.yg.Encryption, (e, t) => {
            f === this._connection && (f.setEncryption(e, t), this._encryptionMode = e)
          }), e.selectProtocol(r, this.getRTCConnectionId(), i, this._selectedExperiments);
          break;
        case "webrtc":
          this.logger.info("Sending local SDP to RTC server."), e.once(J.yg.SDP, this._handleSDP.bind(this)), e.selectProtocol(r, this.getRTCConnectionId(), i);
          break;
        default:
          this.logger.error("Unable to determine protocol.");
          return
      }
      this._backoff.succeed()
    }), f.on(p.yq.VideoEncoderFallback, t => {
      let n = t.filter(e => "video" === e.type).map(e => e.name).join(",");
      this.logger.info("The originally selected video encoder is not working, fallback to the other available encoders: ".concat(n)), e.updateSession({
        codecs: t
      })
    }), f.on(p.yq.VideoDecoderFallback, t => {
      let n = k.A.getChannel(this.channelId),
        r = (null == n ? true : n.type) === el.rbe.GUILD_STAGE_VOICE;
      if (!U.A.isVideoDecoderFallbackEnabled() || r) {
        if (!this._videoDecoderFallbackSuppressed) {
          let e = U.A.isVideoDecoderFallbackEnabled() ? "stage channel" : "not in fallback treatment";
          this.logger.info("Suppressing video decoder fallback: ".concat(e)), this._videoDecoderFallbackSuppressed = true
        }
        return
      }
      let i = t.filter(e => "video" === e.type).map(e => e.name).join(",");
      this.logger.info("The originally selected video decoder is not working, fallback to the other available decoders: ".concat(i)), e.updateSession({
        codecs: t
      })
    }), f.on(p.yq.Error, t => {
      if (e !== this._socket) return;
      let n = F.A.shouldIncludePreferredRegion() ? F.A.getPreferredRegion() : null;
      this.logger.error("Error occurred while connecting to RTC server: ".concat(t)), H.default.track(el.HAw.VOICE_CONNECTION_FAILURE, e_(ef({}, this._getAnalyticsProperties()), {
        hostname: this.hostname,
        port: this.port,
        protocol: this.protocol,
        error: t,
        cloudflare_best_region: n,
        connect_count: this._connectCount,
        join_voice_id: this.joinVoiceId
      }))
    }), f.on(p.yq.ConnectionStateChange, t => {
      if (this.logger.info("RTC media connection state change: ".concat(this.state, " => ").concat(t)), e !== this._socket) return;
      let n = this.state;
      switch (t) {
        case ec.$I.DISCONNECTED:
          this.setState(el.S7L.RTC_DISCONNECTED);
          break;
        case ec.$I.CONNECTING:
          this.setState(el.S7L.RTC_CONNECTING);
          break;
        case ec.$I.CONNECTED:
          this.setState(el.S7L.RTC_CONNECTED);
          break;
        case ec.$I.NO_ROUTE:
          this.setState(el.S7L.NO_ROUTE);
          break;
        case ec.$I.ICE_CHECKING:
          this.setState(el.S7L.ICE_CHECKING);
          break;
        case ec.$I.DTLS_CONNECTING:
          this.setState(el.S7L.DTLS_CONNECTING)
      }
      if (n === el.S7L.RTC_CONNECTING && this.state === el.S7L.RTC_DISCONNECTED ? this.reconnect() : this.state === el.S7L.NO_ROUTE && (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)), this.state === el.S7L.RTC_CONNECTED) {
        var r, i, a, s, o, l, c, u, d, p, h, g, E, b;
        let e = F.A.shouldIncludePreferredRegion() ? F.A.getPreferredRegion() : null;
        if (this._connecting) {
          let t = U.A.getSettings(),
            n = this._getAnalyticsProperties();
          H.default.track(el.HAw.VOICE_CONNECTION_SUCCESS, ef(e_(ef({}, n), {
            hostname: this.hostname,
            port: this.port,
            protocol: this.protocol,
            cloudflare_best_region: e,
            connect_time: (0, _.tB)() - (this._connected ? this._connectStartTime : this._createdTime),
            connect_count: this._connectCount,
            audio_subsystem: U.A.getMediaEngine().getAudioSubsystem(),
            audio_layer: U.A.getMediaEngine().getAudioLayer(),
            automatic_audio_subsystem: t.automaticAudioSubsystem,
            media_session_id: this.getMediaSessionId(),
            participant_type: this.getVoiceParticipantType(),
            join_voice_id: this.joinVoiceId,
            is_camera_enabled: U.A.getMediaEngine().getVideoInputDeviceId() !== ec.qe && f.context === ec.x.DEFAULT
          }), this.stateHistory.getVoiceConnectionSuccessStats()));
          let r = performance.now(),
            i = (e, t) => null == e || null == t ? null : e - t;
          H.default.track(el.HAw.VOICE_CONNECTION_TTC_COLLECTED, {
            rtc_connection_id: n.rtc_connection_id,
            time_1_creation_to_connect: this._connectStartTime - this._createdTime,
            time_2_media_engine_connect: m,
            time_3_media_engine_create_native_connection: null == (a = f.transportInfo) ? true : a.createConnectionTime,
            time_4_media_engine_connect_to_socket: null == (s = f.transportInfo) ? true : s.connectTime,
            time_5_scheduling_connected_callback: i(null == (o = this._connection) ? true : o.onConnectCallbackAt, null == (c = this._connection) || null == (l = c.transportInfo) ? true : l.connectCallbackScheduledMs),
            time_6_state_connected_to_end_measure: i(r, null == (u = this._connection) ? true : u.onConnectCallbackAt),
            connect_count: this._connectCount,
            rtc_connecting_native_connect: i(null == (d = this._connection) ? true : d.onConnectCallbackAt, null == (p = this._connection) ? true : p.beginInitializeAt),
            rtc_connecting_native_codecs: i(null == (h = this._connection) ? true : h.onVideoCodecsCallbackAt, null == (g = this._connection) ? true : g.onConnectCallbackAt),
            rtc_connecting_native_crypto_modes: i(null == (E = this._connection) ? true : E.onEncryptionModesCallbackAt, null == (b = this._connection) ? true : b.onVideoCodecsCallbackAt)
          })
        }
        null == (r = this._localMediaSinkWantsManager) || r.setConnection(f), null == (i = this._goLiveQualityManager) || i.update(), this._connectCompletedTime = (0, _.tB)(), this._connected = true, this._connecting = false, this._encountered_socket_failure = false
      } else n === el.S7L.RTC_CONNECTED && this.stateHistory.reset(this.state)
    }), f.on(p.yq.SecureFramesUpdate, e => {
      this._secureFramesState = e, this.emit(Q.q.SecureFramesUpdate)
    }), f.on(p.yq.Ping, this._handlePing.bind(this)), f.on(p.yq.PingTimeout, this._handlePingTimeout.bind(this)), f.on(p.yq.OutboundLossRate, this._handleOutboundLossRate.bind(this)), f.on(p.yq.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)), f.on(p.yq.Stats, Z.A.create()), f.on(p.yq.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)), f.on(p.yq.UsersMerged, this.handleUsersMerged.bind(this)), f.on(p.yq.NoiseCancellationError, e => {
      this._noiseCancellationError = e
    }), f.on(p.yq.MLSFailure, this._handleMLSFailure.bind(this)), f.setRemoteVideoSinkWants(this._remoteVideoSinkWants), this._connection = f, this._mediaEngineConnectionId = f.mediaEngineConnectionId
  }
  _handleSpeaking(e, t, n, r) {
    let i = this._connection;
    if (null != i && this.userId !== t) {
      var a;
      r !== ec.ME.NONE && i.createUser(t, n), null == (a = this._localMediaSinkWantsManager) || a.setAudioSSRC(t, n)
    }
  }
  handleFlags(e, t) {
    this.emit(Q.q.Flags, e, t)
  }
  handlePlatform(e, t) {
    this.emit(Q.q.Platform, e, t, this.channelId)
  }
  handleUsersMerged(e) {
    this.emit(Q.q.UsersMerged, e.map(e => e.id), this.context)
  }
  getOrCreateVideoQuality() {
    if (null != this._connection && null == this._videoQuality) {
      this._videoQuality = new ei.X(this._connection), this._videoQuality.updateCallUserIdsCount(this._userIds.size), this._videoQuality.start();
      let {
        featureEnabled: e,
        windowLength: t,
        allowedPoorFpsRatio: n,
        fpsThreshold: r,
        backoffTimeSec: i
      } = er.V.defaultConfig;
      if (e) {
        this._videoHealthManager = new er.V(t, n, r, i), null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
        let e = (e, t, n) => {
          var r, i;
          (null == (r = this._localMediaSinkWantsManager) ? true : r.shouldReceiveFromUser(e)) && (null == (i = this._videoHealthManager) || i.updateFps(e, t, n))
        };
        this._videoQuality.on(ei.F.FpsUpdate, e)
      }
    }
    return this._videoQuality
  }
  _handleVideoStreamId(e) {
    var t, n, r, i;
    let {
      userId: a,
      streamId: s,
      videoSsrc: o,
      videoStreamParameters: l
    } = e;
    if (this.emit(Q.q.Video, this.guildId, this.channelId, a, s, this.streamServerId), null != s && null == this.getOrCreateVideoQuality() && this.logger.error("_handleVideoStreamId: Unable to create videoQuality."), null != this._videoQuality && this.userId === a && l.forEach(e => {
        var t, n;
        let r = null != (t = e.ssrc) ? t : 0;
        r > 0 && true === e.active && (null == (n = this._videoQuality) || n.setOutboundSsrc(r))
      }), this.userId !== a) {
      let e = 0 === o && null === s;
      (!e || e && (null == (t = this._videoQuality) ? true : t.getInboundParticipants().includes(a))) && (null == (n = this._videoQuality) || n.setInboundUser(a, o), null == (r = this._videoHealthManager) || r.createUser(a))
    }
    null != this._connection && this.userId !== a && (null != this._localMediaSinkWantsManager ? this._localMediaSinkWantsManager.setStreamId(a, s) : null != this._goLiveQualityManager && this._goLiveQualityManager.getUserID() === a && (null == (i = this._goLiveQualityManager) || i.setStreamId(s)))
  }
  _handleLocalVideoDisabled(e, t) {
    if (this.userId !== e) {
      let n = this.getOrCreateVideoQuality();
      if (null == n) return void this.logger.error("_handleLocalVideoDisabled: Unable to create videoQuality.");
      n.setUserVideoDisabled(eS(e), t)
    }
  }
  _handleRemoteStreamsReady(e) {
    let t = (0, _.tB)() - this._connectStartTime;
    H.default.track(el.HAw.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, e_(ef({}, this._getAnalyticsProperties()), {
      number_of_users: e,
      duration_ms: t
    }))
  }
  _handleVideo(e, t, n, r, i) {
    if (null != this._connection && this.userId !== t) {
      if (null != this._localMediaSinkWantsManager) {
        this._localMediaSinkWantsManager.setAudioSSRC(t, n);
        let e = i.map(e => ({
          type: ec.mI.VIDEO,
          rid: e.rid,
          ssrc: e.ssrc,
          rtxSsrc: e.rtxSsrc,
          quality: e.quality,
          active: r > 0
        }));
        0 === e.length && e.push({
          type: ec.mI.VIDEO,
          rid: "100",
          ssrc: r,
          rtxSsrc: r + 1,
          quality: 100,
          active: r > 0
        }), this._localMediaSinkWantsManager.setVideoSSRCs(t, e)
      } else {
        var a, s, o;
        let e = [];
        for (let t of i) null != t.ssrc && null != t.quality && e.push({
          ssrc: t.ssrc,
          quality: t.quality,
          active: null == (o = t.active) || o
        });
        null == (a = this._goLiveQualityManager) || a.setUserID(t), null == (s = this._goLiveQualityManager) || s.updateAudioAndVideoStreamInfo(n, e)
      }
      null == i || i.forEach(e => {
        100 === e.quality && this.emit(Q.q.VideoSourceQualityChanged, this.guildId, this.channelId, t, e.maxResolution, e.maxFrameRate, this.context)
      })
    }
  }
  _handleControlPing(e) {
    U.A.supports(ec.O5.NATIVE_PING) || this._handlePing(e)
  }
  _handlePing(e) {
    if (true !== e) {
      for (this._pings.push({
          time: Date.now(),
          value: e
        }); this._pings.length >= em;) this._pings.shift();
      e > eE && this._pingBadCount++, this.emit(Q.q.Ping, this._pings, this.quality)
    }
  }
  _handlePingTimeout(e, t) {
    this._pingTimeouts.push(e);
    let n = this._pingTimeouts.length;
    n >= 3 && this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 && this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 && this._handlePing(t)
  }
  _handleOutboundLossRate(e) {
    this._outboundLossRate = e, this.emit(Q.q.OutboundLossRate, e)
  }
  _getAnalyticsProperties() {
    let e = k.A.getChannel(this.channelId),
      t = null == e ? true : e.type;
    return {
      guild_id: this.guildId,
      channel_id: this.channelId,
      channel_type: t,
      rtc_connection_id: this.getRTCConnectionId(),
      context: this.context,
      voice_backend_version: this.voiceVersion,
      rtc_worker_backend_version: this.rtcWorkerVersion
    }
  }
  _handleClientConnect(e) {
    var t, n, r;
    e.forEach(e => {
      var t;
      this._userIds.add(e), null == (t = this._connection) || t.createUser(e, 0)
    }), this.emit(Q.q.ClientConnect, e), null == (t = this._videoQuality) || t.updateCallUserIdsCount(this._userIds.size), null == (n = this._goLiveQualityManager) || n.updateCallUserIds(this._userIds), null == (r = this._localMediaSinkWantsManager) || r.updateCallUserIds(this._userIds)
  }
  _handleClientDisconnect(e) {
    var t, n, r, i, a, s;
    let o = this._videoQuality;
    if (null != o && this.context === ec.x.DEFAULT) {
      let t = o.getInboundStats(e),
        n = null != (a = null == t ? true : t.num_frames) ? a : 0;
      null != t && n > 0 && (H.default.track(el.HAw.VIDEO_STREAM_ENDED, ef(e_(ef({}, this._getAnalyticsProperties()), {
        app_hardware_acceleration_enabled: Y.A.getAppHardwareAccelerationEnabled(),
        media_session_id: this.getMediaSessionId(),
        sender_user_id: e,
        reason: "User disconnected",
        participant_type: "receiver",
        guild_region: F.A.getRegion(this.hostname),
        hostname: this.hostname,
        hardware_enabled: U.A.getHardwareEncoding()
      }), t, o.getNetworkStats(), o.getCodecUsageStats("receiver", e))), o.destroyUser(e), null == (s = this._videoHealthManager) || s.deleteUser(e))
    }
    let l = this._connection;
    null != l && l.destroyUser(e), null == (t = this._localMediaSinkWantsManager) || t.destroyUser(e), this._userIds.delete(e), this.emit(Q.q.ClientDisconnect, e), null == (n = this._goLiveQualityManager) || n.updateCallUserIds(this._userIds), null == (r = this._localMediaSinkWantsManager) || r.updateCallUserIds(this._userIds), null == (i = this._videoQuality) || i.updateCallUserIdsCount(this._userIds.size), 1 === this._userIds.size && (this._secureFramesLastBecameAloneTime = (0, _.tB)())
  }
  _handleCodecs(e, t) {
    let n = this._connection;
    null != n && null != this.protocol ? n.setCodecs(null != e && "" !== e ? e : ec.UK.OPUS, null != t && "" !== t ? t : ec.UK.H264, this.context) : this.logger.warn("Cannot set codecs on connection with protocol:", this.protocol)
  }
  _handleSDP(e) {
    let t = this._connection;
    null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn("Cannot set SDP on connection with protocol:", this.protocol)
  }
  _handleMediaSessionId(e) {
    this._mediaSessionId = e, this.logger.info("Setting media-session-id: ".concat(e, " for rtc-connection-id: ").concat(this.getRTCConnectionId()));
    let t = A.A.getRawThermalState();
    H.default.track(el.HAw.MEDIA_SESSION_JOINED, e_(ef({}, this._getAnalyticsProperties()), {
      media_session_id: this.getMediaSessionId(),
      parent_media_session_id: this.parentMediaSessionId,
      raw_thermal_state: t
    })), h.h.dispatch({
      type: "MEDIA_SESSION_JOINED",
      mediaSessionId: this.getMediaSessionId(),
      context: this.context
    })
  }
  _handleMediaSinkWants(e) {
    let t = this._connection;
    this.logger.info("Remote media sink wants: ".concat(JSON.stringify(e))), this._remoteVideoSinkWants = e, h.h.dispatch({
      type: "RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS",
      context: this.context,
      wants: e,
      channelId: this.channelId,
      guildId: this.guildId,
      userId: this.userId
    }), null == t || t.setRemoteVideoSinkWants(e)
  }
  _handleCodeVersion(e, t) {
    this.voiceVersion = e, this.rtcWorkerVersion = t
  }
  _handleKeyframeInterval(e) {
    let t = this._connection;
    null != t && null != this.protocol ? t.setKeyframeInterval(e) : this.logger.warn("Cannot set keyframe interval on connection with protocol:", this.protocol)
  }
  _handleBandwidthEstimationExperiment(e) {
    this._bandwidthEstimationExperiment = e;
    let t = T.A.getMediaEngineExperiments(e);
    if (null !== t && 0 !== t.length) {
      var n;
      null == (n = this._connection) || n.setBandwidthEstimationExperiments(t)
    }
  }
  _trackSecureFrameTransition(e) {
    let t = this._secureFramesTransitionStates.get(e);
    if (null == t) return;
    let n = this._secureFramesTransitionStates.size;
    this._secureFramesTransitionStates.delete(e);
    let r = (e, t) => null != e && null != t ? e - t : true;
    H.default.track(el.HAw.SECURE_FRAMES_TRANSITION, e_(ef({}, this._getAnalyticsProperties()), {
      media_session_id: this.getMediaSessionId(),
      parent_media_session_id: this.parentMediaSessionId,
      sender_user_id: this.userId,
      transition_id: e,
      protocol_version: t.protocolVersion,
      start_to_init_duration: r(t.initReceivedTime, this._connectStartTime),
      init_duration: r(t.initFinishedTime, t.initReceivedTime),
      first_proposals_duration: r(t.firstProposalsFinishedTime, t.firstProposalsReceivedTime),
      last_proposals_duration: r(t.lastProposalsFinishedTime, t.lastProposalsReceivedTime),
      duration_between_proposals: r(t.lastProposalsReceivedTime, t.firstProposalsReceivedTime),
      total_proposals_size: t.totalProposalsSize,
      total_commit_welcome_size: t.totalCommitWelcomeSize,
      welcome_wait_duration: r(t.welcomeReceivedTime, t.initFinishedTime),
      welcome_duration: r(t.welcomeFinishedTime, t.welcomeReceivedTime),
      welcome_size: t.welcomeSize,
      welcome_error: t.welcomeError,
      commit_wait_duration: r(t.commitReceivedTime, t.lastProposalsFinishedTime),
      commit_duration: r(t.commitFinishedTime, t.commitReceivedTime),
      commit_size: t.commitSize,
      commit_error: t.commitError,
      prepare_wait_duration: r(t.prepareReceivedTime, this._secureFramesLastBecameAloneTime),
      prepare_duration: r(t.prepareFinishedTime, t.prepareReceivedTime),
      execute_wait_duration: r(t.executeReceivedTime, t.readyTime),
      execute_duration: r(t.executeFinishedTime, t.executeReceivedTime),
      execute_error: t.executeError,
      incomplete: t.incomplete,
      active_transition_count: n,
      time_since_creation: (0, _.tB)() - t.creationTime,
      users_added_count: t.usersAdded,
      users_removed_count: t.usersRemoved,
      roster_size_after: t.rosterSizeAfter,
      init_to_finish_duration: r(t.executeFinishedTime, t.initReceivedTime)
    })), e === ev && this._trackRemainingSecureFrameTransitions()
  }
  _trackRemainingSecureFrameTransitions() {
    this._secureFramesTransitionStates.forEach((e, t) => {
      e.incomplete = true, this._trackSecureFrameTransition(t)
    })
  }
  _storeSecureFrameNextTransitionData(e) {
    return null == this._secureFramesNextTransitionState && (this._secureFramesNextTransitionState = {
      creationTime: (0, _.tB)()
    }), this._secureFramesNextTransitionState = ef({}, this._secureFramesNextTransitionState, e)
  }
  _storeSecureFrameTransitionData(e, t) {
    let n = this._secureFramesTransitionStates.get(e);
    null == n && (n = this._storeSecureFrameNextTransitionData({}), this._secureFramesNextTransitionState = true), this._secureFramesTransitionStates.set(e, ef({}, n, t)), this._secureFramesMaxConcurrentTransitions = Math.max(this._secureFramesMaxConcurrentTransitions, this._secureFramesTransitionStates.size)
  }
  _handleSecureFramesInit(e) {
    var t, n;
    let r = (0, _.tB)();
    this.recordEvent({
      c: 11,
      v: e
    }), e > 0 ? (this.logger.info("DAVE protocol init with protocol version: ".concat(e)), this._mlsInitReceivedTime = r, null == (t = this._connection) || t.prepareSecureFramesEpoch(eA, e, this.trueChannelId), this._sendMLSKeyPackage(), this._storeSecureFrameNextTransitionData({
      initReceivedTime: r,
      initFinishedTime: (0, _.tB)(),
      protocolVersion: e
    }), this.recordEvent({
      c: 10
    })) : null == (n = this._connection) || n.prepareSecureFramesTransition(ev, e, () => {
      let t = false;
      try {
        var n;
        null == (n = this._connection) || n.executeSecureFramesTransition(ev)
      } catch (e) {
        t = true, z.A.captureException(e)
      }
      this._storeSecureFrameTransitionData(ev, {
        initReceivedTime: r,
        initFinishedTime: (0, _.tB)(),
        protocolVersion: e,
        executeError: t
      }), this._trackSecureFrameTransition(ev)
    })
  }
  _handleSecureFramesRosterChange(e, t) {
    let n = [],
      r = 0,
      i = 0;
    Object.entries(e).forEach(e => {
      let [t, a] = e;
      n.push(eS(t)), null == a || 0 === a.byteLength ? (i++, this._secureFramesRosterMap.delete(eS(t))) : (r++, this._secureFramesRosterMap.set(eS(t), a))
    }), this._storeSecureFrameTransitionData(t, {
      usersAdded: r,
      usersRemoved: i,
      rosterSizeAfter: this._secureFramesRosterMap.size
    }), this.emit(Q.q.RosterMapUpdate, n)
  }
  _handleSecureFramesPrepareTransition(e, t) {
    var n;
    this.logger.info("Preparing DAVE protocol transition: ".concat(e, ", protocol version: ").concat(t)), this._secureFramesTransitionPrepareCount++;
    let r = (0, _.tB)();
    0 === t && this._trackMLSFailures({
      recovered: true,
      downgraded: true
    }), null == (n = this._connection) || n.prepareSecureFramesTransition(e, t, () => {
      this._maybeSendSecureFramesTransitionReady(e), this._storeSecureFrameTransitionData(e, {
        protocolVersion: t,
        prepareReceivedTime: r,
        prepareFinishedTime: (0, _.tB)()
      })
    })
  }
  _handleSecureFramesPrepareEpoch(e, t) {
    var n;
    this.logger.info("Preparing DAVE protocol epoch: ".concat(e, ", protocol version: ").concat(t));
    let r = e.toString();
    null == (n = this._connection) || n.prepareSecureFramesEpoch(r, t, this.trueChannelId), r === eA && (this._mlsInitReceivedTime = (0, _.tB)(), this._sendMLSKeyPackage(), this.recordEvent({
      c: 10
    }))
  }
  _sendMLSKeyPackage() {
    var e;
    null == (e = this._connection) || e.getMLSKeyPackage(e => {
      var t;
      this.logger.info("Got MLS key package, sending to RTC server"), null == (t = this._socket) || t.sendMLSKeyPackage(e)
    })
  }
  _maybeSendSecureFramesTransitionReady(e) {
    if (e !== ev) {
      var t;
      this.logger.info("Sending DAVE protocol ready for transition ID ".concat(e)), null == (t = this._socket) || t.secureFramesReadyForTransition(e), this._storeSecureFrameTransitionData(e, {
        readyTime: (0, _.tB)()
      })
    }
  }
  _handleSecureFramesExecuteTransition(e) {
    this.logger.info("Executing DAVE protocol transition: ".concat(e)), this._secureFramesTransitionExecuteCount++;
    let t = (0, _.tB)(),
      n = false;
    try {
      var r;
      null == (r = this._connection) || r.executeSecureFramesTransition(e)
    } catch (e) {
      n = true, z.A.captureException(e)
    }
    this._storeSecureFrameTransitionData(e, {
      executeReceivedTime: t,
      executeFinishedTime: (0, _.tB)(),
      executeError: n
    }), this._trackSecureFrameTransition(e)
  }
  _handleMLSExternalSenderPackage(e) {
    var t;
    this.logger.info("Received MLS external sender package"), null == (t = this._connection) || t.updateMLSExternalSender(e)
  }
  _handleMLSProposals(e, t) {
    var n;
    let r = (0, _.tB)();
    this.logger.info("Received MLS proposals"), null == (n = this._connection) || n.processMLSProposals(t, n => {
      var i, a, s;
      let o = (0, _.tB)();
      this.logger.info("Sending MLS commit welcome message"), e.sendMLSCommitWelcome(n);
      let l = null != (i = this._secureFramesNextTransitionState) ? i : this._storeSecureFrameNextTransitionData({
        firstProposalsReceivedTime: r,
        firstProposalsFinishedTime: o
      });
      l.lastProposalsReceivedTime = r, l.lastProposalsFinishedTime = o, l.totalProposalsSize = (null != (a = l.totalProposalsSize) ? a : 0) + t.byteLength, l.totalCommitWelcomeSize = (null != (s = l.totalCommitWelcomeSize) ? s : 0) + n.byteLength
    })
  }
  _handleMLSPrepareCommitTransition(e, t) {
    var n;
    this.logger.info("Received MLS commit for transition ID ".concat(e));
    let r = (0, _.tB)();
    null == (n = this._connection) || n.prepareMLSCommitTransition(e, t, (n, i, a) => {
      n ? (this._trackMLSFailures({
        recovered: true,
        downgraded: false
      }), this._mlsSessionResetStartTime = true, this._handleSecureFramesRosterChange(a, e), this._maybeSendSecureFramesTransitionReady(e)) : (this.logger.warn("Failed to process MLS commit for transition ID ".concat(e)), this._mlsSessionResetStartTime = (0, _.tB)(), this._flagMLSInvalidCommitWelcome(e), this._handleSecureFramesInit(i)), this._storeSecureFrameTransitionData(e, {
        protocolVersion: i,
        commitReceivedTime: r,
        commitFinishedTime: (0, _.tB)(),
        commitSize: t.byteLength,
        commitError: !n
      })
    })
  }
  _handleMLSWelcome(e, t) {
    var n;
    this.logger.info("Received MLS welcome for transition ID ".concat(e));
    let r = (0, _.tB)();
    null == (n = this._connection) || n.processMLSWelcome(e, t, (n, i, a) => {
      n ? (this._trackMLSFailures({
        recovered: true,
        downgraded: false
      }), this._mlsSessionResetStartTime = true, this._handleSecureFramesRosterChange(a, e), this._maybeSendSecureFramesTransitionReady(e)) : (this._mlsSessionResetStartTime = (0, _.tB)(), this._flagMLSInvalidCommitWelcome(e), this._sendMLSKeyPackage()), this._storeSecureFrameTransitionData(e, {
        protocolVersion: i,
        welcomeReceivedTime: r,
        welcomeFinishedTime: (0, _.tB)(),
        welcomeSize: t.byteLength,
        welcomeError: !n
      })
    })
  }
  getMLSPairwiseFingerprint(e, t, n) {
    var r;
    null == (r = this._connection) || r.getMLSPairwiseFingerprint(e, t, n)
  }
  _flagMLSInvalidCommitWelcome(e) {
    var t;
    this.logger.info("Flagging invalid MLS commit/welcome for transition ID ".concat(e)), null == (t = this._socket) || t.flagMLSInvalidCommitWelcome(e)
  }
  _handleMLSFailure(e, t) {
    let n = (0, _.tB)(),
      r = this._nextFailureId++;
    this.recordEvent({
      c: 3,
      i: r
    }), this._mlsFailures.push({
      id: r,
      source: e,
      reason: t,
      count: 1,
      countDuringReset: +(null != this._mlsSessionResetStartTime),
      firstOccurrence: n,
      timeSinceInit: null != this._mlsInitReceivedTime ? n - this._mlsInitReceivedTime : true,
      eventLog: eN()
    }), e.includes("GetPersistedKeyPair") ? m.A.show({
      title: eu.intl.string(eu.t.fJUioH),
      body: eu.intl.string(eu.t.CQLWvo)
    }) : this._alertMLSFailureDebouced(e, t)
  }
  _trackMLSFailures(e) {
    let {
      recovered: t,
      downgraded: n
    } = e, r = (0, _.tB)(), i = this.getMediaSessionId(), a = null != this._mlsSessionResetStartTime ? r - this._mlsSessionResetStartTime : true;
    for (let {
        id: e,
        source: s,
        reason: o,
        count: l,
        countDuringReset: c,
        firstOccurrence: u,
        timeSinceInit: d,
        eventLog: f
      }
      of this._mlsFailures) H.default.track(el.HAw.MLS_FAILURES, e_(ef({}, this._getAnalyticsProperties()), {
      media_session_id: i,
      parent_media_session_id: this.parentMediaSessionId,
      failure_id: e,
      failure_time: u - this._createdTime,
      failure_source: s,
      failure_reason: o,
      failure_count: l,
      failure_was_recovered: t,
      failure_cleared_by_downgrade: n,
      time_since_first_occurrence: r - u,
      time_since_last_reset: a,
      failure_count_during_reset: c,
      time_since_init: d,
      event_history: f,
      connection_serial: this._connectionSerial
    }));
    this._mlsFailures = []
  }
  _alertMLSFailure(e, t) {
    let n = B.default.getCurrentUser();
    ((null == n ? true : n.isStaff()) || (null == n ? true : n.isStaffPersonal())) && m.A.show({
      title: "MLS Error in ".concat(e),
      body: "Error: ".concat(t, "! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!")
    })
  }
  getExtraConnectionOptions() {
    return {}
  }
  shouldReportPeriodicStats(e) {
    if (e.length > 10) returnfalse;
    let t = this.getMediaSessionId();
    return null != t && l().v3(t) % 100 <= 5
  }
  getInputDeviceName() {
    var e;
    let t = U.A.getInputDeviceId();
    return null == (e = U.A.getInputDevices()[t]) ? true : e.name
  }
  getOutputDeviceName() {
    var e;
    let t = U.A.getOutputDeviceId();
    return null == (e = U.A.getOutputDevices()[t]) ? true : e.name
  }
  getVideoDeviceName() {
    var e;
    let t = U.A.getVideoDeviceId();
    return null == (e = U.A.getVideoDevices()[t]) ? true : e.name
  }
  getInputDeviceSampleRate() {
    var e, t;
    return null != (e = null == (t = this._voiceQuality) ? true : t.getAudioDeviceStats().input_device_session_sample_rate) ? e : null
  }
  constructor({
    userId: e,
    sessionId: t,
    guildId: n,
    channelId: r,
    context: i = ec.x.DEFAULT,
    streamServerId: a,
    streamChannelId: o,
    parentMediaSessionId: l,
    joinVoiceId: d
  }) {
    super(), ed(this, "context", true), ed(this, "userId", true), ed(this, "sessionId", true), ed(this, "guildId", true), ed(this, "parentMediaSessionId", true), ed(this, "hostname", true), ed(this, "state", true), ed(this, "_videoQuality", true), ed(this, "logger", true), ed(this, "streamServerId", true), ed(this, "streamChannelId", true), ed(this, "_channelId", true), ed(this, "_nextChannelId", true), ed(this, "joinVoiceId", true), ed(this, "channelIds", true), ed(this, "_endpoint", true), ed(this, "port", true), ed(this, "token", true), ed(this, "protocol", true), ed(this, "voiceVersion", true), ed(this, "rtcWorkerVersion", true), ed(this, "_socket", true), ed(this, "_backoff", true), ed(this, "_destroyed", true), ed(this, "_pings", true), ed(this, "_pingBadCount", true), ed(this, "_pingTimeouts", true), ed(this, "_mediaSessionId", true), ed(this, "_voiceQuality", true), ed(this, "_voiceQualityPeriodicStatsInterval", true), ed(this, "_voiceQualityPeriodicStatsSequenceId", true), ed(this, "_systemResponsiveness", true), ed(this, "_systemResources", true), ed(this, "_noiseCancellationError", true), ed(this, "_voiceDuration", true), ed(this, "_videoHealthManager", true), ed(this, "_sentVideo", true), ed(this, "_videoDecoderFallbackSuppressed", true), ed(this, "_outboundLossRate", true), ed(this, "_recordingEnabled", true), ed(this, "_selectedExperiments", true), ed(this, "_localMediaSinkWantsManager", true), ed(this, "_goLiveQualityManager", true), ed(this, "_remoteVideoSinkWants", true), ed(this, "_connection", true), ed(this, "_mediaEngineConnectionId", true), ed(this, "_createdTime", true), ed(this, "_connectStartTime", true), ed(this, "_connectCompletedTime", true), ed(this, "_rtcConnectionId", true), ed(this, "_connectCount", true), ed(this, "_connectionSerial", true), ed(this, "_connected", true), ed(this, "_connecting", true), ed(this, "_encountered_socket_failure", true), ed(this, "_inputDetected", true), ed(this, "_encryptionMode", true), ed(this, "stateHistory", true), ed(this, "_supportedBandwidthEstimationExperiments", true), ed(this, "_bandwidthEstimationExperiment", true), ed(this, "_secureFramesState", true), ed(this, "_userIds", true), ed(this, "_secureFramesRosterMap", new Map), ed(this, "reconnecting", false), ed(this, "_nextFailureId", 0), ed(this, "_mlsFailures", []), ed(this, "_secureFramesTransitionStates", new Map), ed(this, "_secureFramesNextTransitionState", true), ed(this, "_secureFramesMaxConcurrentTransitions", 0), ed(this, "_secureFramesTransitionPrepareCount", 0), ed(this, "_secureFramesTransitionExecuteCount", 0), ed(this, "_secureFramesLastBecameAloneTime", true), ed(this, "_mlsSessionResetStartTime", true), ed(this, "_mlsInitReceivedTime", true), ed(this, "_numNoiseCancellationChanges", 0), ed(this, "_fetchAsyncResourcesPromise", true), ed(this, "_lastSentSpeakingStatus", true), ed(this, "_lastSentSSRC", true), ed(this, "powerMonitorListener", true), ed(this, "reconnect", () => {
      this.recordEvent({
        c: 7
      });
      let e = this._socket;
      null != e && (this._connected && (this._connectStartTime = (0, _.tB)()), this._connecting || (this._trackVoiceConnectionConnecting(), this._connecting = true, this._encountered_socket_failure = false), this._connectCount++, this.reconnecting = true, e.close(), e.connect())
    }), ed(this, "_alertMLSFailureDebouced", s()(this._alertMLSFailure, 100)), ed(this, "_handleNetworkOnline", () => {
      this.expeditedHeartbeat(5e3, "network detected online.")
    }), ed(this, "_handleNetworkOffline", () => {
      this.expeditedHeartbeat(15e3, "network detected offline.", false)
    }), ed(this, "_handleNoRoute", () => {
      var e;
      null == (e = this._socket) || e.noRoute()
    }), ed(this, "_handlePowerResume", () => {
      this.expeditedHeartbeat(5e3, "power monitor resumed")
    }), ed(this, "_handleVoiceQualityPeriodicsStats", () => {
      if (null != this._voiceQuality) {
        let e = this._voiceQuality.getPeriodicStats();
        if (this.shouldReportPeriodicStats(e))
          for (let t of e) H.default.track(el.HAw.VOICE_QUALITY_PERIODIC_STATS, e_(ef({}, this._getAnalyticsProperties()), {
            media_session_id: this.getMediaSessionId(),
            sender_user_id: t.userId,
            hostname: this.hostname,
            frame_op_silent: t.silent,
            frame_op_normal: t.normal,
            frame_op_merged: t.merged,
            frame_op_expanded: t.expanded,
            frame_op_accelerated: t.accelerated,
            frame_op_preemptive_expanded: t.preemptiveExpanded,
            frame_op_cng: t.cng,
            accelerate_rate: t.accelerateRate,
            expand_rate: t.expandRate,
            preemptive_expand_rate: t.preemptiveExpandRate,
            speech_expand_rate: t.speechExpandRate,
            duration_ms: t.durationMs,
            sequence_id: this._voiceQualityPeriodicStatsSequenceId,
            input_device: this.getInputDeviceName(),
            output_device: this.getOutputDeviceName(),
            ping_average: Math.round(this.getAveragePing()),
            ping_bad_count: this._pingBadCount,
            parent_media_session_id: this.parentMediaSessionId
          }));
        this._voiceQualityPeriodicStatsSequenceId++
      }
    }), ed(this, "getAudioDeviceStates", () => ({
      input_device: this.getInputDeviceName(),
      input_device_count: Object.keys(U.A.getInputDevices()).length,
      output_device: this.getOutputDeviceName(),
      output_device_count: Object.keys(U.A.getOutputDevices()).length
    })), ed(this, "getVideoDeviceStates", () => ({
      camera_device: this.getVideoDeviceName(),
      camera_device_count: Object.keys(U.A.getVideoDevices()).length
    })), ed(this, "_trackVoiceConnectionConnecting", () => {
      let e = k.A.getChannel(this.channelId),
        t = null == e ? true : e.type;
      H.default.track(el.HAw.VOICE_CONNECTION_CONNECTING, e_(ef({}, this.getAudioDeviceStates(), this.getVideoDeviceStates()), {
        guild_id: this.guildId,
        channel_id: this.channelId,
        rtc_connection_id: this.getRTCConnectionId(),
        hostname: this.hostname,
        connect_count: this._connectCount,
        context: this.context,
        channel_type: t,
        participant_type: this.getVoiceParticipantType(),
        is_muted: U.A.isMute(),
        join_voice_id: this.joinVoiceId,
        connection_serial: this._connectionSerial
      }))
    }), ed(this, "incomingVideoEnabledChanged", e => {
      var t, n;
      null == (t = this._goLiveQualityManager) || t.onIncomingVideoEnabled(e), null == (n = this._videoQuality) || n.setOcclusionIncomingVideoEnabled(e)
    }), ed(this, "windowVisibilityChanged", e => {
      var t;
      null == (t = this._videoQuality) || t.setWindowOcclusionState(!e)
    }), this.context = i, this.recordEvent({
      c: 0
    }), this._fetchAsyncResourcesPromise = U.A.fetchAsyncResources().catch(e => {
      z.A.captureException(e)
    }), this.userId = e, this.sessionId = t, this.guildId = n, this._channelId = r, this.channelIds = new Set([r]), this.streamServerId = a, this.streamChannelId = o, this.parentMediaSessionId = l, this.joinVoiceId = d, this._connectionSerial = eI++, this.logger = new O.A("RTCConnection(".concat(this.trueServerId, ", ").concat(this.context, ")")), this.logger.enableNativeLogger(true), this._endpoint = null, this.hostname = null, this.port = null, this.token = null, this.voiceVersion = null, this.rtcWorkerVersion = null, this.state = el.S7L.AWAITING_ENDPOINT, this.stateHistory = new $.M(this.state), this._socket = null, this._backoff = new u.A(1e3, 1e4), this._destroyed = false, this._pings = [], this._pingBadCount = 0, this._pingTimeouts = [], this._mediaSessionId = null, this._voiceQuality = null, this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, this._systemResponsiveness = null, this._noiseCancellationError = 0, this._voiceDuration = null, this._videoQuality = null, this._videoHealthManager = null, this._sentVideo = false, this._videoDecoderFallbackSuppressed = false, this._outboundLossRate = null, this._createdTime = (0, _.tB)(), this._connectStartTime = 0, this._connectCompletedTime = 0, this._rtcConnectionId = (0, c.A)(), this._connectCount = 0, this._connected = false, this._connecting = false, this._encountered_socket_failure = false, this._inputDetected = false, this._selectedExperiments = [], this._secureFramesState = null, this._userIds = new Set([e]), this._secureFramesRosterMap.clear(), this._mlsFailures = [], this._nextFailureId = 0, this._mediaEngineConnectionId = null, this.reconnecting = false, this._lastSentSpeakingStatus = 0, this._lastSentSSRC = true;
    const f = U.A.supports(ec.O5.FIRST_FRAME_CALLBACK) && U.A.supports(ec.O5.REMOTE_USER_MULTI_STREAM);
    if (i === ec.x.DEFAULT) {
      var p;
      const t = (null == (p = k.A.getChannel(this.channelId)) ? true : p.type) === el.rbe.GUILD_STAGE_VOICE;
      this._localMediaSinkWantsManager = new ee.Ay(e, t, f), this._localMediaSinkWantsManager.on(ee.Nb.Update, e => {
        if (this.state === el.S7L.RTC_CONNECTED && null != this._socket) {
          var t;
          this.logger.info("Media sink wants: ".concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null == (t = this._connection) || t.setLocalVideoSinkWants(e)
        }
      }), this._localMediaSinkWantsManager.on(ee.Nb.UserSSRCUpdate, (e, t, n) => {
        var r;
        null == (r = this._connection) || r.createUser(e, t, n)
      })
    } else i === ec.x.STREAM && (this._goLiveQualityManager = new S.A(true), this._goLiveQualityManager.on(S.j.RequestedSSRCsUpdate, (e, t, n) => {
      var r;
      null == (r = this._connection) || r.createUser(e, t, n)
    }), this._goLiveQualityManager.on(S.j.RequestedStreamsUpdate, e => {
      if (this.state === el.S7L.RTC_CONNECTED && null != this._socket) {
        var t;
        this.logger.info("Go Live Media sink wants: ".concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null == (t = this._connection) || t.setLocalVideoSinkWants(e)
      }
    }));
    this._remoteVideoSinkWants = ee.AE, eo.X.on(eo.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged), eo.X.on(eo.N.WindowVisibilityChanged, this.windowVisibilityChanged), V.Ay.shouldRecordNextConnection() ? (this._recordingEnabled = true, E.Et(false)) : this._recordingEnabled = false, W.A.addOnlineCallback(this._handleNetworkOnline), W.A.addOfflineCallback(this._handleNetworkOffline), (0, K.isDesktop)() && (this.powerMonitorListener = X.A.remotePowerMonitor.on("resume", this._handlePowerResume)), this._supportedBandwidthEstimationExperiments = [], this._bandwidthEstimationExperiment = null, U.A.getMediaEngine().getSupportedBandwidthEstimationExperiments(e => {
      this._supportedBandwidthEstimationExperiments = e
    })
  }
}