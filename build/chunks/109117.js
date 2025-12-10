/** Chunk was on web.js **/
/** chunk id: 109117, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S1: () => E
});
var Chunk268146 = require("./268146.js"),
  Chunk433517 = require("./433517.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk729345 = require("./729345.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let _ = window.DiscordNative,
  m = "".concat(Chunk981631.rMx.APP_NATIVE_CRASH, "Storage");

function h(e) {
  var t, n, r, i;
  return {
    did_crash: true,
    electron_crash_reporter_did_crash: true,
    child_process_crash_type: null != (n = null == (t = e.type) ? true : t.toLowerCase()) ? n : null,
    child_process_crash_reason: null != (r = e.reason) ? r : null,
    child_process_crash_exit_code: null != (i = e.exitCode) ? i : null
  }
}

function g(e, t) {
  let n = h(t);
  s.default.track(d.rMx.APP_NATIVE_CRASH, n)
}
async function E() {
  var e;
  if (__OVERLAY__) return;
  let t = null == _ || null == (e = _.processUtils) ? true : module.getLastCrash;
  if ((0, Chunk358085.isDesktop)() && Chunk998502.ZP.on("CRASH_REPORTER_NEW_CRASH", g), null == exports) return void console.log("AppCrashedFatalReport: getLastCrash not supported.");
  let n = await exports(),
    {
      didCrashReporterSeeCrash: r,
      didCrashOrUncleanExit: a
    } = b(Chunk433517.K.get(m, {}), require),
    o = O(Chunk268146, Chunk131951, require);
  Chunk626135.default.track(Chunk981631.rMx.APP_NATIVE_CRASH, Chunk594174), Chunk433517.K.set(m, {
    lastId: null == require ? true : require.id
  }), Chunk131951 && setTimeout(async () => await y(), 1e4)
}

function b(e, t) {
  var n;
  let r = (null == e ? true : e.lastId) !== (null == t ? true : t.id) && (null == t ? true : t.id) != null,
    i = null != (n = null == t ? true : t.rendererCrashExitCode) ? n : null,
    a = r || null != i && 0 !== i;
  return {
    didCrashReporterSeeCrash: r,
    didCrashOrUncleanExit: a
  }
}
async function y() {
  var e, t;
  if (null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports) try {
    await Chunk131951.Z.getMediaEngine().writeAudioDebugState(), await (0, Chunk729345.E)(Chunk981631.GU0.RTC), console.log("Successfully uploaded debug files")
  } catch (e) {
    console.log("Failed to upload debug files")
  }
}

function O(e, t, n) {
  var i, a, o, s, l, c, u, d, f, _, m, h, g, E, b, y, O, v, S;

  function I(e) {
    return (null == n ? true : n.storedInformation) != null && 1 === n.storedInformation[e]
  }

  function T(e) {
    return (null == n ? true : n.storedInformation) == null || null == n.storedInformation[e] ? null : n.storedInformation[e]
  }
  let C = {
    did_crash: t,
    renderer_crash_reason: null != (u = null == n ? true : n.rendererCrashReason) ? u : null,
    renderer_crash_exit_code: null != (d = null == n ? true : n.rendererCrashExitCode) ? d : null,
    child_process_crash_type: null,
    child_process_crash_reason: null,
    child_process_crash_exit_code: null,
    had_rtc_connection: I(r.X4.HasRTCConnection),
    was_sending_video: I(r.X4.IsSendingVideo),
    was_sending_stream: I(r.X4.IsSendingStream),
    was_receiving_video: I(r.X4.IsReceivingVideo),
    was_receiving_stream: I(r.X4.IsReceivingStream),
    video_media_session_id: T(r.X4.VideoMediaSessionId),
    stream_media_session_id: T(r.X4.StreamMediaSessionId),
    intentional_crash_reason: T(r.X4.IntentionalCrashReason),
    last_memory_usage_kb: null != (f = null == n || null == (i = n.lastMemoryInformation) ? true : i.memoryUsageKB) ? f : null,
    last_used_js_heap_size_kb: null != (_ = null == n || null == (a = n.lastMemoryInformation) ? true : a.usedJSHeapSizeKB) ? _ : null,
    last_memory_usage_uptime: null != (m = null == n || null == (o = n.lastMemoryInformation) ? true : o.uptimeSeconds) ? m : null,
    highest_memory_usage_kb: null != (h = null == n || null == (s = n.highestMemoryInformation) ? true : s.memoryUsageKB) ? h : null,
    highest_used_js_heap_size_kb: null != (g = null == n || null == (l = n.highestMemoryInformation) ? true : l.usedJSHeapSizeKB) ? g : null,
    highest_memory_usage_uptime: null != (E = null == n || null == (c = n.highestMemoryInformation) ? true : c.uptimeSeconds) ? E : null
  };
  if (!e || null == n) return p({
    electron_crash_reporter_did_crash: false,
    minidump_exception_type: null,
    minidump_exception_module_name: null,
    minidump_relative_crash_address: null,
    minidump_exception_module_version: null,
    minidump_exception_module_code_id: null
  }, C);
  console.log("AppCrashedFatalReport lastCrash:", n, e);
  let A = null == n ? true : n.minidumpInformation;
  return p({
    electron_crash_reporter_did_crash: e,
    minidump_exception_type: null != (b = null == A ? true : A.exceptionString) ? b : null,
    minidump_exception_module_name: null != (y = null == A ? true : A.exceptionModuleName) ? y : null,
    minidump_relative_crash_address: null != (O = null == A ? true : A.relativeCrashAddress) ? O : null,
    minidump_exception_module_version: null != (v = null == A ? true : A.exceptionModuleVersion) ? v : null,
    minidump_exception_module_code_id: null != (S = null == A ? true : A.exceptionModuleCodeId) ? S : null
  }, C)
}