/** Chunk was on web.js **/
/** chunk id: 342470, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => i.u,
  Meridiem: () => o.FF,
  ParsingComponents: () => a.BP,
  ParsingResult: () => a.s4,
  ReferenceWithTimezone: () => a.b5,
  Weekday: () => o.Bw,
  casual: () => p,
  createCasualConfiguration: () => g,
  createConfiguration: () => E,
  parse: () => h,
  parseDate: () => m,
  strict: () => _
});
var Chunk125659 = require("./125659.js"),
  Chunk880683 = require("./880683.js"),
  Chunk374372 = require("./374372.js"),
  Chunk322811 = require("./322811.js"),
  Chunk774188 = require("./774188.js"),
  Chunk368324 = require("./368324.js"),
  Chunk600107 = require("./600107.js"),
  Chunk573047 = require("./573047.js"),
  Chunk466242 = require("./466242.js"),
  Chunk224982 = require("./224982.js");
let p = new Chunk880683.u(g()),
  _ = new Chunk880683.u(E(true));

function h(e, t, n) {
  return p.parse(e, t, n)
}

function m(e, t, n) {
  return p.parseDate(e, t, n)
}

function g(e = true) {
  let t = E(false, e);
  return t.parsers.unshift(new f.A), t
}

function E(e = true, t = true) {
  return (0, r.i)({
    parsers: [new l.A, new s.A(t), new u.A, new c.A, new d.A],
    refiners: []
  }, e)
}