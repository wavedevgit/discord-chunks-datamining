/** Chunk was on web.js **/
/** chunk id: 174470, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => c,
  j: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk430824 = require("./430824.js"),
  Chunk763296 = require("./763296.js");

function s(e, t) {
  return e.filter(e => null == t.get(e))
}

function l() {
  let e = (0, Chunk399606.Wu)([Chunk430824.Z], () => Chunk430824.Z.getGuildIds()),
    t = (0, Chunk399606.e7)([Chunk763296.Z], () => Chunk763296.Z.getSounds());
  return (0, Chunk473749.useMemo)(() => s(module, exports), [module, exports])
}

function c() {
  return s(Chunk430824.Z.getGuildIds(), Chunk763296.Z.getSounds())
}