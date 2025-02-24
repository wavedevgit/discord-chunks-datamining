/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  hp: () => _,
  kr: () => p,
  u: () => c
}), n(47120), n(411104), n(26686);
var r = n(570140),
  i = n(710845),
  o = n(131951),
  a = n(626135),
  s = n(981631);
let l = new i.Z("AVError");
var c = function(e) {
  return e.STREAM_FAILED_TO_START = "stream-failed-to-start", e.NO_INPUT_DEVICES = "no-input-devices", e.NO_AUDIO_INPUT_DETECTED = "no-audio-input-detected", e.DEBUG_LOG_UPLOAD_FAILED = "debug-log-upload-failed", e
}({});
let u = {
  "stream-failed-to-start": {
    errorCode: 2001,
    severity: "critical",
    category: "video"
  },
  "no-input-devices": {
    errorCode: 3001,
    severity: "critical",
    category: "devices"
  },
  "no-audio-input-detected": {
    errorCode: 3002,
    severity: "critical",
    category: "devices"
  },
  "debug-log-upload-failed": {
    errorCode: 4001,
    severity: "info",
    category: "debug"
  }
};
var d = function(e) {
  return e.Unknown = "Unknown", e.UploadErrorGeneral = "UploadErrorCodes.GENERAL", e.UploadErrorNoFile = "UploadErrorCodes.NO_FILE", e.UploadErrorProgress = "UploadErrorCodes.PROGRESS", e.UploadErrorUpload = "UploadErrorCodes.UPLOAD", e.UploadErrorRead = "UploadErrorCodes.READ", e
}({});

function f(e, t) {
  let n = u[e],
    r = {
      error_name: e.valueOf(),
      error_code: n.errorCode,
      error_severity: n.severity,
      error_category: n.category,
      underlying_error: t.underlyingError,
      error_message: t.errorMessage,
      guild_id: t.guildId,
      channel_id: t.channelId,
      channel_type: t.channelType,
      rtc_connection_id: t.rtcConnectionId,
      media_session_id: t.mediaSessionId,
      context: t.mediaContext,
      hardware_enabled: o.Z.getHardwareEncoding()
    };
  a.default.track(s.rMx.AV_ERROR_REPORTED, r)
}

function p(e, t) {
  if (null != t.underlyingError && !Object.values(d).includes(t.underlyingError)) {
    l.error("Invalid underlying error string '".concat(t.underlyingError, "', must be member of AVUnderlyingError"));
    return
  }
  l.error("AV error reported: ".concat(e, " ").concat(JSON.stringify(t)));
  let n = u[e];
  r.Z.dispatch({
    type: "REPORT_AV_ERROR",
    error: e,
    errorCode: n.errorCode,
    severity: n.severity,
    category: n.category,
    context: t
  }), f(e, t)
}

function _(e) {
  return u[e]
}! function() {
  let e = Object.values(u).map(e => e.errorCode),
    t = new Set(e);
  if (e.length !== t.size) {
    let t = e.filter((t, n) => e.indexOf(t) !== n),
      n = Object.entries(u).filter(e => {
        let [n, r] = e;
        return t.includes(r.errorCode)
      }).map(e => {
        let [t, n] = e;
        return "".concat(t, ": ").concat(n.errorCode)
      });
    throw Error("Duplicate AV error codes found:\n".concat(n.join("\n")))
  }
}()