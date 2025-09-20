/** Chunk was on web.js **/
/** chunk id: 861687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eS
}), require("./35282.js"), require("./539854.js"), require("./388685.js"), require("./49124.js"), require("./415506.js"), require("./457542.js");
var Chunk654861 = require("./654861.js"),
  i = require.n(Chunk654861),
  Chunk954955 = require("./954955.js"),
  o = require.n(Chunk954955),
  Chunk108131 = require("./108131.js"),
  l = require.n(Chunk108131),
  Chunk772848 = require("./772848.js"),
  Chunk261470 = require("./261470.js"),
  Chunk47770 = require("./47770.js"),
  Chunk46973 = require("./46973.js"),
  Chunk379649 = require("./379649.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk846027 = require("./846027.js"),
  Chunk304680 = require("./304680.js"),
  Chunk547727 = require("./547727.js"),
  Chunk710845 = require("./710845.js"),
  Chunk75060 = require("./75060.js"),
  Chunk631053 = require("./631053.js"),
  Chunk148959 = require("./148959.js"),
  Chunk815644 = require("./815644.js"),
  Chunk926951 = require("./926951.js"),
  Chunk148807 = require("./148807.js"),
  Chunk166884 = require("./166884.js"),
  Chunk450109 = require("./450109.js"),
  Chunk118445 = require("./118445.js"),
  Chunk311473 = require("./311473.js"),
  Chunk615830 = require("./615830.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk226961 = require("./226961.js"),
  Chunk936349 = require("./936349.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk12647 = require("./12647.js"),
  Chunk630388 = require("./630388.js"),
  Chunk931619 = require("./931619.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk591759 = require("./591759.js"),
  Chunk579806 = require("./579806.js"),
  Chunk859401 = require("./859401.js"),
  Chunk437263 = require("./437263.js"),
  Chunk423343 = require("./423343.js"),
  Chunk685756 = require("./685756.js"),
  Chunk655306 = require("./655306.js"),
  Chunk583794 = require("./583794.js"),
  Chunk179654 = require("./179654.js"),
  Chunk36902 = require("./36902.js"),
  Chunk824096 = require("./824096.js"),
  Chunk53114 = require("./53114.js"),
  Chunk174532 = require("./174532.js"),
  Chunk895066 = require("./895066.js"),
  Chunk798681 = require("./798681.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function es(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      es(e, t, n[t])
    })
  }
  return e
}

function ec(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eu(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ec(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ed = /^https/.test("https:") ? "wss:" : "ws:",
  ef = 200,
  e_ = 20,
  ep = 500,
  eh = 250,
  em = 10,
  eg = 5,
  eE = "1",
  eb = 0;

function ey(e) {
  return e
}
let eO = 0,
  ev = [],
  eI = 50;

function eT() {
  let e = [],
    t = (0, Chunk379649.zO)();
  for (let n of ev) module.push(eu(el({}, require), {
    t: exports - require.t
  }));
  return JSON.stringify(module)
}
class eS extends Chunk47770.Z {
  recordEvent(e) {
    for (ev.push(eu(el({}, e), {
        t: (0, _.zO)(),
        n: this._connectionSerial
      })); ev.length > eI;) ev.shift()
  }
  get quality() {
    let e = this.getLastPing();
    return this.state !== Chunk981631.hes.RTC_CONNECTED || true === module ? Chunk981631.IE4.UNKNOWN : module > ep || null != this._outboundLossRate && this._outboundLossRate > em ? Chunk981631.IE4.BAD : module > eh || null != this._outboundLossRate && this._outboundLossRate > eg ? Chunk981631.IE4.AVERAGE : Chunk981631.IE4.FINE
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
      e = "".concat(ed, "//").concat(e);
      let {
        hostname: n,
        port: r
      } = null != (t = H.Z.toURLSafe(e)) ? t : {}, i = null != r ? parseInt(r) : NaN;
      null != n && (80 === i || 443 === i) && (e = "".concat(ed, "//").concat(n)), this._endpoint = e + "/", this.hostname = n
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
    if (this.endpoint = e, this.token = t, (n !== this.endpoint || r !== t) && (this._cleanupSocket(), this._mediaSessionId = null, null != n && (this._rtcConnectionId = (0, c.Z)(), p.Z.dispatch({
        type: "RTC_CONNECTION_UPDATE_ID",
        connection: this
      }))), null == this.endpoint) return void this.setState(ea.hes.AWAITING_ENDPOINT);
    let i = this._socket;
    null != i && this._cleanupSocket(), null != this._nextChannelId && (this._channelId = this._nextChannelId, this._nextChannelId = true), (i = this._socket = new q.Z(this.endpoint, this.context)).on(q.V.Connecting, this._handleConnecting.bind(this, i)), i.on(q.V.Connect, this._handleConnect.bind(this, i)), i.on(q.V.Disconnect, this._handleDisconnect.bind(this, i)), i.on(q.V.Resuming, this._handleResuming.bind(this, i)), i.on(q.V.Ready, this._handleReady.bind(this, i)), i.on(q.V.Speaking, this._handleSpeaking.bind(this, i)), i.on(q.V.Video, this._handleVideo.bind(this, i)), i.on(q.V.Ping, this._handleControlPing.bind(this)), i.on(q.V.ClientDisconnect, this._handleClientDisconnect.bind(this)), i.on(q.V.ClientConnect, this._handleClientConnect.bind(this)), i.on(q.V.Codecs, this._handleCodecs.bind(this)), i.on(q.V.MediaSessionId, this._handleMediaSessionId.bind(this)), i.on(q.V.MediaSinkWants, this._handleMediaSinkWants.bind(this)), i.on(q.V.VoiceBackendVersion, this._handleCodeVersion.bind(this)), i.on(q.V.KeyframeInterval, this._handleKeyframeInterval.bind(this)), i.on(q.V.Flags, this.handleFlags.bind(this)), i.on(q.V.Platform, this.handlePlatform.bind(this)), i.on(q.V.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), i.on(q.V.SecureFramesInit, this._handleSecureFramesInit.bind(this)), i.on(q.V.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), i.on(q.V.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), i.on(q.V.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), i.on(q.V.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), i.on(q.V.MLSProposals, this._handleMLSProposals.bind(this, i)), i.on(q.V.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), i.on(q.V.MLSWelcome, this._handleMLSWelcome.bind(this)), i.on(q.V.ReceiveMessage, this._recordMessageEvent.bind(this, 4)), i.on(q.V.SendMessage, this._recordMessageEvent.bind(this, 5)), this._connectStartTime = (0, _.zO)(), this._connectCount++, this._connecting = true, null != i && this._socket === i && (this._trackVoiceConnectionConnecting(), this._encountered_socket_failure = false, i.connect())
  }
  _recordMessageEvent(e, t) {
    this.recordEvent({
      c: e,
      o: t
    })
  }
  destroy() {
    var e, t, n, r, i, a, o, s;
    if (this.logger.info("Destroy RTCConnection"), Chunk931619.Z.removeOnlineCallback(this._handleNetworkOnline), Chunk931619.Z.removeOfflineCallback(this._handleNetworkOffline), (0, Chunk358085.isDesktop)() && (null == (o = (s = this).powerMonitorListener) || o.call(Chunk108131)), this.recordEvent({
        c: 1
      }), Chunk798681.w.off(Chunk798681.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged), Chunk798681.w.off(Chunk798681.e.WindowVisibilityChanged, this.windowVisibilityChanged), this._backoff.cancel(), this._cleanupSocket(), null == (e = this._voiceQuality) || module.stop(), null == (t = this._voiceQuality) || exports.removeAllListeners(), this._voiceQuality = null, clearInterval(this._voiceQualityPeriodicStatsInterval), this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, null == (n = this._systemResponsiveness) || require.stop(), this._systemResponsiveness = null, this._noiseCancellationError = 0, null == (r = this._voiceDuration) || Chunk654861.stop(), this._voiceDuration = null, null == (i = this._videoQuality) || i.stop(), this._videoQuality = null, this._videoHealthManager = null, this._secureFramesState = null, null == (a = this._localMediaSinkWantsManager) || Chunk954955.reset(), null != this._connection) {
      let e = this._connection;
      this._connection = null, module.destroy()
    }
    this.removeAllListeners(), this._destroyed = true
  }
  shouldSendSpeaking(e, t) {
    if ((0, F.isWeb)()) returntrue;
    let n = (0, B.yE)(e, eo.Dg.PRIORITY),
      r = (0, B.yE)(this._lastSentSpeakingStatus, eo.Dg.PRIORITY);
    return (this._lastSentSSRC !== t || n !== r) && (true !== this._lastSentSSRC || e !== eo.Dg.NONE) && (this._lastSentSSRC === t || e !== eo.Dg.NONE) && (this._lastSentSpeakingStatus = e, this._lastSentSSRC = t, true)
  }
  sendSpeaking(e, t) {
    let n = this._socket;
    if (null == n || !this.shouldSendSpeaking(e, t)) return;
    let r = x.Z.getPacketDelay();
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
    let e = this._pings.slice(0, Math.min(this._pings.length, e_));
    return 0 === module.length || null == this._socket ? 0 : module.reduce((e, t) => e + t.value, 0) / module.length
  }
  getLastPing() {
    var e;
    return null == (e = this._pings[this._pings.length - 1]) ? true : module.value
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
    let e = this._connectCompletedTime > 0 ? (0, Chunk379649.zO)() - this._connectCompletedTime : 0;
    return module > 0 ? module : 0
  }
  getDurationSeconds() {
    return this.getDuration() / 1e3
  }
  getVoiceFilterSpeakingDurationMs() {
    return null == this._voiceDuration ? null : this._voiceDuration.getVoiceFilterSpeakingDurationMs()
  }
  getPacketStats() {
    var e;
    return null == (e = this._voiceQuality) ? true : module.getPacketStats()
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
  getRemoteVideoSinkWants() {
    return this._remoteVideoSinkWants
  }
  pauseStatsCollectionForUser(e, t) {
    let n = this.getOrCreateVideoQuality();
    if (null == n) return void this.logger.error("pauseStatsCollectionForUser: Unable to create videoQuality.");
    t ? n.addUserToStatsCollectionPausedSet(e) : n.removeUserFromStatsCollectionPausedSet(e)
  }
  getOutboundStats() {
    let e = this.getOrCreateVideoQuality();
    return null != module ? module.getOutboundStats() : null
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
    }), this.logger.info("RTC connection state: ".concat(this.state, " => ").concat(e)), this.state = e, this.stateHistory.update(this.state), this.emit(K.z.State, e, {
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
    null != exports && exports.resetBackoff(module) && this._backoff.cancel()
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
    t === this.context && (t === eo.Yn.DEFAULT ? null == (r = this._localMediaSinkWantsManager) || r.setSimulcastDebugOverride(e, n) : null == (i = this._goLiveQualityManager) || i.setSimulcastDebugOverride(n))
  }
  setVideoSize(e, t, n) {
    var r, i;
    null == (r = this._localMediaSinkWantsManager) || r.setVideoSize(e, t * n), null == (i = this._goLiveQualityManager) || i.setVideoSize(e, t, n)
  }
  clearJoinVoiceId() {
    this.joinVoiceId = null
  }
  setNextChannelId(e) {
    this.recordEvent({
      c: 9
    });
    let t = D.Z.getChannel(this.channelId),
      n = null == t ? true : t.type;
    this.logger.info("Updating channel: ".concat(e, "(").concat(n, ")")), this._nextChannelId = e, this.channelIds.add(e)
  }
  getNextChannelId() {
    var e;
    return null != (e = this._nextChannelId) ? module : this._channelId
  }
  get channelId() {
    return this._channelId
  }
  get trueServerId() {
    var e, t;
    return null != (t = null != (e = this.streamServerId) ? module : this.guildId) ? exports : this.channelId
  }
  get trueChannelId() {
    return null == this.streamServerId ? this.channelId : null != this.streamChannelId ? this.streamChannelId : i()(this.streamServerId).prev().toString()
  }
  _cleanupSocket() {
    let e = this._socket;
    null != module && (module.close(), module.removeAllListeners(), this._socket = null)
  }
  _chooseExperiments(e) {
    let t = [];
    if (this._recordingEnabled && t.push("connection_log"), x.Z.supports(eo.AN.FIXED_KEYFRAME_INTERVAL) && t.push("fixed_keyframe_interval"), 0 !== this._supportedBandwidthEstimationExperiments.length) {
      let e = A.Z.workerExperimentString();
      null != e && t.push(e)
    }
    this.context === eo.Yn.DEFAULT && (0, I.f)("RtcConnection").enabled && t.push("audio_transport_cc"), t.push("keyframe_on_join"), N.Z.getCurrentConfig({
      location: "_chooseExperiments"
    }, {
      autoTrackExposure: true
    }).enabled && t.push("network_aware_socket");
    let n = S.Z.getCurrentConfig({
      location: "_chooseExperiments"
    }, {
      disable: !(0, F.isWindows)(),
      autoTrackExposure: true
    });
    n.prewarm && t.push("prewarm_cuda_cache"), n.clear && t.push("clear_cuda_cache"), this._selectedExperiments = t
  }
  _handleConnecting(e) {
    if (null != this.endpoint) {
      let e = D.Z.getChannel(this.channelId),
        t = null == e ? true : e.type;
      this.logger.info("Connecting to RTC server ".concat(this.endpoint, ", rtc-connection-id: ").concat(this.getRTCConnectionId(), ", channel: ").concat(this.channelId, "(").concat(t, ")"))
    }
    this.setState(ea.hes.CONNECTING)
  }
  _handleConnect(e) {
    let t = this.token;
    if (null == t) throw Error("RTCConnection._handleConnect(...): Token is missing.");
    this.logger.info("Connected to RTC server."), this._fetchAsyncResourcesPromise.finally(() => {
      e.identify({
        serverId: this.trueServerId,
        channelId: this.trueChannelId,
        userId: this.userId,
        sessionId: this.sessionId,
        token: t,
        maxDaveProtocolVersion: x.Z.getSupportedSecureFramesProtocolVersion(),
        video: x.Z.supports(eo.AN.VIDEO),
        streamParameters: x.Z.getVideoStreamParameters(this.context)
      }), this.setState(ea.hes.AUTHENTICATING)
    })
  }
  _handleDisconnect(e, t, n, r) {
    var i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y, v, I, T, S, A;
    this.logger.info("Disconnected from RTC server, clean: ".concat(t, ", code: ").concat(n, ", reason: ").concat(r, ", state: ").concat(this.state)), t || !this._connecting || this._encountered_socket_failure || (U.default.track(ea.rMx.VOICE_CONNECTION_SOCKET_FAILURE, eu(el({}, this._getAnalyticsProperties()), {
      hostname: this.hostname,
      connect_count: this._connectCount,
      code: n,
      reason: r
    })), this._encountered_socket_failure = true), L.Z.getRemoteDisconnectVoiceChannelId() === this.channelId && (null == (l = this._connection) || l.wasRemoteDisconnected());
    let N = "Force Close" !== r;
    if (N) {
      let e = this._backoff.fail(this.reconnect);
      this.logger.warn("Disconnect was not clean! reason=".concat(r, ". Reconnecting in ").concat((e / 1e3).toFixed(2), " seconds."))
    }
    if (this.state !== ea.hes.DISCONNECTED) {
      let e = this._videoQuality;
      if (null != e && this.context === eo.Yn.DEFAULT) {
        if (e.stop(), this._sentVideo) {
          e.getOutboundStats().forEach(t => {
            var n;
            (null != (n = t.num_frames) ? n : 0) > 0 && U.default.track(ea.rMx.VIDEO_STREAM_ENDED, eu(el(eu(el({}, this._getAnalyticsProperties()), {
              app_hardware_acceleration_enabled: G.Z.getAppHardwareAccelerationEnabled(),
              media_session_id: this.getMediaSessionId(),
              sender_user_id: this.userId,
              reason: r,
              participant_type: "sender",
              guild_region: M.Z.getRegion(this.hostname),
              hostname: this.hostname,
              hardware_enabled: x.Z.getHardwareEncoding()
            }), t, e.getNetworkStats(), e.getCodecUsageStats("sender", this.userId), this._soundshareStats.getStats()), {
              device_performance_class: (0, O.Z)()
            }))
          });
          let t = e.getCameraDurationStats();
          null != t && t.camera_enabled_duration > 0 && U.default.track(ea.rMx.VIDEO_CALL_ENDED, eu(el({}, t), {
            media_session_id: this.getMediaSessionId()
          }))
        }
        e.getInboundParticipants().forEach(t => {
          var n;
          let i = e.getInboundStats(t);
          (null != (n = null == i ? true : i.num_frames) ? n : 0) > 0 && U.default.track(ea.rMx.VIDEO_STREAM_ENDED, el(eu(el({}, this._getAnalyticsProperties()), {
            app_hardware_acceleration_enabled: G.Z.getAppHardwareAccelerationEnabled(),
            media_session_id: this.getMediaSessionId(),
            sender_user_id: t,
            reason: r,
            participant_type: "receiver",
            guild_region: M.Z.getRegion(this.hostname),
            hostname: this.hostname,
            hardware_enabled: x.Z.getHardwareEncoding()
          }), i, e.getNetworkStats(), e.getCodecUsageStats("receiver", t)))
        })
      }
      let t = this.getMediaSessionId();
      x.Z.getMediaEngine().getCodecSurvey().then(e => {
        let n = JSON.parse(e);
        if (null == n || null == n.available_video_encoders || null == n.available_video_decoders) throw Error("codec survey is not available");
        U.default.track(ea.rMx.VOICE_CODEC_DETECTED, eu(el({}, n), {
          rtc_connection_id: this.getRTCConnectionId(),
          media_session_id: t
        }))
      }).catch(e => {
        this.logger.warn(e)
      }), this._trackMLSFailures({
        recovered: false
      });
      let n = M.Z.shouldIncludePreferredRegion() ? M.Z.getPreferredRegion() : null,
        i = x.Z.getSettings(),
        a = D.Z.getChannel(this.channelId),
        o = null == (u = C.Z.getConnectionStats(this.getMediaEngineConnectionId())) || null == (c = u.stats.rtp.outbound.find(e => "audio" === e.type)) ? true : c.sampleRateMismatchPercent,
        s = eu(el(eu(el({}, this._getAnalyticsProperties()), {
          hostname: this.hostname,
          port: this.port,
          protocol: this.protocol,
          reconnect: N,
          reason: r,
          duration: this.getDuration()
        }), null == (d = this._voiceQuality) ? true : d.getMosStats(), null == (f = this._voiceQuality) ? true : f.getPacketStats(), null == (_ = this._voiceQuality) ? true : _.getBytesStats(), null == (p = this._voiceQuality) ? true : p.getBufferStats(), null == (h = this._voiceQuality) ? true : h.getNetworkStats(), null == (m = this._voiceQuality) ? true : m.getSystemResourceStats(), null == (g = this._voiceQuality) ? true : g.getFrameOpStats(), null == (E = this._voiceQuality) ? true : E.getDurationStats(), null == (b = this._voiceQuality) ? true : b.getTransportStats(), null == (y = this._voiceQuality) ? true : y.getE2EEStats(), null == (v = this._voiceQuality) ? true : v.getAudioDeviceStats(), null == (I = this._voiceQuality) ? true : I.getAudioLevelStats(), null == (T = this._voiceDuration) ? true : T.getDurationStats(), this.getAudioDeviceStates(), null == (S = this._systemResponsiveness) ? true : S.getPttQueueLatencyStats()), {
          num_noise_cancellation_changes: this._numNoiseCancellationChanges,
          media_session_id: this.getMediaSessionId(),
          channel_bitrate: null != a ? a.bitrate : null,
          cloudflare_best_region: n,
          connect_count: this._connectCount,
          ping_average: Math.round(this.getAveragePing()),
          ping_bad_count: this._pingBadCount,
          ping_timeout: this._pingTimeouts.length,
          input_detected: this._inputDetected,
          no_input_detected_notice: x.Z.getNoInputDetectedNotice(),
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
          encryption_mode: this._encryptionMode,
          channel_count: this.channelIds.size,
          device_performance_class: (0, O.Z)(),
          num_fast_udp_reconnects: null != this._connection ? null == (A = this._connection) ? true : A.getNumFastUdpReconnects() : null,
          parent_media_session_id: this.parentMediaSessionId,
          audio_subsystem: x.Z.getMediaEngine().getAudioSubsystem(),
          audio_layer: x.Z.getMediaEngine().getAudioLayer(),
          automatic_audio_subsystem: i.automaticAudioSubsystem,
          participant_type: this.getVoiceParticipantType(),
          audio_capture_sample_rate_mismatch_percent: o,
          krisp_sdk_version: x.Z.getState().krispVersion,
          secure_frames_max_concurrent_transitions: this._secureFramesMaxConcurrentTransitions,
          secure_frames_transition_prepare_count: this._secureFramesTransitionPrepareCount,
          secure_frames_transition_execute_count: this._secureFramesTransitionExecuteCount,
          vad_use_advanced_voice_activity: i.modeOptions.vadUseKrisp,
          soundshare_experimental: x.Z.getExperimentalSoundshare(),
          join_voice_id: this.joinVoiceId
        });
      Promise.all([(async () => {
        var e, t;
        return null != (t = await (null == (e = this._systemResources) ? true : e.getBatteryLevelStats())) ? t : {
          batteryUsageRounded: null
        }
      })(), R.Z.getKrispModel(), x.Z.getKrispEnableStats() ? x.Z.getMediaEngine().getNoiseCancellationStats() : Promise.resolve(null), x.Z.getMediaEngine().getSystemMicrophoneMode()]).then(e => {
        let [{
          batteryUsageRounded: t
        }, n, r, i] = e;
        U.default.track(ea.rMx.VOICE_DISCONNECT, eu(el({}, s), {
          battery_usage: t,
          krisp_nc_model: n,
          duration_low_noise_detected_ms: null == r ? true : r.lowNoiseMs,
          duration_medium_noise_detected_ms: null == r ? true : r.mediumNoiseMs,
          duration_high_noise_detected_ms: null == r ? true : r.highNoiseMs,
          duration_noise_cancellation_voice_detected_ms: null == r ? true : r.talkTimeMs,
          system_microphone_mode: i
        }))
      }), this._trackRemainingSecureFrameTransitions()
    }
    if (this._pingTimeouts = [], this._pings = [], this._connectCompletedTime = 0, this._pingBadCount = 0, this._inputDetected = false, this._mediaSessionId = null, null == (i = this._voiceQuality) || i.stop(), this._voiceQuality = null, clearInterval(this._voiceQualityPeriodicStatsInterval), this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, this._noiseCancellationError = 0, this._numNoiseCancellationChanges = 0, null == (a = this._voiceDuration) || a.stop(), this._voiceDuration = null, null == (o = this._videoQuality) || o.stop(), this._videoQuality = null, this._videoHealthManager = null, null == (s = this._localMediaSinkWantsManager) || s.reset(), this._secureFramesState = null, this._userIds = new Set([this.userId]), this._secureFramesRosterMap.clear(), this._secureFramesTransitionStates.clear(), this._secureFramesNextTransitionState = true, this._secureFramesMaxConcurrentTransitions = 0, this._secureFramesTransitionPrepareCount = 0, this._secureFramesTransitionExecuteCount = 0, null != this._connection) {
      let e = this._connection;
      this._connection = null, e.destroy()
    }
    this.setState(ea.hes.DISCONNECTED, {
      willReconnect: N
    })
  }
  _handleResuming(e) {
    var t, n;
    null == (t = this._connection) || t.fastUdpReconnect(), null == (n = this._connection) || n.clearAllSpeaking()
  }
  _handleReady(e, t, n, r, i, a, o) {
    var s;
    this.setState(ea.hes.RTC_CONNECTING), this.port = n, this._chooseExperiments(null != o ? o : []), 0 === a.length && a.push({
      type: eo.Tr.VIDEO,
      rid: "100",
      ssrc: i + 1,
      rtxSsrc: i + 2,
      quality: 100,
      active: false
    });
    let l = x.Z.getMediaEngine(),
      c = P.Z.getPersistentCodesEnabled(),
      u = null != (s = w.default.getStaticAuthSessionId()) ? s : true,
      d = (0, _.zO)(),
      h = l.connect(this.context, this.userId, el({
        ssrc: i,
        address: t,
        port: n,
        modes: r,
        experiments: this._selectedExperiments,
        streamParameters: a,
        qosEnabled: x.Z.getQoS(),
        signingKeyId: c ? u : true
      }, this.getExtraConnectionOptions())),
      g = (0, _.zO)() - d;
    h.setUseElectronVideo(l.supports(eo.AN.ELECTRON_VIDEO)), x.Z.supports(eo.AN.IMAGE_QUALITY_MEASUREMENT) && h.setVideoQualityMeasurement("imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec");
    let b = ["unk"];
    this.context === eo.Yn.STREAM && (b.push("nvRelaxRc=250"), b.push("nvNewPresets")), x.Z.getUseVaapiEncoder() && b.push("vaapi"), h.setVideoEncoderExperiments(b.join(",")), h.on(f.Sh.Speaking, (e, t, n) => {
      this.userId === e && this.sendSpeaking(t, n), this.emit(K.z.Speaking, ey(e), t)
    }), h.on(f.Sh.ToggleMuteFromNative, () => {
      this.context === eo.Yn.DEFAULT && m.Z.toggleSelfMute({
        playSoundEffect: false
      })
    }), h.on(f.Sh.NativeMuteChanged, e => {
      this.context === eo.Yn.DEFAULT && E.Z.nativeMuteChanged(e)
    }), h.on(f.Sh.Video, (e, t, n, r, i, a) => {
      this._handleVideoStreamId({
        userId: ey(e),
        streamId: t,
        audioSsrc: n,
        videoSsrc: null != r ? r : 0,
        rtxSsrc: i,
        videoStreamParameters: a
      }), this.userId === e && (this.sendVideo(null != n ? n : 0, null != r ? r : 0, null != i ? i : 0, a), null == a || a.forEach(t => {
        100 === t.quality && this.emit(K.z.VideoSourceQualityChanged, this.guildId, this.channelId, ey(e), t.maxResolution, t.maxFrameRate, this.context)
      }))
    }), h.on(f.Sh.FirstFrame, (e, t, n) => {
      null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.setFirstFrameReceived(t), this.emit(K.z.Video, this.guildId, this.channelId, ey(e), n, this.streamServerId)), null != this._goLiveQualityManager && (this._goLiveQualityManager.setFirstFrameReceived(t), this.emit(K.z.Video, this.guildId, this.channelId, ey(e), n, this.streamServerId))
    }), h.on(f.Sh.Silence, e => {
      this._inputDetected = this._inputDetected || !e
    }), h.on(f.Sh.Connected, (r, i) => {
      if (this.logger.info("RTC connected to media server: ".concat(t, ":").concat(n)), e !== this._socket) return void this.logger.warn("Socket mismatch, disconnecting");
      switch (this._voiceQuality = new er.Z(h), this._voiceQuality.start(), this._voiceQuality.on(er.B.InputDeviceSampleRateChanged, e => {
          p.Z.dispatch({
            type: "AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED",
            sampleRate: e
          })
        }), this._voiceQualityPeriodicStatsSequenceId = 0, this._voiceQualityPeriodicStatsInterval = setInterval(this._handleVoiceQualityPeriodicsStats, 3e5), this._systemResponsiveness = new $.Z(h), this._systemResponsiveness.start(), this._systemResources = new J.Z, this._systemResources.setLastBattery(), this._noiseCancellationError = 0, this._voiceDuration = new en.Z(this.userId, h), this._voiceDuration.start(h.getSelfMute(), h.getVoiceFilterId()), this.protocol = r, r) {
        case "udp":
          this.logger.info("Sending UDP info to RTC server.", i, this._selectedExperiments), e.once(q.V.Encryption, (e, t) => {
            h === this._connection && (h.setEncryption(e, t), this._encryptionMode = e)
          }), e.selectProtocol(r, this.getRTCConnectionId(), i, this._selectedExperiments);
          break;
        case "webrtc":
          this.logger.info("Sending local SDP to RTC server."), e.once(q.V.SDP, this._handleSDP.bind(this)), e.selectProtocol(r, this.getRTCConnectionId(), i);
          break;
        default:
          this.logger.error("Unable to determine protocol.");
          return
      }
      this._backoff.succeed()
    }), h.on(f.Sh.VideoEncoderFallback, t => {
      let n = t.filter(e => "video" === e.type).map(e => e.name).join(",");
      this.logger.info("The originally selected video encoder is not working, fallback to the other available encoders: ".concat(n)), e.updateSession({
        codecs: t
      })
    }), h.on(f.Sh.Error, t => {
      if (e !== this._socket) return;
      let n = M.Z.shouldIncludePreferredRegion() ? M.Z.getPreferredRegion() : null;
      this.logger.error("Error occurred while connecting to RTC server: ".concat(t)), U.default.track(ea.rMx.VOICE_CONNECTION_FAILURE, eu(el({}, this._getAnalyticsProperties()), {
        hostname: this.hostname,
        port: this.port,
        protocol: this.protocol,
        error: t,
        cloudflare_best_region: n,
        connect_count: this._connectCount,
        join_voice_id: this.joinVoiceId
      }))
    }), h.on(f.Sh.ConnectionStateChange, t => {
      if (this.logger.info("RTC media connection state change: ".concat(this.state, " => ").concat(t)), e !== this._socket) return;
      let n = this.state;
      switch (t) {
        case eo.$j.DISCONNECTED:
          this.setState(ea.hes.RTC_DISCONNECTED);
          break;
        case eo.$j.CONNECTING:
          this.setState(ea.hes.RTC_CONNECTING);
          break;
        case eo.$j.CONNECTED:
          this.setState(ea.hes.RTC_CONNECTED);
          break;
        case eo.$j.NO_ROUTE:
          this.setState(ea.hes.NO_ROUTE);
          break;
        case eo.$j.ICE_CHECKING:
          this.setState(ea.hes.ICE_CHECKING);
          break;
        case eo.$j.DTLS_CONNECTING:
          this.setState(ea.hes.DTLS_CONNECTING)
      }
      if (n === ea.hes.RTC_CONNECTING && this.state === ea.hes.RTC_DISCONNECTED ? this.reconnect() : this.state === ea.hes.NO_ROUTE && (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)), this.state === ea.hes.RTC_CONNECTED) {
        var r, i, a, o, s, l, c, u, d, f, p, m, E, b;
        let e = M.Z.shouldIncludePreferredRegion() ? M.Z.getPreferredRegion() : null;
        if (this._connecting) {
          let t = x.Z.getSettings(),
            n = this._getAnalyticsProperties();
          U.default.track(ea.rMx.VOICE_CONNECTION_SUCCESS, el(eu(el({}, n), {
            hostname: this.hostname,
            port: this.port,
            protocol: this.protocol,
            cloudflare_best_region: e,
            connect_time: (0, _.zO)() - (this._connected ? this._connectStartTime : this._createdTime),
            connect_count: this._connectCount,
            audio_subsystem: x.Z.getMediaEngine().getAudioSubsystem(),
            audio_layer: x.Z.getMediaEngine().getAudioLayer(),
            automatic_audio_subsystem: t.automaticAudioSubsystem,
            media_session_id: this.getMediaSessionId(),
            participant_type: this.getVoiceParticipantType(),
            join_voice_id: this.joinVoiceId
          }), this.stateHistory.getVoiceConnectionSuccessStats()));
          let r = performance.now(),
            i = (e, t) => null == e || null == t ? null : e - t;
          U.default.track(ea.rMx.VOICE_CONNECTION_TTC_COLLECTED, {
            rtc_connection_id: n.rtc_connection_id,
            time_1_creation_to_connect: this._connectStartTime - this._createdTime,
            time_2_media_engine_connect: g,
            time_3_media_engine_create_native_connection: null == (a = h.transportInfo) ? true : a.createConnectionTime,
            time_4_media_engine_connect_to_socket: null == (o = h.transportInfo) ? true : o.connectTime,
            time_5_scheduling_connected_callback: i(null == (s = this._connection) ? true : s.onConnectCallbackAt, null == (c = this._connection) || null == (l = c.transportInfo) ? true : l.connectCallbackScheduledMs),
            time_6_state_connected_to_end_measure: i(r, null == (u = this._connection) ? true : u.onConnectCallbackAt),
            connect_count: this._connectCount,
            rtc_connecting_native_connect: i(null == (d = this._connection) ? true : d.onConnectCallbackAt, null == (f = this._connection) ? true : f.beginInitializeAt),
            rtc_connecting_native_codecs: i(null == (p = this._connection) ? true : p.onVideoCodecsCallbackAt, null == (m = this._connection) ? true : m.onConnectCallbackAt),
            rtc_connecting_native_crypto_modes: i(null == (E = this._connection) ? true : E.onEncryptionModesCallbackAt, null == (b = this._connection) ? true : b.onVideoCodecsCallbackAt)
          })
        }
        null == (r = this._localMediaSinkWantsManager) || r.setConnection(h), null == (i = this._goLiveQualityManager) || i.update(), this._connectCompletedTime = (0, _.zO)(), this._connected = true, this._connecting = false, this._encountered_socket_failure = false
      } else n === ea.hes.RTC_CONNECTED && this.stateHistory.reset(this.state)
    }), h.on(f.Sh.SecureFramesUpdate, e => {
      this._secureFramesState = e, this.emit(K.z.SecureFramesUpdate)
    }), h.on(f.Sh.Ping, this._handlePing.bind(this)), h.on(f.Sh.PingTimeout, this._handlePingTimeout.bind(this)), h.on(f.Sh.OutboundLossRate, this._handleOutboundLossRate.bind(this)), h.on(f.Sh.SoundshareTrace, this._handleSoundshareTrace.bind(this)), h.on(f.Sh.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)), h.on(f.Sh.Stats, W.Z.create()), h.on(f.Sh.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)), h.on(f.Sh.UsersMerged, this.handleUsersMerged.bind(this)), h.on(f.Sh.NoiseCancellationError, e => {
      this._noiseCancellationError = e
    }), h.on(f.Sh.MLSFailure, this._handleMLSFailure.bind(this)), h.setRemoteVideoSinkWants(this._remoteVideoSinkWants), this._connection = h, this._mediaEngineConnectionId = h.mediaEngineConnectionId
  }
  _handleSpeaking(e, t, n, r) {
    let i = this._connection;
    if (null != i && this.userId !== t) {
      var a;
      r !== eo.Dg.NONE && i.createUser(t, n), null == (a = this._localMediaSinkWantsManager) || a.setAudioSSRC(t, n)
    }
  }
  handleFlags(e, t) {
    this.emit(K.z.Flags, e, t)
  }
  handlePlatform(e, t) {
    this.emit(K.z.Platform, e, t, this.channelId)
  }
  handleUsersMerged(e) {
    this.emit(K.z.UsersMerged, e.map(e => e.id), this.context)
  }
  getOrCreateVideoQuality() {
    if (null != this._connection && null == this._videoQuality) {
      this._videoQuality = new Chunk53114.S(this._connection), this._videoQuality.updateCallUserIdsCount(this._userIds.size), this._videoQuality.start();
      let {
        featureEnabled: e,
        windowLength: t,
        allowedPoorFpsRatio: n,
        fpsThreshold: r,
        backoffTimeSec: i
      } = Chunk824096.y.defaultConfig;
      if (module) {
        this._videoHealthManager = new Chunk824096.y(exports, require, Chunk654861, i), null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
        let e = (e, t, n) => {
          var r, i;
          (null == (r = this._localMediaSinkWantsManager) ? true : r.shouldReceiveFromUser(e)) && (null == (i = this._videoHealthManager) || i.updateFps(e, t, n))
        };
        this._videoQuality.on(Chunk53114.d.FpsUpdate, module)
      }
    }
    return this._videoQuality
  }
  _handleVideoStreamId(e) {
    var t, n, r, i;
    let {
      userId: a,
      streamId: o,
      videoSsrc: s,
      videoStreamParameters: l
    } = e;
    if (this.emit(K.z.Video, this.guildId, this.channelId, a, o, this.streamServerId), null != o && null == this.getOrCreateVideoQuality() && this.logger.error("_handleVideoStreamId: Unable to create videoQuality."), null != this._videoQuality && this.userId === a && l.forEach(e => {
        var t, n;
        let r = null != (t = e.ssrc) ? t : 0;
        r > 0 && true === e.active && (null == (n = this._videoQuality) || n.setOutboundSsrc(r))
      }), this.userId !== a) {
      let e = 0 === s && null === o;
      (!e || e && (null == (t = this._videoQuality) ? true : t.getInboundParticipants().includes(a))) && (null == (n = this._videoQuality) || n.setInboundUser(a, s), null == (r = this._videoHealthManager) || r.createUser(a))
    }
    null != this._connection && this.userId !== a && (null != this._localMediaSinkWantsManager ? this._localMediaSinkWantsManager.setStreamId(a, o) : null != this._goLiveQualityManager && this._goLiveQualityManager.getUserID() === a && (null == (i = this._goLiveQualityManager) || i.setStreamId(o)))
  }
  _handleLocalVideoDisabled(e, t) {
    if (this.userId !== e) {
      let n = this.getOrCreateVideoQuality();
      if (null == n) return void this.logger.error("_handleLocalVideoDisabled: Unable to create videoQuality.");
      n.setUserVideoDisabled(ey(e), t)
    }
  }
  _handleRemoteStreamsReady(e) {
    let t = (0, _.zO)() - this._connectStartTime;
    U.default.track(ea.rMx.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, eu(el({}, this._getAnalyticsProperties()), {
      number_of_users: e,
      duration_ms: t
    }))
  }
  _handleVideo(e, t, n, r, i) {
    if (null != this._connection && this.userId !== t) {
      if (null != this._localMediaSinkWantsManager) {
        this._localMediaSinkWantsManager.setAudioSSRC(t, n);
        let e = i.map(e => ({
          type: eo.Tr.VIDEO,
          rid: e.rid,
          ssrc: e.ssrc,
          rtxSsrc: e.rtxSsrc,
          quality: e.quality,
          active: r > 0
        }));
        0 === e.length && e.push({
          type: eo.Tr.VIDEO,
          rid: "100",
          ssrc: r,
          rtxSsrc: r + 1,
          quality: 100,
          active: r > 0
        }), this._localMediaSinkWantsManager.setVideoSSRCs(t, e)
      } else {
        var a, o, s;
        let e = [];
        for (let t of i) null != t.ssrc && null != t.quality && e.push({
          ssrc: t.ssrc,
          quality: t.quality,
          active: null == (s = t.active) || s
        });
        null == (a = this._goLiveQualityManager) || a.setUserID(t), null == (o = this._goLiveQualityManager) || o.updateAudioAndVideoStreamInfo(n, e)
      }
      null == i || i.forEach(e => {
        100 === e.quality && this.emit(K.z.VideoSourceQualityChanged, this.guildId, this.channelId, t, e.maxResolution, e.maxFrameRate, this.context)
      })
    }
  }
  _handleControlPing(e) {
    x.Z.supports(eo.AN.NATIVE_PING) || this._handlePing(e)
  }
  _handlePing(e) {
    if (true !== e) {
      for (this._pings.push({
          time: Date.now(),
          value: e
        }); this._pings.length >= ef;) this._pings.shift();
      e > ep && this._pingBadCount++, this.emit(K.z.Ping, this._pings, this.quality)
    }
  }
  _handlePingTimeout(e, t) {
    this._pingTimeouts.push(e);
    let n = this._pingTimeouts.length;
    n >= 3 && this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 && this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 && this._handlePing(t)
  }
  _handleOutboundLossRate(e) {
    this._outboundLossRate = e, this.emit(K.z.OutboundLossRate, e)
  }
  _handleSoundshareTrace(e) {
    this._soundshareStats.traceEvent(true, e)
  }
  _getAnalyticsProperties() {
    let e = Chunk592125.Z.getChannel(this.channelId),
      t = null == module ? true : module.type;
    return {
      guild_id: this.guildId,
      channel_id: this.channelId,
      channel_type: exports,
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
    }), this.emit(K.z.ClientConnect, e), null == (t = this._videoQuality) || t.updateCallUserIdsCount(this._userIds.size), null == (n = this._goLiveQualityManager) || n.updateCallUserIds(this._userIds), null == (r = this._localMediaSinkWantsManager) || r.updateCallUserIds(this._userIds)
  }
  _handleClientDisconnect(e) {
    var t, n, r, i, a, o;
    let s = this._videoQuality;
    if (null != s && this.context === eo.Yn.DEFAULT) {
      let t = s.getInboundStats(e),
        n = null != (a = null == t ? true : t.num_frames) ? a : 0;
      null != t && n > 0 && (U.default.track(ea.rMx.VIDEO_STREAM_ENDED, el(eu(el({}, this._getAnalyticsProperties()), {
        app_hardware_acceleration_enabled: G.Z.getAppHardwareAccelerationEnabled(),
        media_session_id: this.getMediaSessionId(),
        sender_user_id: e,
        reason: "User disconnected",
        participant_type: "receiver",
        guild_region: M.Z.getRegion(this.hostname),
        hostname: this.hostname,
        hardware_enabled: x.Z.getHardwareEncoding()
      }), t, s.getNetworkStats(), s.getCodecUsageStats("receiver", e))), s.destroyUser(e), null == (o = this._videoHealthManager) || o.deleteUser(e))
    }
    let l = this._connection;
    null != l && l.destroyUser(e), null == (t = this._localMediaSinkWantsManager) || t.destroyUser(e), this._userIds.delete(e), this.emit(K.z.ClientDisconnect, e), null == (n = this._goLiveQualityManager) || n.updateCallUserIds(this._userIds), null == (r = this._localMediaSinkWantsManager) || r.updateCallUserIds(this._userIds), null == (i = this._videoQuality) || i.updateCallUserIdsCount(this._userIds.size), 1 === this._userIds.size && (this._secureFramesLastBecameAloneTime = (0, _.zO)())
  }
  _handleCodecs(e, t) {
    let n = this._connection;
    null != n && null != this.protocol ? n.setCodecs(null != e && "" !== e ? e : eo.ad.OPUS, null != t && "" !== t ? t : eo.ad.H264, this.context) : this.logger.warn("Cannot set codecs on connection with protocol:", this.protocol)
  }
  _handleSDP(e) {
    let t = this._connection;
    null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn("Cannot set SDP on connection with protocol:", this.protocol)
  }
  _handleMediaSessionId(e) {
    this._mediaSessionId = e, this.logger.info("Setting media-session-id: ".concat(e, " for rtc-connection-id: ").concat(this.getRTCConnectionId()));
    let t = y.Z.getRawThermalState();
    U.default.track(ea.rMx.MEDIA_SESSION_JOINED, eu(el({}, this._getAnalyticsProperties()), {
      media_session_id: this.getMediaSessionId(),
      parent_media_session_id: this.parentMediaSessionId,
      raw_thermal_state: t
    })), p.Z.dispatch({
      type: "MEDIA_SESSION_JOINED",
      mediaSessionId: this.getMediaSessionId(),
      context: this.context
    })
  }
  _handleMediaSinkWants(e) {
    let t = this._connection;
    this.logger.info("Remote media sink wants: ".concat(JSON.stringify(e))), this._remoteVideoSinkWants = e, p.Z.dispatch({
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
    let t = T.Z.getMediaEngineExperiments(e);
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
    U.default.track(ea.rMx.SECURE_FRAMES_TRANSITION, eu(el({}, this._getAnalyticsProperties()), {
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
      time_since_creation: (0, _.zO)() - t.creationTime,
      users_added_count: t.usersAdded,
      users_removed_count: t.usersRemoved,
      roster_size_after: t.rosterSizeAfter,
      init_to_finish_duration: r(t.executeFinishedTime, t.initReceivedTime)
    })), e === eb && this._trackRemainingSecureFrameTransitions()
  }
  _trackRemainingSecureFrameTransitions() {
    this._secureFramesTransitionStates.forEach((e, t) => {
      e.incomplete = true, this._trackSecureFrameTransition(t)
    })
  }
  _storeSecureFrameNextTransitionData(e) {
    return null == this._secureFramesNextTransitionState && (this._secureFramesNextTransitionState = {
      creationTime: (0, _.zO)()
    }), this._secureFramesNextTransitionState = el({}, this._secureFramesNextTransitionState, e)
  }
  _storeSecureFrameTransitionData(e, t) {
    let n = this._secureFramesTransitionStates.get(e);
    null == n && (n = this._storeSecureFrameNextTransitionData({}), this._secureFramesNextTransitionState = true), this._secureFramesTransitionStates.set(e, el({}, n, t)), this._secureFramesMaxConcurrentTransitions = Math.max(this._secureFramesMaxConcurrentTransitions, this._secureFramesTransitionStates.size)
  }
  _handleSecureFramesInit(e) {
    var t, n;
    let r = (0, _.zO)();
    this.recordEvent({
      c: 11,
      v: e
    }), e > 0 ? (this.logger.info("DAVE protocol init with protocol version: ".concat(e)), this._mlsInitReceivedTime = r, null == (t = this._connection) || t.prepareSecureFramesEpoch(eE, e, this.trueChannelId), this._sendMLSKeyPackage(), this._storeSecureFrameNextTransitionData({
      initReceivedTime: r,
      initFinishedTime: (0, _.zO)(),
      protocolVersion: e
    }), this.recordEvent({
      c: 10
    })) : null == (n = this._connection) || n.prepareSecureFramesTransition(eb, e, () => {
      let t = false;
      try {
        var n;
        null == (n = this._connection) || n.executeSecureFramesTransition(eb)
      } catch (e) {
        t = true, V.Z.captureException(e)
      }
      this._storeSecureFrameTransitionData(eb, {
        initReceivedTime: r,
        initFinishedTime: (0, _.zO)(),
        protocolVersion: e,
        executeError: t
      }), this._trackSecureFrameTransition(eb)
    })
  }
  _handleSecureFramesRosterChange(e, t) {
    let n = [],
      r = 0,
      i = 0;
    Object.entries(e).forEach(e => {
      let [t, a] = e;
      n.push(ey(t)), null == a || 0 === a.byteLength ? (i++, this._secureFramesRosterMap.delete(ey(t))) : (r++, this._secureFramesRosterMap.set(ey(t), a))
    }), this._storeSecureFrameTransitionData(t, {
      usersAdded: r,
      usersRemoved: i,
      rosterSizeAfter: this._secureFramesRosterMap.size
    }), this.emit(K.z.RosterMapUpdate, n)
  }
  _handleSecureFramesPrepareTransition(e, t) {
    var n;
    this.logger.info("Preparing DAVE protocol transition: ".concat(e, ", protocol version: ").concat(t)), this._secureFramesTransitionPrepareCount++;
    let r = (0, _.zO)();
    null == (n = this._connection) || n.prepareSecureFramesTransition(e, t, () => {
      this._maybeSendSecureFramesTransitionReady(e), this._storeSecureFrameTransitionData(e, {
        protocolVersion: t,
        prepareReceivedTime: r,
        prepareFinishedTime: (0, _.zO)()
      })
    })
  }
  _handleSecureFramesPrepareEpoch(e, t) {
    var n;
    this.logger.info("Preparing DAVE protocol epoch: ".concat(e, ", protocol version: ").concat(t));
    let r = e.toString();
    null == (n = this._connection) || n.prepareSecureFramesEpoch(r, t, this.trueChannelId), r === eE && (this._mlsInitReceivedTime = (0, _.zO)(), this._sendMLSKeyPackage(), this.recordEvent({
      c: 10
    }))
  }
  _sendMLSKeyPackage() {
    var e;
    null == (e = this._connection) || module.getMLSKeyPackage(e => {
      var t;
      this.logger.info("Got MLS key package, sending to RTC server"), null == (t = this._socket) || t.sendMLSKeyPackage(e)
    })
  }
  _maybeSendSecureFramesTransitionReady(e) {
    if (e !== eb) {
      var t;
      this.logger.info("Sending DAVE protocol ready for transition ID ".concat(e)), null == (t = this._socket) || t.secureFramesReadyForTransition(e), this._storeSecureFrameTransitionData(e, {
        readyTime: (0, _.zO)()
      })
    }
  }
  _handleSecureFramesExecuteTransition(e) {
    this.logger.info("Executing DAVE protocol transition: ".concat(e)), this._secureFramesTransitionExecuteCount++;
    let t = (0, _.zO)(),
      n = false;
    try {
      var r;
      null == (r = this._connection) || r.executeSecureFramesTransition(e)
    } catch (e) {
      n = true, V.Z.captureException(e)
    }
    this._storeSecureFrameTransitionData(e, {
      executeReceivedTime: t,
      executeFinishedTime: (0, _.zO)(),
      executeError: n
    }), this._trackSecureFrameTransition(e)
  }
  _handleMLSExternalSenderPackage(e) {
    var t;
    this.logger.info("Received MLS external sender package"), null == (t = this._connection) || t.updateMLSExternalSender(e)
  }
  _handleMLSProposals(e, t) {
    var n;
    let r = (0, _.zO)();
    this.logger.info("Received MLS proposals"), null == (n = this._connection) || n.processMLSProposals(t, n => {
      var i, a, o;
      let s = (0, _.zO)();
      this.logger.info("Sending MLS commit welcome message"), e.sendMLSCommitWelcome(n);
      let l = null != (i = this._secureFramesNextTransitionState) ? i : this._storeSecureFrameNextTransitionData({
        firstProposalsReceivedTime: r,
        firstProposalsFinishedTime: s
      });
      l.lastProposalsReceivedTime = r, l.lastProposalsFinishedTime = s, l.totalProposalsSize = (null != (a = l.totalProposalsSize) ? a : 0) + t.byteLength, l.totalCommitWelcomeSize = (null != (o = l.totalCommitWelcomeSize) ? o : 0) + n.byteLength
    })
  }
  _handleMLSPrepareCommitTransition(e, t) {
    var n;
    this.logger.info("Received MLS commit for transition ID ".concat(e));
    let r = (0, _.zO)();
    null == (n = this._connection) || n.prepareMLSCommitTransition(e, t, (n, i, a) => {
      n ? (this._trackMLSFailures({
        recovered: true
      }), this._mlsSessionResetStartTime = true, this._handleSecureFramesRosterChange(a, e), this._maybeSendSecureFramesTransitionReady(e)) : (this.logger.warn("Failed to process MLS commit for transition ID ".concat(e)), this._mlsSessionResetStartTime = (0, _.zO)(), this._flagMLSInvalidCommitWelcome(e), this._handleSecureFramesInit(i)), this._storeSecureFrameTransitionData(e, {
        protocolVersion: i,
        commitReceivedTime: r,
        commitFinishedTime: (0, _.zO)(),
        commitSize: t.byteLength,
        commitError: !n
      })
    })
  }
  _handleMLSWelcome(e, t) {
    var n;
    this.logger.info("Received MLS welcome for transition ID ".concat(e));
    let r = (0, _.zO)();
    null == (n = this._connection) || n.processMLSWelcome(e, t, (n, i, a) => {
      n ? (this._trackMLSFailures({
        recovered: true
      }), this._mlsSessionResetStartTime = true, this._handleSecureFramesRosterChange(a, e), this._maybeSendSecureFramesTransitionReady(e)) : (this._mlsSessionResetStartTime = (0, _.zO)(), this._flagMLSInvalidCommitWelcome(e), this._sendMLSKeyPackage()), this._storeSecureFrameTransitionData(e, {
        protocolVersion: i,
        welcomeReceivedTime: r,
        welcomeFinishedTime: (0, _.zO)(),
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
    let n = (0, _.zO)(),
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
      eventLog: eT()
    }), this._alertMLSFailureDebouced(e, t)
  }
  _trackMLSFailures(e) {
    let {
      recovered: t
    } = e, n = (0, _.zO)(), r = this.getMediaSessionId(), i = null != this._mlsSessionResetStartTime ? n - this._mlsSessionResetStartTime : true;
    for (let {
        id: e,
        source: a,
        reason: o,
        count: s,
        countDuringReset: l,
        firstOccurrence: c,
        timeSinceInit: u,
        eventLog: d
      }
      of this._mlsFailures) U.default.track(ea.rMx.MLS_FAILURES, eu(el({}, this._getAnalyticsProperties()), {
      media_session_id: r,
      parent_media_session_id: this.parentMediaSessionId,
      failure_id: e,
      failure_time: c - this._createdTime,
      failure_source: a,
      failure_reason: o,
      failure_count: s,
      failure_was_recovered: t,
      time_since_first_occurrence: n - c,
      time_since_last_reset: i,
      failure_count_during_reset: l,
      time_since_init: u,
      event_history: d,
      connection_serial: this._connectionSerial
    }));
    this._mlsFailures = []
  }
  _alertMLSFailure(e, t) {
    let n = k.default.getCurrentUser();
    ((null == n ? true : n.isStaff()) || (null == n ? true : n.isStaffPersonal())) && h.Z.show({
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
    let t = Chunk131951.Z.getInputDeviceId();
    return null == (e = Chunk131951.Z.getInputDevices()[exports]) ? true : module.name
  }
  getOutputDeviceName() {
    var e;
    let t = Chunk131951.Z.getOutputDeviceId();
    return null == (e = Chunk131951.Z.getOutputDevices()[exports]) ? true : module.name
  }
  getVideoDeviceName() {
    var e;
    let t = Chunk131951.Z.getVideoDeviceId();
    return null == (e = Chunk131951.Z.getVideoDevices()[exports]) ? true : module.name
  }
  getInputDeviceSampleRate() {
    var e, t;
    return null != (t = null == (e = this._voiceQuality) ? true : module.getAudioDeviceStats().input_device_session_sample_rate) ? exports : null
  }
  getGoLiveSource() {
    return Chunk131951.Z.getGoLiveSource()
  }
  constructor({
    userId: e,
    sessionId: t,
    guildId: n,
    channelId: r,
    context: i = eo.Yn.DEFAULT,
    streamServerId: a,
    streamChannelId: s,
    parentMediaSessionId: l,
    joinVoiceId: d
  }) {
    super(), es(this, "context", true), es(this, "userId", true), es(this, "sessionId", true), es(this, "guildId", true), es(this, "parentMediaSessionId", true), es(this, "hostname", true), es(this, "state", true), es(this, "_videoQuality", true), es(this, "_soundshareStats", true), es(this, "logger", true), es(this, "streamServerId", true), es(this, "streamChannelId", true), es(this, "_channelId", true), es(this, "_nextChannelId", true), es(this, "joinVoiceId", true), es(this, "channelIds", true), es(this, "_endpoint", true), es(this, "port", true), es(this, "token", true), es(this, "protocol", true), es(this, "voiceVersion", true), es(this, "rtcWorkerVersion", true), es(this, "_socket", true), es(this, "_backoff", true), es(this, "_destroyed", true), es(this, "_pings", true), es(this, "_pingBadCount", true), es(this, "_pingTimeouts", true), es(this, "_mediaSessionId", true), es(this, "_voiceQuality", true), es(this, "_voiceQualityPeriodicStatsInterval", true), es(this, "_voiceQualityPeriodicStatsSequenceId", true), es(this, "_systemResponsiveness", true), es(this, "_systemResources", true), es(this, "_noiseCancellationError", true), es(this, "_voiceDuration", true), es(this, "_videoHealthManager", true), es(this, "_sentVideo", true), es(this, "_outboundLossRate", true), es(this, "_recordingEnabled", true), es(this, "_selectedExperiments", true), es(this, "_localMediaSinkWantsManager", true), es(this, "_goLiveQualityManager", true), es(this, "_remoteVideoSinkWants", true), es(this, "_connection", true), es(this, "_mediaEngineConnectionId", true), es(this, "_createdTime", true), es(this, "_connectStartTime", true), es(this, "_connectCompletedTime", true), es(this, "_rtcConnectionId", true), es(this, "_connectCount", true), es(this, "_connectionSerial", true), es(this, "_connected", true), es(this, "_connecting", true), es(this, "_encountered_socket_failure", true), es(this, "_inputDetected", true), es(this, "_encryptionMode", true), es(this, "stateHistory", true), es(this, "_supportedBandwidthEstimationExperiments", true), es(this, "_bandwidthEstimationExperiment", true), es(this, "_secureFramesState", true), es(this, "_userIds", true), es(this, "_secureFramesRosterMap", new Map), es(this, "_nextFailureId", 0), es(this, "_mlsFailures", []), es(this, "_secureFramesTransitionStates", new Map), es(this, "_secureFramesNextTransitionState", true), es(this, "_secureFramesMaxConcurrentTransitions", 0), es(this, "_secureFramesTransitionPrepareCount", 0), es(this, "_secureFramesTransitionExecuteCount", 0), es(this, "_secureFramesLastBecameAloneTime", true), es(this, "_mlsSessionResetStartTime", true), es(this, "_mlsInitReceivedTime", true), es(this, "_numNoiseCancellationChanges", 0), es(this, "_fetchAsyncResourcesPromise", true), es(this, "_lastSentSpeakingStatus", true), es(this, "_lastSentSSRC", true), es(this, "powerMonitorListener", true), es(this, "reconnect", () => {
      this.recordEvent({
        c: 7
      });
      let e = this._socket;
      null != e && (this._connected && (this._connectStartTime = (0, _.zO)()), this._connecting || (this._trackVoiceConnectionConnecting(), this._connecting = true, this._encountered_socket_failure = false), this._connectCount++, e.close(), e.connect())
    }), es(this, "_alertMLSFailureDebouced", o()(this._alertMLSFailure, 100)), es(this, "_handleNetworkOnline", () => {
      this.expeditedHeartbeat(5e3, "network detected online.")
    }), es(this, "_handleNetworkOffline", () => {
      this.expeditedHeartbeat(15e3, "network detected offline.", false)
    }), es(this, "_handleNoRoute", () => {
      var e;
      null == (e = this._socket) || e.noRoute()
    }), es(this, "_handlePowerResume", () => {
      this.expeditedHeartbeat(5e3, "power monitor resumed")
    }), es(this, "_handleVoiceQualityPeriodicsStats", () => {
      if (null != this._voiceQuality) {
        let e = this._voiceQuality.getPeriodicStats();
        if (this.shouldReportPeriodicStats(e))
          for (let t of e) U.default.track(ea.rMx.VOICE_QUALITY_PERIODIC_STATS, eu(el({}, this._getAnalyticsProperties()), {
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
    }), es(this, "getAudioDeviceStates", () => ({
      input_device: this.getInputDeviceName(),
      input_device_count: Object.keys(x.Z.getInputDevices()).length,
      output_device: this.getOutputDeviceName(),
      output_device_count: Object.keys(x.Z.getOutputDevices()).length
    })), es(this, "getVideoDeviceStates", () => ({
      camera_device: this.getVideoDeviceName(),
      camera_device_count: Object.keys(x.Z.getVideoDevices()).length
    })), es(this, "_trackVoiceConnectionConnecting", () => {
      let e = D.Z.getChannel(this.channelId),
        t = null == e ? true : e.type;
      U.default.track(ea.rMx.VOICE_CONNECTION_CONNECTING, eu(el({}, this.getAudioDeviceStates(), this.getVideoDeviceStates()), {
        guild_id: this.guildId,
        channel_id: this.channelId,
        rtc_connection_id: this.getRTCConnectionId(),
        hostname: this.hostname,
        connect_count: this._connectCount,
        context: this.context,
        channel_type: t,
        participant_type: this.getVoiceParticipantType(),
        is_muted: x.Z.isMute(),
        join_voice_id: this.joinVoiceId,
        connection_serial: this._connectionSerial
      }))
    }), es(this, "incomingVideoEnabledChanged", e => {
      var t, n;
      null == (t = this._goLiveQualityManager) || t.onIncomingVideoEnabled(e), null == (n = this._videoQuality) || n.setOcclusionIncomingVideoEnabled(e)
    }), es(this, "windowVisibilityChanged", e => {
      var t;
      null == (t = this._videoQuality) || t.setWindowOcclusionState(!e)
    }), this.context = i, this.recordEvent({
      c: 0
    }), this._fetchAsyncResourcesPromise = x.Z.fetchAsyncResources().catch(e => {
      V.Z.captureException(e)
    }), this.userId = e, this.sessionId = t, this.guildId = n, this._channelId = r, this.channelIds = new Set([r]), this.streamServerId = a, this.streamChannelId = s, this.parentMediaSessionId = l, this.joinVoiceId = d, this._connectionSerial = eO++, this.logger = new b.Z("RTCConnection(".concat(this.trueServerId, ", ").concat(this.context, ")")), this.logger.enableNativeLogger(true), this._endpoint = null, this.hostname = null, this.port = null, this.token = null, this.voiceVersion = null, this.rtcWorkerVersion = null, this.state = ea.hes.AWAITING_ENDPOINT, this.stateHistory = new z.K(this.state), this._socket = null, this._backoff = new u.Z(1e3, 1e4), this._destroyed = false, this._pings = [], this._pingBadCount = 0, this._pingTimeouts = [], this._mediaSessionId = null, this._voiceQuality = null, this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, this._systemResponsiveness = null, this._noiseCancellationError = 0, this._voiceDuration = null, this._videoQuality = null, this._videoHealthManager = null, this._sentVideo = false, this._outboundLossRate = null, this._createdTime = (0, _.zO)(), this._connectStartTime = 0, this._connectCompletedTime = 0, this._rtcConnectionId = (0, c.Z)(), this._connectCount = 0, this._connected = false, this._connecting = false, this._encountered_socket_failure = false, this._inputDetected = false, this._selectedExperiments = [], this._secureFramesState = null, this._userIds = new Set([e]), this._secureFramesRosterMap.clear(), this._mlsFailures = [], this._nextFailureId = 0, this._mediaEngineConnectionId = null, this._lastSentSpeakingStatus = 0, this._lastSentSSRC = true;
    let f = x.Z.supports(eo.AN.FIRST_FRAME_CALLBACK) && x.Z.supports(eo.AN.REMOTE_USER_MULTI_STREAM);
    if (i === eo.Yn.DEFAULT) {
      var p;
      let t = (null == (p = D.Z.getChannel(this.channelId)) ? true : p.type) === ea.d4z.GUILD_STAGE_VOICE;
      this._localMediaSinkWantsManager = new X.ZP(e, t, f), this._localMediaSinkWantsManager.on(X.ai.Update, e => {
        if (this.state === ea.hes.RTC_CONNECTED && null != this._socket) {
          var t;
          this.logger.info("Media sink wants: ".concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null == (t = this._connection) || t.setLocalVideoSinkWants(e)
        }
      }), this._localMediaSinkWantsManager.on(X.ai.UserSSRCUpdate, (e, t, n) => {
        var r;
        null == (r = this._connection) || r.createUser(e, t, n)
      })
    } else i === eo.Yn.STREAM && (this._goLiveQualityManager = new v.Z(true), this._goLiveQualityManager.on(v.y.RequestedSSRCsUpdate, (e, t, n) => {
      var r;
      null == (r = this._connection) || r.createUser(e, t, n)
    }), this._goLiveQualityManager.on(v.y.RequestedStreamsUpdate, e => {
      if (this.state === ea.hes.RTC_CONNECTED && null != this._socket) {
        var t;
        this.logger.info("Go Live Media sink wants: ".concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null == (t = this._connection) || t.setLocalVideoSinkWants(e)
      }
    }));
    this._remoteVideoSinkWants = X.Yy, ei.w.on(ei.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged), ei.w.on(ei.e.WindowVisibilityChanged, this.windowVisibilityChanged), j.ZP.shouldRecordNextConnection() ? (this._recordingEnabled = true, g.TC(false)) : this._recordingEnabled = false, this._soundshareStats = new Q.Z, Z.Z.addOnlineCallback(this._handleNetworkOnline), Z.Z.addOfflineCallback(this._handleNetworkOffline), (0, F.isDesktop)() && (this.powerMonitorListener = Y.Z.remotePowerMonitor.on("resume", this._handlePowerResume)), this._supportedBandwidthEstimationExperiments = [], this._bandwidthEstimationExperiment = null, x.Z.getMediaEngine().getSupportedBandwidthEstimationExperiments(e => {
      this._supportedBandwidthEstimationExperiments = e
    })
  }
}