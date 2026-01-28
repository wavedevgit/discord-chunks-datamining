/** Chunk was on 5606 **/
/** chunk id: 103733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js");
let l = function() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    [t, n] = (0, r.useState)(1),
    l = (0, r.useMemo)(() => ({
      threshold: Array.from({
        length: 101
      }, (e, t) => t / 100)
    }), []);
  return {
    visibilityPercentageRef: (0, i.B)(e => {
      n(e.intersectionRatio)
    }, l, e),
    visibilityPercentage: t
  }
}