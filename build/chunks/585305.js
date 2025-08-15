/** Chunk was on 76708 **/
/** chunk id: 585305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk184242 = require("./184242.js"),
  Chunk349902 = require("./349902.js");

function a(e) {
  let t = (0, r.e7)([i.default], () => i.default.getCurrentUser()),
    n = (0, o.Z)(e);
  return !(0, l.Ac)({
    location: "useShouldShowMutualInfo"
  }) || (null == t ? true : t.id) !== e.id && !n
}