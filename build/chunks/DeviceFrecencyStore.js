/** Chunk was on web.js **/
/** chunk id: 145016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk570140 = require("./570140.js"),
  Chunk704907 = require("./704907.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk65154 = require("./65154.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = {
    inputDeviceFrecency: Chunk65154.h7.AUDIO_INPUT,
    outputDeviceFrecency: Chunk65154.h7.AUDIO_OUTPUT,
    videoDeviceFrecency: Chunk65154.h7.VIDEO_INPUT
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
    [f.h7.AUDIO_INPUT]: {
      getCurrentDeviceId: e => e.getInputDeviceId()
    },
    [f.h7.AUDIO_OUTPUT]: {
      getCurrentDeviceId: e => e.getOutputDeviceId()
    },
    [f.h7.VIDEO_INPUT]: {
      getCurrentDeviceId: e => e.getVideoDeviceId()
    }
  })[e]
}

function g(e, t) {
  let {
    oldId: n
  } = t;
  if (!T.isSampling(e)) returnfalse;
  T.stopSampling(e, n), T.startSampling(e)
}

function E(e) {
  var t;
  let {
    context: n,
    userId: r,
    speakingFlags: i
  } = e;
  if (n !== f.Yn.DEFAULT) returnfalse;
  let a = null == (t = d.default.getCurrentUser()) ? true : t.id;
  if (null == a) returnfalse;
  let o = r === a ? f.h7.AUDIO_INPUT : f.h7.AUDIO_OUTPUT;
  if (i === f.Dg.NONE && T.isSampling(o)) T.stopSampling(o);
  else {
    if (i === f.Dg.NONE || T.isSampling(o)) returnfalse;
    T.startSampling(o)
  }
}

function b() {
  T.reset()
}
let y = {
    [Chunk65154.h7.AUDIO_INPUT]: new Chunk379649.G9,
    [Chunk65154.h7.AUDIO_OUTPUT]: new Chunk379649.G9,
    [Chunk65154.h7.VIDEO_INPUT]: new Chunk379649.G9
  },
  O = {
    [Chunk65154.h7.AUDIO_INPUT]: {},
    [Chunk65154.h7.AUDIO_OUTPUT]: {},
    [Chunk65154.h7.VIDEO_INPUT]: {}
  },
  v = {
    [Chunk65154.h7.AUDIO_INPUT]: new Chunk704907.Z(h),
    [Chunk65154.h7.AUDIO_OUTPUT]: new Chunk704907.Z(h),
    [Chunk65154.h7.VIDEO_INPUT]: new Chunk704907.Z(h)
  };
class I extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(u.Z, d.default), [f.h7.AUDIO_INPUT, f.h7.AUDIO_OUTPUT, f.h7.VIDEO_INPUT].forEach(t => {
      (null == e ? true : e[t]) != null && v[t].overwriteHistory(e[t]), y[t].reset()
    })
  }
  reset() {
    [Chunk65154.h7.AUDIO_INPUT, Chunk65154.h7.AUDIO_OUTPUT, Chunk65154.h7.VIDEO_INPUT].forEach(e => {
      y[e].reset(), O[e] = {}
    })
  }
  track(e, t, n) {
    null == O[e][t] && (O[e][t] = 0), O[e][t] += n, v[e].track(t, {
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
      let n = null != t ? t : m(e).getCurrentDeviceId(u.Z);
      this.track(e, n, r)
    }
    n.reset()
  }
  getState() {
    return {
      [Chunk65154.h7.AUDIO_INPUT]: v[Chunk65154.h7.AUDIO_INPUT].usageHistory,
      [Chunk65154.h7.AUDIO_OUTPUT]: v[Chunk65154.h7.AUDIO_OUTPUT].usageHistory,
      [Chunk65154.h7.VIDEO_INPUT]: v[Chunk65154.h7.VIDEO_INPUT].usageHistory
    }
  }
  getDeviceIdsSortedByFrecency(e) {
    return v[e].frequently
  }
  getUsageStats() {
    let e = {
      [Chunk65154.h7.AUDIO_INPUT]: [],
      [Chunk65154.h7.AUDIO_OUTPUT]: [],
      [Chunk65154.h7.VIDEO_INPUT]: []
    };
    return [Chunk65154.h7.AUDIO_INPUT, Chunk65154.h7.AUDIO_OUTPUT].forEach(t => {
      this.isSampling(t) && (this.stopSampling(t), this.startSampling(t)), e[t] = Object.entries(O[t])
    }), {
      duration_input_device_used_ids: module[Chunk65154.h7.AUDIO_INPUT].map(e => {
        let [t, n] = e;
        return t
      }),
      duration_input_device_used_ms: module[Chunk65154.h7.AUDIO_INPUT].map(e => {
        let [t, n] = e;
        return n
      }),
      duration_output_device_used_ids: module[Chunk65154.h7.AUDIO_OUTPUT].map(e => {
        let [t, n] = e;
        return t
      }),
      duration_output_device_used_ms: module[Chunk65154.h7.AUDIO_OUTPUT].map(e => {
        let [t, n] = e;
        return n
      })
    }
  }
}
_(I, "displayName", "DeviceFrecencyStore"), _(I, "persistKey", "DeviceFrecencyStore"), _(I, "migrations", [e => a().mapKeys(e, (e, t) => p[t])]);
let T = new I(Chunk570140.Z, {
    AUDIO_SET_INPUT_DEVICE: e => g(f.h7.AUDIO_INPUT, e),
    AUDIO_SET_OUTPUT_DEVICE: e => g(f.h7.AUDIO_OUTPUT, e),
    MEDIA_ENGINE_SET_VIDEO_DEVICE: e => g(f.h7.VIDEO_INPUT, e),
    SPEAKING: E,
    RTC_CONNECTION_CLIENT_CONNECT: b
  }),
  S = T