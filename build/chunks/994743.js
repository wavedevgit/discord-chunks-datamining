/** Chunk was on 30485 **/
/** chunk id: 994743, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  N: () => u
});
var Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk604095 = require("./604095.js"),
  Chunk985018 = require("./985018.jsx");
let u = (0, Chunk419954.zD)(Chunk780964.X.OS_START_MINIMIZED, {
  useTitle: () => r.intl.string(r.t.n7Yjes),
  useSubtitle: () => r.intl.string(r.t.o2FSjB),
  useValue: () => s.fk.useState(t => !!t.openOnStartup && t.startMinimized),
  setValue: Chunk604095.AZ,
  useDisabled: () => !s.fk.useState(t => t.openOnStartup)
})