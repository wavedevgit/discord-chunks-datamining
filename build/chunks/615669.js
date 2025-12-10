/** Chunk was on 37220 **/
/** chunk id: 615669, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s,
  z: () => o
}), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  o = ((r = {})[r.END_EARLY = 0] = "END_EARLY", r);
let a = [];

function s(e) {
  let t = (0, i.e7)([l.default], () => l.default.getId()),
    {
      poll: n
    } = e;
  if (!e.isPoll() || null == n) return a;
  let r = [];
  return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || r.push(0), r
}