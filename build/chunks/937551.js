/** Chunk was on 4670 **/
/** chunk id: 937551, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  V: () => o
});
var Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.sN)(Chunk780964.X.SATURATION, {
  useTitle: () => u.intl.string(u.t["5PWWCY"]),
  useSubtitle: () => u.intl.string(u.t["0PbE/H"]),
  markers: Chunk652215.hH7.SATURATION_INCREMENTS,
  onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : true,
  stickToMarkers: true,
  minValue: 0,
  maxValue: 1,
  getInitialValue: () => l.A.saturation,
  setValue: e => (0, n.HU)(e)
})