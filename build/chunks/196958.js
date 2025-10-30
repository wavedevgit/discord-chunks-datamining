/** Chunk was on web.js **/
/** chunk id: 196958, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => Chunk201129.k,
  Meridiem: () => Chunk894186.GG,
  ParsingComponents: () => Chunk86465.L,
  ParsingResult: () => Chunk86465.G5,
  ReferenceWithTimezone: () => Chunk86465.X2,
  Weekday: () => Chunk894186.OG,
  casual: () => h,
  createCasualConfiguration: () => b,
  createConfiguration: () => y,
  parse: () => g,
  parseDate: () => E,
  strict: () => m
});
var Chunk717319 = require("./717319.js"),
  Chunk201129 = require("./201129.js"),
  Chunk86465 = require("./86465.js"),
  Chunk894186 = require("./894186.js"),
  Chunk659124 = require("./659124.js"),
  Chunk292052 = require("./292052.js"),
  Chunk930825 = require("./930825.js"),
  Chunk165700 = require("./165700.js"),
  Chunk787795 = require("./787795.js"),
  Chunk232370 = require("./232370.js"),
  Chunk668943 = require("./668943.js"),
  Chunk351293 = require("./351293.js");
let h = new Chunk201129.k(b()),
  m = new Chunk201129.k(y(true));

function g(e, t, n) {
  return h.parse(e, t, n)
}

function E(e, t, n) {
  return h.parseDate(e, t, n)
}

function b(e = true) {
  let t = y(false, e);
  return t.parsers.push(new _.Z), t.parsers.push(new p.Z), t
}

function y(e = true, t = true) {
  return (0, r.l)({
    parsers: [new s.Z(t), new l.Z, new c.Z, new f.Z],
    refiners: [new u.Z, new d.Z]
  }, e)
}