/** Chunk was on 59275 **/
/** chunk id: 511265, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  p: () => f
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
let f = () => {
  let e = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
    t = null != e && a.Ay.canUseCollectibles(e);
  return (0, n.useCallback)(e => null == e || 0 === e.length ? e : e.filter(e => {
    let {
      isPurchased: l
    } = (0, d.o)(i.A, e);
    if (!(0, o.aw)(e) || (0, o.tt)(e) || l) returntrue;
    if (!(0, u.u)(e)) returnfalse;
    if ((0, c.Ab)(e)) return null != (0, c.CW)({
      product: e,
      isPremiumUser: t
    });
    let n = (0, o.l8)(t),
      r = (0, o.yt)(e, n);
    if (null == r || 0 === r.amount) returntrue;
    let s = 0;
    return null != e.bundledProducts && (s = e.bundledProducts.reduce((e, t) => {
      var l;
      let r = (0, o.yt)(t, n);
      return e + (null != (l = null == r ? true : r.amount) ? l : 0)
    }, 0)), r.amount < s
  }), [t])
}