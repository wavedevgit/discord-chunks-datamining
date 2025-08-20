/** Chunk was on 16811 **/
/** chunk id: 585305, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk184242 = require("./184242.js"),
  Chunk349902 = require("./349902.js");

function c(e) {
  let n = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
    t = (0, i.Z)(e);
  return !(0, l.Ac)({
    location: "useShouldShowMutualInfo"
  }) || (null == n ? true : n.id) !== e.id && !t
}