/** Chunk was on web.js **/
/** chunk id: 164662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js");
let a = 100,
  o = function() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      [t, n] = (0, r.useState)(1),
      o = (0, r.useMemo)(() => ({
        threshold: Array.from({
          length: a + 1
        }, (e, t) => t / a)
      }), []);
    return {
      visibilityPercentageRef: (0, i.S)(e => {
        n(e.intersectionRatio)
      }, o, e),
      visibilityPercentage: t
    }
  }