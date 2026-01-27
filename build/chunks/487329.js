/** Chunk was on web.js **/
/** chunk id: 487329, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B1: () => d,
  B6: () => c,
  QW: () => u,
  iy: () => s
}), require("./896048.js"), require("./65821.js"), require("./457529.js");
var Chunk73153 = require("./73153.js");

function i(e, t) {
  if (null == e) return {};
  var n, r, i, o = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    return o
  }
  if (o = a(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  return o
}

function a(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let o = new(require("./626584.js")).A("AVError");
var s = function(e) {
  return e.STREAM_FAILED_TO_START = "stream-failed-to-start", e.NO_INPUT_DEVICES = "no-input-devices", e.NO_AUDIO_INPUT_DETECTED = "no-audio-input-detected", e.DEBUG_LOG_UPLOAD_FAILED = "debug-log-upload-failed", e.STREAM_VIEW_LOW_FPS = "stream-view-low-fps", e.STREAM_VIEW_HIGH_PACKET_LOSS = "stream-view-high-packet-loss", e.STREAM_SEND_LOW_FPS = "stream-send-low-encode-fps", e.STREAM_SEND_HIGH_PACKET_LOSS = "stream-send-high-packet-loss", e.STREAM_BAD_NETWORK_QUALITY = "stream-send-network-quality", e.STREAM_SOUNDSHARE_FAILED = "stream-soundshare-failed", e.NOISE_CANCELLER_ERROR = "noise-canceller-error", e.SCREENSHARE_OS_NOT_SUPPORTED = "screenshare-min-os-requirement", e.STREAM_RECONNECTING = "stream-reconnecting", e.VIDEO_DECODE_ERROR = "video-decode-error", e.VIDEO_ENCODE_ERROR = "video-encode-error", e.STREAM_FULL = "stream-full", e.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH = "audio-capture-sample-rate-mismatch", e.VIDEO_STREAM_SENDER_READY_TIMEOUT = "video-stream-sender-ready-timeout", e.VIDEO_STREAM_RECEIVER_READY_TIMEOUT = "video-stream-receiver-ready-timeout", e.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM = "video-stream-sender-ready-timeout-no-stream", e.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM = "video-stream-receiver-ready-timeout-no-stream", e.CAMERA_SEND_LOW_FPS = "camera-send-low-encode-fps", e.SCREENSHARE_OS_ERROR = "screenshare-os-error", e
}({});
let l = {
  "stream-soundshare-failed": {
    errorCode: 1001,
    severity: "warning",
    category: "audio",
    isErrorOutbound: true
  },
  "noise-canceller-error": {
    errorCode: 1002,
    severity: "warning",
    category: "audio",
    isErrorOutbound: true
  },
  "audio-capture-sample-rate-mismatch": {
    errorCode: 1003,
    severity: "warning",
    category: "audio",
    isErrorOutbound: true
  },
  "stream-failed-to-start": {
    errorCode: 2001,
    severity: "critical",
    category: "video",
    isErrorOutbound: true
  },
  "stream-view-low-fps": {
    errorCode: 2002,
    severity: "warning",
    category: "video",
    isErrorOutbound: false
  },
  "stream-view-high-packet-loss": {
    errorCode: 2003,
    severity: "warning",
    category: "video",
    isErrorOutbound: false
  },
  "stream-send-high-packet-loss": {
    errorCode: 2004,
    severity: "warning",
    category: "video",
    isErrorOutbound: true
  },
  "stream-send-low-encode-fps": {
    errorCode: 2005,
    severity: "warning",
    category: "video",
    isErrorOutbound: true
  },
  "stream-send-network-quality": {
    errorCode: 2006,
    severity: "warning",
    category: "video",
    isErrorOutbound: true
  },
  "stream-reconnecting": {
    errorCode: 2007,
    severity: "warning",
    category: "video",
    isErrorOutbound: false
  },
  "video-decode-error": {
    errorCode: 2008,
    severity: "warning",
    category: "video",
    isErrorOutbound: false
  },
  "video-encode-error": {
    errorCode: 2009,
    severity: "warning",
    category: "video",
    isErrorOutbound: true
  },
  "stream-full": {
    errorCode: 2010,
    severity: "critical",
    category: "video",
    isErrorOutbound: false
  },
  "video-stream-sender-ready-timeout": {
    errorCode: 2011,
    severity: "critical",
    category: "video",
    isErrorOutbound: true
  },
  "video-stream-receiver-ready-timeout": {
    errorCode: 2012,
    severity: "critical",
    category: "video",
    isErrorOutbound: false
  },
  "camera-send-low-encode-fps": {
    errorCode: 2013,
    severity: "warning",
    category: "video",
    isErrorOutbound: true
  },
  "video-stream-sender-ready-timeout-no-stream": {
    errorCode: 2014,
    severity: "critical",
    category: "video",
    isErrorOutbound: true
  },
  "video-stream-receiver-ready-timeout-no-stream": {
    errorCode: 2015,
    severity: "critical",
    category: "video",
    isErrorOutbound: false
  },
  "no-input-devices": {
    errorCode: 3001,
    severity: "critical",
    category: "devices",
    isErrorOutbound: true
  },
  "no-audio-input-detected": {
    errorCode: 3002,
    severity: "critical",
    category: "devices",
    isErrorOutbound: true
  },
  "screenshare-min-os-requirement": {
    errorCode: 3003,
    severity: "critical",
    category: "devices",
    isErrorOutbound: true
  },
  "screenshare-os-error": {
    errorCode: 3004,
    severity: "critical",
    category: "devices",
    isErrorOutbound: true
  },
  "debug-log-upload-failed": {
    errorCode: 4001,
    severity: "info",
    category: "debug",
    isErrorOutbound: true
  }
};
var c = function(e) {
  return e.Unknown = "Unknown", e.UploadErrorGeneral = "UploadErrorCodes.GENERAL", e.UploadErrorNoFile = "UploadErrorCodes.NO_FILE", e.UploadErrorProgress = "UploadErrorCodes.PROGRESS", e.UploadErrorUpload = "UploadErrorCodes.UPLOAD", e.UploadErrorRead = "UploadErrorCodes.READ", e.NoiseCancellerCpuOveruse = "NoiseCancellerError.CPU_OVERUSE", e.NoiseCancellerFailed = "NoiseCancellerError.FAILED", e.NoiseCancellerVadCpuOveruse = "NoiseCancellerError.VAD_CPU_OVERUSE", e
}({});

function u(e) {
  let {
    type: t
  } = e, n = i(e, ["type"]);
  o.error("AV error reported: ".concat(t, " ").concat(JSON.stringify(n)));
  let a = l[t];
  r.h.dispatch({
    type: "REPORT_AV_ERROR",
    error: t,
    errorCode: a.errorCode,
    severity: a.severity,
    category: a.category,
    context: e
  })
}

function d(e) {
  return l[e]
}! function() {
  let e = Object.values(l).map(e => e.errorCode),
    t = new Set(e);
  if (e.length !== t.size) {
    let t = e.filter((t, n) => e.indexOf(t) !== n),
      n = Object.entries(l).filter(e => {
        let [n, r] = e;
        return t.includes(r.errorCode)
      }).map(e => {
        let [t, n] = e;
        return "".concat(t, ": ").concat(n.errorCode)
      });
    throw Error("Duplicate AV error codes found:\n".concat(n.join("\n")))
  }
}()