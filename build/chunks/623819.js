/** Chunk was on web.js **/
/** chunk id: 623819, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => a.u,
  Meridiem: () => o.FF,
  ParsingComponents: () => s.BP,
  ParsingResult: () => s.s4,
  ReferenceWithTimezone: () => s.b5,
  Weekday: () => o.Bw,
  casual: () => g,
  createCasualConfiguration: () => O,
  createConfiguration: () => A,
  hant: () => m,
  parse: () => b,
  parseDate: () => y,
  strict: () => E
});
var Chunk321287 = require("./321287.js"),
  Chunk125659 = require("./125659.js"),
  Chunk880683 = require("./880683.js"),
  Chunk374372 = require("./374372.js"),
  Chunk322811 = require("./322811.js"),
  Chunk318340 = require("./318340.js"),
  Chunk899562 = require("./899562.js"),
  Chunk973617 = require("./973617.js"),
  Chunk736360 = require("./736360.js"),
  Chunk408669 = require("./408669.js"),
  Chunk932640 = require("./932640.js"),
  Chunk590413 = require("./590413.js"),
  Chunk824033 = require("./824033.js");
let m = new Chunk880683.u(O()),
  g = new Chunk880683.u(O()),
  E = new Chunk880683.u(A());

function b(e, t, n) {
  return g.parse(e, t, n)
}

function y(e, t, n) {
  return g.parseDate(e, t, n)
}

function O() {
  let e = A();
  return e.parsers.unshift(new l.A), e
}

function A() {
  let e = (0, i.i)({
    parsers: [new c.A, new d.A, new p.A, new f.A, new u.A],
    refiners: [new _.A, new h.A]
  });
  return e.refiners = e.refiners.filter(e => !(e instanceof r.A)), e
}