/** Chunk was on web.js **/
/** chunk id: 829907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DH: () => P,
  H8: () => C,
  HD: () => f,
  O0: () => _,
  PD: () => R,
  P_: () => E,
  aW: () => p,
  hj: () => I,
  hs: () => m,
  qT: () => w,
  qc: () => T,
  sS: () => g
}), require("./388685.js"), require("./642613.js");
var Chunk593472 = require("./593472.js"),
  Chunk710845 = require("./710845.js"),
  Chunk594190 = require("./594190.js"),
  Chunk77498 = require("./77498.js"),
  Chunk998502 = require("./998502.js"),
  Chunk338388 = require("./338388.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js");
let d = new Chunk710845.Z("OverlayRenderUtils"),
  f = 5e3;

function p(e) {
  return (0, u.hS)(e).longTimeout
}

function _(e) {
  return (0, u.hS)(e).shortTimeout
}

function m(e) {
  let [t] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [o.ZP], n = t.getGameOrTransformedSubgameForPID(e);
  try {
    return null == n ? s.ZP.GetWindowFullscreenTypeByPid(e) : s.ZP.GetWindowFullscreenTypeByPid(n.pid, n.name, n.fullscreenType)
  } catch (t) {
    var i;
    return d.error("Error getting overlay fullscreen type for pid ".concat(e, ": ").concat(t)), (0, l.D1)(t, c.gl.OutOfProcess), null != (i = null == n ? true : n.fullscreenType) ? i : r.Jx.UNKNOWN
  }
}

function h(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
    [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.ZP];
  return new Promise(r => {
    setTimeout(() => {
      r(m(e, [n]))
    }, t)
  })
}

function g(e) {
  switch (e) {
    case r.Jx.BORDERLESS_FULLSCREEN:
      return "Borderless Fullscreen";
    case r.Jx.FULLSCREEN:
      return "Fullscreen";
    case r.Jx.WINDOWED:
      return "Windowed";
    case r.Jx.MINIMIZED:
      return "Minimized";
    case r.Jx.MAXIMIZED:
      return "Maximized";
    case r.Jx.UNKNOWN:
      return "Unknown"
  }
}

function E(e) {
  switch (e) {
    case c.gl.OutOfProcess:
      return "Out of Process";
    case c.gl.OutOfProcessLimitedInteraction:
      return "Out of Process (Limited Interaction)";
    case c.gl.Hook:
      return "Hook";
    case c.gl.Disabled:
      return "Disabled"
  }
}

function b(e, t) {
  let {
    quns: n
  } = s.ZP.GetWindowFullscreenTypeExtraByPid(e, t.name);
  return d.info("QUNS for ".concat(t.name, ": ").concat(n)), n === r.Ng.QUNS_RUNNING_D3D_FULL_SCREEN
}
let y = {
    "1314682894106497096": (e, t, n) => b(e, t) ? r.Jx.FULLSCREEN : n
  },
  O = new Set(["762434991303950386", "1402418239342120960", "1124351860376096858"]),
  v = 16,
  S = true;
async function I(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : v,
    r = await h(e, n),
    i = o.ZP.getGameOrTransformedSubgameForPID(e);
  if (null == i || null == i.name) return r;
  let s = null == (t = a.Z.getGameByName(i.name)) ? true : t.id;
  if (null == s) return r;
  let l = y[s];
  return null != l ? l(e, i, r) : r
}

function T(e) {
  var t;
  let n = null == (t = a.Z.getGameByName(e.name)) ? true : t.id;
  return null != n && O.has(n)
}

function C(e) {
  let t = o.ZP.getGameOrTransformedSubgameForPID(e);
  return null != t && null != t.name && T(t)
}
let A = new Set([Chunk593472.Jx.UNKNOWN, Chunk593472.Jx.FULLSCREEN]);

function N(e) {
  let t = Object.keys(e).map(Number).sort((e, t) => t - e);
  return 0 === t.length ? r.Jx.UNKNOWN : e[t.length > 1 ? t[1] : t[0]]
}

function P(e, t, n) {
  if (e.overlayMethod !== c.gl.OutOfProcess && e.overlayMethod !== c.gl.OutOfProcessLimitedInteraction) returnfalse;
  if (!n) returntrue;
  switch (t) {
    case r.Jx.UNKNOWN:
      return A.has(N(e.fullscreenHistory));
    case r.Jx.FULLSCREEN:
      returntrue
  }
  returnfalse
}

function R(e, t) {
  if (!t) returnfalse;
  switch (e) {
    case r.Jx.UNKNOWN:
    case r.Jx.MINIMIZED:
    case r.Jx.FULLSCREEN:
      returnfalse
  }
  returntrue
}

function w(e) {
  return null == e ? {
    source: c.d0.DEFAULT,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: c.gl.Disabled
  } : (0, o.b6)(e, S)
}