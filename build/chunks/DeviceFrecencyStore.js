/** Chunk was on web.js **/
/** chunk id: 145016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk704907 = require("./704907.js"),
  Chunk131951 = require("./131951.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {
    afterCompute: () => {},
    computeBonus: () => 100,
    lookupKey: e => e,
    maxSamples: 256,
    numFrequentlyItems: 1 / 0
  },
  u = new Chunk704907.Z(c),
  d = new Chunk704907.Z(c),
  f = new Chunk704907.Z(c);

function _(e) {
  let {
    id: t
  } = e;
  u.track(t)
}

function p(e) {
  let {
    id: t
  } = e;
  d.track(t)
}

function h(e) {
  let {
    id: t
  } = e;
  f.track(t)
}
class m extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(s.Z), (null == e ? true : e.inputDeviceFrecency) != null && u.overwriteHistory(e.inputDeviceFrecency), (null == e ? true : e.outputDeviceFrecency) != null && d.overwriteHistory(e.outputDeviceFrecency), (null == e ? true : e.videoDeviceFrecency) != null && f.overwriteHistory(e.videoDeviceFrecency)
  }
  getState() {
    return {
      inputDeviceFrecency: u.usageHistory,
      outputDeviceFrecency: d.usageHistory,
      videoDeviceFrecency: f.usageHistory
    }
  }
  getInputDeviceIdsSortedByFrecency() {
    return u.frequently
  }
  getOutputDeviceIdsSortedByFrecency() {
    return d.frequently
  }
  getVideoDeviceIdsSortedByFrecency() {
    return f.frequently
  }
}
l(m, "displayName", "DeviceFrecencyStore"), l(m, "persistKey", "DeviceFrecencyStore");
let g = new m(Chunk570140.Z, {
  AUDIO_SET_INPUT_DEVICE: _,
  AUDIO_SET_OUTPUT_DEVICE: p,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: h
})