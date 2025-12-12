/** Chunk was on web.js **/
/** chunk id: 361291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
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
let c = Chunk37113.ApplicationStreamPresets.PRESET_VIDEO,
  u = Chunk37113.ApplicationStreamResolutions.RESOLUTION_720,
  d = Chunk37113.ApplicationStreamFPS.FPS_30,
  f = true;

function p(e) {
  let {
    settings: t
  } = e;
  if ((null == t ? true : t.context) !== s.Yn.STREAM || (null == t ? true : t.qualityOptions) == null) returnfalse;
  let n = false;
  return c !== t.qualityOptions.preset && (c = t.qualityOptions.preset, n = true), u !== t.qualityOptions.resolution && (u = t.qualityOptions.resolution, n = true), d !== t.qualityOptions.frameRate && (d = t.qualityOptions.frameRate, n = true), n
}

function _(e) {
  let {
    preset: t,
    resolution: n,
    frameRate: r,
    soundshareEnabled: i
  } = e, o = false;
  return null != t && t !== c && (c = t, o = true), null != n && n !== u && (u = n, o = true), null != r && r !== d && (d = r, o = true), null != i && i !== f && (f = i, o = true), o
}
class m extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n;
      c = null != (t = e.preset) ? t : a.ApplicationStreamPresets.PRESET_VIDEO, u = e.resolution, d = e.fps, f = null == (n = e.soundshareEnabled) || n
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
l(m, "displayName", "ApplicationStreamingSettingsStore"), l(m, "persistKey", "ApplicationStreamingSettingStore");
let h = new m(Chunk570140.Z, {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: p,
  STREAM_UPDATE_SETTINGS: _
})