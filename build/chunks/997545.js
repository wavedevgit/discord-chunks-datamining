/** Chunk was on web.js **/
/** chunk id: 997545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./415506.js"), require("./49124.js"), require("./642613.js"), require("./35282.js"), require("./539854.js");
var Chunk595182 = require("./595182.js"),
  i = require.n(Chunk595182),
  Chunk117806 = require("./117806.js"),
  o = require.n(Chunk117806),
  Chunk565925 = require("./565925.js"),
  l = require.n(Chunk565925),
  Chunk971793 = require("./971793.js"),
  u = require.n(Chunk971793),
  Chunk420994 = require("./420994.js"),
  Chunk579092 = require("./579092.js"),
  Chunk839548 = require("./839548.js"),
  Chunk198274 = require("./198274.js"),
  Chunk701597 = require("./701597.js"),
  Chunk46973 = require("./46973.js"),
  Chunk829839 = require("./829839.js"),
  Chunk916057 = require("./916057.js"),
  Chunk992774 = require("./992774.js"),
  Chunk158466 = require("./158466.js"),
  Chunk65154 = require("./65154.js"),
  Chunk149396 = require("./149396.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = 50,
  N = .9,
  P = .1,
  w = 0;

function R(e) {
  return (null != e ? e : v.Qx) / v.Qx
}

function D(e) {
  return null != e && 0 !== e ? e + 1 : 0
}
class x extends Chunk839548.Z {
  static create(e, t, n) {
    let r = new x(e, t, true);
    return r.initialize(n), r
  }
  static createReplay(e, t) {
    let n = new x(e, "0", true),
      r = (0, b.zS)();
    n.initializeStreamParameters([{
      type: O.Tr.VIDEO,
      rid: "100",
      ssrc: 0,
      rtxSsrc: 0,
      quality: 100,
      active: false
    }]);
    let i = (t, i) => {
        n.on(m.Sh.Stats, n.handleStats), n.conn.setOnVideoCallback(n.handleVideo), r.getCodecCapabilities(t => {
          let r = (0, g.DY)(n.experimentFlags);
          n.codecs = [{
            type: "audio",
            name: v.ad.OPUS,
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
          })], n.setCodecs(v.ad.OPUS, v.ad.H264, e), n.conn.startReplay()
        })
      },
      a = r.createReplayConnection("default", i, t);
    return null == a ? null : (n.conn = a, n)
  }
  initialize(e) {
    let t;
    this.logger.info("Creating connection to ".concat(e.address, ":").concat(e.port, " with audio ssrc: ").concat(e.ssrc)), this.beginInitializeAt = performance.now(), this.audioSSRC = e.ssrc, this.streamUserId = e.streamUserId, this.initializeStreamParameters(e.streamParameters), e.streamParameters = [{
      type: O.Tr.AUDIO,
      ssrc: this.audioSSRC,
      rid: "",
      maxBitrate: 64e3,
      soundshare: this.context === v.Yn.STREAM
    }, ...this.videoStreamParameters], e.context = this.context;
    let n = (0, b.zS)(),
      r = (r, i) => {
        if (this.destroyed) return;
        if (null != r && "" !== r) {
          this.setConnectionState(v.$j.NO_ROUTE), this.emit(m.Sh.Error, r);
          return
        }
        if (null == i) throw Error("Invalid transport info");
        this.transportInfo = i;
        let {
          protocol: a,
          address: o,
          port: s
        } = i;
        this.logger.info("Connected with local address ".concat(o, ":").concat(s, " and protocol: ").concat(a)), this.onConnectCallbackAt = performance.now(), n.getCodecCapabilities(r => {
          this.onVideoCodecsCallbackAt = performance.now(), this.logger.info("Available engine codecs: ".concat(JSON.stringify(r)));
          let i = (0, g.DY)(this.experimentFlags);
          this.logger.info("Experimental codecs: ".concat(JSON.stringify(i))), this.codecs = [{
            type: "audio",
            name: v.ad.OPUS,
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
            var i, l, c, u, d, f, p, _, h, g, E, b, y, O, S, I;
            this.onEncryptionModesCallbackAt = performance.now(), this.logger.info("Encryption modes: ".concat(r)), t.setTransportOptions(this.getConnectionTransportOptions()), t.setSelfMute(this.selfMute || this.context === v.Yn.STREAM), t.setSelfDeafen(this.selfDeaf), t.setOnSpeakingCallback(this.handleSpeakingNative), null == (i = t.setOnNativeMuteToggleCallback) || i.call(t, this.handleNativeMuteToggled), null == (l = t.setOnNativeMuteChangedCallback) || l.call(t, this.handleNativeMuteChanged), null == (c = t.setOnSpeakingWhileMutedCallback) || c.call(t, this.handleSpeakingWhileMuted), null == (u = t.setPingInterval) || u.call(t, v.$B), t.setPingCallback(this.handlePing), null == (d = t.setPingTimeoutCallback) || d.call(t, this.handlePingTimeout), null == (f = t.setOnVideoEncoderFallbackCallback) || f.call(t, this.handleVideoEncoderFallback), null == (p = t.setOnVideoDecoderFallbackCallback) || p.call(t, this.handleVideoDecoderFallback), null == (_ = t.setOnRtcpMessageCallback) || _.call(t, this.handleRTCPMessage), n.setTransportOptions({
              builtInEchoCancellation: true,
              echoCancellation: this.echoCancellation,
              noiseSuppression: this.noiseSuppression,
              automaticGainControl: this.automaticGainControl.enabled,
              automaticGainControlConfig: this.automaticGainControl,
              noiseCancellation: this.noiseCancellation,
              noiseCancellationDuringProcessing: this.noiseCancellationDuringProcessing,
              noiseCancellationAfterProcessing: this.noiseCancellationAfterProcessing,
              vadAfterWebrtc: this.vadAfterWebrtc,
              voiceFilters: null != this.voiceFilterId
            }), n.setNoInputThreshold(false), n.setNoInputCallback(this.handleNoInput), this.videoSupported && (t.setOnVideoCallback(this.handleVideo), null == (g = t.setOnFirstFrameCallback) || g.call(t, this.handleFirstFrame), null == (E = t.setOnFirstFrameDeliveredStatsCallback) || E.call(t, this.handleFirstFrameStats), null == (b = t.setOnFirstFrameEncryptedStatsCallback) || b.call(t, this.handleFirstFrameEncryptedStats), null == (y = t.setOnDesktopSourceEnded) || y.call(t, this.handleDesktopSourceEnded), null == (O = t.setOnSoundshare) || O.call(t, this.handleSoundshare), null == (S = t.setOnSoundshareEnded) || S.call(t, this.handleSoundshareEnded), null == (I = t.setOnSoundshareFailed) || I.call(t, this.handleSoundshareFailed)), null == (h = t.setOnMLSFailureCallback) || h.call(t, this.handleMLSFailure), this.setConnectionState(v.$j.CONNECTED), this.emit(m.Sh.Connected, a, {
              address: o,
              port: s,
              mode: this.chooseEncryptionMode(e.modes, r),
              codecs: this.codecs
            }), this.on(m.Sh.Stats, this.handleStats);
            let T = this.getUserOptions();
            for (let e of (T.forEach(e => {
                var t, n;
                return this.logger.info("Creating user: ".concat(e.id, " with audio SSRC: ").concat(e.ssrc, " and video SSRCs: ").concat(null != (n = null == (t = e.videoSsrcs) ? true : t.join(",")) ? n : 0))
              }), this.mergeUsers(T), this.emit(m.Sh.RemoteStreamsReady, T.length), Object.keys(this.localSpeakingFlags))) e !== this.userId && this.setSpeakingFlags(e, this.localSpeakingFlags[e])
          })
        })
      };
    if (null != n.createOwnStreamConnectionWithOptions) o = this.context === v.Yn.STREAM && this.streamUserId === this.userId ? n.createOwnStreamConnectionWithOptions : n.createVoiceConnectionWithOptions;
    else if (null != n.createOwnStreamConnection) {
      var i, a, o, s = this.context === v.Yn.STREAM && this.streamUserId === this.userId ? n.createOwnStreamConnection : n.createVoiceConnection;
      o = (e, t, n) => s(t.ssrc, this.userId, t.address, t.port, n, t.experiments, t.streamParameters)
    } else o = (e, t, r) => new n.VoiceConnection(t.ssrc, e, t.address, t.port, r, t.experiments, t.streamParameters);
    null == (i = (t = this.conn = o(this.userId, e, r)).setSecureFramesStateUpdateCallback) || i.call(t, e => {
      this.logger.info("DAVE protocol state update: ".concat(JSON.stringify(e))), this.emit(m.Sh.SecureFramesUpdate, e)
    }), null == (a = t.setDesktopSourceStatusCallback) || a.call(t, e => {
      if ("videohook_start" === e.type) this.emit(m.Sh.VideoHookStart);
      else if ("videohook_stop" === e.type) this.emit(m.Sh.VideoHookStop);
      else if ("videohook_initialize" === e.type) this.emit(m.Sh.VideoHookInitialize, e.backend, e.format, e.framebufferFormat, e.sampleCount, e.success, e.reinitialization);
      else if ("screenshare_finish" === e.type) {
        var t;
        this.emit(m.Sh.ScreenshareFinish, e.screenshareFrames, e.videohookFrames, e.hybridDxgiFrames, e.hybridGdiFrames, e.hybridVideohookFrames, e.hybridGraphicsCaptureFrames, e.hybridCaptureMethodSwitches, e.hybridGdiBitBltFrames, e.hybridGdiPrintWindowFrames, e.quartzFrames, null != (t = e.desktopCapturerType) ? t : e.desktop_capturer_type, e.activity, e.goLiveCameraFrames, e.screenCaptureKitFrames)
      } else "video_state" === e.type ? this.emit(m.Sh.VideoState, e.state) : e.type.startsWith("soundshare_") && this.emit(m.Sh.SoundshareTrace, e)
    }), this.on("newListener", this.handleNewListenerNative)
  }
  destroy() {
    this.conn.destroy(), Object.keys(this.localSpeakingFlags).filter(e => e !== this.userId).forEach(e => this.emit(m.Sh.Speaking, e, v.Dg.NONE, this.remoteAudioSSRCs[e])), this.setConnectionState(v.$j.DISCONNECTED), super.destroy()
  }
  setCodecs(e, t, n) {
    this.conn.setTransportOptions(this.getCodecOptions(e, t, n)), this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = false)
  }
  getStats() {
    return this.connectionState === v.$j.DISCONNECTED ? Promise.resolve(null) : (0, d.timeout)(new Promise(e => {
      null != this.conn.getFilteredStats ? this.conn.getFilteredStats(O.QP.ALL, t => e((0, y.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants))) : null != this.conn.getStats ? this.conn.getStats(t => e((0, y.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants))) : (0, b.zS)().getStats(t => e((0, y.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants)))
    }), _.T).catch(e => {
      if (!(e instanceof d.TimeoutError)) throw e
    })
  }
  createUser(e, t, n) {
    let r = this.remoteAudioSSRCs[e],
      i = this.remoteVideoSSRCs[e];
    if (null != r && 0 === t) return void this.logger.info("Ignoring attempt to recreate user ".concat(e, " with 0 audio SSRC"));
    i = true !== i ? [...i].sort() : [], n = true === n ? null != i ? i : [] : [...n].sort();
    let a = r !== t,
      o = !l()(i, n);
    if (this.remoteAudioSSRCs[e] = t, this.remoteVideoSSRCs[e] = null != n ? n : [], this.userId !== e && (a || o)) {
      let r = true !== n && n.length > 0 ? n[0] : 0,
        i = {
          id: e,
          ssrc: t,
          videoSsrc: r,
          videoSsrcs: n,
          rtxSsrc: D(r),
          mute: this.getLocalMute(e),
          volume: this.getLocalVolume(e)
        };
      if (this.connectionState === v.$j.CONNECTED) {
        var s;
        this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null != (s = null == n ? true : n.join(",")) ? s : 0)), this.mergeUsers([i])
      }
      let a = this.localPans[e];
      null != a && this.setLocalPan(e, a.left, a.right);
      let o = this.localSpeakingFlags[e];
      null != o && o !== v.Dg.NONE && this.setSpeakingFlags(e, o)
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
  getSelfDeaf() {
    return this.selfDeaf
  }
  setSelfDeaf(e) {
    this.selfDeaf = e, this.conn.setSelfDeafen(e), this.emit(m.Sh.Deafen, e)
  }
  setSoundshareSource(e, t) {
    if (this.soundshareId === e && this.soundshareSentSpeakingEvent || this.context !== v.Yn.STREAM) return;
    this.soundshareId = e, this.soundshareSentSpeakingEvent = false;
    let n = e;
    null === n && (n = 0), this.conn.setTransportOptions({
      soundsharePid: n,
      soundshareEventDriven: true,
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
    null == (e = (t = this.conn).wasRemoteDisconnected) || e.call(t)
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
      let a;
      a = "soundboard" === t ? "soundboardAudio" : (this.context === v.Yn.STREAM ? "application" : "user").concat("audio" === t ? "Audio" : "Video"), null == (r = (i = this.conn).setClipRecordUser) || r.call(i, e, a, n)
    }
  }
  setClipsKeyFrameInterval(e) {
    this.context === v.Yn.STREAM && (this.clipsKeyFrameInterval = e, this.conn.setTransportOptions({
      keyframeInterval: this.getKeyFrameInterval(),
      alwaysSendVideo: this.keyframeInterval > 0
    }))
  }
  setViewerSideClip(e) {
    this.context === v.Yn.STREAM && this.conn.setTransportOptions({
      enableViewerSideClip: e
    })
  }
  setRemoteAudioHistory(e) {
    this.conn.setTransportOptions({
      remoteAudioHistoryMs: e
    })
  }
  setQualityDecoupling(e) {
    this.context === v.Yn.STREAM && this.conn.setTransportOptions({
      enableQualityDecoupling: e
    })
  }
  getLocalVolume(e) {
    let t = this.localVolumes[e];
    return null == t && (t = this.context === v.Yn.DEFAULT ? v.Qx : v.Yh), R(t)
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
    null == (n = (r = this.conn).setRemoteUserCanHavePriority) || n.call(r, e, t)
  }
  setBitRate(e) {
    this.setVoiceBitRate(e)
  }
  setVoiceBitRate(e) {
    if (this.voiceBitrate === e) return;
    this.voiceBitrate = e;
    let t = this.voiceBitrate;
    this.soundshareActive && (t = Math.max(v.ed, t)), this.conn.setTransportOptions({
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
    this.echoCancellation = e, (0, b.zS)().setTransportOptions({
      echoCancellation: this.echoCancellation
    })
  }
  setNoiseSuppression(e) {
    this.noiseSuppression = e, (0, b.zS)().setTransportOptions({
      noiseSuppression: this.noiseSuppression
    })
  }
  setAutomaticGainControl(e) {
    this.automaticGainControl = e, (0, b.zS)().setTransportOptions({
      automaticGainControl: this.automaticGainControl.enabled,
      automaticGainControlConfig: this.automaticGainControl
    })
  }
  setNoiseCancellation(e) {
    this.noiseCancellation = e, (0, b.zS)().setTransportOptions({
      noiseCancellation: this.noiseCancellation
    })
  }
  setNoiseCancellationDuringProcessing(e) {
    this.noiseCancellationDuringProcessing = e, (0, b.zS)().setTransportOptions({
      noiseCancellationDuringProcessing: this.noiseCancellationDuringProcessing
    })
  }
  setNoiseCancellationAfterProcessing(e) {
    this.noiseCancellationAfterProcessing = e, (0, b.zS)().setTransportOptions({
      noiseCancellationAfterProcessing: this.noiseCancellationAfterProcessing
    })
  }
  setVADAfterWebrtc(e) {
    this.vadAfterWebrtc = e, (0, b.zS)().setTransportOptions({
      vadAfterWebrtc: this.vadAfterWebrtc
    })
  }
  getNoiseCancellation() {
    return this.noiseCancellation
  }
  getVoiceFilterId() {
    return this.voiceFilterId
  }
  setVoiceFilterId(e) {
    this.voiceFilterId = e, this.emit(m.Sh.VoiceFilterChanged, e), (0, b.zS)().setTransportOptions({
      voiceFilters: null != this.voiceFilterId
    })
  }
  setQoS(e) {
    this.qos = e, this.conn.setTransportOptions({
      qos: this.qos
    })
  }
  setSoundshareDiscardRearChannels(e) {
    this.conn.setTransportOptions({
      soundshareDiscardRearChannels: e
    })
  }
  setInputMode(e, t) {
    switch (this.inputMode = e, e) {
      case v.pM.PUSH_TO_TALK:
        this.pttReleaseDelay = t.pttReleaseDelay;
        break;
      case v.pM.VOICE_ACTIVITY:
        this.vadThreshold = t.vadThreshold, this.vadAutoThreshold = t.vadAutoThreshold, this.vadUseKrisp = t.vadUseKrisp, this.vadLeading = t.vadLeading, this.vadTrailing = t.vadTrailing, this.vadKrispActivationThreshold = t.vadKrispActivationThreshold, this.vadDuringPreProcess = t.vadDuringPreProcess;
        break;
      default:
        throw Error("Unknown Input Mode: ".concat(e))
    }
    this.conn.setTransportOptions({
      inputMode: v.GO[this.inputMode],
      inputModeOptions: this.createInputModeOptions()
    })
  }
  setSilenceThreshold(e) {
    (0, b.zS)().setNoInputThreshold(e)
  }
  setForceAudioInput(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] && arguments[2];
    this.conn.setPTTActive(e, t, n)
  }
  setSpeakingFlags(e, t) {
    null != this.conn.setRemoteUserSpeakingStatus ? this.conn.setRemoteUserSpeakingStatus(e, t) : null != this.conn.setRemoteUserSpeaking && this.conn.setRemoteUserSpeaking(e, (t & v.Dg.VOICE) === v.Dg.VOICE), this.handleSpeakingFlags(e, t)
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
    } = e.quality, r = t <= 480 ? t / 3 * 4 : t / 9 * 16, i = t, a = null;
    if (null != e.desktopDescription ? a = e.desktopDescription.id : null != e.cameraDescription && (a = "".concat(e.cameraDescription.videoDeviceGuid, ":").concat(e.cameraDescription.audioDeviceGuid)), this.goLiveSourceIdentifier === a) {
      if (this.setDesktopEncodingOptions(r, i, n), null != e.desktopDescription) {
        let {
          soundshareId: t,
          useLoopback: n
        } = e.desktopDescription;
        this.soundshareId !== t && this.setSoundshareSource(t, n)
      }
      return
    }
    if (this.goLiveSourceIdentifier = a, null != this.conn.setDesktopSource) {
      if (null != e.desktopDescription) {
        let {
          id: t,
          soundshareId: n,
          useLoopback: r,
          useVideoHook: i,
          useGraphicsCaptureApiLevel: a,
          useCaptureDeviceForEncode: o,
          useGraphicsCapture: s,
          useQuartzCapturer: l,
          allowScreenCaptureKit: c,
          videoHookStaleFrameTimeoutMs: u,
          graphicsCaptureStaleFrameTimeoutMs: d,
          hdrCaptureMode: f,
          enableGlobalFramePoolLock: p
        } = e.desktopDescription;
        this.setSoundshareSource(n, r);
        let [_, h] = null != t ? t.split(":") : ["", ""];
        null != t ? this.logger.info("capturing desktop (type: ".concat(_, ", handle: ").concat(h, ", use-video-hook: ").concat(i.toString(), ", use-graphics-capture: ").concat(null == s ? true : s.toString(), ", use-graphics-capture-api-level: ").concat(null == a ? true : a.toString(), ", use-capture-device-for-encode: ").concat(null == o ? true : o.toString(), ").")) : this.logger.info("capturing desktop (type: <stop>)."), null != this.conn.setDesktopSourceWithOptions ? null != t ? this.conn.setDesktopSourceWithOptions({
          type: _,
          sourceId: h,
          useVideoHook: i,
          useGraphicsCapture: s,
          useGraphicsCaptureApiLevel: a,
          useCaptureDeviceForEncode: o,
          useQuartzCapturer: l,
          allowScreenCaptureKit: c,
          videoHookStaleFrameTimeoutMs: u,
          graphicsCaptureStaleFrameTimeoutMs: d,
          hdrCaptureMode: f,
          enableGlobalFramePoolLock: p
        }) : this.conn.clearDesktopSource() : this.conn.setDesktopSource("wumpus-".concat(h), i, _)
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
    null != this.conn.clearGoLiveDevices && this.conn.clearGoLiveDevices()
  }
  clearDesktopSource() {
    this.goLiveSourceIdentifier = null, null != this.conn.clearDesktopSource ? this.conn.clearDesktopSource() : this.conn.setDesktopSource("", false, "")
  }
  setDesktopSourceStatusCallback(e) {
    var t, n;
    null == (t = (n = this.conn).setDesktopSourceStatusCallback) || t.call(n, e)
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
      a = this.videoQualityManager.getQuality(),
      o = !h.SF.equals(i, a.capture) || a.bitrateMax !== r,
      s = this.videoStreamParameters.findIndex(e => e.quality === O.y7);
    false === s && (s = 0), o && (this.videoQualityManager.setGoliveQuality({
      capture: i,
      encode: i,
      bitrateMax: r
    }), this.videoStreamParameters.length > s && (this.videoStreamParameters[s].maxResolution = {
      type: 0 === e && 0 === t ? v.uA.SOURCE : v.uA.FIXED,
      width: e,
      height: t
    }, this.videoStreamParameters[s].maxFrameRate = n, this.videoStreamParameters[s].maxBitrate = r));
    let l = this.videoStreamParameters.findIndex(e => e.quality === O.LD),
      c = false !== l && this.videoStreamParameters.length > l,
      u = this.videoQualityManager.shouldEnableGoliveSimulcastForHqQuality(i),
      d = c && this.videoStreamParameters[l].active !== u;
    c && (this.videoStreamParameters[l].active = u, this.simulcastLQDisabledSsrc = u ? true : this.videoStreamParameters[l].ssrc), (o || d) && (this.emit(m.Sh.Video, this.userId, null, this.audioSSRC, this.videoStreamParameters[s].ssrc, D(this.videoStreamParameters[s].ssrc), this.videoStreamParameters), this.conn.setTransportOptions(this.applyQualityConstraints().constraints))
  }
  setSDP(e) {}
  setRemoteVideoSinkWants(e) {
    this.remoteVideoSinkWants = e, this.updateVideoQuality(O.XR)
  }
  setLocalVideoSinkWants(e) {
    let t = this.localVideoSinkWants,
      n = e;
    for (let [e, s] of Object.entries(this.remoteVideoSSRCs)) {
      var r, i, a, o;
      let l = 0,
        c = 0;
      for (let e of s) l += null == t ? true : t[e], c += null == n ? true : n[e];
      0 === l && 0 !== c && (null == (r = (i = this.conn).setDisableLocalVideo) || r.call(i, e, false)), 0 !== l && 0 === c && (null == (a = (o = this.conn).setDisableLocalVideo) || a.call(o, e, true))
    }
    this.localVideoSinkWants = e
  }
  startSamplesLocalPlayback(e, t, n, r) {
    if (t.numberOfChannels > 2) return void r(2, "Too many channels");
    if (null == this.conn.startSamplesLocalPlayback) return void r(3, "Not supported");
    for (var i = [], a = 0; a < t.numberOfChannels; a++) {
      var o = t.getChannelData(a);
      i.push(o)
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
    var t, n;
    null == (t = (n = this.conn).stopSamplesLocalPlayback) || t.call(n, e)
  }
  setBandwidthEstimationExperiments(e) {
    this.conn.setTransportOptions({
      bandwidthEstimationExperiments: e
    })
  }
  updateVideoQualityCore(e, t) {
    this.videoSupported && (this.destroyed || this.conn.setTransportOptions(e))
  }
  setStreamParameters(e) {
    return new Promise((t, n) => {
      for (let t of this.videoStreamParameters) {
        let r = e.findIndex(e => e.rid === t.rid);
        if (false === r) return void n(Error("Invalid rid"));
        let i = [];
        l()(this.videoStreamParameters[r], e[r]) || (this.videoStreamParameters[r] = I({}, e[r]), i.push(I({}, e[r]))), this.conn.setTransportOptions({
          streamParameters: i
        })
      }
      t()
    })
  }
  applyVideoTransportOptions() {
    if (!this.videoSupported) return;
    let e = false;
    if (this.hasDesktopSource() && this.videoStreamParameters.length > 0) {
      var t;
      e = (null == (t = this.videoStreamParameters[0].maxResolution) ? true : t.type) === v.uA.SOURCE
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
      let t = true !== this.remoteVideoSSRCs[e] && this.remoteVideoSSRCs[e].length > 0 ? this.remoteVideoSSRCs[e][0] : 0;
      return {
        id: e,
        ssrc: this.remoteAudioSSRCs[e],
        videoSsrc: t,
        videoSsrcs: this.remoteVideoSSRCs[e],
        rtxSsrc: D(t),
        mute: this.getLocalMute(e),
        volume: this.getLocalVolume(e)
      }
    })
  }
  createInputModeOptions() {
    switch (this.inputMode) {
      case v.pM.VOICE_ACTIVITY:
        return {
          vadThreshold: this.vadThreshold, vadAutoThreshold: this.vadAutoThreshold ? E.a.VERY_AGGRESSIVE : E.a.DISABLED, vadUseKrisp: this.vadUseKrisp, vadLeading: this.vadLeading, vadTrailing: this.vadTrailing, vadKrispActivationThreshold: this.vadKrispActivationThreshold, vadDuringPreProcess: this.vadDuringPreProcess
        };
      case v.pM.PUSH_TO_TALK:
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
    if (e !== v.ad.H264) return {};
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
        "profile-level-id": "android" === (0, b.zS)().platform ? t : e
      }
    }
  }
  getCodecOptions(e, t, n) {
    var r, i, a;
    let o, s = {
        type: null != (r = null == (o = this.codecs.find(t => t.name === e)) ? true : o.payloadType) ? r : 0,
        name: e,
        freq: 48e3,
        pacsize: 960,
        channels: 1,
        rate: 64e3
      },
      l = this.codecs.filter(e => "audio" === e.type).map(e => {
        var t;
        return {
          type: null != (t = null == e ? true : e.payloadType) ? t : 0,
          name: e.name,
          freq: 48e3,
          channels: 2,
          params: {
            stereo: "1"
          }
        }
      });
    n === v.Yn.STREAM && (s.channels = 2);
    let c = [],
      u = {
        name: "",
        type: 0,
        rtxType: 0,
        params: {}
      };
    for (o of this.codecs) {
      if (o.name === e) continue;
      let n = {
        name: (0, g.AQ)(o.name),
        type: null != (i = null == o ? true : o.payloadType) ? i : 0,
        rtxType: null != (a = null == o ? true : o.rtxPayloadType) ? a : 0,
        params: this.getCodecParams(o.name, true)
      };
      this.experimentFlags.has(O.V8.RESET_DECODER_ON_ERRORS) && (n.params["reset-on-errors"] = "1"), this.experimentFlags.has(O.V8.SOFTWARE_FALLBACK_ON_ERRORS) && (n.params["fallback-after-errors"] = "3"), this.experimentFlags.has(O.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS) && (n.params["fallback-on-consecutive-errors"] = "1"), this.experimentFlags.has(O.V8.SIGNAL_AV1_HARDWARE_DECODE) && (n.params["hardware-av1-decode"] = "1"), "H265" === n.name && (n.params["software-h265"] = this.experimentFlags.has(O.V8.H265_HARDWARE_ONLY) ? "0" : "1"), n.params["hardware-h264"] = this.useElectronVideo ? "1" : "0", c.push(n), o.name === t && (u = C(I({}, n), {
        params: this.getCodecParams(o.name, false)
      }), this.experimentFlags.has(O.V8.VIDEOTOOLBOX_RATE_CONTROL) && (u.params["fixed-rate-presentation-timestamps"] = "1"), this.experimentFlags.has(O.V8.LOW_LATENCY_RATE_CONTROL) && (u.params["low-latency-rate-control"] = "1"), this.experimentFlags.has(O.V8.WMF_GPU_ENCODE) && (u.params["wmf-gpu"] = "1"))
    }
    return {
      videoEncoder: u,
      videoDecoders: c,
      audioEncoder: s,
      audioDecoders: l
    }
  }
  getKeyFrameInterval() {
    return this.keyframeInterval > 0 && this.clipsKeyFrameInterval > 0 ? Math.min(this.keyframeInterval, this.clipsKeyFrameInterval) : Math.max(this.keyframeInterval, this.clipsKeyFrameInterval)
  }
  getConnectionTransportOptions() {
    let e = C(I({
      selfMute: this.selfMute,
      inputMode: v.GO[this.inputMode],
      inputModeOptions: this.createInputModeOptions(),
      minimumJitterBufferLevel: this.minimumJitterBufferLevel,
      postponeDecodeLevel: this.postponeDecodeLevel
    }, this.getAttenuationOptions()), {
      fec: true,
      packetLossRate: .3,
      qos: this.qos,
      prioritySpeakerDucking: v.jg,
      encodingVoiceBitRate: this.voiceBitrate,
      callBitRate: v.$A,
      callMinBitRate: v.mN,
      callMaxBitRate: v.mC,
      encodingVideoDegradationPreference: this.videoDegradationPreference,
      reconnectInterval: this.reconnectInterval
    });
    return (0, b.eJ)(v.eR.VIDEO_EFFECTS) && this.context === v.Yn.STREAM && (e.enableVideoEffects = true), this.experimentFlags.has(O.V8.MUTE_BEFORE_PROCESSING) && (e.muteBeforeProcessing = true), this.experimentFlags.has(O.V8.PTT_BEFORE_PROCESSING) && (e.pttBeforeProcessing = true), this.experimentFlags.has(O.V8.SKIP_ENCODE) && (e.skipEncode = true), e
  }
  setStream(e) {
    throw Error("Method not implemented.")
  }
  getUserIdBySsrc(e) {}
  prepareSecureFramesTransition(e, t, n) {
    var r, i;
    0 === e && (this.lastExecutedTransitionId = false, this.lastPreparedTransitionId = false), this.lastPreparedTransitionId = e, null == (r = (i = this.conn).prepareSecureFramesTransition) || r.call(i, e, t, n)
  }
  prepareSecureFramesEpoch(e, t, n) {
    var r, i;
    null == (r = (i = this.conn).prepareSecureFramesEpoch) || r.call(i, e, t, n)
  }
  executeSecureFramesTransition(e) {
    var t, n;
    let r;
    if (!(r = false === this.lastExecutedTransitionId || false === this.lastPreparedTransitionId || (this.lastPreparedTransitionId >= this.lastExecutedTransitionId ? e > this.lastExecutedTransitionId && e <= this.lastPreparedTransitionId : e > this.lastExecutedTransitionId || e <= this.lastPreparedTransitionId))) {
      let t = "Skipping invalid transition ".concat(e, " outside of range (").concat(this.lastExecutedTransitionId, "-").concat(this.lastPreparedTransitionId, "]");
      throw this.logger.warn(t), Error(t)
    }
    this.lastExecutedTransitionId = e, null == (t = (n = this.conn).executeSecureFramesTransition) || t.call(n, e)
  }
  getMLSKeyPackage(e) {
    var t, n;
    null == (t = (n = this.conn).getMLSKeyPackage) || t.call(n, e)
  }
  updateMLSExternalSender(e) {
    var t, n;
    null == (t = (n = this.conn).updateMLSExternalSender) || t.call(n, e)
  }
  processMLSProposals(e, t) {
    var n, r;
    null == (n = (r = this.conn).processMLSProposals) || n.call(r, e, t)
  }
  prepareMLSCommitTransition(e, t, n) {
    var r, i;
    this.lastPreparedTransitionId = e, null == (r = (i = this.conn).prepareMLSCommitTransition) || r.call(i, e, t, n)
  }
  processMLSWelcome(e, t, n) {
    var r, i;
    this.lastPreparedTransitionId = e, null == (r = (i = this.conn).processMLSWelcome) || r.call(i, e, t, n)
  }
  getMLSPairwiseFingerprint(e, t, n) {
    var r, i;
    null == (r = (i = this.conn).getMLSPairwiseFingerprint) || r.call(i, e, t, n)
  }
  presentDesktopSourcePicker(e) {
    var t, n;
    null == (t = (n = this.conn).presentDesktopSourcePicker) || t.call(n, e)
  }
  mergeUsers(e) {
    this.conn.mergeUsers(e), this.emit(m.Sh.UsersMerged, e)
  }
  constructor(e, t, n) {
    super(e, t), S(this, "mediaEngineConnectionId", "Native-".concat(w++)), S(this, "goLiveSourceIdentifier", true), S(this, "selfVideo", false), S(this, "codecs", []), S(this, "videoEncoderFallbackPending", false), S(this, "videoDecoderFallbackSent", new Set), S(this, "desktopDegradationPreference", (0, b.zS)().DegradationPreference.MAINTAIN_FRAMERATE), S(this, "sourceDesktopDegradationPreference", (0, b.zS)().DegradationPreference.DISABLED), S(this, "videoDegradationPreference", (0, b.zS)().DegradationPreference.BALANCED), S(this, "localPans", {}), S(this, "remoteAudioSSRCs", {}), S(this, "remoteVideoSSRCs", {}), S(this, "inputMode", v.pM.VOICE_ACTIVITY), S(this, "vadThreshold", false), S(this, "vadAutoThreshold", true), S(this, "vadKrispActivationThreshold", .5), S(this, "vadUseKrisp", true), S(this, "vadLeading", 5), S(this, "vadTrailing", 25), S(this, "vadDuringPreProcess", false), S(this, "pttReleaseDelay", 20), S(this, "soundshareActive", false), S(this, "soundshareId", null), S(this, "soundshareSentSpeakingEvent", false), S(this, "echoCancellation", true), S(this, "noiseSuppression", true), S(this, "automaticGainControl", {
      enabled: true
    }), S(this, "noiseCancellation", false), S(this, "noiseCancellationDuringProcessing", false), S(this, "noiseCancellationAfterProcessing", false), S(this, "vadAfterWebrtc", false), S(this, "voiceFilterId", null), S(this, "attenuationFactor", .5), S(this, "attenuateWhileSpeakingSelf", false), S(this, "attenuateWhileSpeakingOthers", true), S(this, "qos", true), S(this, "conn", true), S(this, "minimumJitterBufferLevel", 0), S(this, "postponeDecodeLevel", 100), S(this, "reconnectInterval", 6e4), S(this, "keyframeInterval", 0), S(this, "clipsKeyFrameInterval", 0), S(this, "videoQualityMeasurement", ""), S(this, "videoEncoderExperiments", ""), S(this, "numFastUdpReconnects", 0), S(this, "simulcastLQDisabledSsrc", true), S(this, "lastPreparedTransitionId", false), S(this, "lastExecutedTransitionId", false), S(this, "logger", true), S(this, "transportInfo", true), S(this, "beginInitializeAt", true), S(this, "onConnectCallbackAt", true), S(this, "onVideoCodecsCallbackAt", true), S(this, "onEncryptionModesCallbackAt", true), S(this, "handleSpeakingNative", (e, t, n) => {
      let r = v.Dg.NONE;
      r = "boolean" == typeof t ? t ? v.Dg.VOICE : v.Dg.NONE : t, this.handleSpeakingFlags(e, r, n)
    }), S(this, "handleNativeMuteToggled", () => {
      this.emit(m.Sh.ToggleMuteFromNative)
    }), S(this, "handleNativeMuteChanged", e => {
      this.emit(m.Sh.NativeMuteChanged, e)
    }), S(this, "handleSpeakingFlags", (e, t, n) => {
      this.localSpeakingFlags[e] = t;
      let r = e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e];
      this.emit(m.Sh.Speaking, e, t, r, n), (t & v.Dg.SOUNDSHARE) != 0 && false === this.soundshareSentSpeakingEvent && (this.emit(m.Sh.SoundshareSpeaking), this.soundshareSentSpeakingEvent = true)
    }), S(this, "handleSpeakingWhileMuted", () => {
      this.emit(m.Sh.SpeakingWhileMuted)
    }), S(this, "handlePing", (e, t, n) => {
      this.emit(m.Sh.Ping, e)
    }), S(this, "handlePingTimeout", (e, t, n, r) => {
      this.emit(m.Sh.PingTimeout, n, r > 0 ? r : 4e3)
    }), S(this, "handleVideoEncoderFallback", e => {
      this.videoEncoderFallbackPending || (this.logger.info("Falling back from current video encoder: ".concat(e)), this.codecs = this.codecs.map(t => ((e === t.name || "AV1" === t.name && "AV1X" === e) && (t.encode = false), t)).filter(e => "video" !== e.type || false !== e.encode || false !== e.decode), this.emit(m.Sh.VideoEncoderFallback, this.codecs), this.videoEncoderFallbackPending = true)
    }), S(this, "handleVideoDecoderFallback", e => {
      this.videoDecoderFallbackSent.has(e) || (this.videoDecoderFallbackSent.add(e), this.logger.info("Falling back from current video decoder: ".concat(e)), this.codecs = this.codecs.map(t => ((e === t.name || "AV1" === t.name && "AV1X" === e) && (t.decode = false), t)).filter(e => "video" !== e.type || false !== e.encode || false !== e.decode), this.emit(m.Sh.VideoDecoderFallback, this.codecs))
    }), S(this, "handleRTCPMessage", (e, t) => {
      if (e === O.ym.REMB && this.context === v.Yn.STREAM) {
        let e = JSON.parse(t);
        e.ssrcs.forEach(t => {
          var n, r, a, o;
          let s = this.videoStreamParameters.find(e => e.ssrc === t);
          if (true !== s && (null != (n = s.quality) ? n : 0) < 100 && "video" === s.type) {
            let n = Math.floor(e.bitrate * N);
            n = i()(n, null != (r = s.minBitrate) ? r : 0, null != (a = s.maxBitrate) ? a : n);
            let l = null != (o = s.targetBitrate) ? o : 0;
            (Math.abs(n - l) / ((n + l) / 2) > P || true === s.targetBitrate) && (this.logger.info("Updating target bitrate for SSRC ".concat(t, " from ").concat(s.targetBitrate, " to ").concat(n)), this.videoQualityManager.setGoLiveSimulcastLQTargetBitrate(n), this.updateVideoQuality())
          }
        })
      }
    }), S(this, "handleVideo", (e, t, n, r) => {
      let i = o()(this.videoStreamParameters);
      e === this.userId ? null != r && Array.isArray(r) && r.length > 0 ? r.forEach(e => {
        i.forEach((t, n) => {
          if (t.rid === e.rid) {
            let r = this.simulcastLQDisabledSsrc !== e.ssrc && e.active;
            i[n] = C(I({}, t), {
              ssrc: e.ssrc,
              rtxSsrc: e.rtxSsrc,
              active: r
            })
          }
        })
      }) : t > 0 ? (i[0].active = true, i[0].ssrc = t, i[0].rtxSsrc = D(t)) : i[0].active = false : t > 0 && (true !== this.remoteVideoSSRCs[e] ? this.remoteVideoSSRCs[e].includes(t) || (this.remoteVideoSSRCs[e] = [...this.remoteVideoSSRCs[e], t]) : this.remoteVideoSSRCs[e] = [t]), this.videoStreamParameters = i, this.emit(m.Sh.Video, e, null != n && "" !== n ? n : null, e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e], t, D(t), this.videoStreamParameters)
    }), S(this, "handleFirstFrame", (e, t, n) => {
      this.emit(m.Sh.FirstFrame, e, t, n)
    }), S(this, "handleFirstFrameStats", e => {
      this.emit(m.Sh.FirstFrameStats, e)
    }), S(this, "handleFirstFrameEncryptedStats", e => {
      this.emit(m.Sh.FirstFrameEncryptedStats, e)
    }), S(this, "handleNoInput", e => {
      this.emit(m.Sh.Silence, !e)
    }), S(this, "handleDesktopSourceEnded", (e, t) => {
      this.emit(m.Sh.DesktopSourceEnd, e, t)
    }), S(this, "handleSoundshare", e => {
      e && (this.soundshareActive = true, this.conn.setTransportOptions({
        encodingVoiceBitRate: Math.max(v.ed, this.voiceBitrate)
      }), this.emit(m.Sh.SoundshareAttached))
    }), S(this, "handleSoundshareFailed", (e, t, n) => {
      this.emit(m.Sh.SoundshareFailed, {
        failureCode: e,
        failureReason: t,
        willRetry: n
      })
    }), S(this, "handleSoundshareEnded", () => {
      this.soundshareActive = false, this.destroyed || this.conn.setTransportOptions({
        encodingVoiceBitRate: this.voiceBitrate
      })
    }), S(this, "handleNewListenerNative", e => {
      e === m.Sh.ConnectionStateChange && this.emit(e, this.connectionState)
    }), S(this, "handleStats", e => {
      if (this.connectionState === v.$j.DISCONNECTED) return void this.off(m.Sh.Stats, this.handleStats);
      if (null != e) {
        if (null != this.stats) {
          let t = u()(e.rtp.outbound, (e, t) => {
              var n, r;
              return e.lost += null != (n = t.packetsLost) ? n : 0, e.sent += null != (r = t.packetsSent) ? r : 0, e
            }, {
              lost: 0,
              sent: 0
            }),
            n = u()(this.stats.rtp.outbound, (e, t) => {
              var n, r;
              return e.lost += null != (n = t.packetsLost) ? n : 0, e.sent += null != (r = t.packetsSent) ? r : 0, e
            }, {
              lost: 0,
              sent: 0
            }),
            r = t.sent - n.sent,
            a = t.lost - n.lost;
          if (0 === r) this.emit(m.Sh.OutboundLossRate, 0);
          else if (r > 0 && a >= 0) {
            let e = i()(a / (r + a), 0, 1);
            this.emit(m.Sh.OutboundLossRate, 100 * e)
          }
          let o = e.rtp.outbound.filter(e => "audio" === e.type)[0],
            s = this.stats.rtp.outbound.filter(e => "audio" === e.type)[0];
          if (null != o && null != s && null != o.framesCaptured && null != s.framesCaptured) {
            let e = o.framesCaptured - s.framesCaptured,
              t = null != o.noiseCancellerFrames ? null != s.noiseCancellerFrames ? o.noiseCancellerFrames - s.noiseCancellerFrames : 0 : e;
            if (this.noiseCancellation && t > A && null != o.noiseCancellerProcessTime && null != s.noiseCancellerProcessTime) {
              let e = o.noiseCancellerProcessTime - s.noiseCancellerProcessTime;
              e / t > 8 ? this.emit(m.Sh.NoiseCancellationError, v.H3.CPU_OVERUSE) : 0 === e && this.emit(m.Sh.NoiseCancellationError, v.H3.FAILED)
            }
            this.inputMode === v.pM.VOICE_ACTIVITY && this.vadAutoThreshold && this.vadUseKrisp && e > A && null != o.voiceActivityDetectorProcessTime && null != s.voiceActivityDetectorProcessTime && (o.voiceActivityDetectorProcessTime - s.voiceActivityDetectorProcessTime) / e > 4 && this.emit(m.Sh.VoiceActivityDetectorError, v.H3.VAD_CPU_OVERUSE)
          }
        }
        this.stats = e
      }
    }), S(this, "handleMLSFailure", (e, t) => {
      this.emit(m.Sh.MLSFailure, e, t)
    }), this.videoSupported = n, this.logger = new f.Yd("Connection(".concat(e, ")")), this.logger.enableNativeLogger(true)
  }
}