/** Chunk was on 88615 **/
/** chunk id: 141406, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk403362 = require("./403362.js"),
  Chunk645619 = require("./645619.js"),
  Chunk904629 = require("./904629.js");

function a(e) {
  let t = (0, l.bG)([o.A], () => o.A.getStateForGuild(e));
  return r.useMemo(() => {
    if (null == t) return [];
    let {
      allPowerups: e,
      unlockedPowerups: n
    } = t;
    return (0, s.k)(Object.values(n)).map(t => e[t.sku_id]).filter(i.Vq)
  }, [t])
}