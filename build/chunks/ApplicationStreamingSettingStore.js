/** Chunk was on web.js **/
/** chunk id: 361291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk37113 = require("./37113.js"),
  Chunk65154 = require("./65154.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = Chunk37113.tI.PRESET_VIDEO,
  u = Chunk37113.LY.RESOLUTION_720,
  d = Chunk37113.ws.FPS_30,
  f = true;

function _(e) {
  let {
    settings: t
  } = e;
  if ((null == t ? true : t.context) === s.Yn.STREAM) {
    if ((null == t ? true : t.qualityOptions) == null || (null == t ? true : t.qualityOptions.resolution) == null || (null == t ? true : t.qualityOptions.frameRate) == null) returnfalse;
    u = t.qualityOptions.resolution, d = t.qualityOptions.frameRate
  }
}

function p(e) {
  let {
    preset: t,
    resolution: n,
    frameRate: r,
    soundshareEnabled: i
  } = e, a = false;
  return null != t && (c = t, a = true), null != n && (u = n, a = true), null != r && (d = r, a = true), null != i && (f = i, a = true), a
}
class h extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n;
      c = null != (t = e.preset) ? t : o.tI.PRESET_VIDEO, u = e.resolution, d = e.fps, f = null == (n = e.soundshareEnabled) || n
    }
  }
  getState() {
    return {
      preset: c,
      resolution: u,
      fps: d,
      soundshareEnabled: f
    }
  }
}
l(h, "displayName", "ApplicationStreamingSettingsStore"), l(h, "persistKey", "ApplicationStreamingSettingStore");
let m = new h(Chunk570140.Z, {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: _,
  STREAM_UPDATE_SETTINGS: p
})