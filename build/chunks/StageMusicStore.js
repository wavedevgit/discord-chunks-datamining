/** Chunk was on web.js **/
/** chunk id: 39938, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = false,
  l = false;

function c(e) {
  let {
    muted: t
  } = e;
  s = t, l = false
}

function u(e) {
  let {
    play: t
  } = e;
  l = t
}

function d() {
  l = false
}
class f extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    null != e && (s = e)
  }
  isMuted() {
    return s
  }
  shouldPlay() {
    return l
  }
  getUserAgnosticState() {
    return s
  }
}
o(f, "displayName", "StageMusicStore"), o(f, "persistKey", "StageMusicStore");
let p = new f(Chunk73153.h, {
  STAGE_MUSIC_MUTE: c,
  STAGE_MUSIC_PLAY: u,
  VOICE_CHANNEL_SELECT: d
})