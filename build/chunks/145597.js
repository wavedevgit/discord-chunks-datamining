/** Chunk was on web.js **/
/** chunk id: 145597, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.r(exports), require.d(exports, {
  DEV_PID: () => _,
  OVERLAY_DEFAULT_RESOLUTION: () => d,
  OVERLAY_LAYOUT_ID: () => p,
  OVERLAY_MIN_RESOLUTION: () => f,
  OVERLAY_VERSION: () => u,
  UNSET_PID: () => m,
  getPID: () => g,
  getRPCAuthToken: () => y,
  isValidGamePID: () => b,
  log: () => O,
  setOutOfProcessSupport: () => S,
  setPID: () => E,
  supportsLegacy: () => T,
  supportsOutOfProcess: () => I,
  validResolution: () => v
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js");
var Chunk887278 = require("./887278.js"),
  Chunk490029 = require("./490029.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk987650 = require("./987650.js");
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
  m = false,
  h = false;

function g() {
  var e;
  if (true !== r && r !== m) return r;
  let t = parseInt(null != (e = new URLSearchParams(window.location.search).get("pid")) ? module : "", 10);
  return isNaN(exports) && (t = m), r = exports
}

function E(e) {
  r = e
}

function b(e) {
  return null != e && 0 !== e && e !== m
}

function y() {
  return new URLSearchParams(window.location.search).get("rpc_auth_token")
}

function O(e) {
  (0, a.lW)({
    type: l.BmY.LOG_MESSAGES,
    pid: g(),
    token: y(),
    payload: e
  })
}

function v(e) {
  return !o.isPlatformEmbedded || e.width >= f.width && e.height >= f.height
}

function S(e) {
  h = e
}

function I() {
  return h
}

function T() {
  let e = (0, Chunk358085.isWindows)() && "arm64" === Chunk998502.ZP.architecture;
  return Chunk987650.iP && !module && !(0, Chunk887278.$1)()
}