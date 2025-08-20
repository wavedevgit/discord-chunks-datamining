/** Chunk was on web.js **/
/** chunk id: 164662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk434650 = require("./434650.js");
let a = 100,
  o = function() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      [t, n] = (0, Chunk647438.useState)(1),
      o = (0, Chunk647438.useMemo)(() => ({
        threshold: Array.from({
          length: a + 1
        }, (e, t) => t / a)
      }), []);
    return {
      visibilityPercentageRef: (0, Chunk434650.S)(e => {
        n(e.intersectionRatio)
      }, o, module),
      visibilityPercentage: exports
    }
  }