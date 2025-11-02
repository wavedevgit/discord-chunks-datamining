/** Chunk was on 28532 **/
/** chunk id: 680004, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./35282.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk435064 = require("./435064.js"),
  Chunk894694 = require("./894694.js"),
  Chunk39604 = require("./39604.js"),
  Chunk356659 = require("./356659.js");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p() {
  let {
    maxAutoClips: e,
    clipSignals: t,
    autoClipPhrases: n,
    mlPipelinesEnabled: p
  } = (0, Chunk442837.cj)([Chunk435064.Z], () => ({
    maxAutoClips: Chunk435064.Z.getSettings().maxAutoClips,
    clipSignals: Chunk435064.Z.getSettings().clipSignals,
    autoClipPhrases: Chunk435064.Z.getSettings().autoClipPhrases,
    mlPipelinesEnabled: Chunk435064.Z.getSettings().mlPipelinesEnabled
  })), [h, x] = Chunk647438.useState(() => (true === window.__CLIPS_DEBUG__ && (window.__CLIPS_DEBUG__ = {
    emotion: false,
    yell: false,
    wakeWord: false,
    whisper: false
  }), {
    wakeWord: window.__CLIPS_DEBUG__.wakeWord,
    emotion: window.__CLIPS_DEBUG__.emotion,
    yell: window.__CLIPS_DEBUG__.yell,
    whisper: window.__CLIPS_DEBUG__.whisper
  })), [g, f] = Chunk647438.useState(Chunk894694.x0.KILL), [b, v] = Chunk647438.useState(1), [j, _] = Chunk647438.useState(""), [y, C] = Chunk647438.useState(""), S = Chunk647438.useCallback(e => {
    let t = !h[e];
    true === window.__CLIPS_DEBUG__ && (window.__CLIPS_DEBUG__ = {
      emotion: false,
      yell: false,
      wakeWord: false,
      whisper: false
    }), window.__CLIPS_DEBUG__[e] = t, x(n => m(u({}, n), {
      [e]: t
    }))
  }, [h]);
  return (0, Chunk951288.jsxs)(Chunk481060.Ttm, {
    children: [(0, Chunk951288.jsxs)(Chunk481060.l09, {
      children: [(0, Chunk951288.jsxs)(Chunk481060.C3N, {
        label: "ML Debug Logging (window.__CLIPS_DEBUG__)",
        children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: "Wake Word Debug",
          description: "Log wake word detection events to console",
          checked: h.wakeWord,
          onChange: () => S("wakeWord")
        }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: "Emotion Debug",
          description: "Log emotion classification events to console",
          checked: h.emotion,
          onChange: () => S("emotion")
        }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: "Yell Debug",
          description: "Show yell classification events histogram",
          checked: h.yell,
          onChange: () => S("yell")
        }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: "Whisper Debug",
          description: "Log whisper transcription events to console",
          checked: h.whisper,
          onChange: () => S("whisper")
        })]
      }), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
        label: "Auto Clips",
        children: [(0, Chunk951288.jsx)(Chunk481060.gNt, {
          label: "Max Auto Clips",
          children: (0, Chunk951288.jsx)(Chunk481060.FiK, {
            value: module,
            minValue: Chunk356659.qb,
            maxValue: Chunk356659.b0,
            onChange: Chunk39604.W6
          })
        }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: "Enable Distributed Signals",
          checked: exports.enableDistributedSignals,
          onChange: e => c.Rr(m(u({}, t), {
            enableDistributedSignals: e
          }))
        }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: "Enable Phrase Signals",
          checked: exports.enablePhraseSignals,
          onChange: e => c.Rr(m(u({}, t), {
            enablePhraseSignals: e
          }))
        }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: "Enable Game Signals",
          checked: exports.enableGameSignals,
          onChange: e => c.Rr(m(u({}, t), {
            enableGameSignals: e
          }))
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.C3N, {
        label: "Auto Clip Trigger Phrases",
        description: "Used for both wake word and whisper transcription detection",
        children: (0, Chunk951288.jsx)(Chunk481060.gNt, {
          label: "Phrases (comma separated)",
          helperText: "Current phrases: ".concat(require.length),
          children: (0, Chunk951288.jsx)(Chunk481060.oil, {
            defaultValue: require.join(","),
            onBlur: e => {
              let t = e.target.value.split(",").map(e => e.trim()).filter(e => e.length > 0);
              c.a2(t)
            },
            placeholder: "Enter phrases (comma separated)"
          })
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.C3N, {
      label: "Send Test Signals",
      children: (0, Chunk951288.jsxs)(Chunk481060.NIo, {
        children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
          text: "Manual",
          onClick: () => Chunk39604.XK({
            type: Chunk894694.Bs.MANUAL
          })
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          text: "Distributed",
          onClick: () => Chunk39604.XK({
            type: Chunk894694.Bs.DISTRIBUTED,
            remoteTriggerUserId: "123",
            remoteTriggerClipId: "456"
          })
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          text: "Phrase: Clip",
          onClick: () => Chunk39604.XK({
            type: Chunk894694.Bs.PHRASE,
            text: "clip"
          })
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          text: "Yelling",
          onClick: () => Chunk39604.XK({
            type: Chunk894694.Bs.YELLING,
            userId: "123"
          })
        })]
      })
    }), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
      label: "Game Event Creator",
      children: [(0, Chunk951288.jsxs)(Chunk481060.NIo, {
        children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
          label: "Event Type",
          value: g,
          onChange: e => f(e),
          options: [{
            label: "Kill",
            value: Chunk894694.x0.KILL
          }, {
            label: "Multikill",
            value: Chunk894694.x0.MULTIKILL
          }, {
            label: "Death",
            value: Chunk894694.x0.DEATH
          }, {
            label: "Assist",
            value: Chunk894694.x0.ASSIST
          }, {
            label: "Item",
            value: Chunk894694.x0.ITEM
          }, {
            label: "Victory",
            value: Chunk894694.x0.VICTORY
          }, {
            label: "Defeat",
            value: Chunk894694.x0.DEFEAT
          }, {
            label: "Level Up",
            value: Chunk894694.x0.LEVEL_UP
          }, {
            label: "Treasure",
            value: Chunk894694.x0.TREASURE
          }, {
            label: "Objective Kill",
            value: Chunk894694.x0.OBJECTIVE_KILL
          }]
        }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
          label: "Importance",
          value: b,
          onChange: v,
          options: [{
            label: "Low",
            value: 0
          }, {
            label: "Medium",
            value: .5
          }, {
            label: "High",
            value: 1
          }]
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.oil, {
        label: "Title (optional)",
        value: j,
        onChange: _,
        placeholder: "e.g., First Blood"
      }), (0, Chunk951288.jsx)(Chunk481060.oil, {
        label: "Description (optional)",
        value: y,
        onChange: C,
        placeholder: "e.g., Killed enemy ADC in bot lane"
      }), (0, Chunk951288.jsx)(Chunk481060.Button, {
        text: "Create Game Event",
        onClick: () => {
          Chunk39604.XK({
            type: Chunk894694.Bs.GAME_EVENT,
            eventType: g,
            importance: b,
            title: j,
            description: y
          })
        }
      })]
    }), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
      label: "ML Pipelines Enabled",
      children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: "Emotion Classifier",
        checked: p.emotionClassifier,
        onChange: e => c.So(m(u({}, p), {
          emotionClassifier: e
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: "Wake Word Detector",
        checked: p.wakeWordDetector,
        onChange: e => c.So(m(u({}, p), {
          wakeWordDetector: e
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: "Yell Detector",
        checked: p.yellDetector,
        onChange: e => c.So(m(u({}, p), {
          yellDetector: e
        }))
      }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: "Whisper Transcription",
        checked: p.whisperTranscription,
        onChange: e => c.So(m(u({}, p), {
          whisperTranscription: e
        }))
      })]
    })]
  })
}