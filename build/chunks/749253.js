/** Chunk was on 30485 **/
/** chunk id: 749253, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  V: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk926919 = require("./926919.js"),
  Chunk419954 = require("./419954.js"),
  Chunk111162 = require("./111162.js"),
  Chunk780964 = require("./780964.js");
let a = (0, Chunk419954.zD)(Chunk780964.X.LAYOUT_DEBUGGING, {
  useTitle: () => "Enable Layout Debugging",
  useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
  useValue: () => (0, n.bG)([r.default], () => r.default.layoutDebuggingEnabled),
  setValue: t => {
    (0, l.x)({
      layoutDebuggingEnabled: t
    })
  }
})