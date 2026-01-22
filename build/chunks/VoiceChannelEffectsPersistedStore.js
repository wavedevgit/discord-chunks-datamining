/** Chunk was on web.js **/
/** chunk id: 319191, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => d
});
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk194486 = require("./194486.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = () => {
  r = r === o.B.BASIC ? o.B.PREMIUM : o.B.BASIC
};
class u extends(i = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    r = null != (t = null == e ? true : e.animationType) ? t : o.B.PREMIUM
  }
  getState() {
    return {
      animationType: r
    }
  }
}
l(u, "displayName", "VoiceChannelEffectsPersistedStore"), l(u, "persistKey", "VoiceChannelEffectsPersistedStore");
let d = new u(Chunk73153.h, {
  VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: c
})