/** Chunk was on web.js **/
/** chunk id: 67924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => Chunk201129.k,
  Meridiem: () => Chunk894186.GG,
  ParsingComponents: () => Chunk86465.L,
  ParsingResult: () => Chunk86465.G5,
  ReferenceWithTimezone: () => Chunk86465.X2,
  Weekday: () => Chunk894186.OG,
  casual: () => p,
  createCasualConfiguration: () => g,
  createConfiguration: () => E,
  parse: () => m,
  parseDate: () => h,
  strict: () => _
});
var Chunk717319 = require("./717319.js"),
  Chunk201129 = require("./201129.js"),
  Chunk86465 = require("./86465.js"),
  Chunk894186 = require("./894186.js"),
  Chunk659124 = require("./659124.js"),
  Chunk442178 = require("./442178.js"),
  Chunk526039 = require("./526039.js"),
  Chunk955029 = require("./955029.js"),
  Chunk991631 = require("./991631.js"),
  Chunk90338 = require("./90338.js");
let p = new Chunk201129.k(g()),
  _ = new Chunk201129.k(E(true));

function m(e, t, n) {
  return p.parse(e, t, n)
}

function h(e, t, n) {
  return p.parseDate(e, t, n)
}

function g(e = true) {
  let t = E(false, e);
  return t.parsers.unshift(new f.Z), t
}

function E(e = true, t = true) {
  return (0, r.l)({
    parsers: [new l.Z, new s.Z(t), new u.Z, new c.Z, new d.Z],
    refiners: []
  }, e)
}