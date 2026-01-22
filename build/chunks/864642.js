/** Chunk was on web.js **/
/** chunk id: 864642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => u.u,
  Meridiem: () => f.FF,
  ParsingComponents: () => d.BP,
  ParsingResult: () => d.s4,
  ReferenceWithTimezone: () => d.b5,
  Weekday: () => f.Bw,
  casual: () => g,
  createCasualConfiguration: () => O,
  createConfiguration: () => A,
  parse: () => b,
  parseDate: () => y,
  strict: () => E
});
var Chunk701153 = require("./701153.js"),
  Chunk272081 = require("./272081.js"),
  Chunk355497 = require("./355497.js"),
  Chunk267118 = require("./267118.js"),
  Chunk60538 = require("./60538.js"),
  Chunk515875 = require("./515875.js"),
  Chunk781309 = require("./781309.js"),
  Chunk880683 = require("./880683.js"),
  Chunk374372 = require("./374372.js"),
  Chunk322811 = require("./322811.js"),
  Chunk309229 = require("./309229.js"),
  Chunk851102 = require("./851102.js"),
  Chunk125659 = require("./125659.js"),
  Chunk483655 = require("./483655.js");
let g = new Chunk880683.u(O()),
  E = new Chunk880683.u(A(true));

function b(e, t, n) {
  return g.parse(e, t, n)
}

function y(e, t, n) {
  return g.parseDate(e, t, n)
}

function O() {
  let e = A(false);
  return e.parsers.unshift(new a.A), e
}

function A(e = true) {
  let t = (0, h.i)({
    parsers: [new r.A, new s.A, new _.A, new o.A, new l.A],
    refiners: [new p.A, new c.A, new i.A]
  }, e);
  return t.refiners = t.refiners.filter(e => !(e instanceof m.A)), t
}