/** Chunk was on web.js **/
/** chunk id: 929921, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk753070 = require("./753070.js"),
  Chunk731854 = require("./731854.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = Chunk753070.jQ.PRESET_VIDEO,
  u = Chunk753070.on.RESOLUTION_720,
  d = Chunk753070.kn.FPS_30,
  f = true;

function p(e) {
  let {
    settings: t
  } = e;
  if ((null == t ? true : t.context) !== o.x.STREAM || (null == t ? true : t.qualityOptions) == null) returnfalse;
  let n = false;
  return c !== t.qualityOptions.preset && (c = t.qualityOptions.preset, n = true), u !== t.qualityOptions.resolution && (u = t.qualityOptions.resolution, n = true), d !== t.qualityOptions.frameRate && (d = t.qualityOptions.frameRate, n = true), n
}

function _(e) {
  let {
    preset: t,
    resolution: n,
    frameRate: r,
    soundshareEnabled: i
  } = e, a = false;
  return null != t && t !== c && (c = t, a = true), null != n && n !== u && (u = n, a = true), null != r && r !== d && (d = r, a = true), null != i && i !== f && (f = i, a = true), a
}
class h extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n;
      c = null != (t = e.preset) ? t : s.jQ.PRESET_VIDEO, u = e.resolution, d = e.fps, f = null == (n = e.soundshareEnabled) || n
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
let m = new h(Chunk73153.h, {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: p,
  STREAM_UPDATE_SETTINGS: _
})