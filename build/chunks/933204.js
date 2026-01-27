/** Chunk was on web.js **/
/** chunk id: 933204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => c,
  T: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk71393 = require("./71393.js"),
  Chunk209932 = require("./209932.js");

function s(e, t) {
  return e.filter(e => null == t.get(e))
}

function l() {
  let e = (0, i.yK)([a.A], () => a.A.getGuildIds()),
    t = (0, i.bG)([o.A], () => o.A.getSounds());
  return (0, r.useMemo)(() => s(e, t), [e, t])
}

function c() {
  return s(a.A.getGuildIds(), o.A.getSounds())
}