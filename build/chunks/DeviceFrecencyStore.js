/** Chunk was on web.js **/
/** chunk id: 145016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
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
  if (!y.isSampling(e)) returnfalse;
  y.stopSampling(e, n), y.startSampling(e)
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
  if (i === f.Dg.NONE && y.isSampling(o)) y.stopSampling(o);
  else {
    if (i === f.Dg.NONE || y.isSampling(o)) returnfalse;
    y.startSampling(o)
  }
}
class b extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(u.Z, d.default), [f.h7.AUDIO_INPUT, f.h7.AUDIO_OUTPUT, f.h7.VIDEO_INPUT].forEach(t => {
      (null == e ? true : e[t]) != null && this.frecenciesByDeviceType[t].overwriteHistory(e[t])
    }), Object.values(this.timersByDeviceType).forEach(e => e.reset())
  }
  reset() {
    Object.values(this.timersByDeviceType).forEach(e => e.reset()), this.currentCallUsage = {
      [Chunk65154.h7.AUDIO_INPUT]: {},
      [Chunk65154.h7.AUDIO_OUTPUT]: {},
      [Chunk65154.h7.VIDEO_INPUT]: {}
    }
  }
  track(e, t, n) {
    null == this.currentCallUsage[e][t] && (this.currentCallUsage[e][t] = 0), this.currentCallUsage[e][t] += n, this.frecenciesByDeviceType[e].track(t, {
      usesSinceLastTrack: n
    })
  }
  isSampling(e) {
    return this.timersByDeviceType[e].isRunning()
  }
  startSampling(e) {
    this.timersByDeviceType[e].start()
  }
  stopSampling(e, t) {
    let n = this.timersByDeviceType[e];
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
      [Chunk65154.h7.AUDIO_INPUT]: this.frecenciesByDeviceType[Chunk65154.h7.AUDIO_INPUT].usageHistory,
      [Chunk65154.h7.AUDIO_OUTPUT]: this.frecenciesByDeviceType[Chunk65154.h7.AUDIO_OUTPUT].usageHistory,
      [Chunk65154.h7.VIDEO_INPUT]: this.frecenciesByDeviceType[Chunk65154.h7.VIDEO_INPUT].usageHistory
    }
  }
  getDeviceIdsSortedByFrecency(e) {
    return this.frecenciesByDeviceType[e].frequently
  }
  getUsageStats() {
    let e = {
      [Chunk65154.h7.AUDIO_INPUT]: [],
      [Chunk65154.h7.AUDIO_OUTPUT]: [],
      [Chunk65154.h7.VIDEO_INPUT]: []
    };
    return [Chunk65154.h7.AUDIO_INPUT, Chunk65154.h7.AUDIO_OUTPUT].forEach(t => {
      this.isSampling(t) && (this.stopSampling(t), this.startSampling(t)), e[t] = Object.entries(this.currentCallUsage[t])
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
  constructor(...e) {
    super(...e), _(this, "timersByDeviceType", {
      [f.h7.AUDIO_INPUT]: new s.G9,
      [f.h7.AUDIO_OUTPUT]: new s.G9,
      [f.h7.VIDEO_INPUT]: new s.G9
    }), _(this, "currentCallUsage", {
      [f.h7.AUDIO_INPUT]: {},
      [f.h7.AUDIO_OUTPUT]: {},
      [f.h7.VIDEO_INPUT]: {}
    }), _(this, "frecenciesByDeviceType", {
      [f.h7.AUDIO_INPUT]: new c.Z(h),
      [f.h7.AUDIO_OUTPUT]: new c.Z(h),
      [f.h7.VIDEO_INPUT]: new c.Z(h)
    })
  }
}
_(b, "displayName", "DeviceFrecencyStore"), _(b, "persistKey", "DeviceFrecencyStore"), _(b, "migrations", [e => a().mapKeys(e, (e, t) => p[t])]);
let y = new b(Chunk570140.Z, {
    AUDIO_SET_INPUT_DEVICE: e => g(f.h7.AUDIO_INPUT, e),
    AUDIO_SET_OUTPUT_DEVICE: e => g(f.h7.AUDIO_OUTPUT, e),
    MEDIA_ENGINE_SET_VIDEO_DEVICE: e => g(f.h7.VIDEO_INPUT, e),
    SPEAKING: E
  }),
  O = y