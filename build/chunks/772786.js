/** Chunk was on 73734 **/
/** chunk id: 772786, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => o,
  x: () => a
});
var Chunk417597 = require("./417597.js"),
  Chunk287809 = require("./287809.js"),
  Chunk951122 = require("./951122.js");
let a = () => s(i.default.getCurrentUser(), (0, l.kG)()),
  o = () => s((0, r.bG)([i.default], () => i.default.getCurrentUser()), (0, l.Jz)());

function s(e, t) {
  return !(null == e || e.hasUniqueUsername()) && !!e.hasVerifiedEmailOrPhone() && !!t
}