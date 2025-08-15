/** Chunk was on 35755 **/
/** chunk id: 496977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk835473 = require("./835473.js"),
  Chunk541099 = require("./541099.js"),
  Chunk695676 = require("./695676.js");

function s() {
  let e = (0, Chunk442837.e7)([Chunk541099.Z], () => Chunk541099.Z.initialState(), []),
    t = (0, Chunk835473.q)(null == module ? true : module.applicationId);
  return Chunk647438.useMemo(() => {
    if (null == module) return;
    let n = [{
      type: Chunk695676.gc.HOME
    }];
    return null != module.applicationId && null != exports && require.push({
      type: Chunk695676.gc.APPLICATION,
      application: exports
    }), require
  }, [module, exports])
}