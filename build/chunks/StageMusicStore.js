/** Chunk was on web.js **/
/** chunk id: 754277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
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
class f extends(r = Chunk442837.ZP.DeviceSettingsStore) {
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
a(f, "displayName", "StageMusicStore"), a(f, "persistKey", "StageMusicStore");
let p = new f(Chunk570140.Z, {
  STAGE_MUSIC_MUTE: c,
  STAGE_MUSIC_PLAY: u,
  VOICE_CHANNEL_SELECT: d
})