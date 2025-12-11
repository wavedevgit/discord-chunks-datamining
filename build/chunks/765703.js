/** Chunk was on 44799 **/
/** chunk id: 765703, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk19394 = require("./19394.js"),
  Chunk60482 = require("./60482.js");

function o(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e));
  return r.useMemo(() => {
    var e;
    let n = Object.values(null != (e = null == t ? true : t.entitlements) ? e : {});
    return 0 === n.length ? [] : (0, l.h)(n)
  }, [null == t ? true : t.entitlements])
}