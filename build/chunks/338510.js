/** Chunk was on 76850 **/
/** chunk id: 338510, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  u: () => s
}), require("./638769.js");
var Chunk617641 = require("./617641.js"),
  Chunk168447 = require("./168447.js"),
  Chunk546140 = require("./546140.js");

function s(e) {
  let t = (0, n.Lc)({
      location: "safety-tools-button"
    }),
    r = (0, o.L)(),
    s = (0, i.Y)(e);
  if (!t || !r) return;
  let l = s.filter(e => null != e.dismiss_timestamp);
  if (0 !== l.length) return l.sort((e, t) => e.type > t.type || e.dismiss_timestamp < t.dismiss_timestamp ? 1 : false)[0]
}