/** Chunk was on web.js **/
/** chunk id: 225300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => i.k,
  Meridiem: () => o.GG,
  ParsingComponents: () => a.L,
  ParsingResult: () => a.G5,
  ReferenceWithTimezone: () => a.X2,
  Weekday: () => o.OG,
  casual: () => b,
  createCasualConfiguration: () => S,
  createConfiguration: () => I,
  parse: () => O,
  parseDate: () => v,
  strict: () => y
});
var Chunk717319 = require("./717319.js"),
  Chunk201129 = require("./201129.js"),
  Chunk86465 = require("./86465.js"),
  Chunk894186 = require("./894186.js"),
  Chunk598424 = require("./598424.js"),
  Chunk405909 = require("./405909.js"),
  Chunk659124 = require("./659124.js"),
  Chunk279345 = require("./279345.js"),
  Chunk872997 = require("./872997.js"),
  Chunk437506 = require("./437506.js"),
  Chunk508307 = require("./508307.js"),
  Chunk221536 = require("./221536.js"),
  Chunk411342 = require("./411342.js"),
  Chunk155751 = require("./155751.js"),
  Chunk180337 = require("./180337.js"),
  Chunk772182 = require("./772182.js");
let b = new Chunk201129.k(S()),
  y = new Chunk201129.k(I(true));

function O(e, t, n) {
  return b.parse(e, t, n)
}

function v(e, t, n) {
  return b.parseDate(e, t, n)
}

function S(e = true) {
  let t = I(false, e);
  return t.parsers.unshift(new s.Z), t.parsers.unshift(new l.Z), t.parsers.unshift(new E.Z), t
}

function I(e = true, t = true) {
  return (0, r.l)({
    parsers: [new c.Z(t), new h.Z, new u.Z, new _.Z, new m.Z, new g.Z, new p.Z],
    refiners: [new d.Z, new f.Z]
  }, e)
}