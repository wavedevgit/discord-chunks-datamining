/** Chunk was on 45956 **/
/** chunk id: 894883, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk764011 = require("./764011.js"),
  Chunk157298 = require("./157298.js"),
  Chunk442837 = require("./442837.js"),
  Chunk722733 = require("./722733.js"),
  Chunk633289 = require("./633289.js");

function c(e, a) {
  let t = (0, l.Z)(e),
    c = (0, n.Z)(a),
    d = (0, r.Wu)([o.Z], () => t.flatMap(e => o.Z.getEvaluationAndAssignment(e.definition.kind, (0, s.yy)(e.definition.kind, c), e.definition.name)), [t, c]);
  return (0, i.useMemo)(() => new Map(t.map(e => [e, e.getConfig(c)])), [t, c, d])
}