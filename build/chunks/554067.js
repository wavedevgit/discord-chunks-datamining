/** Chunk was on web.js **/
/** chunk id: 554067, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => i.u,
  Meridiem: () => s.FF,
  ParsingComponents: () => a.BP,
  ParsingResult: () => a.s4,
  ReferenceWithTimezone: () => a.b5,
  Weekday: () => s.Bw,
  casual: () => h,
  createCasualConfiguration: () => b,
  createConfiguration: () => y,
  parse: () => g,
  parseDate: () => E,
  strict: () => m
});
var Chunk125659 = require("./125659.js"),
  Chunk880683 = require("./880683.js"),
  Chunk374372 = require("./374372.js"),
  Chunk322811 = require("./322811.js"),
  Chunk774188 = require("./774188.js"),
  Chunk492381 = require("./492381.js"),
  Chunk563690 = require("./563690.js"),
  Chunk345346 = require("./345346.js"),
  Chunk432208 = require("./432208.js"),
  Chunk837493 = require("./837493.js"),
  Chunk149684 = require("./149684.js"),
  Chunk215325 = require("./215325.js");
let h = new Chunk880683.u(b()),
  m = new Chunk880683.u(y(true));

function g(e, t, n) {
  return h.parse(e, t, n)
}

function E(e, t, n) {
  return h.parseDate(e, t, n)
}

function b(e = true) {
  let t = y(false, e);
  return t.parsers.push(new p.A), t.parsers.push(new _.A), t
}

function y(e = true, t = true) {
  return (0, r.i)({
    parsers: [new o.A(t), new l.A, new c.A, new f.A],
    refiners: [new u.A, new d.A]
  }, e)
}