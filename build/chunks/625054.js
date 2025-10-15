/** Chunk was on 27978 **/
/** chunk id: 625054, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk525654 = require("./525654.js"),
  i = require.n(Chunk525654),
  Chunk643191 = require("./643191.js");
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
  getTimeSinceNavigationStart: () => Date.now() - Chunk643191.mb
}