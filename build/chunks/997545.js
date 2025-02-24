/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => L
}), n(47120), n(411104), n(26686), n(230036), n(301563), n(653041);
var r = n(595182),
  i = n.n(r),
  o = n(117806),
  a = n.n(o),
  s = n(565925),
  l = n.n(s),
  c = n(971793),
  u = n.n(c),
  d = n(420994),
  f = n(259443),
  p = n(839548),
  _ = n(198274),
  h = n(701597),
  m = n(46973),
  g = n(829839),
  E = n(916057),
  v = n(992774),
  b = n(158466),
  y = n(650886),
  O = n(65154),
  S = n(149396);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = 50,
  R = .9,
  P = .1,
  w = 0;

function D(e) {
  return (null != e ? e : S.Qx) / S.Qx
}

function x(e) {
  return null != e && 0 !== e ? e + 1 : 0
}
class L extends p.Z {
  static create(e, t, n) {
    let r = new L(e, t, !0);
    return r.initialize(n), r
  }
  static createReplay(e, t) {
    let n = new L(e, "0", !0),
      r = (0, v.zS)();
    n.initializeStreamParameters([{
      type: O.Tr.VIDEO,
      rid: "100",
      ssrc: 0,
      rtxSsrc: 0,
      quality: 100,
      active: !1
    }]);
    let i = (t, i) => {
        let o = null != r.getCodecCapabilities ? r.getCodecCapabilities : r.getSupportedVideoCodecs;
        n.on(m.Sh.Stats, n.handleStats), n.conn.setOnVideoCallback(n.handleVideo), o(t => {
          let r = (0, g.DY)(n.experimentFlags);
          n.codecs = [{
            type: "audio",
            name: S.ad.OPUS,
            priority: 1,
            payloadType: 120
          }, ...(0, g.yQ)(t, r).map((e, t) => {
            let n = t + 1,
              r = 101 + 2 * t;
            return {
              type: "video",
              name: e.name,
              priority: n,
              payloadType: r,
              rtxPayloadType: r + 1,
              encode: e.encode,
              decode: e.decode
            }
          })], n.setCodecs(S.ad.OPUS, S.ad.H264, e), n.conn.startReplay()
        })
      },
      o = r.createReplayConnection("default", i, t);
    return null == o ? null : (n.conn = o, n)
  }
  initialize(e) {
    let t;
    this.logger.info("Creating connection to ".concat(e.address, ":").concat(e.port, " with audio ssrc: ").concat(e.ssrc)), this.audioSSRC = e.ssrc, this.streamUserId = e.streamUserId, this.initializeStreamParameters(e.streamParameters), e.streamParameters = [{
      type: O.Tr.AUDIO,
      ssrc: this.audioSSRC,
      rid: "",
      maxBitrate: 64e3,
      soundshare: this.context === S.Yn.STREAM
    }, ...this.videoStreamParameters], e.context = this.context;
    let n = (0, v.zS)(),
      r = null != n.getCodecCapabilities ? n.getCodecCapabilities : n.getSupportedVideoCodecs,
      i = (i, o) => {
        if (this.destroyed) return;
        if (null != i && "" !== i) {
          this.setConnectionState(S.$j.NO_ROUTE), this.emit(m.Sh.Error, i);
          return
        }
        if (null == o) throw Error("Invalid transport info");
        let {
          protocol: a,
          address: s,
          port: l
        } = o;
        this.logger.info("Connected with local address ".concat(s, ":").concat(l, " and protocol: ").concat(a)), r(r => {
          this.logger.info("Available codecs: ".concat(JSON.stringify(r)));
          let i = (0, g.DY)(this.experimentFlags);
          this.logger.info("Experimental codecs: ".concat(JSON.stringify(i))), this.codecs = [{
            type: "audio",
            name: S.ad.OPUS,
            priority: 1,
            payloadType: 120
          }, ...(0, g.yQ)(r, i).map((e, t) => {
            let n = t + 1,
              r = 101 + 2 * t;
            return {
              type: "video",
              name: e.name,
              priority: n,
              payloadType: r,
              rtxPayloadType: r + 1,
              encode: e.encode,
              decode: e.decode
            }
          })], this.logger.info("Audio codecs: ".concat(this.codecs.filter(e => "audio" === e.type).map(e => e.name))), this.logger.info("Video codecs: ".concat(this.codecs.filter(e => "video" === e.type).map(e => e.name + "[encode: " + e.encode + ", decode: " + e.decode + "]"))), t.getEncryptionModes(r => {
            var i, o, c, u, d, f, p, _, h, g, E, v, b;
            this.logger.info("Encryption modes: ".concat(r)), t.setTransportOptions(this.getConnectionTransportOptions()), t.setSelfMute(this.selfMute || this.context === S.Yn.STREAM), t.setSelfDeafen(this.selfDeaf), t.setOnSpeakingCallback(this.handleSpeakingNative), null === (i = t.setOnNativeMuteToggleCallback) || void 0 === i || i.call(t, this.handleNativeMuteToggled), null === (o = t.setOnNativeMuteChangedCallback) || void 0 === o || o.call(t, this.handleNativeMuteChanged), null === (c = t.setOnSpeakingWhileMutedCallback) || void 0 === c || c.call(t, this.handleSpeakingWhileMuted), null === (u = t.setPingInterval) || void 0 === u || u.call(t, S.$B), t.setPingCallback(this.handlePing), null === (d = t.setPingTimeoutCallback) || void 0 === d || d.call(t, this.handlePingTimeout), null === (f = t.setOnVideoEncoderFallbackCallback) || void 0 === f || f.call(t, this.handleVideoEncoderFallback), null === (p = t.setOnRtcpMessageCallback) || void 0 === p || p.call(t, this.handleRTCPMessage), n.setTransportOptions({
              builtInEchoCancellation: !0,
              echoCancellation: this.echoCancellation,
              noiseSuppression: this.noiseSuppression,
              automaticGainControl: this.automaticGainControl,
              noiseCancellation: this.noiseCancellation,
              voiceFilters: this.voiceFilters
            }), n.setNoInputThreshold(-100), n.setNoInputCallback(this.handleNoInput), this.videoSupported && (t.setOnVideoCallback(this.handleVideo), null === (h = t.setOnFirstFrameCallback) || void 0 === h || h.call(t, this.handleFirstFrame), null === (g = t.setOnDesktopSourceEnded) || void 0 === g || g.call(t, this.handleDesktopSourceEnded), null === (E = t.setOnSoundshare) || void 0 === E || E.call(t, this.handleSoundshare), null === (v = t.setOnSoundshareEnded) || void 0 === v || v.call(t, this.handleSoundshareEnded), null === (b = t.setOnSoundshareFailed) || void 0 === b || b.call(t, this.handleSoundshareFailed)), null === (_ = t.setOnMLSFailureCallback) || void 0 === _ || _.call(t, this.handleMLSFailure), this.setConnectionState(S.$j.CONNECTED), this.emit(m.Sh.Connected, a, {
              address: s,
              port: l,
              mode: this.chooseEncryptionMode(e.modes, r),
              codecs: this.codecs
            }), this.on(m.Sh.Stats, this.handleStats);
            let y = this.getUserOptions();
            for (let e of (y.forEach(e => {
                var t, n;
                return this.logger.info("Creating user: ".concat(e.id, " with audio SSRC: ").concat(e.ssrc, " and video SSRCs: ").concat(null !== (n = null === (t = e.videoSsrcs) || void 0 === t ? void 0 : t.join(",")) && void 0 !== n ? n : 0))
              }), t.mergeUsers(y), this.emit(m.Sh.RemoteStreamsReady, y.length), Object.keys(this.localSpeakingFlags))) e !== this.userId && this.setSpeakingFlags(e, this.localSpeakingFlags[e])
          })
        })
      };
    if (null != n.createOwnStreamConnectionWithOptions) s = this.context === S.Yn.STREAM && this.streamUserId === this.userId ? n.createOwnStreamConnectionWithOptions : n.createVoiceConnectionWithOptions;
    else if (null != n.createOwnStreamConnection) {
      var o, a, s, l = this.context === S.Yn.STREAM && this.streamUserId === this.userId ? n.createOwnStreamConnection : n.createVoiceConnection;
      s = (e, t, n) => l(t.ssrc, this.userId, t.address, t.port, n, t.experiments, t.streamParameters)
    } else s = (e, t, r) => new n.VoiceConnection(t.ssrc, e, t.address, t.port, r, t.experiments, t.streamParameters);
    null === (o = (t = this.conn = s(this.userId, e, i)).setSecureFramesStateUpdateCallback) || void 0 === o || o.call(t, e => {
      this.logger.info("DAVE protocol state update: ".concat(JSON.stringify(e))), this.emit(m.Sh.SecureFramesUpdate, e)
    }), null === (a = t.setDesktopSourceStatusCallback) || void 0 === a || a.call(t, e => {
      if ("videohook_start" === e.type) this.emit(m.Sh.VideoHookStart);
      else if ("videohook_stop" === e.type) this.emit(m.Sh.VideoHookStop);
      else if ("videohook_initialize" === e.type) this.emit(m.Sh.VideoHookInitialize, e.backend, e.format, e.framebufferFormat, e.sampleCount, e.success, e.reinitialization);
      else if ("screenshare_finish" === e.type) {
        var t;
        this.emit(m.Sh.ScreenshareFinish, e.screenshareFrames, e.videohookFrames, e.hybridDxgiFrames, e.hybridGdiFrames, e.hybridVideohookFrames, e.hybridGraphicsCaptureFrames, e.hybridCaptureMethodSwitches, e.hybridGdiBitBltFrames, e.hybridGdiPrintWindowFrames, e.quartzFrames, null !== (t = e.desktopCapturerType) && void 0 !== t ? t : e.desktop_capturer_type, e.screens, e.windows, e.activity, e.goLiveCameraFrames, e.screenCaptureKitFrames)
      } else "video_state" === e.type ? this.emit(m.Sh.VideoState, e.state) : e.type.startsWith("soundshare_") && this.emit(m.Sh.SoundshareTrace, e)
    }), this.on("newListener", this.handleNewListenerNative)
  }
  destroy() {
    this.conn.destroy(), Object.keys(this.localSpeakingFlags).filter(e => e !== this.userId).forEach(e => this.emit(m.Sh.Speaking, e, S.Dg.NONE, this.remoteAudioSSRCs[e])), this.setConnectionState(S.$j.DISCONNECTED), super.destroy()
  }
  setCodecs(e, t, n) {
    this.conn.setTransportOptions(this.getCodecOptions(e, t, n)), this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = !1)
  }
  getStats() {
    return this.connectionState === S.$j.DISCONNECTED ? Promise.resolve(null) : (0, d.timeout)(new Promise(e => {
      null != this.conn.getFilteredStats ? this.conn.getFilteredStats(O.QP.ALL, t => e((0, b.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants))) : null != this.conn.getStats ? this.conn.getStats(t => e((0, b.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants))) : (0, v.zS)().getStats(t => e((0, b.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants)))
    }), _.T).catch(e => {
      if (!(e instanceof d.TimeoutError)) throw e
    })
  }
  createUser(e, t, n) {
    let r = this.remoteAudioSSRCs[e],
      i = this.remoteVideoSSRCs[e];
    if (null != r && 0 === t) {
      this.logger.info("Ignoring attempt to recreate user ".concat(e, " with 0 audio SSRC"));
      return
    }
    i = void 0 !== i ? [...i].sort() : [], n = void 0 === n ? null != i ? i : [] : [...n].sort();
    let o = r !== t,
      a = !l()(i, n);
    if (this.remoteAudioSSRCs[e] = t, this.remoteVideoSSRCs[e] = null != n ? n : [], this.userId !== e && (o || a)) {
      let r = void 0 !== n && n.length > 0 ? n[0] : 0,
        i = {
          id: e,
          ssrc: t,
          videoSsrc: r,
          videoSsrcs: n,
          rtxSsrc: x(r),
          mute: this.getLocalMute(e),
          volume: this.getLocalVolume(e)
        };
      if (this.connectionState === S.$j.CONNECTED) {
        var s;
        this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null !== (s = null == n ? void 0 : n.join(",")) && void 0 !== s ? s : 0)), this.conn.mergeUsers([i])
      }
      let o = this.localPans[e];
      null != o && this.setLocalPan(e, o.left, o.right);
      let a = this.localSpeakingFlags[e];
      null != a && a !== S.Dg.NONE && this.setSpeakingFlags(e, a)
    }
  }
  destroyUser(e) {
    null != this.remoteAudioSSRCs[e] && (this.conn.destroyUser(e), delete this.remoteAudioSSRCs[e], delete this.remoteVideoSSRCs[e])
  }
  setSelfMute(e) {
    this.selfMute = e, this.conn.setSelfMute(e), this.emit(m.Sh.Mute, e)
  }
  getSelfMute() {
    return this.selfMute
  }
  setSelfDeaf(e) {
    this.selfDeaf = e, this.conn.setSelfDeafen(e)
  }
  setSoundshareSource(e, t) {
    if (this.soundshareId === e && this.soundshareSentSpeakingEvent || this.context !== S.Yn.STREAM) return;
    this.soundshareId = e, this.soundshareSentSpeakingEvent = !1;
    let n = e;
    null === n && (n = 0), this.conn.setTransportOptions({
      soundsharePid: n,
      soundshareEventDriven: !0,
      soundshareLoopback: t
    })
  }
  setLocalMute(e, t) {
    this.localMutes[e] = t, this.conn.setLocalMute(e, t), this.emit(m.Sh.LocalMute, e, t)
  }
  fastUdpReconnect() {
    null != this.conn.fastUdpReconnect && (this.numFastUdpReconnects += 1, this.conn.fastUdpReconnect())
  }
  getNumFastUdpReconnects() {
    return null != this.conn.fastUdpReconnect ? this.numFastUdpReconnects : null
  }
  wasRemoteDisconnected() {
    var e, t;
    null === (e = (t = this.conn).wasRemoteDisconnected) || void 0 === e || e.call(t)
  }
  setLocalVideoDisabled(e, t) {
    this.disabledLocalVideos[e] = t, this.emit(m.Sh.LocalVideoDisabled, e, t)
  }
  setMinimumJitterBufferLevel(e) {
    this.minimumJitterBufferLevel = e
  }
  setPostponeDecodeLevel(e) {
    this.postponeDecodeLevel = e
  }
  setClipRecordUser(e, t, n) {
    if (!this.destroyed) {
      var r, i;
      null === (r = (i = this.conn).setClipRecordUser) || void 0 === r || r.call(i, e, (this.context === S.Yn.STREAM ? "application" : "user").concat("audio" === t ? "Audio" : "Video"), n)
    }
  }
  setClipsKeyFrameInterval(e) {
    this.context === S.Yn.STREAM && (this.clipsKeyFrameInterval = e, this.conn.setTransportOptions({
      keyframeInterval: this.getKeyFrameInterval(),
      alwaysSendVideo: this.keyframeInterval > 0
    }))
  }
  setViewerSideClip(e) {
    this.context === S.Yn.STREAM && this.conn.setTransportOptions({
      enableViewerSideClip: e
    })
  }
  setRemoteAudioHistory(e) {
    this.conn.setTransportOptions({
      remoteAudioHistoryMs: e
    })
  }
  setQualityDecoupling(e) {
    this.context === S.Yn.STREAM && this.conn.setTransportOptions({
      enableQualityDecoupling: e
    })
  }
  getLocalVolume(e) {
    let t = this.localVolumes[e];
    return null == t && (t = this.context === S.Yn.DEFAULT ? S.Qx : S.Yh), D(t)
  }
  setLocalVolume(e, t) {
    this.localVolumes[e] = t;
    try {
      this.conn.setLocalVolume(e, this.getLocalVolume(e))
    } catch (n) {
      this.logger.warn("Failed to set volume for user: ".concat(e, ": ").concat(t))
    }
  }
  setLocalPan(e, t, n) {
    this.localPans[e] = {
      left: t,
      right: n
    }, this.conn.setLocalPan(e, t, n)
  }
  isAttenuating() {
    return this.attenuationFactor < 1
  }
  setAttenuation(e, t, n) {
    this.attenuationFactor = (100 - e) / 100, this.attenuateWhileSpeakingSelf = t, this.attenuateWhileSpeakingOthers = n, this.conn.setTransportOptions(this.getAttenuationOptions())
  }
  setCanHavePriority(e, t) {
    var n, r;
    null === (n = (r = this.conn).setRemoteUserCanHavePriority) || void 0 === n || n.call(r, e, t)
  }
  setBitRate(e) {
    this.setVoiceBitRate(e)
  }
  setVoiceBitRate(e) {
    if (this.voiceBitrate === e) return;
    this.voiceBitrate = e;
    let t = this.voiceBitrate;
    this.soundshareActive && (t = Math.max(S.ed, t)), this.conn.setTransportOptions({
      encodingVoiceBitRate: t
    })
  }
  setCameraBitRate(e, t, n) {
    null != n || null != t ? this.videoQualityManager.setQualityOverwrite({
      bitrateMin: null != n && n > 0 ? n : t,
      bitrateMax: t
    }) : this.videoQualityManager.setQualityOverwrite({}), this.hasDesktopSource() || this.conn.setTransportOptions({
      encodingVideoBitRate: e,
      encodingVideoMinBitRate: n,
      encodingVideoMaxBitRate: t
    })
  }
  setEchoCancellation(e) {
    this.echoCancellation = e, (0, v.zS)().setTransportOptions({
      echoCancellation: this.echoCancellation
    })
  }
  setNoiseSuppression(e) {
    this.noiseSuppression = e, (0, v.zS)().setTransportOptions({
      noiseSuppression: this.noiseSuppression
    })
  }
  setAutomaticGainControl(e) {
    this.automaticGainControl = e, (0, v.zS)().setTransportOptions({
      automaticGainControl: this.automaticGainControl
    })
  }
  setNoiseCancellation(e) {
    this.noiseCancellation = e, (0, v.zS)().setTransportOptions({
      noiseCancellation: this.noiseCancellation
    })
  }
  setVoiceFiltersEnabled(e) {
    this.voiceFilters = e, (0, v.zS)().setTransportOptions({
      voiceFilters: this.voiceFilters
    })
  }
  setExperimentalEncoders(e) {
    this.experimentalEncoders = e, this.conn.setTransportOptions({
      experimentalEncoders: this.experimentalEncoders
    })
  }
  setHardwareH264(e) {
    this.hardwareH264 = e, this.conn.setTransportOptions({
      hardwareH264: this.hardwareH264
    })
  }
  setSoftwareH264(e) {
    this.softwareH264 = e, this.conn.setTransportOptions({
      softwareH264: this.softwareH264
    })
  }
  setQoS(e) {
    this.qos = e, this.conn.setTransportOptions({
      qos: this.qos
    })
  }
  setInputMode(e, t) {
    switch (this.inputMode = e, e) {
      case S.pM.PUSH_TO_TALK:
        this.pttReleaseDelay = t.pttReleaseDelay;
        break;
      case S.pM.VOICE_ACTIVITY:
        this.vadThreshold = t.vadThreshold, this.vadAutoThreshold = t.vadAutoThreshold, this.vadUseKrisp = t.vadUseKrisp, this.vadLeading = t.vadLeading, this.vadTrailing = t.vadTrailing;
        break;
      default:
        throw Error("Unknown Input Mode: ".concat(e))
    }
    this.conn.setTransportOptions({
      inputMode: S.GO[this.inputMode],
      inputModeOptions: this.createInputModeOptions()
    })
  }
  setSilenceThreshold(e) {
    (0, v.zS)().setNoInputThreshold(e)
  }
  setForceAudioInput(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    t ? this.forceAudioPriority = e : this.forceAudioNormal = e, this.conn.setPTTActive(this.forceAudioPriority || this.forceAudioNormal, this.forceAudioPriority)
  }
  setSpeakingFlags(e, t) {
    null != this.conn.setRemoteUserSpeakingStatus ? this.conn.setRemoteUserSpeakingStatus(e, t) : null != this.conn.setRemoteUserSpeaking && this.conn.setRemoteUserSpeaking(e, (t & S.Dg.VOICE) === S.Dg.VOICE), this.handleSpeakingFlags(e, t)
  }
  clearAllSpeaking() {}
  setEncryption(e, t) {
    this.logger.info("Selected encryption mode: ".concat(e)), this.conn.setTransportOptions({
      encryptionSettings: {
        mode: e,
        secretKey: t
      }
    })
  }
  setReconnectInterval(e) {
    this.reconnectInterval = e, this.conn.setTransportOptions({
      reconnectInterval: this.reconnectInterval
    })
  }
  setKeyframeInterval(e) {
    this.keyframeInterval = e, this.conn.setTransportOptions({
      keyframeInterval: this.getKeyFrameInterval(),
      alwaysSendVideo: this.keyframeInterval > 0
    })
  }
  setVideoQualityMeasurement(e) {
    this.videoQualityMeasurement = e, this.conn.setTransportOptions({
      videoQualityMeasurement: this.videoQualityMeasurement
    })
  }
  setVideoEncoderExperiments(e) {
    this.videoEncoderExperiments = e, this.conn.setTransportOptions({
      videoEncoderExperiments: this.videoEncoderExperiments
    })
  }
  setVideoBroadcast(e) {
    this.selfVideo !== e && (this.selfVideo = e, this.applyVideoTransportOptions())
  }
  setGoLiveSource(e) {
    let {
      resolution: t,
      frameRate: n
    } = e.quality, r = t <= 480 ? t / 3 * 4 : t / 9 * 16, i = t, o = null;
    if (null != e.desktopDescription ? o = e.desktopDescription.id : null != e.cameraDescription && (o = "".concat(e.cameraDescription.videoDeviceGuid, ":").concat(e.cameraDescription.audioDeviceGuid)), this.goLiveSourceIdentifier === o) {
      if (this.setDesktopEncodingOptions(r, i, n), null != e.desktopDescription) {
        let {
          soundshareId: t,
          useLoopback: n
        } = e.desktopDescription;
        this.soundshareId !== t && this.setSoundshareSource(t, n)
      }
      return
    }
    if (this.goLiveSourceIdentifier = o, null != this.conn.setDesktopSource) {
      if (null != e.desktopDescription) {
        let {
          id: t,
          soundshareId: n,
          useLoopback: r,
          useVideoHook: i,
          useGraphicsCapture: o,
          useQuartzCapturer: a,
          allowScreenCaptureKit: s,
          videoHookStaleFrameTimeoutMs: l,
          graphicsCaptureStaleFrameTimeoutMs: c,
          hdrCaptureMode: u
        } = e.desktopDescription;
        this.setSoundshareSource(n, r);
        let [d, f] = null != t ? t.split(":") : ["", ""];
        null != t ? this.logger.info("capturing desktop (type: ".concat(d, ", handle: ").concat(f, ", use-video-hook: ").concat(i.toString(), ", use-graphics-capture: ").concat(null == o ? void 0 : o.toString(), ").")) : this.logger.info("capturing desktop (type: <stop>)."), null != this.conn.setDesktopSourceWithOptions ? null != t ? this.conn.setDesktopSourceWithOptions({
          type: d,
          sourceId: f,
          useVideoHook: i,
          useGraphicsCapture: o,
          useQuartzCapturer: a,
          allowScreenCaptureKit: s,
          videoHookStaleFrameTimeoutMs: l,
          graphicsCaptureStaleFrameTimeoutMs: c,
          hdrCaptureMode: u
        }) : this.conn.clearDesktopSource() : this.conn.setDesktopSource("wumpus-".concat(f), i, d)
      } else if (null != e.cameraDescription) {
        let {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        } = e.cameraDescription;
        this.conn.setGoLiveDevices({
          videoInputDeviceId: t,
          audioInputDeviceId: n
        })
      }
      this.setDesktopEncodingOptions(r, i, n)
    }
  }
  clearGoLiveDevices() {
    null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), null != this.conn.clearGoLiveDevices && this.conn.clearGoLiveDevices()
  }
  clearDesktopSource() {
    null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), this.goLiveSourceIdentifier = null, null != this.conn.clearDesktopSource ? this.conn.clearDesktopSource() : this.conn.setDesktopSource("", !1, "")
  }
  setDesktopSourceStatusCallback(e) {
    var t, n;
    null === (t = (n = this.conn).setDesktopSourceStatusCallback) || void 0 === t || t.call(n, e)
  }
  hasDesktopSource() {
    return null != this.goLiveSourceIdentifier
  }
  setDesktopEncodingOptions(e, t, n) {
    if (this.destroyed) return;
    let r = 0 === t && n >= 10 || t > 720 || n > 30 ? O.yf : O.YE,
      i = {
        width: e,
        height: t,
        framerate: n
      },
      o = this.videoQualityManager.getQuality(),
      a = !h.SF.equals(i, o.capture) || o.bitrateMax !== r,
      s = this.videoStreamParameters.findIndex(e => e.quality === O.y7); - 1 === s && (s = 0), a && (this.videoQualityManager.setGoliveQuality({
      capture: i,
      encode: i,
      bitrateMax: r
    }), this.videoStreamParameters.length > s && (this.videoStreamParameters[s].maxResolution = {
      type: 0 === e && 0 === t ? S.uA.SOURCE : S.uA.FIXED,
      width: e,
      height: t
    }, this.videoStreamParameters[s].maxFrameRate = n, this.videoStreamParameters[s].maxBitrate = r));
    let l = this.videoStreamParameters.findIndex(e => e.quality === O.LD),
      c = -1 !== l && this.videoStreamParameters.length > l,
      u = this.videoQualityManager.shouldEnableGoliveSimulcastForHqQuality(i),
      d = c && this.videoStreamParameters[l].active !== u;
    c && (this.videoStreamParameters[l].active = u, this.simulcastLQDisabledSsrc = u ? void 0 : this.videoStreamParameters[l].ssrc), (a || d) && (this.emit(m.Sh.Video, this.userId, null, this.audioSSRC, this.videoStreamParameters[s].ssrc, x(this.videoStreamParameters[s].ssrc), this.videoStreamParameters), this.conn.setTransportOptions(this.applyQualityConstraints().constraints))
  }
  setSDP(e) {}
  setRemoteVideoSinkWants(e) {
    this.remoteVideoSinkWants = e, this.updateVideoQuality(O.XR)
  }
  setLocalVideoSinkWants(e) {
    let t = this.localVideoSinkWants,
      n = e;
    for (let [e, s] of Object.entries(this.remoteVideoSSRCs)) {
      var r, i, o, a;
      let l = 0,
        c = 0;
      for (let e of s) l += null == t ? void 0 : t[e], c += null == n ? void 0 : n[e];
      0 === l && 0 !== c && (null === (r = (i = this.conn).setDisableLocalVideo) || void 0 === r || r.call(i, e, !1)), 0 !== l && 0 === c && (null === (o = (a = this.conn).setDisableLocalVideo) || void 0 === o || o.call(a, e, !0))
    }
    this.localVideoSinkWants = e
  }
  startSamplesLocalPlayback(e, t, n, r) {
    if (t.numberOfChannels > 2) {
      r(1, "Too many channels");
      return
    }
    for (var i = [], o = 0; o < t.numberOfChannels; o++) {
      var a = t.getChannelData(o);
      i.push(a)
    }
    this.conn.startSamplesLocalPlayback(e, {
      sampleRate: t.sampleRate,
      volume: n
    }, i, r)
  }
  stopAllSamplesLocalPlayback() {
    this.conn.stopAllSamplesLocalPlayback()
  }
  stopSamplesLocalPlayback(e) {
    this.conn.stopSamplesLocalPlayback(e)
  }
  setBandwidthEstimationExperiments(e) {
    this.conn.setTransportOptions({
      bandwidthEstimationExperiments: e
    })
  }
  updateVideoQualityCore(e, t) {
    this.videoSupported && !this.destroyed && this.conn.setTransportOptions(e)
  }
  setStreamParameters(e) {
    return new Promise((t, n) => {
      for (let t of this.videoStreamParameters) {
        let r = e.findIndex(e => e.rid === t.rid);
        if (-1 === r) {
          n(Error("Invalid rid"));
          return
        }
        let i = [];
        l()(this.videoStreamParameters[r], e[r]) || (this.videoStreamParameters[r] = T({}, e[r]), i.push(T({}, e[r]))), this.conn.setTransportOptions({
          streamParameters: i
        })
      }
      t()
    })
  }
  applyVideoTransportOptions() {
    if (!this.videoSupported) return;
    let e = !1;
    if (this.hasDesktopSource() && this.videoStreamParameters.length > 0) {
      var t;
      e = (null === (t = this.videoStreamParameters[0].maxResolution) || void 0 === t ? void 0 : t.type) === S.uA.SOURCE
    }
    this.conn.setTransportOptions(this.applyQualityConstraints({
      encodingVideoDegradationPreference: this.hasDesktopSource() ? e ? this.sourceDesktopDegradationPreference : this.desktopDegradationPreference : this.videoDegradationPreference
    }).constraints), this.conn.setVideoBroadcast(this.selfVideo)
  }
  chooseEncryptionMode(e, t) {
    for (let n of t)
      for (let t of e)
        if (n === t) return n;
    return "xsalsa20_poly1305"
  }
  getUserOptions() {
    return Object.keys(this.remoteAudioSSRCs).map(e => {
      let t = void 0 !== this.remoteVideoSSRCs[e] && this.remoteVideoSSRCs[e].length > 0 ? this.remoteVideoSSRCs[e][0] : 0;
      return {
        id: e,
        ssrc: this.remoteAudioSSRCs[e],
        videoSsrc: t,
        videoSsrcs: this.remoteVideoSSRCs[e],
        rtxSsrc: x(t),
        mute: this.getLocalMute(e),
        volume: this.getLocalVolume(e)
      }
    })
  }
  createInputModeOptions() {
    switch (this.inputMode) {
      case S.pM.VOICE_ACTIVITY:
        return {
          vadThreshold: this.vadThreshold, vadAutoThreshold: this.vadAutoThreshold ? E.a.VERY_AGGRESSIVE : E.a.DISABLED, vadUseKrisp: this.vadUseKrisp, vadLeading: this.vadLeading, vadTrailing: this.vadTrailing
        };
      case S.pM.PUSH_TO_TALK:
        return {
          pttReleaseDelay: this.pttReleaseDelay
        };
      default:
        throw Error("Unknown Input Mode: ".concat(this.inputMode))
    }
  }
  getAttenuationOptions() {
    return {
      attenuation: this.isAttenuating(),
      attenuationFactor: this.attenuationFactor,
      attenuateWhileSpeakingSelf: this.attenuateWhileSpeakingSelf,
      attenuateWhileSpeakingOthers: this.attenuateWhileSpeakingOthers
    }
  }
  getCodecParams(e, t) {
    if (e !== S.ad.H264) return {};
    if (t) return {
      "level-asymmetry-allowed": "1",
      "packetization-mode": "1",
      "profile-level-id": "42e034"
    };
    {
      let e = "4d0033",
        t = "42e01f";
      return {
        "level-asymmetry-allowed": "1",
        "packetization-mode": "1",
        "profile-level-id": "android" === (0, v.zS)().platform ? t : e,
        "software-h264": this.softwareH264 ? "1" : "0"
      }
    }
  }
  getCodecOptions(e, t, n) {
    var r, i, o, a;
    let s;
    let l = {
        type: null !== (r = null == (s = this.codecs.find(t => t.name === e)) ? void 0 : s.payloadType) && void 0 !== r ? r : 0,
        name: e,
        freq: 48e3,
        pacsize: 960,
        channels: 1,
        rate: 64e3
      },
      c = [{
        type: null !== (i = null == s ? void 0 : s.payloadType) && void 0 !== i ? i : 0,
        name: e,
        freq: 48e3,
        channels: 2,
        params: {
          stereo: "1"
        }
      }];
    n === S.Yn.STREAM && (l.channels = 2);
    let u = [],
      d = {
        name: "",
        type: 0,
        rtxType: 0,
        params: {}
      };
    for (s of this.codecs) {
      if (s.name === e) continue;
      let n = {
        name: (0, g.AQ)(s.name),
        type: null !== (o = null == s ? void 0 : s.payloadType) && void 0 !== o ? o : 0,
        rtxType: null !== (a = null == s ? void 0 : s.rtxPayloadType) && void 0 !== a ? a : 0,
        params: this.getCodecParams(s.name, !0)
      };
      this.experimentFlags.has(O.V8.RESET_DECODER_ON_ERRORS) && (n.params["reset-on-errors"] = "1"), this.experimentFlags.has(O.V8.SOFTWARE_FALLBACK_ON_ERRORS) && (n.params["fallback-after-errors"] = "3"), this.experimentFlags.has(O.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS) && (n.params["fallback-on-consecutive-errors"] = "1"), this.experimentFlags.has(O.V8.SIGNAL_AV1_HARDWARE_DECODE) && (n.params["hardware-av1-decode"] = "1");
      let r = this.hardwareH264 && this.useElectronVideo && y.Z.useDirectVideo ? "1" : "0";
      n.params["hardware-h264"] = r, u.push(n), s.name === t && (d = A(T({}, n), {
        params: this.getCodecParams(s.name, !1)
      }), this.experimentFlags.has(O.V8.VIDEOTOOLBOX_RATE_CONTROL) && (d.params["fixed-rate-presentation-timestamps"] = "1"), d.params["hardware-h264"] = r)
    }
    return {
      videoEncoder: d,
      videoDecoders: u,
      audioEncoder: l,
      audioDecoders: c
    }
  }
  getKeyFrameInterval() {
    return this.keyframeInterval > 0 && this.clipsKeyFrameInterval > 0 ? Math.min(this.keyframeInterval, this.clipsKeyFrameInterval) : Math.max(this.keyframeInterval, this.clipsKeyFrameInterval)
  }
  getConnectionTransportOptions() {
    let e = A(T({
      selfMute: this.selfMute,
      inputMode: S.GO[this.inputMode],
      inputModeOptions: this.createInputModeOptions(),
      minimumJitterBufferLevel: this.minimumJitterBufferLevel,
      postponeDecodeLevel: this.postponeDecodeLevel
    }, this.getAttenuationOptions()), {
      fec: !0,
      packetLossRate: .3,
      qos: this.qos,
      prioritySpeakerDucking: S.jg,
      encodingVoiceBitRate: this.voiceBitrate,
      callBitRate: S.$A,
      callMinBitRate: S.mN,
      callMaxBitRate: S.mC,
      encodingVideoDegradationPreference: this.videoDegradationPreference,
      experimentalEncoders: this.experimentalEncoders,
      hardwareH264: this.hardwareH264,
      softwareH264: this.softwareH264,
      reconnectInterval: this.reconnectInterval
    });
    return (0, v.eJ)(S.eR.VIDEO_EFFECTS) && this.context === S.Yn.STREAM && (e.enableVideoEffects = !0), this.experimentFlags.has(O.V8.MUTE_BEFORE_PROCESSING) && (e.muteBeforeProcessing = !0), this.experimentFlags.has(O.V8.PTT_BEFORE_PROCESSING) && (e.pttBeforeProcessing = !0), this.experimentFlags.has(O.V8.SKIP_ENCODE) && (e.skipEncode = !0), e
  }
  setStream(e) {
    throw Error("Method not implemented.")
  }
  getUserIdBySsrc(e) {}
  prepareSecureFramesTransition(e, t, n) {
    var r, i;
    null === (r = (i = this.conn).prepareSecureFramesTransition) || void 0 === r || r.call(i, e, t, n)
  }
  prepareSecureFramesEpoch(e, t, n) {
    var r, i;
    null === (r = (i = this.conn).prepareSecureFramesEpoch) || void 0 === r || r.call(i, e, t, n)
  }
  executeSecureFramesTransition(e) {
    var t, n;
    null === (t = (n = this.conn).executeSecureFramesTransition) || void 0 === t || t.call(n, e)
  }
  getMLSKeyPackage(e) {
    var t, n;
    null === (t = (n = this.conn).getMLSKeyPackage) || void 0 === t || t.call(n, e)
  }
  updateMLSExternalSender(e) {
    var t, n;
    null === (t = (n = this.conn).updateMLSExternalSender) || void 0 === t || t.call(n, e)
  }
  processMLSProposals(e, t) {
    var n, r;
    null === (n = (r = this.conn).processMLSProposals) || void 0 === n || n.call(r, e, t)
  }
  prepareMLSCommitTransition(e, t, n) {
    var r, i;
    null === (r = (i = this.conn).prepareMLSCommitTransition) || void 0 === r || r.call(i, e, t, n)
  }
  processMLSWelcome(e, t, n) {
    var r, i;
    null === (r = (i = this.conn).processMLSWelcome) || void 0 === r || r.call(i, e, t, n)
  }
  getMLSPairwiseFingerprint(e, t, n) {
    var r, i;
    null === (r = (i = this.conn).getMLSPairwiseFingerprint) || void 0 === r || r.call(i, e, t, n)
  }
  presentDesktopSourcePicker(e) {
    var t, n;
    null === (t = (n = this.conn).presentDesktopSourcePicker) || void 0 === t || t.call(n, e)
  }
  constructor(e, t, n) {
    super(e, t), I(this, "mediaEngineConnectionId", "Native-".concat(w++)), I(this, "goLiveSourceIdentifier", void 0), I(this, "selfVideo", !1), I(this, "forceAudioNormal", !1), I(this, "forceAudioPriority", !1), I(this, "codecs", []), I(this, "videoEncoderFallbackPending", !1), I(this, "desktopDegradationPreference", (0, v.zS)().DegradationPreference.MAINTAIN_FRAMERATE), I(this, "sourceDesktopDegradationPreference", (0, v.zS)().DegradationPreference.DISABLED), I(this, "videoDegradationPreference", (0, v.zS)().DegradationPreference.BALANCED), I(this, "localPans", {}), I(this, "remoteAudioSSRCs", {}), I(this, "remoteVideoSSRCs", {}), I(this, "inputMode", S.pM.VOICE_ACTIVITY), I(this, "vadThreshold", -40), I(this, "vadAutoThreshold", !0), I(this, "vadUseKrisp", !0), I(this, "vadLeading", 5), I(this, "vadTrailing", 25), I(this, "pttReleaseDelay", 20), I(this, "soundshareActive", !1), I(this, "soundshareId", null), I(this, "soundshareSentSpeakingEvent", !1), I(this, "echoCancellation", !0), I(this, "noiseSuppression", !0), I(this, "automaticGainControl", !0), I(this, "noiseCancellation", !1), I(this, "voiceFilters", !1), I(this, "experimentalEncoders", !1), I(this, "hardwareH264", !0), I(this, "softwareH264", !0), I(this, "attenuationFactor", .5), I(this, "attenuateWhileSpeakingSelf", !1), I(this, "attenuateWhileSpeakingOthers", !0), I(this, "qos", !0), I(this, "conn", void 0), I(this, "minimumJitterBufferLevel", 0), I(this, "postponeDecodeLevel", 100), I(this, "reconnectInterval", 6e4), I(this, "keyframeInterval", 0), I(this, "clipsKeyFrameInterval", 0), I(this, "videoQualityMeasurement", ""), I(this, "videoEncoderExperiments", ""), I(this, "numFastUdpReconnects", 0), I(this, "simulcastLQDisabledSsrc", void 0), I(this, "logger", void 0), I(this, "handleSpeakingNative", (e, t) => {
      let n = S.Dg.NONE;
      n = "boolean" == typeof t ? t ? S.Dg.VOICE : S.Dg.NONE : t, this.handleSpeakingFlags(e, n)
    }), I(this, "handleNativeMuteToggled", () => {
      this.emit(m.Sh.ToggleMuteFromNative)
    }), I(this, "handleNativeMuteChanged", e => {
      this.emit(m.Sh.NativeMuteChanged, e)
    }), I(this, "handleSpeakingFlags", (e, t) => {
      this.localSpeakingFlags[e] = t;
      let n = e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e];
      this.emit(m.Sh.Speaking, e, t, n), (t & S.Dg.SOUNDSHARE) != 0 && !1 === this.soundshareSentSpeakingEvent && (this.emit(m.Sh.SoundshareSpeaking), this.soundshareSentSpeakingEvent = !0)
    }), I(this, "handleSpeakingWhileMuted", () => {
      this.emit(m.Sh.SpeakingWhileMuted)
    }), I(this, "handlePing", (e, t, n) => {
      this.emit(m.Sh.Ping, e)
    }), I(this, "handlePingTimeout", (e, t, n, r) => {
      this.emit(m.Sh.PingTimeout, n, r > 0 ? r : 4e3)
    }), I(this, "handleVideoEncoderFallback", e => {
      !this.videoEncoderFallbackPending && (this.logger.info("Falling back from current video encoder: ".concat(e)), this.codecs = this.codecs.map(t => ((e === t.name || "AV1" === t.name && "AV1X" === e) && (t.encode = !1), t)).filter(e => "video" !== e.type || !1 !== e.encode || !1 !== e.decode), this.emit(m.Sh.VideoEncoderFallback, this.codecs), this.videoEncoderFallbackPending = !0)
    }), I(this, "handleRTCPMessage", (e, t) => {
      if (e === O.ym.REMB && this.context === S.Yn.STREAM) {
        let e = JSON.parse(t);
        e.ssrcs.forEach(t => {
          var n, r, o, a;
          let s = this.videoStreamParameters.find(e => e.ssrc === t);
          if (void 0 !== s && (null !== (n = s.quality) && void 0 !== n ? n : 0) < 100 && "video" === s.type) {
            let n = Math.floor(e.bitrate * R);
            n = i()(n, null !== (r = s.minBitrate) && void 0 !== r ? r : 0, null !== (o = s.maxBitrate) && void 0 !== o ? o : n);
            let l = null !== (a = s.targetBitrate) && void 0 !== a ? a : 0;
            (Math.abs(n - l) / ((n + l) / 2) > P || void 0 === s.targetBitrate) && (this.logger.info("Updating target bitrate for SSRC ".concat(t, " from ").concat(s.targetBitrate, " to ").concat(n)), this.videoQualityManager.setGoLiveSimulcastLQTargetBitrate(n), this.updateVideoQuality())
          }
        })
      }
    }), I(this, "handleVideo", (e, t, n, r) => {
      let i = a()(this.videoStreamParameters);
      e === this.userId ? null != r && Array.isArray(r) && r.length > 0 ? r.forEach(e => {
        i.forEach((t, n) => {
          if (t.rid === e.rid) {
            let r = this.simulcastLQDisabledSsrc !== e.ssrc && e.active;
            i[n] = A(T({}, t), {
              ssrc: e.ssrc,
              rtxSsrc: e.rtxSsrc,
              active: r
            })
          }
        })
      }) : t > 0 ? (i[0].active = !0, i[0].ssrc = t, i[0].rtxSsrc = x(t)) : i[0].active = !1 : t > 0 && (void 0 !== this.remoteVideoSSRCs[e] ? this.remoteVideoSSRCs[e].includes(t) || (this.remoteVideoSSRCs[e] = [...this.remoteVideoSSRCs[e], t]) : this.remoteVideoSSRCs[e] = [t]), this.videoStreamParameters = i, this.emit(m.Sh.Video, e, null != n && "" !== n ? n : null, e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e], t, x(t), this.videoStreamParameters)
    }), I(this, "handleFirstFrame", (e, t, n) => {
      this.emit(m.Sh.FirstFrame, e, t, n)
    }), I(this, "handleNoInput", e => {
      this.emit(m.Sh.Silence, !e)
    }), I(this, "handleDesktopSourceEnded", () => {
      this.emit(m.Sh.DesktopSourceEnd)
    }), I(this, "handleSoundshare", e => {
      e && (this.soundshareActive = !0, this.conn.setTransportOptions({
        encodingVoiceBitRate: Math.max(S.ed, this.voiceBitrate)
      }), this.emit(m.Sh.SoundshareAttached))
    }), I(this, "handleSoundshareFailed", (e, t, n) => {
      this.emit(m.Sh.SoundshareFailed, {
        failureCode: e,
        failureReason: t,
        willRetry: n
      })
    }), I(this, "handleSoundshareEnded", () => {
      this.soundshareActive = !1, this.destroyed || this.conn.setTransportOptions({
        encodingVoiceBitRate: this.voiceBitrate
      })
    }), I(this, "handleNewListenerNative", e => {
      e === m.Sh.ConnectionStateChange && this.emit(e, this.connectionState)
    }), I(this, "handleStats", e => {
      if (this.connectionState === S.$j.DISCONNECTED) {
        this.off(m.Sh.Stats, this.handleStats);
        return
      }
      if (null != e) {
        if (null != this.stats) {
          let t = u()(e.rtp.outbound, (e, t) => {
              var n, r;
              return e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0, e.sent += null !== (r = t.packetsSent) && void 0 !== r ? r : 0, e
            }, {
              lost: 0,
              sent: 0
            }),
            n = u()(this.stats.rtp.outbound, (e, t) => {
              var n, r;
              return e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0, e.sent += null !== (r = t.packetsSent) && void 0 !== r ? r : 0, e
            }, {
              lost: 0,
              sent: 0
            }),
            r = t.sent - n.sent,
            o = t.lost - n.lost;
          if (0 === r) this.emit(m.Sh.OutboundLossRate, 0);
          else if (r > 0 && o >= 0) {
            let e = i()(o / (r + o), 0, 1);
            this.emit(m.Sh.OutboundLossRate, 100 * e)
          }
          let a = e.rtp.outbound.filter(e => "audio" === e.type)[0],
            s = this.stats.rtp.outbound.filter(e => "audio" === e.type)[0];
          if (null != a && null != s && null != a.framesCaptured && null != s.framesCaptured) {
            let e = a.framesCaptured - s.framesCaptured,
              t = null != a.noiseCancellerFrames ? null != s.noiseCancellerFrames ? a.noiseCancellerFrames - s.noiseCancellerFrames : 0 : e;
            if (this.noiseCancellation && t > C && null != a.noiseCancellerProcessTime && null != s.noiseCancellerProcessTime) {
              let e = a.noiseCancellerProcessTime - s.noiseCancellerProcessTime;
              e / t > 8 ? this.emit(m.Sh.NoiseCancellationError, S.H3.CPU_OVERUSE) : 0 === e && this.emit(m.Sh.NoiseCancellationError, S.H3.FAILED)
            }
            this.inputMode === S.pM.VOICE_ACTIVITY && this.vadAutoThreshold && this.vadUseKrisp && e > C && null != a.voiceActivityDetectorProcessTime && null != s.voiceActivityDetectorProcessTime && (a.voiceActivityDetectorProcessTime - s.voiceActivityDetectorProcessTime) / e > 4 && this.emit(m.Sh.VoiceActivityDetectorError, S.H3.VAD_CPU_OVERUSE)
          }
        }
        this.stats = e
      }
    }), I(this, "handleMLSFailure", (e, t) => {
      this.emit(m.Sh.MLSFailure, e, t)
    }), this.videoSupported = n, this.logger = new f.Yd("Connection(".concat(e, ")")), this.logger.enableNativeLogger(!0)
  }
}