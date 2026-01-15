/** Chunk was on web.js **/
/** chunk id: 550643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./49124.js");
var Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk710845 = require("./710845.js"),
  Chunk199902 = require("./199902.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js"),
  Chunk458725 = require("./458725.js"),
  Chunk754142 = require("./754142.js"),
  Chunk915525 = require("./915525.js"),
  Chunk990291 = require("./990291.js");

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
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = new Chunk710845.Z("AVErrorManager");

function g(e, t) {
  let n = new Set;
  for (let r of e) t.has(r) || n.add(r);
  return n
}

function E(e) {
  return f.C[e.type]
}

function b(e) {
  let t = E(e);
  return "".concat(e.type, ":").concat(null == t ? true : t.makeErrorContextKey(e))
}
class y extends Chunk147913.Z {
  updateActiveErrors() {
    var e, t;
    if (__OVERLAY__) return;
    let n = null != (e = s.Z.getVoiceChannelId()) ? e : null,
      i = null != n && null != (t = l.Z.getVoiceStateForChannel(n)) ? t : null,
      a = o.Z.getAllActiveStreams(),
      u = new Map;
    for (let e of Object.values(f.C)) {
      let t = e.getActiveErrors({
        voiceChannelId: n,
        voiceState: i,
        activeStreams: a
      });
      if (null != t)
        for (let e of t) u.set(b(e), e)
    }
    let p = d.Z.getActiveErrors();
    if (!(p instanceof Map)) return void m.error("existingErrors is not a Map: ".concat(p, " type: ").concat(Object.prototype.toString.call(p)));
    if (0 === u.size && 0 === p.size) return;
    let h = new Set(u.keys()),
      E = new Set(p.keys());
    if (h.size > E.size)
      for (let e of g(h, E)) {
        let t = u.get(e);
        null != t && (0, c.kr)(t)
      }
    if (E.size > h.size)
      for (let e of g(E, h)) {
        let t = e,
          n = p.get(t);
        if (null != n) {
          let {
            type: e
          } = n, t = _(n, ["type"]);
          m.info("Error resolved: ".concat(e, " ").concat(JSON.stringify(t)))
        }
      }
    r.Z.dispatch({
      type: "ACTIVE_AV_ERRORS_CHANGED",
      activeErrors: u
    })
  }
  handleReportAVError(e) {
    let {
      error: t,
      context: n
    } = e;
    __OVERLAY__ || (0, u.b)(t, n)
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
let O = new y