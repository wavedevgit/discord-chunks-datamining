/** Chunk was on web.js **/
/** chunk id: 235894, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Eq: () => o,
  NV: () => s,
  Uw: () => a
});
var Chunk358085 = require("./358085.js"),
  Chunk477931 = require("./477931.js");
let a = e => {
    var t;
    if (!e.hasPotions()) returnfalse;
    let n = null != (t = e.potions) ? t : [],
      a = (0, r.isAndroid)();
    return n.some(e => e.type === i.B.CONFETTI && (!a || null != e.emoji[0].id))
  },
  o = e => {
    var t;
    if (e.hasPotions()) return (null != (t = e.potions) ? t : []).find(e => e.type === i.B.CONFETTI)
  },
  s = e => null != e.id ? {
    id: e.id,
    name: e.name
  } : {
    name: e.optionallyDiverseSequence,
    id: true
  }