/** Chunk was on web.js **/
/** chunk id: 148959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y,
  y: () => E
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk47770 = require("./47770.js"),
  Chunk846519 = require("./846519.js"),
  Chunk710845 = require("./710845.js"),
  Chunk347101 = require("./347101.js"),
  Chunk314897 = require("./314897.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk65154 = require("./65154.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = 10 * Chunk70956.Z.Millis.SECOND,
  h = 10 * Chunk70956.Z.Millis.SECOND,
  g = 500;
var E = function(e) {
  return e.RequestedSSRCsUpdate = "requested-ssrcs-update", e.RequestedStreamsUpdate = "requested-streams-update", e
}({});

function b(e, t) {
  e || f.Z.captureMessage("Assert failed in GoLiveQualityManager: " + t)
}
class y extends Chunk47770.Z {
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
      var a, o, s, l;
      let e = null != (s = null == (a = i().minBy(this.videoStreams, e => e.quality)) ? true : a.ssrc) ? s : 0,
        t = null != (l = null == (o = i().maxBy(this.videoStreams, e => e.quality)) ? true : o.ssrc) ? l : 0;
      (e !== this.lqSSRC || t !== this.hqSSRC || r) && (this.lqSSRC = e, this.hqSSRC = t, this.reset(), this.update())
    } else r && this.reset(), this.update()
  }
  setGoLiveStreamDowngraded(e) {
    !(!this.senderSupportsSimulcast() || this.isOneToOneCall()) && this.debugQualityOverride === p.Z.NO_OVERRIDE && e !== this.downgraded && this.isDowngradeChangeAllowed(e) && (this.logger.info("Setting downgraded to ".concat(e)), this.downgraded = e, this.lastDowngradeChangeTime = Date.now(), this.update())
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
    this.otherUsers = new Set(e), this.otherUsers.delete(c.default.getId()), this.update()
  }
  onIncomingVideoEnabled(e) {
    this.incomingVideoEnabled !== e && (this.incomingVideoEnabled = e, this.update())
  }
  update() {
    true !== this.userId && null !== this.userId && 0 !== this.videoStreams.length && (this.senderSupportsSimulcast() ? this.supportsSeamless ? this.seamlessUpdate() : this.directUpdate() : this.singleCastUpdate())
  }
  seamlessUpdate() {
    let e = this.getQuality();
    if (0 === e && this.isReceiving()) {
      this.reset(), this.stopStreams();
      return
    }
    switch (this.switchState) {
      case 0:
        b(false === this.pendingSSRC, "Ready state should not have a pendingSSRC"), this.shouldSeamlessTransition(e) ? (this.logger.info("Starting seamless transition to ".concat(100 === e ? "HQ" : "LQ", " (ssrc ").concat(100 === e ? this.hqSSRC : this.lqSSRC, ")")), this.pendingSSRC = 100 === e ? this.hqSSRC : this.lqSSRC, this.switchState = 2, this.requestBoth()) : (this.logger.info("Starting non-seamless transition to ".concat(100 === e ? "HQ" : "LQ", " (ssrc ").concat(100 === e ? this.hqSSRC : this.lqSSRC, ")")), this.pendingSSRC = 100 === e ? this.hqSSRC : this.lqSSRC, this.switchState = 1, 100 === e ? this.requestHQ() : this.requestLQ());
        break;
      case 2:
        b(false !== this.pendingSSRC, "PendingSeamless state should have a pendingSSRC"), 60 === e && this.pendingHQ() ? (this.logger.info("Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc ".concat(this.lqSSRC, ")")), this.switchState = 0, this.pendingSSRC = false, this.requestLQ()) : 100 === e && this.pendingLQ() && (this.logger.info("Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc ".concat(this.hqSSRC, ")")), this.switchState = 0, this.pendingSSRC = false, this.requestHQ());
        break;
      case 1:
        b(false !== this.pendingSSRC, "Pending state should have a pendingSSRC"), 60 === e && this.pendingHQ() ? (this.logger.info("Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc ".concat(this.lqSSRC, ")")), this.pendingSSRC = this.lqSSRC, this.requestLQ()) : 100 === e && this.pendingLQ() && (this.logger.info("Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc ".concat(this.hqSSRC, ")")), this.pendingSSRC = this.hqSSRC, this.requestHQ());
        break;
      case 3:
        b(this.isReceiving(), "Should be receiving a stream in Finalizing state"), this.logger.info("Finalizing seamless transition to ".concat(100 === e ? "HQ" : "LQ")), 100 === e ? this.requestHQ() : 60 === e && this.requestLQ(), this.switchState = 0, this.pendingSSRC = false
    }
  }
  directUpdate() {
    let e = this.getQuality();
    if (0 === e && this.isReceiving()) {
      this.reset(), this.stopStreams();
      return
    }
    this.logger.info("Starting direct transition to ".concat(100 === e ? "HQ" : "LQ", " (ssrc ").concat(100 === e ? this.hqSSRC : this.lqSSRC, ")")), 60 === e ? this.requestLQ() : this.requestHQ()
  }
  singleCastUpdate() {
    b(1 === this.videoStreams.length, "singleCastUpdate should only be called when there is exactly one video stream"), b(0 === this.switchState, "Switch state should not be set for non-simulcast streams"), b(false === this.pendingSSRC, "Pending SSRC should not be set for non-simulcast streams"), this.incomingVideoEnabled ? this.requestDefaultStream() : this.stopDefaultStream()
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
    return !this.throttleDowngradeChanges || true === this.lastDowngradeChangeTime || (e ? Date.now() - this.lastDowngradeChangeTime >= h : Date.now() - this.lastDowngradeChangeTime >= m)
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
    b(1 === this.videoStreams.length, "requestDefaultStream should only be called when there is exactly one video stream");
    let e = {};
    e[this.videoStreams[0].ssrc] = 100;
    let t = [this.videoStreams[0].ssrc];
    this.request(e, t)
  }
  stopDefaultStream() {
    b(1 === this.videoStreams.length, "stopDefaultStream should only be called when there is exactly one video stream");
    let e = {};
    e[this.videoStreams[0].ssrc] = 0;
    let t = [];
    this.request(e, t)
  }
  requestBoth() {
    b(2 === this.videoStreams.length, "requestBoth should only be called when there are two video streams"), b(true !== this.videoStreams.find(e => e.ssrc === this.hqSSRC), "requestBoth called with invalid hqSSRC"), b(true !== this.videoStreams.find(e => e.ssrc === this.lqSSRC), "requestBoth called with invalid lqSSRC");
    let e = {};
    e[this.lqSSRC] = 60, e[this.hqSSRC] = 100;
    let t = [this.lqSSRC, this.hqSSRC];
    this.request(e, t), setTimeout(() => {
      2 === this.switchState && (this.logger.warn("Seamless transition timeout, forcing switch"), this.reset(), this.update())
    }, 2e3)
  }
  requestHQ() {
    b(2 === this.videoStreams.length, "requestHQ should only be called when there are two video streams"), b(true !== this.videoStreams.find(e => e.ssrc === this.hqSSRC), "requestHQ called with invalid hqSSRC"), b(true !== this.videoStreams.find(e => e.ssrc === this.lqSSRC), "requestHQ called with invalid lqSSRC");
    let e = {};
    e[this.lqSSRC] = 0, e[this.hqSSRC] = 100;
    let t = [this.hqSSRC];
    this.request(e, t)
  }
  requestLQ() {
    b(2 === this.videoStreams.length, "requestLQ should only be called when there are two video streams"), b(true !== this.videoStreams.find(e => e.ssrc === this.hqSSRC), "requestLQ called with invalid hqSSRC"), b(true !== this.videoStreams.find(e => e.ssrc === this.lqSSRC), "requestLQ called with invalid lqSSRC");
    let e = {};
    e[this.lqSSRC] = 60, e[this.hqSSRC] = 0;
    let t = [this.lqSSRC];
    this.request(e, t)
  }
  stopStreams() {
    b(2 === this.videoStreams.length, "stopStreams should only be called when there are two video streams"), b(true !== this.videoStreams.find(e => e.ssrc === this.hqSSRC), "stopStreams called with invalid hqSSRC"), b(true !== this.videoStreams.find(e => e.ssrc === this.lqSSRC), "stopStreams called with invalid lqSSRC"), b(false === this.pendingSSRC, "pendingSSRC should be reset before stopping streams");
    let e = {};
    e[this.lqSSRC] = 0, e[this.hqSSRC] = 0;
    let t = [];
    this.request(e, t)
  }
  getQuality() {
    return this.incomingVideoEnabled ? this.debugQualityOverride === p.Z.LOW ? 60 : this.debugQualityOverride === p.Z.HIGH || this.isOneToOneCall() ? 100 : this.downgraded && this.senderSupportsSimulcast() ? 60 : 100 : 0
  }
  setVideoSize(e, t, n) {
    this.streamId === e && (!((0, d.isAndroid)() || (0, d.isIOS)()) || (0, l.w)("GoLiveQualityManager").enabled) && (null != t && (this.resolutionWidth = t.width, this.resolutionHeight = t.height), null != n && (this.zoom = n), this.delayedUpdate())
  }
  setStreamId(e) {
    this.streamId !== e && (this.streamId = e, this.resolutionWidth = 0, this.resolutionHeight = 0, this.zoom = 1, this.delayedUpdate())
  }
  constructor(e) {
    super(), _(this, "supportsSeamless", true), _(this, "logger", true), _(this, "userId", true), _(this, "streamId", true), _(this, "resolutionWidth", true), _(this, "resolutionHeight", true), _(this, "zoom", true), _(this, "videoStreams", true), _(this, "audioSSRC", true), _(this, "hqSSRC", true), _(this, "lqSSRC", true), _(this, "switchState", true), _(this, "pendingSSRC", true), _(this, "currentSSRC", true), _(this, "downgraded", true), _(this, "throttleDowngradeChanges", true), _(this, "lastDowngradeChangeTime", true), _(this, "otherUsers", true), _(this, "debugQualityOverride", true), _(this, "incomingVideoEnabled", true), _(this, "delayedCall", true), _(this, "delayedUpdate", true), this.supportsSeamless = e, this.streamId = null, this.resolutionWidth = 0, this.resolutionHeight = 0, this.zoom = 1, this.videoStreams = [], this.audioSSRC = 0, this.hqSSRC = 0, this.lqSSRC = 0, this.switchState = 0, this.pendingSSRC = false, this.currentSSRC = false, this.downgraded = false, this.throttleDowngradeChanges = true, this.lastDowngradeChangeTime = true, this.otherUsers = new Set, this.debugQualityOverride = p.Z.NO_OVERRIDE, this.incomingVideoEnabled = true, this.delayedUpdate = () => {
      this.delayedCall.delay()
    }, this.logger = new s.Z("GoLiveQualityManager"), this.delayedCall = new o.sW(g, () => {
      this.update()
    })
  }
}