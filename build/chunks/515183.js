/** Chunk was on web.js **/
/** chunk id: 515183, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ag: () => _,
  E1: () => S,
  O4: () => P,
  T$: () => f,
  Zj: () => R,
  e3: () => w,
  gK: () => E,
  mk: () => p,
  ph: () => h,
  qJ: () => T,
  wR: () => g,
  zi: () => I
}), require("./896048.js"), require("./638769.js");
var Chunk56562 = require("./56562.js"),
  Chunk626584 = require("./626584.js"),
  Chunk15285 = require("./15285.js"),
  Chunk760751 = require("./760751.js"),
  Chunk837921 = require("./837921.js"),
  Chunk777334 = require("./777334.js"),
  Chunk41984 = require("./41984.js"),
  Chunk589051 = require("./589051.js");
let d = new Chunk626584.A("OverlayRenderUtils"),
  f = 5e3;

function p(e) {
  return (0, u.Yz)(e).longTimeout
}

function _(e) {
  return (0, u.Yz)(e).shortTimeout
}

function h(e) {
  let [t] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.Ay], n = t.getGameOrTransformedSubgameForPID(e);
  try {
    return null == n ? o.Ay.GetWindowFullscreenTypeByPid(e) : o.Ay.GetWindowFullscreenTypeByPid(n.pid, n.name, n.fullscreenType)
  } catch (t) {
    var i;
    return d.error("Error getting overlay fullscreen type for pid ".concat(e, ": ").concat(t)), (0, l.pj)(t, c.Ue.OutOfProcess), null != (i = null == n ? true : n.fullscreenType) ? i : r.aI.UNKNOWN
  }
}

function m(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
    [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [a.Ay];
  return new Promise(r => {
    setTimeout(() => {
      r(h(e, [n]))
    }, t)
  })
}

function g(e) {
  switch (e) {
    case r.aI.BORDERLESS_FULLSCREEN:
      return "Borderless Fullscreen";
    case r.aI.FULLSCREEN:
      return "Fullscreen";
    case r.aI.WINDOWED:
      return "Windowed";
    case r.aI.MINIMIZED:
      return "Minimized";
    case r.aI.MAXIMIZED:
      return "Maximized";
    case r.aI.UNKNOWN:
      return "Unknown"
  }
}

function E(e) {
  switch (e) {
    case c.Ue.OutOfProcess:
      return "Out of Process";
    case c.Ue.OutOfProcessLimitedInteraction:
      return "Out of Process (Limited Interaction)";
    case c.Ue.Hook:
      return "Hook";
    case c.Ue.Disabled:
      return "Disabled"
  }
}

function b(e, t) {
  let {
    quns: n
  } = o.Ay.GetWindowFullscreenTypeExtraByPid(e, t.name);
  return d.info("QUNS for ".concat(t.name, ": ").concat(n)), n === r.YL.QUNS_RUNNING_D3D_FULL_SCREEN
}
let y = {
    "1314682894106497096": (e, t, n) => b(e, t) ? r.aI.FULLSCREEN : n
  },
  O = new Set(["762434991303950386", "1402418239342120960", "1124351860376096858"]),
  A = 16,
  v = true;
async function S(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : A,
    r = await m(e, n),
    i = a.Ay.getGameOrTransformedSubgameForPID(e);
  if (null == i || null == i.name) return r;
  let o = null == (t = s.A.getGameByName(i.name)) ? true : t.id;
  if (null == o) return r;
  let l = y[o];
  return null != l ? l(e, i, r) : r
}

function I(e) {
  var t;
  let n = null == (t = s.A.getGameByName(e.name)) ? true : t.id;
  return null != n && O.has(n)
}

function T(e) {
  let t = a.Ay.getGameOrTransformedSubgameForPID(e);
  return null != t && null != t.name && I(t)
}
let C = new Set([Chunk56562.aI.UNKNOWN, Chunk56562.aI.FULLSCREEN]);

function N(e) {
  let t = Object.keys(e).map(Number).sort((e, t) => t - e);
  return 0 === t.length ? r.aI.UNKNOWN : e[t.length > 1 ? t[1] : t[0]]
}

function R(e, t, n) {
  if (e.overlayMethod !== c.Ue.OutOfProcess && e.overlayMethod !== c.Ue.OutOfProcessLimitedInteraction) returnfalse;
  if (!n) returntrue;
  switch (t) {
    case r.aI.UNKNOWN:
      return C.has(N(e.fullscreenHistory));
    case r.aI.FULLSCREEN:
      returntrue
  }
  returnfalse
}

function w(e, t) {
  if (!t) returnfalse;
  switch (e) {
    case r.aI.UNKNOWN:
    case r.aI.MINIMIZED:
    case r.aI.FULLSCREEN:
      returnfalse
  }
  returntrue
}

function P(e) {
  return null == e ? {
    source: c.yp.DEFAULT,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: c.Ue.Disabled
  } : (0, a.hw)(e, v)
}