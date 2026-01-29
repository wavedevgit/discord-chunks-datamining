/** Chunk was on 4670 **/
/** chunk id: 859905, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  K: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk926919 = require("./926919.js"),
  Chunk419954 = require("./419954.js"),
  Chunk111162 = require("./111162.js"),
  Chunk780964 = require("./780964.js");
let u = (0, Chunk419954.zD)(Chunk780964.X.KEYBOARD_MISMATCHES, {
  useTitle: () => "Enable Logging of Keyboard Mismatches",
  useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
  useValue: () => (0, n.bG)([r.default], () => r.default.logKeyboardMismatches),
  setValue: e => (0, l.x)({
    logKeyboardMismatches: e
  })
})