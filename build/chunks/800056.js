/** Chunk was on 28979 **/
/** chunk id: 800056, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  r: () => T
});
var Chunk574381 = require("./574381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk565824 = require("./565824.jsx"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.zD)(Chunk780964.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
  useTitle: () => o.intl.string(o.t.lt8rRx),
  useSubtitle: () => o.intl.string(o.t.ie1mgY),
  useValue: function() {
    return (0, l.bG)([r.A], () => r.A.getUseSystemScreensharePicker())
  },
  setValue: Chunk565824.I,
  usePredicate: function() {
    return (0, l.bG)([r.A], () => r.A.supportsSystemScreensharePicker() && (0, n.cX)())
  }
})