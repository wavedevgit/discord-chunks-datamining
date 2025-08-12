/** Chunk was on 29458 **/
/** chunk id: 810473, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk517157 = require("./517157.js");

function c() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = (0, Chunk517157.Z)(null == module ? true : module.id);
  return Chunk73800.useMemo(() => {
    let e = new Set(exports.map(e => e.type));
    return Object.values(Chunk296009.l).filter(t => !e.has(t))
  }, [exports])
}