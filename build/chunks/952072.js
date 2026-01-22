/** Chunk was on 86142 **/
/** chunk id: 952072, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk481613 = require("./481613.js"),
  i = require.n(Chunk481613),
  Chunk547830 = require("./547830.js");
let l = {
  dump(e) {
    let t;
    null != performance.memory && (t = {
      jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
      totalJSHeapSize: performance.memory.totalJSHeapSize,
      usedJSHeapSize: performance.memory.usedJSHeapSize
    }), e({
      browser: {
        name: i().name,
        version: i().version
      },
      os: {
        name: i().os.family,
        version: i().os.version
      },
      memory: t
    })
  },
  getTimeSinceNavigationStart: () => Date.now() - s.fL
}