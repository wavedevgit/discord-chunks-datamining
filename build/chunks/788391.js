/** Chunk was on 77069 **/
/** chunk id: 788391, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  S: () => T
});
var Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let o = t => "".concat(t.toFixed(0), "px"),
  T = (0, Chunk509613.UO)(Chunk313789.n.APPEARANCE_FONT_SCALING, {
    useTitle: () => a.intl.string(a.t.qPOqoK),
    useSubtitle: () => a.intl.string(a.t.XrtbPo),
    markers: Chunk981631.yqN.FONT_SIZES,
    stickToMarkers: true,
    minValue: Chunk981631.yqN.FONT_SIZES["0"],
    maxValue: Chunk981631.yqN.FONT_SIZES[Chunk981631.yqN.FONT_SIZES.length - 1],
    getInitialValue: () => l.Z.fontSize,
    onValueRender: o,
    onMarkerRender: o,
    asValueChanges: t => (0, i.oL)(t)
  })