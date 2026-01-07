/** Chunk was on 77069 **/
/** chunk id: 91981, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  W: () => T
});
var Chunk818710 = require("./818710.js"),
  Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk546997 = require("./546997.jsx"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.qs)(Chunk313789.n.STREAMING_OS_MENU_SCREEN_CAPTURE, {
  useTitle: () => o.intl.string(o.t.lt8rRx),
  useSubtitle: () => o.intl.string(o.t.ie1mgY),
  useValue: function() {
    return (0, l.e7)([u.Z], () => u.Z.getUseSystemScreensharePicker())
  },
  setValue: Chunk546997.E,
  usePredicate: function() {
    return (0, l.e7)([u.Z], () => u.Z.supportsSystemScreensharePicker() && (0, i.V5)())
  }
})