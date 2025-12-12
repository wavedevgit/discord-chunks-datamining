/** Chunk was on web.js **/
/** chunk id: 474873, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk871465 = require("./871465.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {
  soundpack: Chunk871465.Y.CLASSIC,
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
class u extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (l = e, Object.values(o.Y).includes(l.soundpack) || (l.soundpack = o.Y.CLASSIC))
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
let d = new u(Chunk570140.Z, {
  SET_SOUNDPACK: c
})