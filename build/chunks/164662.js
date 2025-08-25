/** Chunk was on web.js **/
/** chunk id: 164662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk434650 = require("./434650.js");
let o = 100,
  a = function() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      [t, n] = (0, Chunk647438.useState)(1),
      a = (0, Chunk647438.useMemo)(() => ({
        threshold: Array.from({
          length: o + 1
        }, (e, t) => t / o)
      }), []);
    return {
      visibilityPercentageRef: (0, Chunk434650.S)(e => {
        n(e.intersectionRatio)
      }, a, module),
      visibilityPercentage: exports
    }
  }