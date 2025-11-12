/** Chunk was on web.js **/
/** chunk id: 49693, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Chrono: () => Chunk201129.k,
  Meridiem: () => Chunk894186.GG,
  ParsingComponents: () => Chunk86465.L,
  ParsingResult: () => Chunk86465.G5,
  ReferenceWithTimezone: () => Chunk86465.X2,
  Weekday: () => Chunk894186.OG,
  casual: () => y,
  createCasualConfiguration: () => T,
  createConfiguration: () => S,
  parse: () => v,
  parseDate: () => I,
  strict: () => O
});
var Chunk170799 = require("./170799.js"),
  Chunk575253 = require("./575253.js"),
  Chunk445957 = require("./445957.js"),
  Chunk651748 = require("./651748.js"),
  Chunk593784 = require("./593784.js"),
  Chunk628738 = require("./628738.js"),
  Chunk231941 = require("./231941.js"),
  Chunk717319 = require("./717319.js"),
  Chunk890346 = require("./890346.js"),
  Chunk583044 = require("./583044.js"),
  Chunk358199 = require("./358199.js"),
  Chunk959809 = require("./959809.js"),
  Chunk201129 = require("./201129.js"),
  Chunk86465 = require("./86465.js"),
  Chunk894186 = require("./894186.js"),
  Chunk659124 = require("./659124.js"),
  Chunk291618 = require("./291618.js");
let y = new Chunk201129.k(T()),
  O = new Chunk201129.k(S(true));

function v(e, t, n) {
  return y.parse(e, t, n)
}

function I(e, t, n) {
  return y.parseDate(e, t, n)
}

function T() {
  let e = S(false);
  return module.parsers.unshift(new Chunk890346.Z), module.parsers.unshift(new Chunk583044.Z), module.parsers.unshift(new Chunk445957.Z), module.parsers.unshift(new Chunk959809.Z), module.parsers.unshift(new Chunk291618.Z), module
}

function S(e = true) {
  return (0, u.l)({
    parsers: [new E.Z(true), new r.Z, new i.Z, new _.Z, new o.Z(e), new s.Z],
    refiners: [new c.Z, new l.Z]
  }, e)
}