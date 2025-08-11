/** Chunk was on 67544 **/
/** chunk id: 927921, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk576628 = require("./576628.js"),
  Chunk762029 = require("./762029.js"),
  Chunk442837 = require("./442837.js"),
  Chunk359013 = require("./359013.js"),
  Chunk120421 = require("./120421.js"),
  Chunk3072 = require("./3072.js"),
  Chunk401258 = require("./401258.js"),
  Chunk477839 = require("./477839.js");

function f(e) {
  let {
    isPaused: t
  } = e, n = (0, a.e7)([c.Z], () => c.Z.getPurchasedUpgradesForItem(d.yN.MUSIC)), f = null != n[d.uv.MUSIC_CHANGE], p = i.Mq[d.yN.MUSIC].getPoints(n), m = f ? o.Z : s.Z;
  return (0, l.is)(m, false), (0, r.jsx)(u.Z, {
    itemId: d.yN.MUSIC,
    isPaused: t,
    interval: 1e3,
    pointsPerInterval: p
  })
}