/** Chunk was on web.js **/
/** chunk id: 816694, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => h.u,
  Meridiem: () => g.FF,
  ParsingComponents: () => m.BP,
  ParsingResult: () => m.s4,
  ReferenceWithTimezone: () => m.b5,
  Weekday: () => g.Bw,
  casual: () => y,
  createCasualConfiguration: () => S,
  createConfiguration: () => I,
  parse: () => A,
  parseDate: () => v,
  strict: () => O
});
var Chunk854724 = require("./854724.js"),
  Chunk584823 = require("./584823.js"),
  Chunk179860 = require("./179860.js"),
  Chunk225960 = require("./225960.js"),
  Chunk972826 = require("./972826.js"),
  Chunk381620 = require("./381620.js"),
  Chunk762094 = require("./762094.js"),
  Chunk125659 = require("./125659.js"),
  Chunk280598 = require("./280598.js"),
  Chunk504927 = require("./504927.js"),
  Chunk749867 = require("./749867.js"),
  Chunk368072 = require("./368072.js"),
  Chunk880683 = require("./880683.js"),
  Chunk374372 = require("./374372.js"),
  Chunk322811 = require("./322811.js"),
  Chunk774188 = require("./774188.js"),
  Chunk373122 = require("./373122.js");
let y = new Chunk880683.u(S()),
  O = new Chunk880683.u(I(true));

function A(e, t, n) {
  return y.parse(e, t, n)
}

function v(e, t, n) {
  return y.parseDate(e, t, n)
}

function S() {
  let e = I(false);
  return e.parsers.unshift(new d.A), e.parsers.unshift(new f.A), e.parsers.unshift(new a.A), e.parsers.unshift(new _.A), e.parsers.unshift(new b.A), e
}

function I(e = true) {
  return (0, u.i)({
    parsers: [new E.A(true), new r.A, new i.A, new p.A, new s.A(e), new o.A],
    refiners: [new c.A, new l.A]
  }, e)
}