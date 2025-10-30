/** Chunk was on web.js **/
/** chunk id: 493398, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => Chunk201129.k,
  Meridiem: () => Chunk894186.GG,
  ParsingComponents: () => Chunk86465.L,
  ParsingResult: () => Chunk86465.G5,
  ReferenceWithTimezone: () => Chunk86465.X2,
  Weekday: () => Chunk894186.OG,
  casual: () => g,
  createCasualConfiguration: () => O,
  createConfiguration: () => v,
  hant: () => m,
  parse: () => b,
  parseDate: () => y,
  strict: () => E
});
var Chunk766403 = require("./766403.js"),
  Chunk717319 = require("./717319.js"),
  Chunk201129 = require("./201129.js"),
  Chunk86465 = require("./86465.js"),
  Chunk894186 = require("./894186.js"),
  Chunk460705 = require("./460705.js"),
  Chunk815222 = require("./815222.js"),
  Chunk62927 = require("./62927.js"),
  Chunk461190 = require("./461190.js"),
  Chunk961308 = require("./961308.js"),
  Chunk908092 = require("./908092.js"),
  Chunk628475 = require("./628475.js"),
  Chunk29451 = require("./29451.js");
let m = new Chunk201129.k(O()),
  g = new Chunk201129.k(O()),
  E = new Chunk201129.k(v());

function b(e, t, n) {
  return g.parse(e, t, n)
}

function y(e, t, n) {
  return g.parseDate(e, t, n)
}

function O() {
  let e = v();
  return module.parsers.unshift(new Chunk460705.Z), module
}

function v() {
  let e = (0, Chunk717319.l)({
    parsers: [new Chunk815222.Z, new Chunk461190.Z, new Chunk908092.Z, new Chunk961308.Z, new Chunk62927.Z],
    refiners: [new Chunk628475.Z, new Chunk29451.Z]
  });
  return module.refiners = module.refiners.filter(e => !(e instanceof r.Z)), module
}