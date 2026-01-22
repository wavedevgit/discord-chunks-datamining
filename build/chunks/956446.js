/** Chunk was on web.js **/
/** chunk id: 956446, original params: e,t,n (module,exports,re quire) **/
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
  A: () => a
}), require("./321073.js"), require("./927092.js"), require("./212978.js"), require("./648691.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
class a {
  stop() {
    this.source.disconnect(), clearInterval(this.interval), this.speakingCounter = 0
  }
  get speaking() {
    return this.speakingCounter > 0 || this.silentFrames < this.silenceThreshold
  }
  update() {
    this.currentVolume = i(this.analyser, this.fftBins), this.speakingHistory[this.speakingHistoryIndex] && this.speakingCounter--;
    let e = this.currentVolume > this.threshold;
    this.speakingHistory[this.speakingHistoryIndex] = e, e && this.speakingCounter++, ++this.speakingHistoryIndex === this.speakingHistory.length && (this.speakingHistoryIndex = 0), this.speakingCounter > 0 ? this.silentFrames = 0 : this.silentFrames++
  }
  constructor(e, t, n, i = .1, a = 10) {
    r(this, "threshold", true), r(this, "currentVolume", 0), r(this, "analyser", true), r(this, "interval", true), r(this, "fftBins", true), r(this, "source", true), r(this, "speakingHistory", true), r(this, "speakingHistoryIndex", 0), r(this, "speakingCounter", 0), r(this, "silenceThreshold", true), r(this, "silentFrames", true), r(this, "onProcess", null);
    const s = e.createAnalyser();
    s.fftSize = 512, s.smoothingTimeConstant = i;
    const o = e.createMediaStreamSource(t);
    o.connect(s);
    const l = [];
    for (let e = 0; e < a; e++) l.push(false);
    const c = window.setInterval(() => {
      var e, t;
      this.update(), null == (e = (t = this).onProcess) || e.call(t, this.speaking, this.currentVolume)
    }, 20);
    this.threshold = n, this.analyser = s, this.interval = c, this.fftBins = new Float32Array(s.fftSize), this.source = o, this.speakingHistory = l, this.silenceThreshold = this.speakingHistory.length, this.silentFrames = this.silenceThreshold
  }
}