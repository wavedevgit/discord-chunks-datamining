/** Chunk was on 75708 **/
/** chunk id: 164662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => s
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk434650 = require("./434650.js");
let s = function() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    [t, n] = (0, Chunk73800.useState)(1),
    s = (0, Chunk73800.useMemo)(() => ({
      threshold: Array.from({
        length: 101
      }, (e, t) => t / 100)
    }), []);
  return {
    visibilityPercentageRef: (0, Chunk434650.S)(e => {
      n(e.intersectionRatio)
    }, s, module),
    visibilityPercentage: exports
  }
}