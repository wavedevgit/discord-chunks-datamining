/** Chunk was on web.js **/
/** chunk id: 710959, original params: e,t,n (module,exports,re quire) **/
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
  Chunk659124 = require("./659124.js"),
  Chunk442178 = require("./442178.js"),
  Chunk37747 = require("./37747.js"),
  Chunk200861 = require("./200861.js"),
  Chunk748767 = require("./748767.js"),
  Chunk560118 = require("./560118.js"),
  Chunk193557 = require("./193557.js"),
  Chunk436189 = require("./436189.js"),
  Chunk740142 = require("./740142.js"),
  Chunk442235 = require("./442235.js"),
  Chunk362337 = require("./362337.js"),
  Chunk107884 = require("./107884.js");
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
  return t.parsers.unshift(new h.Z), t.parsers.unshift(new _.Z), t.parsers.unshift(new g.Z), t
}

function I(e = true, t = true) {
  return (0, r.l)({
    parsers: [new l.Z, new s.Z(t), new c.Z, new d.Z, new m.Z, new u.Z, new E.Z],
    refiners: [new f.Z, new p.Z]
  }, e)
}