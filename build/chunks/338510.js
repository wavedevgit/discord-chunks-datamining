/** Chunk was on 77870 **/
/** chunk id: 338510, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => s
}), require("./638769.js");
var Chunk617641 = require("./617641.js"),
  Chunk168447 = require("./168447.js"),
  Chunk546140 = require("./546140.js");

function s(e) {
  let t = (0, r.Lc)({
      location: "safety-tools-button"
    }),
    n = (0, i.L)(),
    s = (0, l.Y)(e);
  if (!t || !n) return;
  let a = s.filter(e => null != e.dismiss_timestamp);
  if (0 !== a.length) return a.sort((e, t) => e.type > t.type || e.dismiss_timestamp < t.dismiss_timestamp ? 1 : false)[0]
}