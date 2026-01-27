/** Chunk was on web.js **/
/** chunk id: 274361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => i.u,
  Meridiem: () => o.FF,
  ParsingComponents: () => a.BP,
  ParsingResult: () => a.s4,
  ReferenceWithTimezone: () => a.b5,
  Weekday: () => o.Bw,
  casual: () => I,
  createCasualConfiguration: () => N,
  createConfiguration: () => w,
  parse: () => T,
  parseDate: () => C,
  strict: () => S
});
var Chunk125659 = require("./125659.js"),
  Chunk880683 = require("./880683.js"),
  Chunk374372 = require("./374372.js"),
  Chunk322811 = require("./322811.js"),
  Chunk714196 = require("./714196.js"),
  Chunk973902 = require("./973902.js"),
  Chunk248188 = require("./248188.js"),
  Chunk471589 = require("./471589.js"),
  Chunk774188 = require("./774188.js"),
  Chunk924482 = require("./924482.js"),
  Chunk359269 = require("./359269.js"),
  Chunk921932 = require("./921932.js"),
  Chunk273050 = require("./273050.js"),
  Chunk843959 = require("./843959.js"),
  Chunk389378 = require("./389378.js"),
  Chunk703333 = require("./703333.js"),
  Chunk196417 = require("./196417.js"),
  Chunk101272 = require("./101272.js"),
  Chunk970418 = require("./970418.js"),
  Chunk57724 = require("./57724.js"),
  Chunk241087 = require("./241087.js");
let I = new Chunk880683.u(N()),
  S = new Chunk880683.u(w(true));

function T(e, t, n) {
  return I.parse(e, t, n)
}

function C(e, t, n) {
  return I.parseDate(e, t, n)
}

function N(e = true) {
  let t = w(false, e);
  return t.parsers.unshift(new c.A), t.parsers.unshift(new u.A), t.parsers.unshift(new y.A), t.parsers.unshift(new h.A), t.parsers.unshift(new O.A), t.parsers.unshift(new b.A), t
}

function w(e = true, t = true) {
  return (0, r.i)({
    parsers: [new d.A(t), new f.A, new _.A, new h.A, new p.A, new E.A, new m.A, new g.A(e), new v.A(e), new A.A(e)],
    refiners: [new l.A, new s.A]
  }, e)
}