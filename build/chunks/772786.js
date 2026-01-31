/** Chunk was on 61222 **/
/** chunk id: 772786, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => a,
  x: () => o
});
var Chunk417597 = require("./417597.js"),
  Chunk287809 = require("./287809.js"),
  Chunk951122 = require("./951122.js");
let o = () => s(i.default.getCurrentUser(), (0, l.kG)()),
  a = () => s((0, r.bG)([i.default], () => i.default.getCurrentUser()), (0, l.Jz)());

function s(e, t) {
  return !(null == e || e.hasUniqueUsername()) && !!e.hasVerifiedEmailOrPhone() && !!t
}