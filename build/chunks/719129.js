/** Chunk was on web.js **/
/** chunk id: 719129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GH: () => I,
  Zi: () => y,
  c1: () => S,
  r6: () => T
}), require("./65821.js");
var Chunk73153 = require("./73153.js"),
  Chunk386406 = require("./386406.js"),
  Chunk56562 = require("./56562.js"),
  Chunk15285 = require("./15285.js"),
  Chunk760751 = require("./760751.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk241696 = require("./241696.js"),
  Chunk652215 = require("./652215.js");

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

function y() {
  var e;
  return !(null === d.Ay || true === d.Ay || null == (e = d.Ay.isModuleVersionAtLeast) ? true : e.call(d.Ay, "discord_hook", E))
}
let b = null;
async function O() {
  if (!(0, u.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
  if (y()) return Promise.reject(Error("Hook module is too old"));
  await d.Ay.ensureModule("discord_hook");
  let e = await d.Ay.requireModule("discord_hook");
  return A(e), e
}
async function v() {
  return null != b ? b : b = await O()
}

function A(e) {
  if (null == e.setFlags) return;
  let t = 0,
    n = f.A.getCurrentConfig({
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
    let u = null == (l = o.Ay.getGameForPID(e)) ? true : l.name,
      d = s.A.getGameByName(u),
      f = null;
    return new Promise(s => {
      let l = (e, n) => {
          c.default.track(p.HAw.HOOK_RESULT, h({
            game_name: u,
            game_id: null == d ? null : d.id,
            success: n,
            error: e
          }, t)), null != f && (clearTimeout(f), f = null), n ? s() : s(e = null != e ? e : "Unknown hook error")
        },
        _ = o.Ay.getOverlayOptionsForPID(e),
        m = g(h({}, a.gH, _), {
          elevate: o.Ay.shouldElevateProcessForPID(e)
        });
      null == m.allowHook || m.allowHook ? (f = setTimeout(() => {
        n.cancelAttachToProcess(e), l("Timed out waiting for hook response", false)
      }, 12e4), n.attachToProcess(e, m, l), r.h.wait(() => i.A.clearElevatedProcess())) : s("Hook is disabled for this game")
    })
  })
}

function S(e) {
  return O().then(t => {
    t.cancelAttachToProcess(e)
  })
}

function T() {
  return v().then(e => null != e.findSteamProcess ? e.findSteamProcess() : null).catch(() => null)
}