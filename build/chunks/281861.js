/** Chunk was on web.js **/
/** chunk id: 281861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => i.k,
  Meridiem: () => o.GG,
  ParsingComponents: () => a.L,
  ParsingResult: () => a.G5,
  ReferenceWithTimezone: () => a.X2,
  Weekday: () => o.OG,
  casual: () => I,
  createCasualConfiguration: () => N,
  createConfiguration: () => P,
  parse: () => C,
  parseDate: () => A,
  strict: () => T
});
var Chunk717319 = require("./717319.js"),
  Chunk201129 = require("./201129.js"),
  Chunk86465 = require("./86465.js"),
  Chunk894186 = require("./894186.js"),
  Chunk887603 = require("./887603.js"),
  Chunk701544 = require("./701544.js"),
  Chunk142165 = require("./142165.js"),
  Chunk59470 = require("./59470.js"),
  Chunk659124 = require("./659124.js"),
  Chunk891363 = require("./891363.js"),
  Chunk520609 = require("./520609.js"),
  Chunk116965 = require("./116965.js"),
  Chunk32775 = require("./32775.js"),
  Chunk677686 = require("./677686.js"),
  Chunk255844 = require("./255844.js"),
  Chunk484409 = require("./484409.js"),
  Chunk31692 = require("./31692.js"),
  Chunk3999 = require("./3999.js"),
  Chunk420192 = require("./420192.js"),
  Chunk331175 = require("./331175.js"),
  Chunk628269 = require("./628269.js");
let I = new Chunk201129.k(N()),
  T = new Chunk201129.k(P(true));

function C(e, t, n) {
  return I.parse(e, t, n)
}

function A(e, t, n) {
  return I.parseDate(e, t, n)
}

function N(e = true) {
  let t = P(false, e);
  return t.parsers.unshift(new c.Z), t.parsers.unshift(new u.Z), t.parsers.unshift(new b.Z), t.parsers.unshift(new m.Z), t.parsers.unshift(new O.Z), t.parsers.unshift(new y.Z), t
}

function P(e = true, t = true) {
  return (0, r.l)({
    parsers: [new d.Z(t), new f.Z, new _.Z, new m.Z, new p.Z, new E.Z, new h.Z, new g.Z(e), new v.Z(e), new S.Z(e)],
    refiners: [new l.Z, new s.Z]
  }, e)
}