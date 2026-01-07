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
  let e = (0, i.Wu)([a.Z], () => a.Z.getGuildIds()),
    t = (0, i.e7)([o.Z], () => o.Z.getSounds());
  return (0, r.useMemo)(() => s(e, t), [e, t])
}

function c() {
  return s(a.Z.getGuildIds(), o.Z.getSounds())
}