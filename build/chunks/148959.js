/** Chunk was on web.js **/
/** chunk id: 148959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E,
  y: () => h
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk47770 = require("./47770.js"),
  Chunk846519 = require("./846519.js"),
  Chunk710845 = require("./710845.js"),
  Chunk314897 = require("./314897.js"),
  Chunk70956 = require("./70956.js"),
  Chunk960048 = require("./960048.js"),
  Chunk65154 = require("./65154.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = 10 * Chunk70956.Z.Millis.SECOND,
  _ = 10 * Chunk70956.Z.Millis.SECOND,
  m = 500;
var h = function(e) {
  return e.RequestedSSRCsUpdate = "requested-ssrcs-update", e.RequestedStreamsUpdate = "requested-streams-update", e
}({});

function g(e, t) {
  e || u.Z.captureMessage("Assert failed in GoLiveQualityManager: " + t)
}
class E extends Chunk47770.Z {
  setUserID(e) {
    this.userId = e
  }
  getUserID() {
    return this.userId
  }
  updateAudioAndVideoStreamInfo(e, t) {
    let n = t.filter(e => e.active),
      r = this.videoStreams.length !== n.length;
    if (this.audioSSRC = e, this.videoStreams = n, this.videoStreams.length > 1) {
      var o, a, s, l;
      let e = null != (s = null == (o = i().minBy(this.videoStreams, e => e.quality)) ? true : o.ssrc) ? s : 0,
        t = null != (l = null == (a = i().maxBy(this.videoStreams, e => e.quality)) ? true : a.ssrc) ? l : 0;
      (e !== this.lqSSRC || t !== this.hqSSRC || r) && (this.lqSSRC = e, this.hqSSRC = t, this.reset(), this.update())
    } else r && this.reset(), this.update()
  }
  setGoLiveStreamDowngraded(e) {
    !(!this.senderSupportsSimulcast() || this.isOneToOneCall()) && this.debugQualityOverride === d.Z.NO_OVERRIDE && e !== this.downgraded && this.isDowngradeChangeAllowed(e) && (this.logger.info("Setting downgraded to ".concat(e)), this.downgraded = e, this.lastDowngradeChangeTime = Date.now(), this.update())
  }
  isDowngraded() {
    return this.downgraded
  }
  setSimulcastDebugOverride(e) {
    this.senderSupportsSimulcast() && e !== this.debugQualityOverride && (this.debugQualityOverride = e, this.update())
  }
  setFirstFrameReceived(e) {
    if (this.currentSSRC = e, this.senderSupportsSimulcast()) {
      if (1 !== this.switchState && 2 !== this.switchState) return void this.logger.warn("Received the first frame of ssrc ".concat(e, " while switchState is ").concat(this.switchState));
      this.pendingSSRC === e ? (this.pendingSSRC = false, 2 === this.switchState ? (this.switchState = 3, this.update()) : this.switchState = 0) : this.logger.warn("Pending to switch to ssrc: ".concat(this.pendingSSRC, " but received the first frame of ").concat(e, ", noop"))
    }
  }
  setThrottleStreamDowngradeChanges(e) {
    this.throttleDowngradeChanges = e
  }
  senderSupportsSimulcast() {
    return this.videoStreams.length > 1
  }
  updateCallUserIds(e) {
    this.otherUsers = new Set(e), this.otherUsers.delete(l.default.getId()), this.update()
  }
  onIncomingVideoEnabled(e) {
    this.incomingVideoEnabled !== e && (this.incomingVideoEnabled = e, this.update())
  }
  update() {
    true !== this.userId && null !== this.userId && 0 !== this.videoStreams.length && (this.senderSupportsSimulcast() ? this.supportsSeamless ? this.seamlessUpdate() : this.directUpdate() : this.singleCastUpdate())
  }
  seamlessUpdate() {
    let e = this.getQuality();
    if (0 === module && this.isReceiving()) {
      this.reset(), this.stopStreams();
      return
    }
    switch (this.switchState) {
      case 0:
        g(false === this.pendingSSRC, "Ready state should not have a pendingSSRC"), this.shouldSeamlessTransition(module) ? (this.logger.info("Starting seamless transition to ".concat(100 === module ? "HQ" : "LQ", " (ssrc ").concat(100 === module ? this.hqSSRC : this.lqSSRC, ")")), this.pendingSSRC = 100 === module ? this.hqSSRC : this.lqSSRC, this.switchState = 2, this.requestBoth()) : (this.logger.info("Starting non-seamless transition to ".concat(100 === module ? "HQ" : "LQ", " (ssrc ").concat(100 === module ? this.hqSSRC : this.lqSSRC, ")")), this.pendingSSRC = 100 === module ? this.hqSSRC : this.lqSSRC, this.switchState = 1, 100 === module ? this.requestHQ() : this.requestLQ());
        break;
      case 2:
        g(false !== this.pendingSSRC, "PendingSeamless state should have a pendingSSRC"), 60 === module && this.pendingHQ() ? (this.logger.info("Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc ".concat(this.lqSSRC, ")")), this.switchState = 0, this.pendingSSRC = false, this.requestLQ()) : 100 === module && this.pendingLQ() && (this.logger.info("Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc ".concat(this.hqSSRC, ")")), this.switchState = 0, this.pendingSSRC = false, this.requestHQ());
        break;
      case 1:
        g(false !== this.pendingSSRC, "Pending state should have a pendingSSRC"), 60 === module && this.pendingHQ() ? (this.logger.info("Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc ".concat(this.lqSSRC, ")")), this.pendingSSRC = this.lqSSRC, this.requestLQ()) : 100 === module && this.pendingLQ() && (this.logger.info("Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc ".concat(this.hqSSRC, ")")), this.pendingSSRC = this.hqSSRC, this.requestHQ());
        break;
      case 3:
        g(this.isReceiving(), "Should be receiving a stream in Finalizing state"), this.logger.info("Finalizing seamless transition to ".concat(100 === module ? "HQ" : "LQ")), 100 === module ? this.requestHQ() : 60 === module && this.requestLQ(), this.switchState = 0, this.pendingSSRC = false
    }
  }
  directUpdate() {
    let e = this.getQuality();
    if (0 === module && this.isReceiving()) {
      this.reset(), this.stopStreams();
      return
    }
    this.logger.info("Starting direct transition to ".concat(100 === module ? "HQ" : "LQ", " (ssrc ").concat(100 === module ? this.hqSSRC : this.lqSSRC, ")")), 60 === module ? this.requestLQ() : this.requestHQ()
  }
  singleCastUpdate() {
    g(1 === this.videoStreams.length, "singleCastUpdate should only be called when there is exactly one video stream"), g(0 === this.switchState, "Switch state should not be set for non-simulcast streams"), g(false === this.pendingSSRC, "Pending SSRC should not be set for non-simulcast streams"), this.incomingVideoEnabled ? this.requestDefaultStream() : this.stopDefaultStream()
  }
  pendingHQ() {
    return 1 === this.switchState && this.pendingSSRC === this.hqSSRC
  }
  pendingLQ() {
    return 1 === this.switchState && this.pendingSSRC === this.lqSSRC
  }
  receivingHQ() {
    return this.currentSSRC === this.hqSSRC
  }
  receivingLQ() {
    return this.currentSSRC === this.lqSSRC
  }
  isReceiving() {
    return false !== this.currentSSRC
  }
  isDowngradeChangeAllowed(e) {
    return !this.throttleDowngradeChanges || true === this.lastDowngradeChangeTime || (e ? Date.now() - this.lastDowngradeChangeTime >= _ : Date.now() - this.lastDowngradeChangeTime >= p)
  }
  shouldSeamlessTransition(e) {
    if (!this.supportsSeamless || !this.isReceiving()) returnfalse;
    if (this.receivingHQ() && 100 === e || this.receivingLQ() && 60 === e) returnfalse;
    if (60 === e) returnfalse;
    if (this.receivingLQ() && 100 === e && this.isOneToOneCall()) returnfalse;
    returntrue
  }
  isOneToOneCall() {
    return 1 === this.otherUsers.size
  }
  reset() {
    this.pendingSSRC = false, this.currentSSRC = false, this.lastDowngradeChangeTime = true, this.switchState = 0, this.streamId = null, this.resolutionWidth = 0, this.resolutionHeight = 0, this.zoom = 1
  }
  request(e, t) {
    if (true !== this.userId) {
      let n = e;
      t.forEach(e => {
        null == n.pixelCounts && (n.pixelCounts = {}), n[e] > 0 && (n.pixelCounts[e] = Math.floor(this.resolutionWidth * this.resolutionHeight * this.zoom * this.zoom))
      }), this.emit("requested-ssrcs-update", this.userId, this.audioSSRC, t), this.emit("requested-streams-update", n)
    }
  }
  requestDefaultStream() {
    g(1 === this.videoStreams.length, "requestDefaultStream should only be called when there is exactly one video stream");
    let e = {};
    module[this.videoStreams[0].ssrc] = 100;
    let t = [this.videoStreams[0].ssrc];
    this.request(module, exports)
  }
  stopDefaultStream() {
    g(1 === this.videoStreams.length, "stopDefaultStream should only be called when there is exactly one video stream");
    let e = {};
    module[this.videoStreams[0].ssrc] = 0;
    let t = [];
    this.request(module, exports)
  }
  requestBoth() {
    g(2 === this.videoStreams.length, "requestBoth should only be called when there are two video streams"), g(true !== this.videoStreams.find(e => e.ssrc === this.hqSSRC), "requestBoth called with invalid hqSSRC"), g(true !== this.videoStreams.find(e => e.ssrc === this.lqSSRC), "requestBoth called with invalid lqSSRC");
    let e = {};
    module[this.lqSSRC] = 60, module[this.hqSSRC] = 100;
    let t = [this.lqSSRC, this.hqSSRC];
    this.request(module, exports), setTimeout(() => {
      2 === this.switchState && (this.logger.warn("Seamless transition timeout, forcing switch"), this.reset(), this.update())
    }, 2e3)
  }
  requestHQ() {
    g(2 === this.videoStreams.length, "requestHQ should only be called when there are two video streams"), g(true !== this.videoStreams.find(e => e.ssrc === this.hqSSRC), "requestHQ called with invalid hqSSRC"), g(true !== this.videoStreams.find(e => e.ssrc === this.lqSSRC), "requestHQ called with invalid lqSSRC");
    let e = {};
    module[this.lqSSRC] = 0, module[this.hqSSRC] = 100;
    let t = [this.hqSSRC];
    this.request(module, exports)
  }
  requestLQ() {
    g(2 === this.videoStreams.length, "requestLQ should only be called when there are two video streams"), g(true !== this.videoStreams.find(e => e.ssrc === this.hqSSRC), "requestLQ called with invalid hqSSRC"), g(true !== this.videoStreams.find(e => e.ssrc === this.lqSSRC), "requestLQ called with invalid lqSSRC");
    let e = {};
    module[this.lqSSRC] = 60, module[this.hqSSRC] = 0;
    let t = [this.lqSSRC];
    this.request(module, exports)
  }
  stopStreams() {
    g(2 === this.videoStreams.length, "stopStreams should only be called when there are two video streams"), g(true !== this.videoStreams.find(e => e.ssrc === this.hqSSRC), "stopStreams called with invalid hqSSRC"), g(true !== this.videoStreams.find(e => e.ssrc === this.lqSSRC), "stopStreams called with invalid lqSSRC"), g(false === this.pendingSSRC, "pendingSSRC should be reset before stopping streams");
    let e = {};
    module[this.lqSSRC] = 0, module[this.hqSSRC] = 0;
    let t = [];
    this.request(module, exports)
  }
  getQuality() {
    return this.incomingVideoEnabled ? this.debugQualityOverride === Chunk65154.Z.LOW ? 60 : this.debugQualityOverride === Chunk65154.Z.HIGH || this.isOneToOneCall() ? 100 : this.downgraded && this.senderSupportsSimulcast() ? 60 : 100 : 0
  }
  setVideoSize(e, t, n) {
    this.streamId === e && (this.resolutionWidth = t, this.resolutionHeight = n, this.delayedUpdate())
  }
  setStreamId(e) {
    this.streamId !== e && (this.streamId = e, this.resolutionWidth = 0, this.resolutionHeight = 0, this.zoom = 1, this.delayedUpdate())
  }
  setVideoZoom(e, t) {
    this.streamId === e && this.zoom !== t && (this.zoom = t, this.delayedUpdate())
  }
  constructor(e) {
    super(), f(this, "supportsSeamless", true), f(this, "logger", true), f(this, "userId", true), f(this, "streamId", true), f(this, "resolutionWidth", true), f(this, "resolutionHeight", true), f(this, "zoom", true), f(this, "videoStreams", true), f(this, "audioSSRC", true), f(this, "hqSSRC", true), f(this, "lqSSRC", true), f(this, "switchState", true), f(this, "pendingSSRC", true), f(this, "currentSSRC", true), f(this, "downgraded", true), f(this, "throttleDowngradeChanges", true), f(this, "lastDowngradeChangeTime", true), f(this, "otherUsers", true), f(this, "debugQualityOverride", true), f(this, "incomingVideoEnabled", true), f(this, "delayedCall", true), f(this, "delayedUpdate", true), this.supportsSeamless = e, this.streamId = null, this.resolutionWidth = 0, this.resolutionHeight = 0, this.zoom = 1, this.videoStreams = [], this.audioSSRC = 0, this.hqSSRC = 0, this.lqSSRC = 0, this.switchState = 0, this.pendingSSRC = false, this.currentSSRC = false, this.downgraded = false, this.throttleDowngradeChanges = true, this.lastDowngradeChangeTime = true, this.otherUsers = new Set, this.debugQualityOverride = d.Z.NO_OVERRIDE, this.incomingVideoEnabled = true, this.delayedUpdate = () => {
      this.delayedCall.delay()
    }, this.logger = new s.Z("GoLiveQualityManager"), this.delayedCall = new a.sW(m, () => {
      this.update()
    })
  }
}