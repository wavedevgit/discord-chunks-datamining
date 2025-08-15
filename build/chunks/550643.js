/** Chunk was on web.js **/
/** chunk id: 550643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js"), require("./49124.js");
var Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk710845 = require("./710845.js"),
  Chunk199902 = require("./199902.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js"),
  Chunk458725 = require("./458725.js"),
  Chunk754142 = require("./754142.js"),
  Chunk386146 = require("./386146.js"),
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

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = new Chunk710845.Z("AVErrorManager");

function E(e, t) {
  let n = new Set;
  for (let r of e) t.has(r) || n.add(r);
  return n
}

function b(e) {
  return _.C[e.type]
}

function y(e) {
  let t = b(e);
  return "".concat(e.type, ":").concat(null == t ? true : t.makeErrorContextKey(e))
}
class O extends Chunk147913.Z {
  _initialize() {
    (0, Chunk386146.H3)("AVErrorManager")
  }
  updateActiveErrors() {
    var e, t;
    if (__OVERLAY__) return;
    let n = null != (e = Chunk944486.Z.getVoiceChannelId()) ? module : null,
      i = null != require && null != (t = Chunk979651.Z.getVoiceStateForChannel(require)) ? exports : null,
      a = Chunk199902.Z.getAllActiveStreams(),
      u = new Map;
    for (let e of Object.values(Chunk990291.C)) {
      let t = module.getActiveErrors({
        voiceChannelId: require,
        voiceState: Chunk147913,
        activeStreams: Chunk710845
      });
      if (null != exports)
        for (let e of exports) Chunk754142.set(y(module), module)
    }
    let d = Chunk915525.Z.getActiveErrors();
    if (!(Chunk386146 instanceof Map)) return void g.error("existingErrors is not a Map: ".concat(Chunk386146, " type: ").concat(Object.prototype.toString.call(Chunk386146)));
    if (0 === Chunk754142.size && 0 === Chunk386146.size) return;
    let p = new Set(Chunk754142.keys()),
      m = new Set(Chunk386146.keys());
    if (p.size > m.size)
      for (let e of E(p, m)) {
        let t = Chunk754142.get(module);
        null != exports && (0, Chunk458725.kr)(exports)
      }
    if (m.size > p.size)
      for (let e of E(m, p)) {
        let t = module,
          n = Chunk386146.get(exports);
        if (null != require) {
          let {
            type: e
          } = require, t = h(require, ["type"]);
          g.info("Error resolved: ".concat(module, " ").concat(JSON.stringify(exports)))
        }
      }
    Chunk570140.Z.dispatch({
      type: "ACTIVE_AV_ERRORS_CHANGED",
      activeErrors: Chunk754142
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
let v = new O