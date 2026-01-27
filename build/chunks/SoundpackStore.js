/** Chunk was on web.js **/
/** chunk id: 312671, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk235079 = require("./235079.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {
  soundpack: Chunk235079.i.CLASSIC,
  lastSoundpackExperimentId: null
};

function c(e) {
  let {
    soundpack: t,
    forExperimentId: n
  } = e;
  l = {
    soundpack: t,
    lastSoundpackExperimentId: true !== n ? n : l.lastSoundpackExperimentId
  }
}
class u extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (l = e, Object.values(o.i).includes(l.soundpack) || (l.soundpack = o.i.CLASSIC))
  }
  getState() {
    return l
  }
  getSoundpack() {
    return l.soundpack
  }
  getLastSoundpackExperimentId() {
    return l.lastSoundpackExperimentId
  }
}
s(u, "displayName", "SoundpackStore"), s(u, "persistKey", "SoundpackStore");
let d = new u(Chunk73153.h, {
  SET_SOUNDPACK: c
})