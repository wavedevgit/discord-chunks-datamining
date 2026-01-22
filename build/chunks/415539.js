/** Chunk was on 42944 **/
/** chunk id: 415539, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./114821.js"), require("./339614.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk868714 = require("./868714.js"),
  Chunk206572 = require("./206572.js"),
  Chunk311907 = require("./311907.js"),
  Chunk250105 = require("./250105.js"),
  Chunk217222 = require("./217222.js");

function c(e, a) {
  let n = (0, l.A)(e),
    c = (0, i.A)(a),
    d = (0, r.yK)([o.A], () => n.flatMap(e => o.A.getEvaluationAndAssignment(e.definition.kind, (0, s.cT)(e.definition.kind, c), e.definition.name)), [n, c]);
  return (0, t.useMemo)(() => new Map(n.map(e => [e, e.getConfig(c)])), [n, c, d])
}