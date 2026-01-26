/** Chunk was on 1636 **/
/** chunk id: 52684, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c,
  G: () => a
}), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  a = ((r = {})[r.END_EARLY = 0] = "END_EARLY", r);
let o = [];

function c(e) {
  let t = (0, i.bG)([l.default], () => l.default.getId()),
    {
      poll: n
    } = e;
  if (!e.isPoll() || null == n) return o;
  let r = [];
  return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || r.push(0), r
}