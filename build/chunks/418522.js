/** Chunk was on web.js **/
/** chunk id: 418522, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  GB: () => S,
  casual: () => A,
  createCasualConfiguration: () => N,
  createConfiguration: () => w,
  parse: () => T,
  parseDate: () => C,
  strict: () => I
});
var Chunk191824 = require("./191824.js"),
  Chunk998275 = require("./998275.js"),
  Chunk642714 = require("./642714.js"),
  Chunk288888 = require("./288888.js"),
  Chunk210231 = require("./210231.js"),
  Chunk650073 = require("./650073.js"),
  Chunk887572 = require("./887572.js"),
  Chunk202262 = require("./202262.js"),
  Chunk940717 = require("./940717.js"),
  Chunk699176 = require("./699176.js"),
  Chunk662042 = require("./662042.js"),
  Chunk125659 = require("./125659.js"),
  Chunk127858 = require("./127858.js"),
  Chunk759275 = require("./759275.js"),
  Chunk732871 = require("./732871.js"),
  Chunk23836 = require("./23836.js"),
  Chunk880683 = require("./880683.js"),
  Chunk774188 = require("./774188.js"),
  Chunk789374 = require("./789374.js"),
  Chunk740789 = require("./740789.js");
let A = new Chunk880683.u(N(false)),
  I = new Chunk880683.u(w(true, false)),
  S = new Chunk880683.u(w(false, true));

function T(e, t, n) {
  return A.parse(e, t, n)
}

function C(e, t, n) {
  return A.parseDate(e, t, n)
}

function N(e = false) {
  let t = w(false, e);
  return t.parsers.unshift(new h.A), t.parsers.unshift(new m.A), t.parsers.unshift(new s.A), t.parsers.unshift(new E.A), t.parsers.unshift(new O.A), t
}

function w(e = true, t = false) {
  return (0, _.i)({
    parsers: [new b.A(t), new r.A, new i.A, new a.A, new g.A, new o.A, new l.A, new c.A(e), new u.A(e), new d.A(e)],
    refiners: [new v.A, new p.A, new f.A]
  }, e)
}