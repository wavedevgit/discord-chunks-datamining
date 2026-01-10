/** Chunk was on web.js **/
/** chunk id: 894883, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk764011 = require("./764011.js"),
  Chunk157298 = require("./157298.js"),
  Chunk442837 = require("./442837.js"),
  Chunk722733 = require("./722733.js"),
  Chunk633289 = require("./633289.js");

function c(e, t) {
  let n = (0, i.Z)(e),
    c = (0, a.Z)(t),
    u = (0, o.Wu)([l.Z], () => n.flatMap(e => l.Z.getEvaluationAndAssignment(e.definition.kind, (0, s.yy)(e.definition.kind, c), e.definition.name)), [n, c]);
  return (0, r.useMemo)(() => new Map(n.map(e => [e, e.getConfig(c)])), [n, c, u])
}