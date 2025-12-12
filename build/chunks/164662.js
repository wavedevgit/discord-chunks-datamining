/** Chunk was on web.js **/
/** chunk id: 164662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js");
let o = 100,
  a = function() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      [t, n] = (0, Chunk473749.useState)(1),
      a = (0, Chunk473749.useMemo)(() => ({
        threshold: Array.from({
          length: o + 1
        }, (e, t) => t / o)
      }), []);
    return {
      visibilityPercentageRef: (0, Chunk907331.S)(e => {
        n(e.intersectionRatio)
      }, a, module),
      visibilityPercentage: exports
    }
  }