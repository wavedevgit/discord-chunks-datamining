/** Chunk was on 76486 **/
/** chunk id: 338510, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  u: () => n
}), require("./638769.js");
var Chunk617641 = require("./617641.js"),
  Chunk168447 = require("./168447.js"),
  Chunk546140 = require("./546140.js");

function n(t) {
  let e = (0, s.Lc)({
      location: "safety-tools-button"
    }),
    i = (0, l.L)(),
    n = (0, _.Y)(t);
  if (!e || !i) return;
  let r = n.filter(t => null != t.dismiss_timestamp);
  if (0 !== r.length) return r.sort((t, e) => t.type > e.type || t.dismiss_timestamp < e.dismiss_timestamp ? 1 : false)[0]
}