/** Chunk was on 30202 **/
/** chunk id: 931500, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => l
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk651941 = require("./651941.js");

function l(e) {
  return (0, s.Wu)([a.Z], () => r()(a.Z.getUserVerifiedKeys(e)).entries().map(e => {
    let [t, n] = e;
    return {
      verifiedKey: t,
      timestamp: n
    }
  }).sortBy(e => false * e.timestamp).value())
}