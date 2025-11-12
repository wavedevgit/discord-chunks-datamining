/** Chunk was on web.js **/
/** chunk id: 192157, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  GB: () => S,
  casual: () => I,
  createCasualConfiguration: () => N,
  createConfiguration: () => R,
  parse: () => A,
  parseDate: () => C,
  strict: () => T
});
var Chunk857376 = require("./857376.js"),
  Chunk604099 = require("./604099.js"),
  Chunk99389 = require("./99389.js"),
  Chunk111169 = require("./111169.js"),
  Chunk820897 = require("./820897.js"),
  Chunk157711 = require("./157711.js"),
  Chunk700043 = require("./700043.js"),
  Chunk474507 = require("./474507.js"),
  Chunk330564 = require("./330564.js"),
  Chunk838929 = require("./838929.js"),
  Chunk16927 = require("./16927.js"),
  Chunk717319 = require("./717319.js"),
  Chunk362398 = require("./362398.js"),
  Chunk467484 = require("./467484.js"),
  Chunk334695 = require("./334695.js"),
  Chunk709638 = require("./709638.js"),
  Chunk201129 = require("./201129.js"),
  Chunk659124 = require("./659124.js"),
  Chunk264126 = require("./264126.js"),
  Chunk283468 = require("./283468.js");
let I = new Chunk201129.k(N(false)),
  T = new Chunk201129.k(R(true, false)),
  S = new Chunk201129.k(R(false, true));

function A(e, t, n) {
  return I.parse(e, t, n)
}

function C(e, t, n) {
  return I.parseDate(e, t, n)
}

function N(e = false) {
  let t = R(false, e);
  return t.parsers.unshift(new h.Z), t.parsers.unshift(new m.Z), t.parsers.unshift(new o.Z), t.parsers.unshift(new E.Z), t.parsers.unshift(new O.Z), t
}

function R(e = true, t = false) {
  return (0, p.l)({
    parsers: [new y.Z(t), new r.Z, new i.Z, new a.Z, new g.Z, new s.Z, new l.Z, new c.Z(e), new u.Z(e), new d.Z(e)],
    refiners: [new v.Z, new _.Z, new f.Z]
  }, e)
}