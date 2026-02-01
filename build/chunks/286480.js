/** Chunk was on 30485 **/
/** chunk id: 286480, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  q: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk172272 = require("./172272.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk111162 = require("./111162.js"),
  Chunk780964 = require("./780964.js");
let a = (0, Chunk419954.sN)(Chunk780964.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
  useTitle: () => "Horizontal Grid Spacing",
  useSubtitle: () => "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
  usePredicate: () => (0, n.bG)([r.default], () => r.default.layoutDebuggingEnabled),
  minValue: 0,
  maxValue: Chunk172272.YR,
  markers: Array.from({
    length: Chunk172272.YR + 1
  }, (t, e) => e),
  onValueRender: t => "".concat(Math.round(t), "px"),
  onMarkerRender: t => t % 4 == 0 ? "".concat(t) : true,
  getInitialValue: () => l.Or.getState().horizontalSpacing,
  asValueChanges: t => {
    l.Or.getState().setHorizontalSpacing(t)
  }
})