/** Chunk was on 77639 **/
/** chunk id: 686586, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => c
}), require("./896048.js"), require("./321073.js"), require("./457529.js"), require("./747238.js"), require("./812715.js"), require("./733351.js"), require("./591487.js"), require("./727858.js"), require("./169888.js");
var Chunk626584 = require("./626584.js"),
  Chunk274372 = require("./274372.js"),
  Chunk372684 = require("./372684.js"),
  Chunk672412 = require("./672412.js");

function s(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
let r = new Chunk626584.A("MLSignalHandler");
class d {
  start() {
    r.info("ML signal handler started"), n.A.start(this.handleMLResult.bind(this), () => {})
  }
  stop() {
    n.A.stop(), this.emotionHistory = [], this.yellHistory = [], r.info("ML signal handler stopped")
  }
  getState() {
    return {
      emotionHistory: [...this.emotionHistory],
      yellHistory: [...this.yellHistory]
    }
  }
  handleMLResult(e) {
    switch (e.type) {
      case "yell_classification":
        this.handleYellClassification(e.payload);
        break;
      case "wake_word":
        this.handleWakeWord(e.payload);
        break;
      case "emotion_classification":
        this.handleEmotionClassification(e.payload);
        break;
      case "whisper_transcription":
        this.handleWhisperTranscription(e.payload);
        break;
      default:
        r.warn("Unknown ML result type: ".concat(e.type))
    }
  }
  handleYellClassification(e) {
    var t;
    let {
      userId: a,
      percentiles: o,
      yelling: i,
      debug: n,
      timestamp: s
    } = e;
    (null == (t = window.__CLIPS_DEBUG__) ? true : t.yell) && (this.yellHistory.push({
      timestamp: s,
      userId: a,
      percentiles: o,
      debug: n
    }), this.yellHistory.length > 50 && this.yellHistory.shift()), i && this.emitSignal({
      type: l.Gy.YELLING,
      userId: a
    }, s)
  }
  handleWakeWord(e) {
    var t;
    let {
      userId: a,
      probabilities: o,
      timestamp: n
    } = e, s = Object.entries(o).map(e => {
      let [t, a] = e, o = "number" == typeof a ? a : 0, i = Math.round(20 * o), l = "*".repeat(i), n = " ".repeat(20 - i);
      return "".concat(t, ": |").concat(l).concat(n, "| (").concat(o.toFixed(3), ")")
    }).join("  ");
    (null == (t = window.__CLIPS_DEBUG__) ? true : t.wakeWord) && r.info("Wake word: ".concat(a, ": ").concat(s));
    let d = i.A.getSettings().autoClipPhrases;
    for (let [e, t] of Object.entries(o))
      if (("number" == typeof t ? t : 0) >= .5 && d.includes(e)) {
        this.emitSignal({
          type: l.Gy.PHRASE,
          text: e
        }, n);
        break
      }
  }
  handleEmotionClassification(e) {
    var t;
    let {
      userId: a,
      emotions: o,
      timestamp: i
    } = e;
    this.emotionHistory.push({
      timestamp: i,
      userId: a,
      emotions: o
    }), this.emotionHistory.length > 10 && this.emotionHistory.shift(), (null == (t = window.__CLIPS_DEBUG__) ? true : t.emotion) && r.info("Emotion classification: ".concat(a, ": ").concat(JSON.stringify(o)))
  }
  handleWhisperTranscription(e) {
    var t;
    let {
      userId: a,
      transcription: o,
      timestamp: n
    } = e;
    (null == (t = window.__CLIPS_DEBUG__) ? true : t.whisper) && r.info("Whisper transcription: ".concat(a, ": ").concat(JSON.stringify(o)));
    let d = i.A.getSettings().autoClipPhrases;
    if (0 === d.length) return;
    let c = e => e.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()@\[\]\?"'<>\\|+]/g, "").replace(/\s+/g, " ").trim().toLowerCase(),
      u = d.map(e => c(e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
      f = RegExp("(".concat(u.join("|"), ")"), "g");
    for (let e of o)
      for (let t of c(e.text).matchAll(f)) {
        let a = t[0],
          o = d.find(e => c(e) === a);
        if (null != o) {
          let t = n + 1e3 * e.t0;
          if (null != e.words && e.words.length > 0) {
            let a = c(o).split(" "),
              i = e.words.map(e => (function(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    a.push.apply(a, o)
                  }
                  return a
                })(Object(t)).forEach(function(a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
                }), e
              })(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {},
                    o = Object.keys(a);
                  "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable
                  }))), o.forEach(function(t) {
                    s(e, t, a[t])
                  })
                }
                return e
              }({}, e), {
                cleanText: c(e.text)
              }));
            for (let e = 0; e <= i.length - a.length; e++) {
              let l = i.slice(e, e + a.length);
              if (l.map(e => e.cleanText).join(" ") === c(o)) {
                t = n + 1e3 * l[0].t0;
                break
              }
            }
          }
          this.emitSignal({
            type: l.Gy.PHRASE,
            text: o
          }, t)
        }
      }
  }
  constructor(e) {
    s(this, "emitSignal", true), s(this, "emotionHistory", []), s(this, "yellHistory", []), this.emitSignal = e
  }
}
let c = e => new d(e)