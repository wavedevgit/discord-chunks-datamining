/** Chunk was on 1636 **/
/** chunk id: 52684, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c,
  G: () => o
}), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  o = ((r = {})[r.END_EARLY = 0] = "END_EARLY", r);
let a = [];

function c(e) {
  let t = (0, l.bG)([i.default], () => i.default.getId()),
    {
      poll: n
    } = e;
  if (!e.isPoll() || null == n) return a;
  let r = [];
  return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || r.push(0), r
}