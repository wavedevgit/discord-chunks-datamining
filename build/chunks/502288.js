/** Chunk was on web.js **/
/** chunk id: 502288, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  kb: () => l,
  o8: () => u
}), require("./361932.js"), require("./187205.js");
var Chunk887003 = require("./887003.js"),
  Chunk55935 = require("./55935.js"),
  Chunk70956 = require("./70956.js"),
  Chunk74538 = require("./74538.js"),
  Chunk388032 = require("./388032.jsx");
let l = e => {
    let t = (0, o.xG)(e.map(e => e.skuId));
    return t % 24 == 0 ? s.intl.formatToPlainString(s.t.Cz1G97, {
      days: t / 24
    }) : s.intl.formatToPlainString(s.t.J9Lu4h, {
      hours: t
    })
  },
  c = e => e.rewardsConfig.rewards.filter(e => e.type === r.w.FRACTIONAL_PREMIUM),
  u = e => {
    let t = c(e).flatMap(e => Array(e.quantity).fill(e.skuId)),
      n = (0, o.xG)(t),
      r = {
        days: s.t.fYmirx,
        hours: s.t["C3RO+g"],
        minutes: s.t.r77oHc
      },
      l = (0, i.TD)(0, n * a.Z.Millis.HOUR);
    return s.intl.formatToPlainString(s.t["4SqnVD"], {
      time: (0, i.QX)(l, r)
    })
  }