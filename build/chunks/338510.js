/** Chunk was on 97492 **/
/** chunk id: 338510, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => a
}), require("./638769.js");
var Chunk617641 = require("./617641.js"),
  Chunk168447 = require("./168447.js"),
  Chunk546140 = require("./546140.js");

function a(e) {
  let t = (0, r.Lc)({
      location: "safety-tools-button"
    }),
    n = (0, i.L)(),
    a = (0, l.Y)(e);
  if (!t || !n) return;
  let s = a.filter(e => null != e.dismiss_timestamp);
  if (0 !== s.length) return s.sort((e, t) => e.type > t.type || e.dismiss_timestamp < t.dismiss_timestamp ? 1 : false)[0]
}