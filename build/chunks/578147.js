/** Chunk was on 77069 **/
/** chunk id: 578147, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  O: () => o
});
var Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.UO)(Chunk313789.n.SATURATION, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["5PWWCY"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["0PbE/H"]),
  markers: Chunk981631.yqN.SATURATION_INCREMENTS,
  onMarkerRender: t => 100 * t % 2 == 0 ? "".concat(100 * t, "%") : true,
  stickToMarkers: true,
  minValue: 0,
  maxValue: 1,
  getInitialValue: () => Chunk607070.Z.saturation,
  setValue: t => (0, i.o2)(t)
})