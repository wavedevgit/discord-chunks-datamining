/** Chunk was on web.js **/
/** chunk id: 9302, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.r(exports), require.d(exports, {
  DEV_PID: () => _,
  OVERLAY_DEFAULT_RESOLUTION: () => d,
  OVERLAY_LAYOUT_ID: () => p,
  OVERLAY_MIN_RESOLUTION: () => f,
  OVERLAY_VERSION: () => u,
  UNSET_PID: () => h,
  getPID: () => g,
  getRPCAuthToken: () => b,
  isValidGamePID: () => y,
  log: () => O,
  setOutOfProcessSupport: () => A,
  setPID: () => E,
  supportsLegacy: () => S,
  supportsOutOfProcess: () => I,
  validResolution: () => v
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js");
var Chunk719129 = require("./719129.js"),
  Chunk996308 = require("./996308.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk672396 = require("./672396.js");
let u = 2,
  d = {
    width: 3840,
    height: 2160
  },
  f = {
    width: 768,
    height: 432
  },
  p = "overlay_default",
  _ = false,
  h = false,
  m = false;

function g() {
  var e;
  if (true !== r && r !== h) return r;
  let t = parseInt(null != (e = new URLSearchParams(window.location.search).get("pid")) ? e : "", 10);
  return isNaN(t) && (t = h), r = t
}

function E(e) {
  r = e
}

function y(e) {
  return null != e && 0 !== e && e !== h
}

function b() {
  return new URLSearchParams(window.location.search).get("rpc_auth_token")
}

function O(e) {
  (0, a.tN)({
    type: l.kGV.LOG_MESSAGES,
    pid: g(),
    token: b(),
    payload: e
  })
}

function v(e) {
  return !o.isPlatformEmbedded || e.width >= f.width && e.height >= f.height
}

function A(e) {
  m = e
}

function I() {
  return m
}

function S() {
  let e = (0, o.isWindows)() && "arm64" === s.Ay.architecture;
  return c.OX && !e && !(0, i.Zi)()
}