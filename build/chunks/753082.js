/** Chunk was on 28979 **/
/** chunk id: 753082, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  g: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk926919 = require("./926919.js"),
  Chunk419954 = require("./419954.js"),
  Chunk111162 = require("./111162.js"),
  Chunk780964 = require("./780964.js");
let a = (0, Chunk419954.zD)(Chunk780964.X.CSS_DEBUGGING, {
  useTitle: () => "Enable CSS Debugging",
  useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
  useValue: () => (0, n.bG)([r.default], () => r.default.cssDebuggingEnabled),
  setValue: t => {
    (0, l.x)({
      cssDebuggingEnabled: t
    }).then(() => {
      setTimeout(() => location.reload(), 500)
    })
  }
})