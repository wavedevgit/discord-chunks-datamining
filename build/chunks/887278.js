/** Chunk was on web.js **/
/** chunk id: 887278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $1: () => b,
  YT: () => I,
  pn: () => T,
  u2: () => C
}), require("./415506.js");
var Chunk570140 = require("./570140.js"),
  Chunk923928 = require("./923928.js"),
  Chunk593472 = require("./593472.js"),
  Chunk594190 = require("./594190.js"),
  Chunk404577 = require("./404577.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk789465 = require("./789465.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = {
  development: [0, 0, 0, 0],
  canary: [1, 0, 30, 10],
  ptb: [1, 0, 1005, 2],
  stable: [1, 0, 9001, 2]
};

function b() {
  var e;
  return !(null === d.ZP || true === d.ZP || null == (e = d.ZP.isModuleVersionAtLeast) ? true : e.call(d.ZP, "discord_hook", E))
}
let y = null;
async function O() {
  if (!(0, u.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
  if (b()) return Promise.reject(Error("Hook module is too old"));
  await d.ZP.ensureModule("discord_hook");
  let e = await d.ZP.requireModule("discord_hook");
  return S(e), e
}
async function v() {
  return null != y ? y : y = await O()
}

function S(e) {
  if (null == e.setFlags) return;
  let t = 0,
    n = f.Z.getCurrentConfig({
      location: "edd7d3_1"
    }, {
      autoTrackExposure: false
    });
  n.enableCrashReporting && (console.log("Hook: Enabling crash reporting."), t |= 1);
  let r = l.default.getCurrentUser();
  null != r && (r.isStaff() || n.enableCrashTrigger) && (console.log("Hook: Enabling crash trigger."), t |= 2), e.setFlags(t)
}

function I(e, t) {
  return O().then(n => {
    var l;
    let u = null == (l = o.ZP.getGameForPID(e)) ? true : l.name,
      d = s.Z.getGameByName(u),
      f = null;
    return new Promise(s => {
      let l = (e, n) => {
          c.default.track(p.rMx.HOOK_RESULT, h({
            game_name: u,
            game_id: null == d ? null : d.id,
            success: n,
            error: e
          }, t)), null != f && (clearTimeout(f), f = null), n ? s() : s(e = null != e ? e : "Unknown hook error")
        },
        _ = o.ZP.getOverlayOptionsForPID(e),
        m = g(h({}, a.r, _), {
          elevate: o.ZP.shouldElevateProcessForPID(e)
        });
      null == m.allowHook || m.allowHook ? (f = setTimeout(() => {
        n.cancelAttachToProcess(e), l("Timed out waiting for hook response", false)
      }, 12e4), n.attachToProcess(e, m, l), r.Z.wait(() => i.Z.clearElevatedProcess())) : s("Hook is disabled for this game")
    })
  })
}

function T(e) {
  return O().then(t => {
    t.cancelAttachToProcess(e)
  })
}

function C() {
  return v().then(e => null != e.findSteamProcess ? e.findSteamProcess() : null).catch(() => null)
}