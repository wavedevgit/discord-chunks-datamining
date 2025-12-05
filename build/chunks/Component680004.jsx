/** Chunk was on 75393 **/
/** chunk id: 680004, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk435064 = require("./435064.js"),
  Chunk894694 = require("./894694.js"),
  Chunk39604 = require("./39604.js");

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
    mlPipelinesEnabled: e
  } = (0, Chunk442837.cj)([Chunk435064.Z], () => ({
    mlPipelinesEnabled: Chunk435064.Z.getSettings().mlPipelinesEnabled
  })), [t, n] = Chunk473749.useState(() => (true === window.__CLIPS_DEBUG__ && (window.__CLIPS_DEBUG__ = {
    emotion: false,
    yell: false,
    wakeWord: false,
    whisper: false
  }), {
    wakeWord: window.__CLIPS_DEBUG__.wakeWord,
    emotion: window.__CLIPS_DEBUG__.emotion,
    yell: window.__CLIPS_DEBUG__.yell,
    whisper: window.__CLIPS_DEBUG__.whisper
  })), [p, h] = Chunk473749.useState(Chunk894694.x0.KILL), [x, f] = Chunk473749.useState(1), [g, b] = Chunk473749.useState(""), [v, j] = Chunk473749.useState(""), _ = Chunk473749.useCallback(e => {
    let a = !t[e];
    true === window.__CLIPS_DEBUG__ && (window.__CLIPS_DEBUG__ = {
      emotion: false,
      yell: false,
      wakeWord: false,
      whisper: false
    }), window.__CLIPS_DEBUG__[e] = a, n(t => m(u({}, t), {
      [e]: a
    }))
  }, [exports]);
  return (0, Chunk54381.jsx)(Chunk481060.Ttm, {
    children: (0, Chunk54381.jsxs)(Chunk481060.l09, {
      children: [(0, Chunk54381.jsx)(Chunk481060.C3N, {
        label: "Send Test Signals",
        children: (0, Chunk54381.jsxs)(Chunk481060.NIo, {
          children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
            text: "Manual",
            onClick: () => Chunk39604.XK({
              type: Chunk894694.Bs.MANUAL
            })
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
            text: "Distributed",
            onClick: () => Chunk39604.XK({
              type: Chunk894694.Bs.DISTRIBUTED,
              remoteTriggerUserId: "123",
              remoteTriggerClipId: "456"
            })
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
            text: "Phrase: Clip",
            onClick: () => Chunk39604.XK({
              type: Chunk894694.Bs.PHRASE,
              text: "clip"
            })
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
            text: "Yelling",
            onClick: () => Chunk39604.XK({
              type: Chunk894694.Bs.YELLING,
              userId: "123"
            })
          })]
        })
      }), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
        label: "Game Event Creator",
        children: [(0, Chunk54381.jsxs)(Chunk481060.NIo, {
          children: [(0, Chunk54381.jsx)(Chunk199849.y6, {
            label: "Event Type",
            value: p,
            onChange: e => h(e),
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
          }), (0, Chunk54381.jsx)(Chunk199849.y6, {
            label: "Importance",
            value: x,
            onChange: f,
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
        }), (0, Chunk54381.jsx)(Chunk481060.oil, {
          label: "Title (optional)",
          value: g,
          onChange: b,
          placeholder: "e.g., First Blood"
        }), (0, Chunk54381.jsx)(Chunk481060.oil, {
          label: "Description (optional)",
          value: v,
          onChange: j,
          placeholder: "e.g., Killed enemy ADC in bot lane"
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          text: "Create Game Event",
          onClick: () => {
            Chunk39604.XK({
              type: Chunk894694.Bs.GAME_EVENT,
              eventType: p,
              importance: x,
              title: g,
              description: v
            })
          }
        })]
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
        label: "ML Pipelines Enabled",
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Emotion Classifier",
          checked: module.emotionClassifier,
          onChange: t => d.So(m(u({}, e), {
            emotionClassifier: t
          }))
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Wake Word Detector",
          checked: module.wakeWordDetector,
          onChange: t => d.So(m(u({}, e), {
            wakeWordDetector: t
          }))
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Yell Detector",
          checked: module.yellDetector,
          onChange: t => d.So(m(u({}, e), {
            yellDetector: t
          }))
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Whisper Transcription",
          checked: module.whisperTranscription,
          onChange: t => d.So(m(u({}, e), {
            whisperTranscription: t
          }))
        })]
      }), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
        label: "ML Debug Logging (window.__CLIPS_DEBUG__)",
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Wake Word Debug",
          description: "Log wake word detection events to console",
          checked: exports.wakeWord,
          onChange: () => _("wakeWord")
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Emotion Debug",
          description: "Log emotion classification events to console",
          checked: exports.emotion,
          onChange: () => _("emotion")
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Yell Debug",
          description: "Show yell classification events to console",
          checked: exports.yell,
          onChange: () => _("yell")
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Whisper Debug",
          description: "Log whisper transcription events to console",
          checked: exports.whisper,
          onChange: () => _("whisper")
        })]
      })]
    })
  })
}