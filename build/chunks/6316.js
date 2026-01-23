/** Chunk was on 88615 **/
/** chunk id: 6316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk904629 = require("./904629.js"),
  Chunk522055 = require("./522055.js");

function s(e) {
  let t = (0, l.bG)([o.A], () => o.A.getStateForGuild(e));
  return r.useMemo(() => {
    var e;
    let n = Object.values(null != (e = null == t ? true : t.entitlements) ? e : {});
    return 0 === n.length ? [] : (0, i.k)(n)
  }, [null == t ? true : t.entitlements])
}