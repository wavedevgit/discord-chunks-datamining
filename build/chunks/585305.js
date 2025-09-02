/** Chunk was on 31553 **/
/** chunk id: 585305, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk184242 = require("./184242.js"),
  Chunk349902 = require("./349902.js");

function s(e) {
  let n = (0, l.e7)([r.default], () => r.default.getCurrentUser()),
    t = (0, o.Z)(e);
  return !(0, i.Ac)({
    location: "useShouldShowMutualInfo"
  }) || (null == n ? true : n.id) !== e.id && !t
}