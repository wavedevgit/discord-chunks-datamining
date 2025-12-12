/** Chunk was on web.js **/
/** chunk id: 283689, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BI: () => y,
  KM: () => _,
  NI: () => g,
  P9: () => O,
  Pb: () => p,
  Rc: () => b,
  Rt: () => h,
  VB: () => E
}), require("./388685.js");
var Chunk820827 = require("./820827.js"),
  Chunk319245 = require("./319245.js"),
  Chunk258609 = require("./258609.js"),
  Chunk102172 = require("./102172.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk937797 = require("./937797.js"),
  Chunk254579 = require("./254579.js"),
  Chunk324805 = require("./324805.js");

function p(e) {
  if (!(0, u.CD)("QuestUtils") || null == e) returnfalse;
  let t = (0, d.vj)(e);
  return null != t && t.length > 1
}

function _(e) {
  return (0, d.Mo)(e) === f.Ts
}

function m(e, t) {
  return new Set(e.config.features).has(t)
}

function h(e) {
  return ((0, d.Vl)(e) || (0, d.pO)(e)) && e.config.features.includes(f.S7.START_QUEST_CTA)
}

function g(e, t) {
  let n = new Map;
  for (let [r, i] of e)
    if (!(p(i) || m(i, f.S7.NON_GAMING_PLAY_QUEST))) {
      for (let e of (0, d.ge)(i))
        if (t.has(e)) {
          n.set(r, i);
          break
        }
    } return n
}

function E(e) {
  return e.sharePolicy !== r.X.NOT_SHAREABLE
}

function b(e, t) {
  return null != e && null != t && (0, o.p9)(t, c.Z, s.Z, l.Z, a.default)[0]
}

function y(e) {
  return (0, d.q8)({
    config: e
  }) ? i.W.VIDEO : i.W.GAMEPLAY
}

function O(e, t) {
  return e.ctaQuests.some(e => e.questId === t)
}