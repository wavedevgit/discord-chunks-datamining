/** Chunk was on 28979 **/
/** chunk id: 816226, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  u: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk172272 = require("./172272.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk111162 = require("./111162.js"),
  Chunk780964 = require("./780964.js");
let a = (0, Chunk419954.sN)(Chunk780964.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
  useTitle: () => "Vertical Grid Spacing",
  useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
  usePredicate: () => (0, n.bG)([r.default], () => r.default.layoutDebuggingEnabled),
  minValue: 0,
  maxValue: Chunk172272.YR,
  markers: Array.from({
    length: Chunk172272.YR + 1
  }, (t, e) => e),
  onValueRender: t => "".concat(Math.round(t), "px"),
  onMarkerRender: t => t % 4 == 0 ? "".concat(t) : true,
  getInitialValue: () => l.Or.getState().verticalSpacing,
  asValueChanges: t => {
    l.Or.getState().setVerticalSpacing(t)
  }
})