/** Chunk was on web.js **/
/** chunk id: 738586, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => _
}), require("./321073.js"), require("./896048.js");
var Chunk607399 = require("./607399.js"),
  Chunk499979 = require("./499979.js"),
  Chunk626584 = require("./626584.js"),
  Chunk264644 = require("./264644.js"),
  Chunk927813 = require("./927813.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = 16,
  d = 600,
  f = 900,
  p = false;
class _ {
  calculateFps(e, t, n) {
    if (false === this.prevFramesCodec[e] || t < this.prevFramesCodec[e] || n < this.prevTimestamp[e] || n > this.prevTimestamp[e] + 1e3 * this.windowLength) return this.prevFramesCodec[e] = t, this.prevTimestamp[e] = n, this.perUserFpsWindow[e] = [], NaN;
    if (n < this.prevTimestamp[e] + f) return NaN;
    let r = this.elapsedSeconds(n, this.prevTimestamp[e]);
    this.prevTimestamp[e] = n;
    let i = (t - this.prevFramesCodec[e]) / r;
    return this.prevFramesCodec[e] = t, i
  }
  updateFps(e, t, n) {
    if (!this.disabled && !this.streamDisabledUsers.has(e)) {
      let r = this.calculateFps(e, t, n);
      if (p && this.logger.info("frames=".concat(t, ", timestamp=").concat(n, " fps=").concat(r)), !(r < 0) && Number.isFinite(r)) this.perUserFpsWindow[e].push(r), this.perUserFpsWindow[e].length < this.windowLength || (this.perUserFpsWindow[e].length > this.windowLength && this.perUserFpsWindow[e].shift(), this.perUserFpsWindow[e].filter(e => e < this.fpsThreshold).length >= this.fpsWindowBorderlineCount ? (this.logger.info("".concat(e, ": detected poor network quality, turning off video")), this.streamDisabledUsers.add(e), this.currentVideoAutoToggleState[e] = l.bb8.DISABLED, (0, s.A)(e, l.bb8.DISABLED), this.startReenableBackoffTimer(e)) : this.currentVideoAutoToggleState[e] === l.bb8.AUTO_PROBING && (this.currentVideoAutoToggleState[e] = l.bb8.AUTO_ENABLED, this.logger.info("acceptable conditions reached, will reset and send a AUTO_ENABLED for user ".concat(e)), (0, s.A)(e, l.bb8.AUTO_ENABLED)), this.probingUserId === e && (this.probingUserId = true, this.tryReenableQueue()))
    }
  }
  startReenableBackoffTimer(e) {
    if (this.disabled) return;
    this.logger.info("startReenableBackoffTimer for user ".concat(e));
    let {
      lastBackoffTime: t,
      expBackoffFactor: n
    } = this.retryBackoffCache[e];
    null === t || n > u || this.elapsedSeconds((0, i.tB)(), t) > d ? n = 1 : n *= 2, this.retryBackoffCache[e] = {
      lastBackoffTime: (0, i.tB)(),
      expBackoffFactor: n
    };
    let r = n * this.backoffTimeSec * o.A.Millis.SECOND;
    this.logger.info("starting backoff timer with time = ".concat(r, " milliseconds")), this.timeoutIdCache[e] = setTimeout(() => {
      this.queueReenable(e)
    }, r)
  }
  queueReenable(e) {
    this.enableQueue.push(e), this.tryReenableQueue()
  }
  tryReenableQueue() {
    if (!this.disabled && (null == this.probingUserId || !(this.probingUserId in this.perUserFpsWindow)))
      for (let e = this.enableQueue.shift(); null != e && !this.reenableVideo(e););
  }
  reenableVideo(e) {
    return e in this.perUserFpsWindow && (this.logger.info("reenableVideo called for user ".concat(e, " - time = ").concat((0, i.tB)())), this.stateCleanupBeforeEnable(e), this.currentVideoAutoToggleState[e] = l.bb8.AUTO_PROBING, this.probingUserId = e, (0, s.A)(e, l.bb8.AUTO_PROBING), true)
  }
  elapsedSeconds(e, t) {
    return (e - t) / 1e3
  }
  stateCleanupBeforeEnable(e) {
    this.logger.info("VideoHealthManager::stateCleanupBeforeEnable"), this.perUserFpsWindow[e] = [], this.prevFramesCodec[e] = false, this.streamDisabledUsers.delete(e)
  }
  getCurrentVideoToggleState(e) {
    return this.currentVideoAutoToggleState[e]
  }
  createUser(e) {
    this.logger.info("VideoHealthManager::createUser ".concat(e)), e in this.perUserFpsWindow || (this.perUserFpsWindow[e] = [], this.prevFramesCodec[e] = false, this.currentVideoAutoToggleState[e] = l.bb8.NONE, this.retryBackoffCache[e] = {
      lastBackoffTime: null,
      expBackoffFactor: 1
    })
  }
  deleteUser(e) {
    this.logger.info("VideoHealthManager::deleteUser ".concat(e)), delete this.perUserFpsWindow[e], delete this.prevFramesCodec[e], delete this.retryBackoffCache[e], delete this.currentVideoAutoToggleState[e], this.streamDisabledUsers.delete(e), e === this.probingUserId && (this.probingUserId = true, this.tryReenableQueue()), clearTimeout(this.timeoutIdCache[e]), delete this.timeoutIdCache[e]
  }
  disable() {
    for (let e in this.disabled = true, this.perUserFpsWindow) this.deleteUser(e)
  }
  constructor(e, t, n, r) {
    c(this, "logger", new a.A("VideoHealthManager")), c(this, "windowLength", true), c(this, "fpsThreshold", true), c(this, "fpsWindowBorderlineCount", true), c(this, "backoffTimeSec", true), c(this, "disabled", false), c(this, "perUserFpsWindow", {}), c(this, "prevFramesCodec", {}), c(this, "prevTimestamp", {}), c(this, "streamDisabledUsers", new Set), c(this, "retryBackoffCache", {}), c(this, "timeoutIdCache", {}), c(this, "currentVideoAutoToggleState", {}), c(this, "probingUserId", true), c(this, "enableQueue", []), this.windowLength = e, this.fpsThreshold = n, this.fpsWindowBorderlineCount = Math.ceil(e * t), this.backoffTimeSec = r, this.logger.info("constructor with windowLength = ".concat(this.windowLength, ",\n      fpsWindowBorderlineCount = ").concat(this.fpsWindowBorderlineCount, ",\n      fpsThreshold = ").concat(this.fpsThreshold, ",\n      backoffTimeSec = ").concat(r))
  }
}
c(_, "defaultConfig", {
  featureEnabled: Chunk607399.Fr,
  windowLength: 5,
  allowedPoorFpsRatio: 1,
  fpsThreshold: 5,
  backoffTimeSec: 15
})