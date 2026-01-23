/** Chunk was on web.js **/
/** chunk id: 824029, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ts: () => E
});
var Chunk141931 = require("./141931.js"),
  Chunk506774 = require("./506774.js"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk98919 = require("./98919.js"),
  Chunk652215 = require("./652215.js");

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
  h = "".concat(Chunk652215.HAw.APP_NATIVE_CRASH, "Storage");

function m(e) {
  var t, n, r, i;
  return {
    did_crash: true,
    electron_crash_reporter_did_crash: true,
    child_process_crash_type: null != (t = null == (i = e.type) ? true : i.toLowerCase()) ? t : null,
    child_process_crash_reason: null != (n = e.reason) ? n : null,
    child_process_crash_exit_code: null != (r = e.exitCode) ? r : null
  }
}

function g(e, t) {
  let n = m(t);
  o.default.track(d.HAw.APP_NATIVE_CRASH, n)
}
async function E() {
  var e;
  if (__OVERLAY__) return;
  let t = null == _ || null == (e = _.processUtils) ? true : e.getLastCrash;
  if ((0, l.isDesktop)() && c.Ay.on("CRASH_REPORTER_NEW_CRASH", g), null == t) return void console.log("AppCrashedFatalReport: getLastCrash not supported.");
  let n = await t(),
    {
      didCrashReporterSeeCrash: r,
      didCrashOrUncleanExit: a
    } = y(i.w.get(h, {}), n),
    s = O(r, a, n);
  o.default.track(d.HAw.APP_NATIVE_CRASH, s), i.w.set(h, {
    lastId: null == n ? true : n.id
  }), a && setTimeout(async () => await b(), 1e4)
}

function y(e, t) {
  var n;
  let r = (null == e ? true : e.lastId) !== (null == t ? true : t.id) && (null == t ? true : t.id) != null,
    i = null != (n = null == t ? true : t.rendererCrashExitCode) ? n : null,
    a = r || null != i && 0 !== i;
  return {
    didCrashReporterSeeCrash: r,
    didCrashOrUncleanExit: a
  }
}
async function b() {
  var e, t;
  if (null != (e = null == (t = s.default.getCurrentUser()) ? true : t.isStaff()) && e) try {
    await a.A.getMediaEngine().writeAudioDebugState(), await (0, u.a)(d.Umv.RTC), console.log("Successfully uploaded debug files")
  } catch (e) {
    console.log("Failed to upload debug files")
  }
}

function O(e, t, n) {
  var i, a, s, o, l, c, u, d, f, _, h, m, g, E, y, b, O, v, A;

  function I(e) {
    return (null == n ? true : n.storedInformation) != null && 1 === n.storedInformation[e]
  }

  function S(e) {
    return (null == n ? true : n.storedInformation) == null || null == n.storedInformation[e] ? null : n.storedInformation[e]
  }
  let T = {
    did_crash: t,
    renderer_crash_reason: null != (i = null == n ? true : n.rendererCrashReason) ? i : null,
    renderer_crash_exit_code: null != (a = null == n ? true : n.rendererCrashExitCode) ? a : null,
    child_process_crash_type: null,
    child_process_crash_reason: null,
    child_process_crash_exit_code: null,
    had_rtc_connection: I(r.du.HasRTCConnection),
    was_sending_video: I(r.du.IsSendingVideo),
    was_sending_stream: I(r.du.IsSendingStream),
    was_receiving_video: I(r.du.IsReceivingVideo),
    was_receiving_stream: I(r.du.IsReceivingStream),
    video_media_session_id: S(r.du.VideoMediaSessionId),
    stream_media_session_id: S(r.du.StreamMediaSessionId),
    intentional_crash_reason: S(r.du.IntentionalCrashReason),
    last_memory_usage_kb: null != (s = null == n || null == (E = n.lastMemoryInformation) ? true : E.memoryUsageKB) ? s : null,
    last_used_js_heap_size_kb: null != (o = null == n || null == (y = n.lastMemoryInformation) ? true : y.usedJSHeapSizeKB) ? o : null,
    last_memory_usage_uptime: null != (l = null == n || null == (b = n.lastMemoryInformation) ? true : b.uptimeSeconds) ? l : null,
    highest_memory_usage_kb: null != (c = null == n || null == (O = n.highestMemoryInformation) ? true : O.memoryUsageKB) ? c : null,
    highest_used_js_heap_size_kb: null != (u = null == n || null == (v = n.highestMemoryInformation) ? true : v.usedJSHeapSizeKB) ? u : null,
    highest_memory_usage_uptime: null != (d = null == n || null == (A = n.highestMemoryInformation) ? true : A.uptimeSeconds) ? d : null
  };
  if (!e || null == n) return p({
    electron_crash_reporter_did_crash: false,
    minidump_exception_type: null,
    minidump_exception_module_name: null,
    minidump_relative_crash_address: null,
    minidump_exception_module_version: null,
    minidump_exception_module_code_id: null
  }, T);
  console.log("AppCrashedFatalReport lastCrash:", n, e);
  let C = null == n ? true : n.minidumpInformation;
  return p({
    electron_crash_reporter_did_crash: e,
    minidump_exception_type: null != (f = null == C ? true : C.exceptionString) ? f : null,
    minidump_exception_module_name: null != (_ = null == C ? true : C.exceptionModuleName) ? _ : null,
    minidump_relative_crash_address: null != (h = null == C ? true : C.relativeCrashAddress) ? h : null,
    minidump_exception_module_version: null != (m = null == C ? true : C.exceptionModuleVersion) ? m : null,
    minidump_exception_module_code_id: null != (g = null == C ? true : C.exceptionModuleCodeId) ? g : null
  }, T)
}