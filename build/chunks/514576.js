/** Chunk was on 83772 **/
/** chunk id: 514576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk983543 = require("./983543.js"),
  Chunk584731 = require("./584731.js");

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.guild_id,
    a = e.id,
    [o, u] = (0, l.Wu)([s.Z], () => t ? [null, true] : [s.Z.message(n, a), s.Z.isLatest(n, a)]);
  return (0, r.useEffect)(() => {
    null == a || u || i.Z.addWant(a)
  }, [a, u]), o
}