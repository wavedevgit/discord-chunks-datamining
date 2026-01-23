/** Chunk was on web.js **/
/** chunk id: 734432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./457529.js");
var Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk626584 = require("./626584.js"),
  Chunk616356 = require("./616356.js"),
  Chunk309010 = require("./309010.js"),
  Chunk977997 = require("./977997.js"),
  Chunk487329 = require("./487329.js"),
  Chunk374473 = require("./374473.js"),
  Chunk161518 = require("./161518.js"),
  Chunk734867 = require("./734867.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let m = new Chunk626584.A("AVErrorManager");

function g(e, t) {
  let n = new Set;
  for (let r of e) t.has(r) || n.add(r);
  return n
}

function E(e) {
  return f.J[e.type]
}

function y(e) {
  let t = E(e);
  return "".concat(e.type, ":").concat(null == t ? true : t.makeErrorContextKey(e))
}
class b extends Chunk439372.A {
  updateActiveErrors() {
    var e, t;
    if (__OVERLAY__) return;
    let n = null != (e = o.A.getVoiceChannelId()) ? e : null,
      i = null != n && null != (t = l.A.getVoiceStateForChannel(n)) ? t : null,
      a = s.A.getAllActiveStreams(),
      u = new Map;
    for (let e of Object.values(f.J)) {
      let t = e.getActiveErrors({
        voiceChannelId: n,
        voiceState: i,
        activeStreams: a
      });
      if (null != t)
        for (let e of t) u.set(y(e), e)
    }
    let p = d.A.getActiveErrors();
    if (!(p instanceof Map)) return void m.error("existingErrors is not a Map: ".concat(p, " type: ").concat(Object.prototype.toString.call(p)));
    if (0 === u.size && 0 === p.size) return;
    let h = new Set(u.keys()),
      E = new Set(p.keys());
    if (h.size > E.size)
      for (let e of g(h, E)) {
        let t = u.get(e);
        null != t && (0, c.QW)(t)
      }
    if (E.size > h.size)
      for (let e of g(E, h)) {
        let t = p.get(e);
        if (null != t) {
          let {
            type: e
          } = t, n = _(t, ["type"]);
          m.info("Error resolved: ".concat(e, " ").concat(JSON.stringify(n)))
        }
      }
    r.h.dispatch({
      type: "ACTIVE_AV_ERRORS_CHANGED",
      activeErrors: u
    })
  }
  handleReportAVError(e) {
    let {
      error: t,
      context: n
    } = e;
    __OVERLAY__ || (0, u.q)(t, n)
  }
  constructor(...e) {
    super(...e), p(this, "actions", {
      MEDIA_ENGINE_SET_AUDIO_ENABLED: this.updateActiveErrors,
      AUDIO_INPUT_DETECTED: this.updateActiveErrors,
      AUDIO_SET_DISPLAY_SILENCE_WARNING: this.updateActiveErrors,
      CERTIFIED_DEVICES_SET: this.updateActiveErrors,
      AUDIO_SET_INPUT_DEVICE: this.updateActiveErrors,
      AUDIO_SET_OUTPUT_DEVICE: this.updateActiveErrors,
      MEDIA_ENGINE_DEVICES: this.updateActiveErrors,
      RTC_CONNECTION_STATE: this.updateActiveErrors,
      VOICE_STATE_UPDATES: this.updateActiveErrors,
      MEDIA_ENGINE_SET_GO_LIVE_SOURCE: this.updateActiveErrors,
      MEDIA_ENGINE_SOUNDSHARE_FAILED: this.updateActiveErrors,
      MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: this.updateActiveErrors,
      MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: this.updateActiveErrors,
      MEDIA_ENGINE_VIDEO_STATE_CHANGED: this.updateActiveErrors,
      NATIVE_SCREEN_SHARE_PICKER_UPDATE: this.updateActiveErrors,
      NATIVE_SCREEN_SHARE_PICKER_ERROR: this.updateActiveErrors,
      MEDIA_SESSION_JOINED: this.updateActiveErrors,
      RTC_CONNECTION_UPDATE_ID: this.updateActiveErrors,
      RTC_CONNECTION_VIDEO: this.updateActiveErrors,
      RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: this.updateActiveErrors,
      VIDEO_STREAM_READY_TIMEOUT: this.updateActiveErrors,
      CLEAR_VIDEO_STREAM_READY_TIMEOUT: this.updateActiveErrors,
      REPORT_AV_ERROR: this.handleReportAVError,
      STREAM_CLOSE: this.updateActiveErrors
    })
  }
}
let O = new b