/** Chunk was on 30485 **/
/** chunk id: 385465, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  d: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk264686 = require("./264686.js"),
  Chunk419954 = require("./419954.js"),
  Chunk803224 = require("./803224.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zD)(Chunk780964.X.DESKTOP_NOTIFICATIONS, {
  useTitle: () => o.intl.string(o.t["/0WCll"]),
  useSubtitle: () => o.intl.string(o.t.wF9ih3),
  useValue: () => (0, n.bG)([r.A], () => r.A.getDesktopType()) !== a.nRU.NEVER,
  setValue: t => l.default.setDesktopType(t ? a.nRU.ALL : a.nRU.NEVER)
})