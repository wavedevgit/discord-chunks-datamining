/** Chunk was on web.js **/
/** chunk id: 103733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js");
let a = 100,
  s = function() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      [t, n] = (0, r.useState)(1),
      s = (0, r.useMemo)(() => ({
        threshold: Array.from({
          length: a + 1
        }, (e, t) => t / a)
      }), []);
    return {
      visibilityPercentageRef: (0, i.B)(e => {
        n(e.intersectionRatio)
      }, s, e),
      visibilityPercentage: t
    }
  }