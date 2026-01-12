/** Chunk was on 83772 **/
/** chunk id: 514576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk983543 = require("./983543.js"),
  Chunk584731 = require("./584731.js");

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.guild_id,
    s = e.id,
    [o, u] = (0, l.Wu)([a.Z], () => t ? [null, true] : [a.Z.message(n, s), a.Z.isLatest(n, s)]);
  return (0, r.useEffect)(() => {
    null == s || u || i.Z.addWant(s)
  }, [s, u]), o
}