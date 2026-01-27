/** Chunk was on web.js **/
/** chunk id: 904986, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _,
  y: () => l.y
}), require("./896048.js"), require("./457529.js");
var Chunk415955 = require("./415955.js"),
  i = require.n(Chunk415955),
  Chunk241899 = require("./241899.js"),
  o = require.n(Chunk241899),
  Chunk972347 = require("./972347.js"),
  Chunk935172 = require("./935172.js"),
  Chunk466376 = require("./466376.js"),
  Chunk731854 = require("./731854.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let p = 0;
class _ extends Chunk972347.A {
  destroy() {
    this.destroyed = true, this.framerateReducer.destroy(), this.setConnectionState(u.$I.DISCONNECTED), this.emit(l.y.Destroy, this), this.removeAllListeners()
  }
  getLocalMute(e) {
    return this.localMutes[e] || false
  }
  getLocalVideoDisabled(e) {
    var t;
    return null != (t = this.disabledLocalVideos[e]) && t
  }
  setLocalVideoDisabled(e, t) {
    this.disabledLocalVideos[e] = t, this.emit(l.y.LocalVideoDisabled, e, t)
  }
  getHasActiveVideoOutputSink(e) {
    return this.activeOutputSinks.has(e) && this.activeOutputSinks.get(e).size > 0
  }
  setHasActiveVideoOutputSink(e, t, n) {
    var r;
    let i = this.getHasActiveVideoOutputSink(e),
      a = null != (r = this.activeOutputSinks.get(e)) ? r : new Set;
    t ? a.add(n) : a.delete(n), this.activeOutputSinks.set(e, a);
    let o = this.getHasActiveVideoOutputSink(e);
    this.isActiveOutputSinksEnabled = true, i !== o && this.emit(l.y.ActiveSinksChange, e, o)
  }
  getActiveOutputSinkTrackingEnabled() {
    return this.isActiveOutputSinksEnabled
  }
  setUseElectronVideo(e) {
    this.useElectronVideo = e
  }
  setClipRecordUser(e, t, n) {}
  setViewerSideClip(e) {}
  setRemoteAudioHistory(e) {}
  setClipsKeyFrameInterval(e) {}
  setQualityDecoupling(e) {}
  presentDesktopSourcePicker(e) {}
  getStreamParameters() {
    return i()(this.videoStreamParameters)
  }
  setExperimentFlag(e, t) {
    t ? this.experimentFlags.add(e) : this.experimentFlags.delete(e)
  }
  setConnectionState(e) {
    this.logger.info("Connection state change: ".concat(this.connectionState, " => ").concat(e)), this.connectionState = e, this.emit(l.y.ConnectionStateChange, this.connectionState)
  }
  updateVideoQuality(e) {
    var t, n;
    let r = this.videoStreamParameters.findIndex(e => 100 === e.quality);
    false === r && (r = 0);
    let {
      quality: a,
      constraints: s
    } = this.applyQualityConstraints({}, this.videoStreamParameters[r].ssrc), l = i()(this.videoStreamParameters);
    null != a && (l[r].maxBitrate = a.bitrateMax, l[r].minBitrate = a.bitrateMin, l[r].targetBitrate = null != (t = a.bitrateTarget) ? t : 0, null != a.encode && (l[r].maxPixelCount = a.encode.pixelCount, l[r].maxFrameRate = a.encode.framerate)), this.videoStreamParameters = l;
    for (let e = 0; e < this.videoStreamParameters.length; e++) {
      if (e === r) continue;
      let {
        quality: t,
        constraints: i
      } = this.applyQualityConstraints({}, this.videoStreamParameters[e].ssrc);
      null != t && (this.videoStreamParameters[e].maxBitrate = t.bitrateMax, this.videoStreamParameters[e].minBitrate = t.bitrateMin, this.videoStreamParameters[e].targetBitrate = null != (n = t.bitrateTarget) ? n : 0, null != t.encode && (this.videoStreamParameters[e].maxPixelCount = t.encode.pixelCount, this.videoStreamParameters[e].maxFrameRate = t.encode.framerate)), 100 === this.videoStreamParameters[e].quality && (s = i, a = t)
    }
    s.streamParameters = i()(this.videoStreamParameters), s.remoteSinkWantsPixelCount = Math.max(...this.videoStreamParameters.map(e => {
      var t;
      return null != (t = e.maxPixelCount) ? t : 0
    }));
    let c = null != e ? o()(s, e) : f({}, s);
    this.logger.verbose("updateVideoQuality: ".concat(JSON.stringify(c))), this.updateVideoQualityCore(c, a)
  }
  applyVideoQualityMode(e) {
    if (this.context !== u.x.DEFAULT) return;
    let t = c.Cx[e];
    this.videoQualityManager.setQualityOverwrite(t), this.updateVideoQuality()
  }
  overwriteQualityForTesting(e) {
    this.videoQualityManager.setQualityOverwrite(e), this.updateVideoQuality()
  }
  configureGoLiveSimulcast(e, t) {
    this.videoQualityManager.configGoLiveSimulcast(e, t)
  }
  applyQualityConstraints() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : true;
    return this.videoQualityManager.applyQualityConstraints(e, t)
  }
  initializeStreamParameters(e) {
    this.videoStreamParameters = e.filter(e => (e.type === u.mI.VIDEO || e.type === u.mI.SCREEN) && "string" == typeof e.rid).map(e => {
      var t, n, r, i;
      let a = this.videoQualityManager.getQuality(e.ssrc);
      return {
        type: e.type,
        active: e.active,
        rid: e.rid,
        ssrc: e.ssrc,
        rtxSsrc: e.rtxSsrc,
        quality: e.quality,
        maxBitrate: (null != (t = e.quality) ? t : 100) < 100 ? a.bitrateMax / 4 : a.bitrateMax,
        maxFrameRate: null == (n = a.capture) ? true : n.framerate,
        maxResolution: {
          type: u.ei.FIXED,
          width: null == (r = a.capture) ? true : r.width,
          height: null == (i = a.capture) ? true : i.height
        }
      }
    })
  }
  getLocalWant(e) {
    var t, n;
    let r = this.videoStreamParameters.some(t => t.ssrc === e && t.quality === u.Y4) || true === e,
      i = this.context === u.x.DEFAULT || r,
      a = this.remoteVideoSinkWants[null != (t = null != e ? e : null == (n = this.videoStreamParameters[0]) ? true : n.ssrc) ? t : 0];
    if (null != a && a > 0) return a;
    let o = this.remoteVideoSinkWants.any;
    return null != o && o > 0 && i ? o : 100 * !!i
  }
  getRemoteVideoSinkWants(e) {
    return this.remoteVideoSinkWants[e]
  }
  getRemoteVideoSinkPixelCount(e) {
    var t, n;
    return true === e ? 0 : null != (t = null == (n = this.remoteVideoSinkWants.pixelCounts) ? true : n[e]) ? t : 0
  }
  async emitStats() {
    let e = await this.getStats();
    return null != e && this.emit(l.y.Stats, e), e
  }
  constructor(e, t) {
    super(), d(this, "mediaEngineConnectionId", "WebRTC-".concat(p++)), d(this, "context", true), d(this, "userId", true), d(this, "streamUserId", true), d(this, "destroyed", false), d(this, "audioSSRC", 0), d(this, "videoSSRC", 0), d(this, "selfDeaf", false), d(this, "selfMute", false), d(this, "localMutes", {}), d(this, "disabledLocalVideos", {}), d(this, "localVolumes", {}), d(this, "isActiveOutputSinksEnabled", false), d(this, "activeOutputSinks", new Map), d(this, "videoSupported", false), d(this, "useElectronVideo", false), d(this, "voiceBitrate", u.PR), d(this, "remoteSinkWantsMaxFramerate", u.sG), d(this, "videoQualityManager", true), d(this, "wantsPriority", new Set), d(this, "localSpeakingFlags", {}), d(this, "videoReady", false), d(this, "videoStreamParameters", []), d(this, "remoteVideoSinkWants", {
      any: 100
    }), d(this, "localVideoSinkWants", {
      any: 100
    }), d(this, "connectionState", u.$I.CONNECTING), d(this, "stats", true), d(this, "onDesktopEncodingOptionsSet", (e, t, n) => {}), d(this, "experimentFlags", new Set), d(this, "framerateReducer", true), this.context = e, this.userId = t, this.videoQualityManager = new c.k7(e, this);
    const r = n(429430).A;
    this.framerateReducer = new r(this, this.videoQualityManager)
  }
}