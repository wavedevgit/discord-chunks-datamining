/** Chunk was on web.js **/
/** chunk id: 283689, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BI: () => b,
  KM: () => p,
  NI: () => m,
  P9: () => y,
  Pb: () => f,
  Rc: () => E,
  Rt: () => h,
  VB: () => g
}), require("./388685.js");
var Chunk820827 = require("./820827.js"),
  Chunk319245 = require("./319245.js"),
  Chunk258609 = require("./258609.js"),
  Chunk102172 = require("./102172.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk254579 = require("./254579.js"),
  Chunk324805 = require("./324805.js");

function f(e) {
  if (null == e) returnfalse;
  let t = (0, u.vj)(e);
  return null != t && t.length > 1
}

function p(e) {
  return (0, u.Mo)(e) === d.Ts
}

function _(e, t) {
  return new Set(e.config.features).has(t)
}

function h(e) {
  return ((0, u.Vl)(e) || (0, u.pO)(e)) && e.config.features.includes(d.S7.START_QUEST_CTA)
}

function m(e, t) {
  let n = new Map;
  for (let [r, i] of e)
    if (!(f(i) || _(i, d.S7.NON_GAMING_PLAY_QUEST))) {
      for (let e of (0, u.ge)(i))
        if (t.has(e)) {
          n.set(r, i);
          break
        }
    } return n
}

function g(e) {
  return e.sharePolicy !== r.X.NOT_SHAREABLE
}

function E(e, t) {
  return null != e && null != t && (0, o.p9)(t, c.Z, s.Z, l.Z, a.default)[0]
}

function b(e) {
  return (0, u.q8)({
    config: e
  }) ? i.W.VIDEO : i.W.GAMEPLAY
}

function y(e, t) {
  return e.ctaQuests.some(e => e.questId === t)
}