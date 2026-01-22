/** Chunk was on web.js **/
/** chunk id: 59892, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => r.u,
  GB: () => c,
  Meridiem: () => a.FF,
  ParsingComponents: () => i.BP,
  ParsingResult: () => i.s4,
  ReferenceWithTimezone: () => i.b5,
  Weekday: () => a.Bw,
  casual: () => o,
  configuration: () => s,
  parse: () => u,
  parseDate: () => d,
  strict: () => l
});
var Chunk880683 = require("./880683.js"),
  Chunk374372 = require("./374372.js"),
  Chunk322811 = require("./322811.js");
let s = new(require("./579926.js")).A,
  o = new Chunk880683.u(s.createCasualConfiguration(false)),
  l = new Chunk880683.u(s.createConfiguration(true, false)),
  c = new Chunk880683.u(s.createCasualConfiguration(true));

function u(e, t, n) {
  return o.parse(e, t, n)
}

function d(e, t, n) {
  return o.parseDate(e, t, n)
}