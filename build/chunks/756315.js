/** Chunk was on web.js **/
/** chunk id: 756315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk379649 = require("./379649.js"),
  Chunk846519 = require("./846519.js"),
  Chunk361291 = require("./361291.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = 1e3;

function f(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
  return null != e ? Math.round(e) : t
}
class p {
  start() {
    let {
      resolution: e,
      fps: t
    } = Chunk361291.Z.getState();
    this._targetResolution = module, this._targetFPS = exports, this._statInterval.start(d, this._sampleStats), this._lastLayoutChanged = (0, Chunk379649.zO)()
  }
  stop() {
    this._statInterval.stop(), this._streamEnd = (0, Chunk379649.zO)(), this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1e3)
  }
  autoQualityChange() {
    this._automaticQualityChanges += 1
  }
  layoutChange(e) {
    if (e === this._lastLayout || null != this._streamEnd) return;
    let t = (0, r.zO)();
    this._incrementLayout(this._lastLayout, (t - this._lastLayoutChanged) / 1e3), this._layoutChanges++, this._lastLayout = e, this._lastLayoutChanged = t
  }
  getLayout() {
    return this._lastLayout
  }
  getStats() {
    let e = {
      num_layout_changes: this._layoutChanges,
      duration_layout_fullscreen: f(this._layoutBuckets[Chunk981631.hVg.FULL_SCREEN]),
      duration_layout_theatre: f(this._layoutBuckets[Chunk981631.hVg.THEATRE]),
      duration_layout_pip: f(this._layoutBuckets[Chunk981631.hVg.PIP]),
      duration_layout_popout: f(this._layoutBuckets[Chunk981631.hVg.POPOUT]),
      duration_layout_portrait: f(this._layoutBuckets[Chunk981631.hVg.PORTRAIT]),
      duration_layout_landscape: f(this._layoutBuckets[Chunk981631.hVg.LANDSCAPE]),
      duration_layout_minimized: f(this._layoutBuckets[Chunk981631.hVg.MINIMIZED])
    };
    return this._isSender ? u(l({}, module), {
      target_fps: this._targetFPS,
      target_resolution_height: this._targetResolution,
      stream_settings_changed: this._streamSettingsChanged,
      num_auto_quality_changes: this._automaticQualityChanges
    }) : module
  }
  constructor(e, t) {
    s(this, "_statInterval", true), s(this, "_isSender", true), s(this, "_streamEnd", true), s(this, "_targetResolution", 0), s(this, "_targetFPS", 0), s(this, "_streamSettingsChanged", false), s(this, "_lastLayout", true), s(this, "_lastLayoutChanged", 0), s(this, "_layoutChanges", 0), s(this, "_layoutBuckets", true), s(this, "_automaticQualityChanges", 0), s(this, "_incrementLayout", (e, t) => {
      null == this._layoutBuckets[e] && (this._layoutBuckets[e] = 0), this._layoutBuckets[e] += t
    }), s(this, "_sampleStats", () => {
      let {
        resolution: e,
        fps: t
      } = o.Z.getState();
      this._streamSettingsChanged = e !== this._targetResolution || t !== this._targetFPS
    }), this._isSender = t, this._statInterval = new i.Xp, this._lastLayout = e, this._layoutBuckets = {}
  }
}