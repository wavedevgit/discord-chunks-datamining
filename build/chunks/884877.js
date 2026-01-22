/** Chunk was on web.js **/
/** chunk id: 884877, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  xM: () => c
}), require("./114821.js"), require("./339614.js");
var Chunk440703 = require("./440703.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927813 = require("./927813.js"),
  Chunk927578 = require("./927578.js"),
  Chunk985018 = require("./985018.jsx");
let l = e => e.rewardsConfig.rewards.filter(e => e.type === r.l.FRACTIONAL_PREMIUM),
  c = e => {
    let t = l(e).flatMap(e => Array(e.quantity).fill(e.skuId)),
      n = (0, s.iv)(t),
      r = {
        days: o.t.fYmirx,
        hours: o.t["C3RO+g"],
        minutes: o.t.r77oHc
      },
      c = (0, i.Tf)(0, n * a.A.Millis.HOUR);
    return o.intl.formatToPlainString(o.t["4SqnVD"], {
      time: (0, i.uN)(c, r)
    })
  }