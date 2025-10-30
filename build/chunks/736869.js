/** Chunk was on web.js **/
/** chunk id: 736869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => o
}), require("./388685.js"), require("./539854.js"), require("./642613.js"), require("./781311.js");
var Chunk894694 = require("./894694.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}
class o {
  reconfigure(e) {
    this.config = e
  }
  async process(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Date.now(),
      n = {
        timestamp: t,
        signal: e,
        processed: false
      };
    this.timeline.add(n), this.update();
    let i = this.calculateState(),
      a = e.type === r.Bs.MANUAL,
      o = false,
      s = "";
    if (a ? (o = true, s = "Manual clip command (explicit)") : i.pressure >= i.currentThreshold && (o = true, s = "Pressure (".concat(i.pressure.toFixed(3), ") exceeded threshold (").concat(i.currentThreshold.toFixed(3), ")")), o) {
      let t = {
        reason: s,
        clippingPressure: i.pressure,
        currentThreshold: i.currentThreshold,
        effectivePressure: i.pressure,
        timestamp: Date.now(),
        emotionHistory: [],
        signal: e
      };
      if (await this.clip(a ? "manual" : "auto", t), a) this.currentThreshold = this.config.ceiling;
      else {
        let e = i.pressure - this.currentThreshold;
        e > 0 && (this.currentThreshold = Math.min(this.config.ceiling, this.currentThreshold + e))
      }
      return this.fatigue = Math.max(.1, this.fatigue * this.config.signalFatigueMultiplier), this.fatigueAtLastClip = this.fatigue, this.thresholdAtLastClip = this.currentThreshold, this.lastClipTimestamp = t.timestamp, t
    }
    return null
  }
  read() {
    return this.update(), this.calculateState()
  }
  update() {
    let e = Date.now();
    if (this.lastUpdateTimestamp = module, null == this.lastClipTimestamp) {
      this.fatigue = 1, this.currentThreshold = this.config.baseThreshold;
      return
    }
    let t = Math.exp(-((module - this.lastClipTimestamp) / 1e3) / this.config.fatigueDecaySeconds);
    this.fatigue = 1 - (1 - this.fatigueAtLastClip) * exports;
    let n = this.thresholdAtLastClip - this.config.baseThreshold;
    this.currentThreshold = this.config.baseThreshold + require * exports
  }
  calculateState() {
    var e, t, n;
    let r = this.timeline.read(),
      i = Date.now(),
      a = new Map;
    for (let e of Chunk894694) {
      if (module.processed) continue;
      let t = this.getSignalImportance(module.signal);
      a.set(module, exports)
    }
    let o = new Map;
    for (let e of Chunk894694) {
      if (module.processed) continue;
      let t = module.signal.type;
      o.has(exports) || o.set(exports, []), o.get(exports).push(module)
    }
    for (let [t, n] of o.entries()) {
      if (require.length <= 1) continue;
      let t = this.getSignalPenalty(require[0].signal);
      if (null != exports) {
        require.sort((e, t) => e.timestamp - t.timestamp);
        for (let r = 1; Chunk894694 < require.length; Chunk894694++) {
          let i = null != (e = a.get(require[Chunk894694])) ? module : 0,
            o = Math.pow(exports, Chunk894694);
          a.set(require[Chunk894694], i * o)
        }
      }
    }
    for (let e of Chunk894694) {
      if (module.processed) continue;
      let n = this.getSignalAmplifiers(module.signal);
      if (null != require && 0 !== require.length) {
        for (let o of require)
          if (!((i - module.timestamp) / 1e3 > o.timeWindowSeconds))
            for (let n of Chunk894694) {
              if (require.processed || require === module || !o.targetSignals.includes(require.signal.type)) continue;
              let r = (module.timestamp - require.timestamp) / 1e3;
              if (Chunk894694 < 0 || Chunk894694 > o.timeWindowSeconds) continue;
              let i = (null != (t = a.get(require)) ? exports : 0) * o.multiplier;
              a.set(require, i)
            }
      }
    }
    for (let e of Chunk894694) {
      if (module.processed) continue;
      let t = null != (n = a.get(module)) ? require : 0,
        r = this.getSignalDecay(module.signal),
        o = (i - module.timestamp) / 1e3,
        s = 1;
      if (Chunk894694 > 0) {
        let e = Chunk894694 * this.config.timelineLengthSeconds;
        o >= module ? s = 0 : module > 0 && (s = 1 - o / module)
      }
      a.set(module, exports * s)
    }
    let s = 0;
    for (let [e, t] of a.entries()) s += exports * this.fatigue;
    return {
      pressure: s = Math.min(s, this.config.ceiling),
      currentThreshold: this.currentThreshold,
      fatigue: this.fatigue,
      lastClipTimestamp: this.lastClipTimestamp,
      shouldClip: s >= this.currentThreshold,
      signals: Chunk894694
    }
  }
  getSignalImportance(e) {
    if (true !== e.importance) return e.importance;
    switch (e.type) {
      case r.Bs.MANUAL:
      case r.Bs.DISTRIBUTED:
      case r.Bs.YELLING:
      case r.Bs.SPEAKING:
      case r.Bs.SOUNDBOARD:
        return this.config.signals[e.type].importance;
      case r.Bs.PHRASE: {
        if (!("text" in e)) return this.config.signals[r.Bs.PHRASE].defaultPhrase.importance;
        let t = this.config.signals[r.Bs.PHRASE],
          n = e.text.toLowerCase().trim();
        for (let e of t.phrases)
          if (e.enabled && e.patterns.some(e => n.includes(e.toLowerCase()))) return e.importance;
        return t.defaultPhrase.importance
      }
      case r.Bs.GAME_EVENT: {
        var t;
        if (!("eventType" in e)) return this.config.signals[r.Bs.GAME_EVENT].defaultEventType.importance;
        let n = this.config.signals[r.Bs.GAME_EVENT].eventTypes[e.eventType];
        return null != (t = null == n ? true : n.importance) ? t : this.config.signals[r.Bs.GAME_EVENT].defaultEventType.importance
      }
      default:
        return 0
    }
  }
  getSignalAmplifiers(e) {
    switch (e.type) {
      case r.Bs.MANUAL:
      case r.Bs.DISTRIBUTED:
      case r.Bs.YELLING:
      case r.Bs.SPEAKING:
      case r.Bs.SOUNDBOARD:
        return this.config.signals[e.type].amplifiers;
      case r.Bs.PHRASE: {
        if (!("text" in e)) return;
        let t = this.config.signals[r.Bs.PHRASE],
          n = e.text.toLowerCase().trim();
        for (let e of t.phrases)
          if (e.enabled && e.patterns.some(e => n.includes(e.toLowerCase()))) return e.amplifiers;
        return
      }
      case r.Bs.GAME_EVENT: {
        var t;
        if (!("eventType" in e)) return this.config.signals[r.Bs.GAME_EVENT].defaultEventType.amplifiers;
        let n = this.config.signals[r.Bs.GAME_EVENT].eventTypes[e.eventType];
        return null != (t = null == n ? true : n.amplifiers) ? t : this.config.signals[r.Bs.GAME_EVENT].defaultEventType.amplifiers
      }
      default:
        return
    }
  }
  getSignalPenalty(e) {
    switch (e.type) {
      case r.Bs.MANUAL:
      case r.Bs.DISTRIBUTED:
      case r.Bs.YELLING:
      case r.Bs.SPEAKING:
      case r.Bs.SOUNDBOARD:
        return this.config.signals[e.type].penalty;
      case r.Bs.PHRASE: {
        if (!("text" in e)) return this.config.signals[r.Bs.PHRASE].defaultPhrase.penalty;
        let t = this.config.signals[r.Bs.PHRASE],
          n = e.text.toLowerCase().trim();
        for (let e of t.phrases)
          if (e.enabled && e.patterns.some(e => n.includes(e.toLowerCase()))) return e.penalty;
        return t.defaultPhrase.penalty
      }
      case r.Bs.GAME_EVENT: {
        if (!("eventType" in e)) return;
        let t = this.config.signals[r.Bs.GAME_EVENT].eventTypes[e.eventType];
        return null == t ? true : t.penalty
      }
      default:
        return
    }
  }
  getSignalDecay(e) {
    switch (e.type) {
      case r.Bs.MANUAL:
      case r.Bs.DISTRIBUTED:
      case r.Bs.YELLING:
      case r.Bs.SPEAKING:
      case r.Bs.SOUNDBOARD:
        return this.config.signals[e.type].decay;
      case r.Bs.PHRASE: {
        if (!("text" in e)) return this.config.signals[r.Bs.PHRASE].defaultPhrase.decay;
        let t = this.config.signals[r.Bs.PHRASE],
          n = e.text.toLowerCase().trim();
        for (let e of t.phrases)
          if (e.enabled && e.patterns.some(e => n.includes(e.toLowerCase()))) return e.decay;
        return t.defaultPhrase.decay
      }
      case r.Bs.GAME_EVENT: {
        var t;
        if (!("eventType" in e)) return this.config.signals[r.Bs.GAME_EVENT].defaultEventType.decay;
        let n = this.config.signals[r.Bs.GAME_EVENT].eventTypes[e.eventType];
        return null != (t = null == n ? true : n.decay) ? t : this.config.signals[r.Bs.GAME_EVENT].defaultEventType.decay
      }
      default:
        return 1
    }
  }
  async clip(e, t) {
    let n = this.timeline.read();
    for (let e of n) e.processed = true;
    try {
      await this.saveClipCallback(true, e, n, t)
    } catch (e) {}
  }
  getConfig() {
    return a({}, this.config)
  }
  getInternalState() {
    return {
      currentThreshold: this.currentThreshold,
      fatigue: this.fatigue,
      fatigueAtLastClip: this.fatigueAtLastClip,
      thresholdAtLastClip: this.thresholdAtLastClip,
      lastClipTimestamp: this.lastClipTimestamp,
      lastUpdateTimestamp: this.lastUpdateTimestamp
    }
  }
  constructor(e, t, n) {
    i(this, "config", true), i(this, "timeline", true), i(this, "currentThreshold", true), i(this, "fatigue", true), i(this, "fatigueAtLastClip", true), i(this, "thresholdAtLastClip", true), i(this, "lastClipTimestamp", true), i(this, "lastUpdateTimestamp", true), i(this, "saveClipCallback", true), this.config = e, this.timeline = t, this.saveClipCallback = n, this.currentThreshold = e.baseThreshold, this.fatigue = 1, this.fatigueAtLastClip = 1, this.thresholdAtLastClip = e.baseThreshold, this.lastClipTimestamp = null, this.lastUpdateTimestamp = Date.now()
  }
}