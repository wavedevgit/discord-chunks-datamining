/** Chunk was on 59275 **/
/** chunk id: 511265, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  p: () => g
});
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk4227 = require("./4227.js"),
  Chunk993408 = require("./993408.js"),
  Chunk623373 = require("./623373.js"),
  Chunk660653 = require("./660653.js"),
  Chunk466459 = require("./466459.js");
let g = () => {
  let e = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
    t = null != e && a.Ay.canUseCollectibles(e);
  return (0, r.useCallback)(e => null == e || 0 === e.length ? e : e.filter(e => {
    let {
      isPurchased: n
    } = (0, d.o)(i.A, e);
    if (!(0, o.aw)(e) || (0, o.tt)(e) || n) returntrue;
    if (!(0, u.uh)(e)) returnfalse;
    if ((0, c.Ab)(e)) return null != (0, c.CW)({
      product: e,
      isPremiumUser: t
    });
    let r = (0, o.l8)(t),
      l = (0, o.yt)(e, r);
    if (null == l || 0 === l.amount) returntrue;
    let s = 0;
    return null != e.bundledProducts && (s = e.bundledProducts.reduce((e, t) => {
      var n;
      let l = (0, o.yt)(t, r);
      return e + (null != (n = null == l ? true : l.amount) ? n : 0)
    }, 0)), l.amount < s
  }), [t])
}