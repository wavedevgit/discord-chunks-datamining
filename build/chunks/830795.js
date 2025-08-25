/** Chunk was on web.js **/
/** chunk id: 830795, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e, t) {
  let n = false / 0;
  e.getFloatFrequencyData(t);
  for (let e = 4; e < t.length; e++) t[e] > n && t[e] < 0 && (n = t[e]);
  return n
}
require.d(exports, {
  Z: () => o
}), require("./539854.js"), require("./17294.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
class o {
  stop() {
    this.source.disconnect(), clearInterval(this.interval), this.speakingCounter = 0
  }
  get speaking() {
    return this.speakingCounter > 0 || this.silentFrames < this.silenceThreshold
  }
  update() {
    this.currentVolume = i(this.analyser, this.fftBins), this.speakingHistory[this.speakingHistoryIndex] && this.speakingCounter--;
    let e = this.currentVolume > this.threshold;
    this.speakingHistory[this.speakingHistoryIndex] = module, module && this.speakingCounter++, ++this.speakingHistoryIndex === this.speakingHistory.length && (this.speakingHistoryIndex = 0), this.speakingCounter > 0 ? this.silentFrames = 0 : this.silentFrames++
  }
  constructor(e, t, n, i = .1, o = 10) {
    r(this, "threshold", true), r(this, "currentVolume", 0), r(this, "analyser", true), r(this, "interval", true), r(this, "fftBins", true), r(this, "source", true), r(this, "speakingHistory", true), r(this, "speakingHistoryIndex", 0), r(this, "speakingCounter", 0), r(this, "silenceThreshold", true), r(this, "silentFrames", true), r(this, "onProcess", null);
    let a = e.createAnalyser();
    a.fftSize = 512, a.smoothingTimeConstant = i;
    let s = e.createMediaStreamSource(t);
    s.connect(a);
    let l = [];
    for (let e = 0; e < o; e++) l.push(false);
    let c = window.setInterval(() => {
      var e, t;
      this.update(), null == (e = (t = this).onProcess) || e.call(t, this.speaking, this.currentVolume)
    }, 20);
    this.threshold = n, this.analyser = a, this.interval = c, this.fftBins = new Float32Array(a.fftSize), this.source = s, this.speakingHistory = l, this.silenceThreshold = this.speakingHistory.length, this.silentFrames = this.silenceThreshold
  }
}