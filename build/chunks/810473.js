/** Chunk was on 38576 **/
/** chunk id: 810473, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk162650 = require("./162650.js"),
  Chunk517157 = require("./517157.js");

function s() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = (0, Chunk517157.Z)(null == module ? true : module.id),
    r = Chunk162650.Q.useConfig({
      location: "useAvailableWidgetTypes"
    }).enabled;
  return Chunk647438.useMemo(() => {
    let e = new Set(exports.map(e => e.type));
    return Object.values(Chunk296009.l).filter(t => (t !== i.l.APPLICATION || !!r) && !e.has(t))
  }, [exports, require])
}