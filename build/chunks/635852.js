/** Chunk was on web.js **/
/** chunk id: 635852, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => i.k,
  Meridiem: () => o.GG,
  ParsingComponents: () => a.L,
  ParsingResult: () => a.G5,
  ReferenceWithTimezone: () => a.X2,
  Weekday: () => o.OG,
  casual: () => m,
  createCasualConfiguration: () => y,
  createConfiguration: () => O,
  parse: () => E,
  parseDate: () => b,
  strict: () => g
});
var Chunk717319 = require("./717319.js"),
  Chunk201129 = require("./201129.js"),
  Chunk86465 = require("./86465.js"),
  Chunk894186 = require("./894186.js"),
  Chunk659124 = require("./659124.js"),
  Chunk29896 = require("./29896.js"),
  Chunk554260 = require("./554260.js"),
  Chunk987226 = require("./987226.js"),
  Chunk90454 = require("./90454.js"),
  Chunk700887 = require("./700887.js"),
  Chunk390633 = require("./390633.js"),
  Chunk380654 = require("./380654.js"),
  Chunk929195 = require("./929195.js");
let m = new Chunk201129.k(y()),
  g = new Chunk201129.k(O(true));

function E(e, t, n) {
  return m.parse(e, t, n)
}

function b(e, t, n) {
  return m.parseDate(e, t, n)
}

function y(e = true) {
  let t = O(false, e);
  return t.parsers.push(new p.Z), t.parsers.push(new _.Z), t
}

function O(e = true, t = true) {
  return (0, r.l)({
    parsers: [new s.Z(t), new l.Z, new c.Z, new f.Z, new h.Z],
    refiners: [new u.Z, new d.Z]
  }, e)
}