/** Chunk was on 22477 **/
/** chunk id: 806235, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk274372 = require("./274372.js"),
  Chunk372684 = require("./372684.js"),
  Chunk399925 = require("./399925.js");

function d(e) {
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

function u(e, t) {
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

function m() {
  let {
    mlPipelinesEnabled: e
  } = (0, r.cf)([s.A], () => ({
    mlPipelinesEnabled: s.A.getSettings().mlPipelinesEnabled
  })), [t, n] = l.useState(() => (true === window.__CLIPS_DEBUG__ && (window.__CLIPS_DEBUG__ = {
    emotion: false,
    yell: false,
    wakeWord: false,
    whisper: false
  }), {
    wakeWord: window.__CLIPS_DEBUG__.wakeWord,
    emotion: window.__CLIPS_DEBUG__.emotion,
    yell: window.__CLIPS_DEBUG__.yell,
    whisper: window.__CLIPS_DEBUG__.whisper
  })), [m, p] = l.useState(o.rb.KILL), [h, x] = l.useState(1), [g, f] = l.useState(""), [b, v] = l.useState(""), j = l.useCallback(e => {
    let a = !t[e];
    true === window.__CLIPS_DEBUG__ && (window.__CLIPS_DEBUG__ = {
      emotion: false,
      yell: false,
      wakeWord: false,
      whisper: false
    }), window.__CLIPS_DEBUG__[e] = a, n(t => u(d({}, t), {
      [e]: a
    }))
  }, [t]);
  return (0, a.jsx)(i.HOs, {
    children: (0, a.jsxs)(i.lVW, {
      children: [(0, a.jsx)(i.nVY, {
        label: "Send Test Signals",
        children: (0, a.jsxs)(i.M_l, {
          children: [(0, a.jsx)(i.Button, {
            text: "Manual",
            onClick: () => c.Ts({
              type: o.Gy.MANUAL
            })
          }), (0, a.jsx)(i.Button, {
            text: "Distributed",
            onClick: () => c.Ts({
              type: o.Gy.DISTRIBUTED,
              remoteTriggerUserId: "123",
              remoteTriggerClipId: "456"
            })
          }), (0, a.jsx)(i.Button, {
            text: "Phrase: Clip",
            onClick: () => c.Ts({
              type: o.Gy.PHRASE,
              text: "clip"
            })
          }), (0, a.jsx)(i.Button, {
            text: "Yelling",
            onClick: () => c.Ts({
              type: o.Gy.YELLING,
              userId: "123"
            })
          })]
        })
      }), (0, a.jsxs)(i.nVY, {
        label: "Game Event Creator",
        children: [(0, a.jsxs)(i.M_l, {
          children: [(0, a.jsx)(i.l6P, {
            label: "Event Type",
            value: m,
            onSelectionChange: e => p(e),
            options: [{
              id: "kill",
              label: "Kill",
              value: o.rb.KILL
            }, {
              id: "multikill",
              label: "Multikill",
              value: o.rb.MULTIKILL
            }, {
              id: "death",
              label: "Death",
              value: o.rb.DEATH
            }, {
              id: "assist",
              label: "Assist",
              value: o.rb.ASSIST
            }, {
              id: "item",
              label: "Item",
              value: o.rb.ITEM
            }, {
              id: "victory",
              label: "Victory",
              value: o.rb.VICTORY
            }, {
              id: "defeat",
              label: "Defeat",
              value: o.rb.DEFEAT
            }, {
              id: "level_up",
              label: "Level Up",
              value: o.rb.LEVEL_UP
            }, {
              id: "treasure",
              label: "Treasure",
              value: o.rb.TREASURE
            }, {
              id: "objective_kill",
              label: "Objective Kill",
              value: o.rb.OBJECTIVE_KILL
            }],
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsx)(i.l6P, {
            label: "Importance",
            value: h,
            onSelectionChange: x,
            options: [{
              id: "low",
              label: "Low",
              value: 0
            }, {
              id: "medium",
              label: "Medium",
              value: .5
            }, {
              id: "high",
              label: "High",
              value: 1
            }],
            selectionMode: "single",
            fullWidth: true
          })]
        }), (0, a.jsx)(i.ksK, {
          label: "Title (optional)",
          value: g,
          onChange: f,
          placeholder: "e.g., First Blood"
        }), (0, a.jsx)(i.ksK, {
          label: "Description (optional)",
          value: b,
          onChange: v,
          placeholder: "e.g., Killed enemy ADC in bot lane"
        }), (0, a.jsx)(i.Button, {
          text: "Create Game Event",
          onClick: () => {
            c.Ts({
              type: o.Gy.GAME_EVENT,
              eventType: m,
              importance: h,
              title: g,
              description: b
            })
          }
        })]
      }), (0, a.jsx)(i.cGx, {}), (0, a.jsxs)(i.nVY, {
        label: "ML Pipelines Enabled",
        children: [(0, a.jsx)(i.dOG, {
          label: "Emotion Classifier",
          checked: e.emotionClassifier,
          onChange: t => c.dR(u(d({}, e), {
            emotionClassifier: t
          }))
        }), (0, a.jsx)(i.dOG, {
          label: "Wake Word Detector",
          checked: e.wakeWordDetector,
          onChange: t => c.dR(u(d({}, e), {
            wakeWordDetector: t
          }))
        }), (0, a.jsx)(i.dOG, {
          label: "Yell Detector",
          checked: e.yellDetector,
          onChange: t => c.dR(u(d({}, e), {
            yellDetector: t
          }))
        }), (0, a.jsx)(i.dOG, {
          label: "Whisper Transcription",
          checked: e.whisperTranscription,
          onChange: t => c.dR(u(d({}, e), {
            whisperTranscription: t
          }))
        })]
      }), (0, a.jsxs)(i.nVY, {
        label: "ML Debug Logging (window.__CLIPS_DEBUG__)",
        children: [(0, a.jsx)(i.dOG, {
          label: "Wake Word Debug",
          description: "Log wake word detection events to console",
          checked: t.wakeWord,
          onChange: () => j("wakeWord")
        }), (0, a.jsx)(i.dOG, {
          label: "Emotion Debug",
          description: "Log emotion classification events to console",
          checked: t.emotion,
          onChange: () => j("emotion")
        }), (0, a.jsx)(i.dOG, {
          label: "Yell Debug",
          description: "Show yell classification events to console",
          checked: t.yell,
          onChange: () => j("yell")
        }), (0, a.jsx)(i.dOG, {
          label: "Whisper Debug",
          description: "Log whisper transcription events to console",
          checked: t.whisper,
          onChange: () => j("whisper")
        })]
      })]
    })
  })
}