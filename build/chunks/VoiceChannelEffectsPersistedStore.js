/** Chunk was on web.js **/
/** chunk id: 696900, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => d
});
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353368 = require("./353368.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = () => {
  r = r === s.q.BASIC ? s.q.PREMIUM : s.q.BASIC
};
class u extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    r = null != (t = null == e ? true : e.animationType) ? t : s.q.PREMIUM
  }
  getState() {
    return {
      animationType: r
    }
  }
}
l(u, "displayName", "VoiceChannelEffectsPersistedStore"), l(u, "persistKey", "VoiceChannelEffectsPersistedStore");
let d = new u(Chunk570140.Z, {
  VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: c
})