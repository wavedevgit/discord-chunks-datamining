/** Chunk was on 85032 **/
/** chunk id: 810473, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk836197 = require("./836197.js"),
  Chunk880421 = require("./880421.js"),
  Chunk172416 = require("./172416.js"),
  Chunk517157 = require("./517157.js");

function d() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = (0, Chunk517157.Z)(null == module ? true : module.id),
    n = exports.some(e => o.Ki.includes(e.type)),
    d = (0, Chunk172416.Un)({
      location: "useAvailableWidgetTypes"
    }),
    f = (0, Chunk880421.k)({
      location: "useAvailableWidgetTypes"
    }),
    g = d || require;
  return Chunk473749.useMemo(() => {
    let e = new Set(exports.map(e => e.type));
    return Object.values(Chunk296009.l).filter(t => (t !== i.l.APPLICATION || !!f) && (!o.Ki.includes(t) || !!g) && !e.has(t))
  }, [exports, g, f])
}