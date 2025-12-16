/** Chunk was on 77069 **/
/** chunk id: 301577, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  r: () => r
});
var Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk797525 = require("./797525.js"),
  Chunk388032 = require("./388032.jsx");
let r = (0, Chunk509613.qs)(Chunk313789.n.OS_START_MINIMIZED, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.n7Yjes),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.o2FSjB),
  useValue: () => Chunk797525.Vh.useState(t => !!t.openOnStartup && t.startMinimized),
  setValue: Chunk797525.py,
  useDisabled: () => !Chunk797525.Vh.useState(t => t.openOnStartup)
})