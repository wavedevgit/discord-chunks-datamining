/** Chunk was on web.js **/
/** chunk id: 931500, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => s
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk651941 = require("./651941.js");

function s(e) {
  return (0, a.Wu)([o.Z], () => i()(o.Z.getUserVerifiedKeys(e)).entries().map(e => {
    let [t, n] = e;
    return {
      verifiedKey: t,
      timestamp: n
    }
  }).sortBy(e => false * e.timestamp).value())
}