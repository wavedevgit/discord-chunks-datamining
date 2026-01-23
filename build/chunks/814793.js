/** Chunk was on web.js **/
/** chunk id: 814793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $e: () => m,
  E0: () => g,
  Ll: () => E,
  _e: () => p,
  f0: () => b,
  pv: () => y,
  ui: () => f,
  vA: () => h
}), require("./896048.js");
var Chunk267548 = require("./267548.js"),
  Chunk731355 = require("./731355.js"),
  Chunk643501 = require("./643501.js"),
  Chunk279250 = require("./279250.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk977997 = require("./977997.js"),
  Chunk792620 = require("./792620.js"),
  Chunk654487 = require("./654487.js");

function f(e) {
  if (null == e) returnfalse;
  let t = (0, u.pU)(e);
  return null != t && t.length > 1
}

function p(e) {
  return (0, u.vS)(e) === d.ej
}

function _(e, t) {
  return new Set(e.config.features).has(t)
}

function h(e) {
  return ((0, u.Cr)(e) || (0, u.vl)(e)) && e.config.features.includes(d.Li.START_QUEST_CTA)
}

function m(e, t) {
  let n = new Map;
  for (let [r, i] of e)
    if (!(f(i) || _(i, d.Li.NON_GAMING_PLAY_QUEST))) {
      for (let e of (0, u.hL)(i))
        if (t.has(e)) {
          n.set(r, i);
          break
        }
    } return n
}

function g(e) {
  return e.sharePolicy !== r.i.NOT_SHAREABLE
}

function E(e, t) {
  return null != e && null != t && (0, s.eo)(t, c.A, o.A, l.A, a.default)[0]
}

function y(e) {
  return (0, u.vv)({
    config: e
  }) ? i.Z.VIDEO : i.Z.GAMEPLAY
}

function b(e, t) {
  return e.ctaQuests.some(e => e.questId === t)
}