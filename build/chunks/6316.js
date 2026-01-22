/** Chunk was on 88615 **/
/** chunk id: 6316, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk904629 = require("./904629.js"),
  Chunk522055 = require("./522055.js");

function o(e) {
  let t = (0, n.bG)([s.A], () => s.A.getStateForGuild(e));
  return r.useMemo(() => {
    var e;
    let l = Object.values(null != (e = null == t ? true : t.entitlements) ? e : {});
    return 0 === l.length ? [] : (0, i.k)(l)
  }, [null == t ? true : t.entitlements])
}