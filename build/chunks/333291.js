/** Chunk was on web.js **/
/** chunk id: 333291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P_: () => l,
  o$: () => d,
  yM: () => u
}), require("./388685.js"), require("./781311.js"), require("./49124.js");
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

function o(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function l() {
  return {
    baseThreshold: .5,
    ceiling: 1,
    clipLengthSeconds: 60,
    timelineLengthSeconds: 300,
    signalFatigueMultiplier: .7,
    fatigueDecaySeconds: 120,
    minTimeBetweenAutoClips: 15,
    signals: {
      [Chunk894694.Bs.MANUAL]: {
        importance: 1,
        decay: 1,
        enabled: true,
        bypassFatigue: true
      },
      [Chunk894694.Bs.DISTRIBUTED]: {
        importance: .6,
        decay: .3,
        enabled: true
      },
      [Chunk894694.Bs.PHRASE]: {
        enabled: true,
        phrases: [{
          patterns: ["alexa", "clip", "clip it", "clip that", "klip", "klip it", "klip that", "flip", "flip that"],
          importance: 1,
          decay: 1,
          enabled: true,
          bypassFatigue: true,
          isExplicit: true
        }, {
          patterns: ["holy shit", "holy fuck", "oh my god", "omg", "what", "no way", "are you kidding"],
          importance: .4,
          decay: .5,
          enabled: true,
          amplifiers: [{
            targetSignals: [Chunk894694.Bs.YELLING, Chunk894694.Bs.GAME_EVENT],
            multiplier: 1.3,
            timeWindowSeconds: 8
          }]
        }, {
          patterns: ["fuck", "shit", "damn", "wow"],
          importance: .3,
          decay: .6,
          enabled: true
        }],
        defaultPhrase: {
          importance: .15,
          decay: .7
        }
      },
      [Chunk894694.Bs.YELLING]: {
        importance: .18,
        decay: .6,
        enabled: true,
        penalty: .2,
        amplifiers: [{
          targetSignals: [Chunk894694.Bs.GAME_EVENT],
          multiplier: 1.4,
          timeWindowSeconds: 5
        }]
      },
      [Chunk894694.Bs.GAME_EVENT]: {
        enabled: true,
        eventTypes: {
          [Chunk894694.x0.KILL]: {
            importance: .1,
            decay: .4
          },
          [Chunk894694.x0.MULTIKILL]: {
            importance: .2,
            decay: .3,
            amplifiers: [{
              targetSignals: [Chunk894694.Bs.YELLING, Chunk894694.Bs.PHRASE],
              multiplier: 1.5,
              timeWindowSeconds: 30
            }]
          },
          [Chunk894694.x0.DEATH]: {
            importance: .02,
            decay: .6
          },
          [Chunk894694.x0.ASSIST]: {
            importance: .05,
            decay: .5
          },
          [Chunk894694.x0.ITEM]: {
            importance: .01,
            decay: .5
          },
          [Chunk894694.x0.VICTORY]: {
            importance: .15,
            decay: .2
          },
          [Chunk894694.x0.DEFEAT]: {
            importance: .15,
            decay: .3
          },
          [Chunk894694.x0.LEVEL_UP]: {
            importance: .1,
            decay: .4
          },
          [Chunk894694.x0.TREASURE]: {
            importance: .1,
            decay: .4
          },
          [Chunk894694.x0.OBJECTIVE_KILL]: {
            importance: .1,
            decay: .3
          }
        },
        defaultEventType: {
          importance: .3,
          decay: .5
        }
      },
      [Chunk894694.Bs.SPEAKING]: {
        importance: 0,
        decay: .8,
        enabled: true
      },
      [Chunk894694.Bs.SOUNDBOARD]: {
        importance: .1,
        decay: .8,
        enabled: true,
        penalty: .5,
        amplifiers: [{
          targetSignals: [Chunk894694.Bs.YELLING],
          multiplier: 1.5,
          timeWindowSeconds: 10
        }]
      }
    },
    useExponentialDecay: false,
    debugMode: false
  }
}

function c(e) {
  let t = (e, t, n) => Math.max(t, Math.min(n, e)),
    n = e => null == e ? true : e.map(e => s(a({}, e), {
      multiplier: t(e.multiplier, .1, 5),
      timeWindowSeconds: t(e.timeWindowSeconds, 0, 60)
    })),
    i = e => s(a({}, e), {
      importance: t(e.importance, 0, 1),
      decay: t(e.decay, 0, 1),
      amplifiers: n(e.amplifiers)
    }),
    o = e => s(a({}, e), {
      phrases: e.phrases.map(e => s(a({}, e), {
        importance: t(e.importance, 0, 1),
        decay: t(e.decay, 0, 1),
        amplifiers: n(e.amplifiers)
      })),
      defaultPhrase: s(a({}, e.defaultPhrase), {
        importance: t(e.defaultPhrase.importance, 0, 1),
        decay: t(e.defaultPhrase.decay, 0, 1)
      })
    }),
    l = e => {
      let r = e => s(a({}, e), {
          importance: t(e.importance, 0, 1),
          decay: t(e.decay, 0, 1),
          amplifiers: n(e.amplifiers)
        }),
        i = {};
      for (let [t, n] of Object.entries(e.eventTypes)) null != n && (i[t] = r(n));
      return s(a({}, e), {
        eventTypes: i,
        defaultEventType: r(e.defaultEventType)
      })
    };
  return s(a({}, e), {
    baseThreshold: t(e.baseThreshold, 0, 1),
    ceiling: t(e.ceiling, 0, 1),
    clipLengthSeconds: t(e.clipLengthSeconds, 30, 180),
    timelineLengthSeconds: t(e.timelineLengthSeconds, 60, 600),
    signalFatigueMultiplier: t(e.signalFatigueMultiplier, 0, 1),
    fatigueDecaySeconds: t(e.fatigueDecaySeconds, 0, 300),
    minTimeBetweenAutoClips: t(e.minTimeBetweenAutoClips, 0, 60),
    signals: {
      [r.Bs.MANUAL]: i(e.signals[r.Bs.MANUAL]),
      [r.Bs.DISTRIBUTED]: i(e.signals[r.Bs.DISTRIBUTED]),
      [r.Bs.PHRASE]: o(e.signals[r.Bs.PHRASE]),
      [r.Bs.YELLING]: i(e.signals[r.Bs.YELLING]),
      [r.Bs.GAME_EVENT]: l(e.signals[r.Bs.GAME_EVENT]),
      [r.Bs.SPEAKING]: i(e.signals[r.Bs.SPEAKING]),
      [r.Bs.SOUNDBOARD]: i(e.signals[r.Bs.SOUNDBOARD])
    }
  })
}

function u(e) {
  return JSON.stringify(e, null, 2)
}

function d(e) {
  return c(JSON.parse(e))
}