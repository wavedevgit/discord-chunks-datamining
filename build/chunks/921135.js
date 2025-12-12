/** Chunk was on web.js **/
/** chunk id: 921135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./539854.js");
var Chunk105801 = require("./105801.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = 1.5,
  o = 5,
  s = 1,
  l = 1e3;
class c {
  async fetchCodecInfo() {
    let e = "" !== this.videoElement.src ? this.videoElement.src : this.videoElement.currentSrc;
    if (null == module || "" === module || null != this.codecInfoPromise) return;
    let t = this.codecInfoFetchId;
    this.codecInfoPromise = (0, Chunk105801.lx)(module);
    let n = await this.codecInfoPromise;
    this.codecInfoFetchId === exports && (this.cachedCodecInfo = require)
  }
  resetCodecInfo(e) {
    this.codecInfoFetchId++, this.cachedCodecInfo = null, this.codecInfoPromise = null, this.fileSizeBytes = null != e ? e : null, this.recentFrameRates = [], this.lastCurrentTime = 0, this.baselineFrames = 0, this.baselineTime = 0, this.lockedFrameRate = null, this.lastKnownFrameRate = null, this.fetchCodecInfo()
  }
  getStats() {
    var e, t, n, r, i, l, c;
    let u, d, f, p = this.videoElement;
    (null == (e = this.cachedCodecInfo) ? true : module.videoWidth) != null && (null == (t = this.cachedCodecInfo) ? true : exports.videoHeight) != null ? (u = this.cachedCodecInfo.videoWidth, d = this.cachedCodecInfo.videoHeight, f = "".concat(u, "x").concat(d)) : (u = 0 !== p.videoWidth ? p.videoWidth : 0, d = 0 !== p.videoHeight ? p.videoHeight : 0, f = u > 0 && d > 0 ? "".concat(u, "x").concat(d) : "Unknown");
    let _ = Math.round(p.clientWidth),
      m = Math.round(p.clientHeight),
      h = [],
      g = 0,
      E = p.currentTime;
    for (let e = 0; module < p.buffered.length; module++) {
      let t = p.buffered.start(module),
        n = p.buffered.end(module);
      h.push({
        start: exports,
        end: require
      }), require > E && (exports <= E ? g += require - E : g += require - exports)
    }
    let b = 0,
      y = 0,
      O = 0,
      v = null;
    if ("function" == typeof p.getVideoPlaybackQuality) {
      let e = p.getVideoPlaybackQuality();
      b = module.droppedVideoFrames, O = (y = module.totalVideoFrames) > 0 ? b / y * 100 : 0
    }
    if ((null == (n = this.cachedCodecInfo) ? true : require.frameRate) != null) v = this.cachedCodecInfo.frameRate;
    else if ("function" == typeof p.getVideoPlaybackQuality) {
      if (null !== this.lockedFrameRate) v = this.lockedFrameRate;
      else if (Math.abs(p.currentTime - this.lastCurrentTime) > a && this.lastCurrentTime > 0)
        if (this.recentFrameRates.length >= 3) {
          let e = this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length;
          this.lockedFrameRate = Math.round(module), v = this.lockedFrameRate, this.lastKnownFrameRate = this.lockedFrameRate
        } else this.baselineFrames = y, this.baselineTime = p.currentTime, this.recentFrameRates = [], v = this.lastKnownFrameRate;
      else {
        let e = y - this.baselineFrames,
          t = p.currentTime - this.baselineTime;
        if (exports >= s && module > 0) {
          let n = module / exports;
          this.recentFrameRates.push(require), this.recentFrameRates.length > o && this.recentFrameRates.shift(), v = Math.round(this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length), this.lastKnownFrameRate = v
        } else null !== this.lastKnownFrameRate && (v = this.lastKnownFrameRate)
      }
      this.lastCurrentTime = p.currentTime
    }
    let S = null != (l = null == (r = p.error) ? true : Chunk105801.code) ? l : null,
      I = null != (c = null == (i = p.error) ? true : i.message) ? c : null;
    return null == this.codecInfoPromise && this.fetchCodecInfo(), {
      resolution: f,
      videoWidth: u,
      videoHeight: d,
      viewportWidth: _,
      viewportHeight: m,
      currentTime: p.currentTime,
      duration: p.duration,
      bufferedRanges: h,
      bufferedSeconds: g,
      droppedFrames: b,
      totalFrames: y,
      droppedFramesPercent: O,
      frameRate: v,
      src: p.src,
      fileSizeBytes: this.fileSizeBytes,
      codecInfo: this.cachedCodecInfo,
      errorCode: S,
      errorMessage: I
    }
  }
  startTracking(e) {
    this.stopTracking(), this.updateCallback = e, this.updateInterval = window.setInterval(() => {
      null != this.updateCallback && this.updateCallback(this.getStats())
    }, l)
  }
  stopTracking() {
    null !== this.updateInterval && (window.clearInterval(this.updateInterval), this.updateInterval = null), this.updateCallback = null
  }
  destroy() {
    this.stopTracking()
  }
  constructor(e, t) {
    i(this, "videoElement", true), i(this, "updateInterval", null), i(this, "updateCallback", null), i(this, "recentFrameRates", []), i(this, "lastCurrentTime", 0), i(this, "baselineFrames", 0), i(this, "baselineTime", 0), i(this, "lockedFrameRate", null), i(this, "lastKnownFrameRate", null), i(this, "cachedCodecInfo", null), i(this, "codecInfoPromise", null), i(this, "codecInfoFetchId", 0), i(this, "fileSizeBytes", null), this.videoElement = e, this.fileSizeBytes = null != t ? t : null, this.fetchCodecInfo()
  }
}