/** Chunk was on 28979 **/
/** chunk id: 664962, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  K: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk926919 = require("./926919.js"),
  Chunk419954 = require("./419954.js"),
  Chunk111162 = require("./111162.js"),
  Chunk780964 = require("./780964.js");
let a = (0, Chunk419954.zD)(Chunk780964.X.AXE_AUDITING, {
  useTitle: () => "Enable Accessibility Auditing",
  useSubtitle: () => "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
  usePredicate: () => false,
  useValue: () => (0, n.bG)([r.default], () => r.default.isAxeEnabled),
  setValue: t => (0, l.x)({
    axeEnabled: t
  })
})