/** Chunk was on 44799 **/
/** chunk id: 447941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk19394 = require("./19394.js"),
  Chunk60482 = require("./60482.js");

function a(e) {
  let t = (0, i.e7)([l.Z], () => l.Z.getStateForGuild(e));
  return r.useMemo(() => {
    var e;
    let n = Object.values(null != (e = null == t ? true : t.entitlements) ? e : {});
    return 0 === n.length ? [] : (0, o.h)(n)
  }, [null == t ? true : t.entitlements])
}