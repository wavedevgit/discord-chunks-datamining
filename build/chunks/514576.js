/** Chunk was on 51333 **/
/** chunk id: 514576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk983543 = require("./983543.js"),
  Chunk584731 = require("./584731.js");

function o(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.guild_id,
    o = e.id,
    [s, u] = (0, i.Wu)([a.Z], () => t ? [null, true] : [a.Z.message(n, o), a.Z.isLatest(n, o)]);
  return (0, r.useEffect)(() => {
    null == o || u || l.Z.addWant(o)
  }, [o, u]), s
}