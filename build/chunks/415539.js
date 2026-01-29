/** Chunk was on 20545 **/
/** chunk id: 415539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./114821.js"), require("./339614.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk868714 = require("./868714.js"),
  Chunk206572 = require("./206572.js"),
  Chunk311907 = require("./311907.js"),
  Chunk250105 = require("./250105.js"),
  Chunk217222 = require("./217222.js");

function u(e, t) {
  let n = (0, l.A)(e),
    u = (0, r.A)(t),
    o = (0, s.yK)([d.A], () => n.flatMap(e => d.A.getEvaluationAndAssignment(e.definition.kind, (0, a.cT)(e.definition.kind, u), e.definition.name)), [n, u]);
  return (0, i.useMemo)(() => new Map(n.map(e => [e, e.getConfig(u)])), [n, u, o])
}