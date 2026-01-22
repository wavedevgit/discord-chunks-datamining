/** Chunk was on web.js **/
/** chunk id: 835498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk499979 = require("./499979.js"),
  Chunk73153 = require("./73153.js"),
  Chunk283047 = require("./283047.js"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk731854 = require("./731854.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = {
    inputDeviceFrecency: Chunk731854.oh.AUDIO_INPUT,
    outputDeviceFrecency: Chunk731854.oh.AUDIO_OUTPUT,
    videoDeviceFrecency: Chunk731854.oh.VIDEO_INPUT
  },
  h = {
    afterCompute: () => {},
    computeBonus: () => 100,
    lookupKey: e => e,
    maxSamples: 256,
    numFrequentlyItems: 1 / 0
  };

function m(e) {
  return ({
    [f.oh.AUDIO_INPUT]: {
      getCurrentDeviceId: e => e.getInputDeviceId()
    },
    [f.oh.AUDIO_OUTPUT]: {
      getCurrentDeviceId: e => e.getOutputDeviceId()
    },
    [f.oh.VIDEO_INPUT]: {
      getCurrentDeviceId: e => e.getVideoDeviceId()
    }
  })[e]
}

function g(e, t) {
  let {
    oldId: n
  } = t;
  if (!S.isSampling(e)) returnfalse;
  S.stopSampling(e, n), S.startSampling(e)
}

function E(e) {
  var t;
  let {
    context: n,
    userId: r,
    speakingFlags: i
  } = e;
  if (n !== f.x.DEFAULT) returnfalse;
  let a = null == (t = d.default.getCurrentUser()) ? true : t.id;
  if (null == a) returnfalse;
  let s = r === a ? f.oh.AUDIO_INPUT : f.oh.AUDIO_OUTPUT;
  if (i === f.ME.NONE && S.isSampling(s)) S.stopSampling(s);
  else {
    if (i === f.ME.NONE || S.isSampling(s)) returnfalse;
    S.startSampling(s)
  }
}

function b() {
  S.reset()
}
let y = {
    [Chunk731854.oh.AUDIO_INPUT]: new Chunk499979.W0,
    [Chunk731854.oh.AUDIO_OUTPUT]: new Chunk499979.W0,
    [Chunk731854.oh.VIDEO_INPUT]: new Chunk499979.W0
  },
  O = {
    [Chunk731854.oh.AUDIO_INPUT]: {},
    [Chunk731854.oh.AUDIO_OUTPUT]: {},
    [Chunk731854.oh.VIDEO_INPUT]: {}
  },
  A = {
    [Chunk731854.oh.AUDIO_INPUT]: new Chunk283047.A(h),
    [Chunk731854.oh.AUDIO_OUTPUT]: new Chunk283047.A(h),
    [Chunk731854.oh.VIDEO_INPUT]: new Chunk283047.A(h)
  };
class v extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(u.A, d.default), [f.oh.AUDIO_INPUT, f.oh.AUDIO_OUTPUT, f.oh.VIDEO_INPUT].forEach(t => {
      (null == e ? true : e[t]) != null && A[t].overwriteHistory(e[t]), y[t].reset()
    })
  }
  reset() {
    [f.oh.AUDIO_INPUT, f.oh.AUDIO_OUTPUT, f.oh.VIDEO_INPUT].forEach(e => {
      y[e].reset(), O[e] = {}
    })
  }
  track(e, t, n) {
    null == O[e][t] && (O[e][t] = 0), O[e][t] += n, A[e].track(t, {
      usesSinceLastTrack: n
    })
  }
  isSampling(e) {
    return y[e].isRunning()
  }
  startSampling(e) {
    y[e].start()
  }
  stopSampling(e, t) {
    let n = y[e];
    n.stop();
    let r = n.elapsed().asMilliseconds();
    if (r > 0) {
      let n = null != t ? t : m(e).getCurrentDeviceId(u.A);
      this.track(e, n, r)
    }
    n.reset()
  }
  getState() {
    return {
      [f.oh.AUDIO_INPUT]: A[f.oh.AUDIO_INPUT].usageHistory,
      [f.oh.AUDIO_OUTPUT]: A[f.oh.AUDIO_OUTPUT].usageHistory,
      [f.oh.VIDEO_INPUT]: A[f.oh.VIDEO_INPUT].usageHistory
    }
  }
  getDeviceIdsSortedByFrecency(e) {
    return A[e].frequently
  }
  getUsageStats() {
    let e = {
      [f.oh.AUDIO_INPUT]: [],
      [f.oh.AUDIO_OUTPUT]: [],
      [f.oh.VIDEO_INPUT]: []
    };
    return [f.oh.AUDIO_INPUT, f.oh.AUDIO_OUTPUT].forEach(t => {
      this.isSampling(t) && (this.stopSampling(t), this.startSampling(t)), e[t] = Object.entries(O[t])
    }), {
      duration_input_device_used_ids: e[f.oh.AUDIO_INPUT].map(e => {
        let [t, n] = e;
        return t
      }),
      duration_input_device_used_ms: e[f.oh.AUDIO_INPUT].map(e => {
        let [t, n] = e;
        return n
      }),
      duration_output_device_used_ids: e[f.oh.AUDIO_OUTPUT].map(e => {
        let [t, n] = e;
        return t
      }),
      duration_output_device_used_ms: e[f.oh.AUDIO_OUTPUT].map(e => {
        let [t, n] = e;
        return n
      })
    }
  }
}
p(v, "displayName", "DeviceFrecencyStore"), p(v, "persistKey", "DeviceFrecencyStore"), p(v, "migrations", [e => a().mapKeys(e, (e, t) => _[t])]);
let S = new v(Chunk73153.h, {
    AUDIO_SET_INPUT_DEVICE: e => g(f.oh.AUDIO_INPUT, e),
    AUDIO_SET_OUTPUT_DEVICE: e => g(f.oh.AUDIO_OUTPUT, e),
    MEDIA_ENGINE_SET_VIDEO_DEVICE: e => g(f.oh.VIDEO_INPUT, e),
    SPEAKING: E,
    RTC_CONNECTION_CLIENT_CONNECT: b
  }),
  I = S