/** Chunk was on web.js **/
/** chunk id: 219333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => o,
  j: () => s
}), require("./388685.js"), require("./415506.js");
var Chunk704215 = require("./704215.js"),
  Chunk266454 = require("./266454.js");
let a = new Map([
    [require("./304426.js").m.NITRO_DROP, Chunk704215.z.NITRO_DROP_REWARD]
  ]),
  o = e => {
    let {
      campaignID: t
    } = e, n = a.get(t);
    if (true === n) throw Error("reward checks for the campaign with ID ".concat(t, " is not supported through DCF"));
    return (0, i.zu)(n)
  },
  s = e => {
    let {
      campaignID: t
    } = e, n = a.get(t);
    if (true === n) throw Error("reward redemptions for the campaign with ID ".concat(t, " is not supported through DCF"));
    (0, i.Q3)(n)
  }