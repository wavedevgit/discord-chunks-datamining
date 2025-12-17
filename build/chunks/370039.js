/** Chunk was on 45620 **/
/** chunk id: 370039, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  a: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk27123 = require("./27123.js"),
  Chunk330349 = require("./330349.js"),
  Chunk724994 = require("./724994.js");
let f = () => {
  let e = (0, Chunk399606.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = null != module && Chunk74538.ZP.canUseCollectibles(module);
  return (0, Chunk473749.useCallback)(e => null == e || 0 === e.length ? e : e.filter(e => {
    let {
      isPurchased: n
    } = (0, d.U)(s.Z, e);
    if (!(0, i.x6)(e) || (0, i.rN)(e) || n) returntrue;
    if (!(0, u.N)(e)) returnfalse;
    if ((0, c.r1)(e)) return null != (0, c.T4)({
      product: e,
      isPremiumUser: t
    });
    let r = (0, i.gc)(t),
      l = (0, i.ql)(e, r);
    if (null == l || 0 === l.amount) returntrue;
    let a = 0;
    return null != e.bundledProducts && (a = e.bundledProducts.reduce((e, t) => {
      var n;
      let l = (0, i.ql)(t, r);
      return e + (null != (n = null == l ? true : l.amount) ? n : 0)
    }, 0)), l.amount < a
  }), [exports])
}