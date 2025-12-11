/** Chunk was on 44799 **/
/** chunk id: 618460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk823379 = require("./823379.js"),
  Chunk905128 = require("./905128.js"),
  Chunk19394 = require("./19394.js");

function s(e) {
  let t = (0, i.e7)([o.Z], () => o.Z.getStateForGuild(e));
  return r.useMemo(() => {
    if (null == t) return [];
    let {
      allPowerups: e,
      unlockedPowerups: n
    } = t;
    return (0, a.h)(Object.values(n)).map(t => e[t.sku_id]).filter(l.lm)
  }, [t])
}