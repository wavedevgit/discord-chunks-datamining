/** Chunk was on web.js **/
/** chunk id: 699978, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => o
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk787392 = require("./787392.js");

function o(e) {
  return (0, a.yK)([s.A], () => i()(s.A.getUserVerifiedKeys(e)).entries().map(e => {
    let [t, n] = e;
    return {
      verifiedKey: t,
      timestamp: n
    }
  }).sortBy(e => false * e.timestamp).value())
}