/** Chunk was on 4670 **/
/** chunk id: 816226, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  u: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk172272 = require("./172272.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk111162 = require("./111162.js"),
  Chunk780964 = require("./780964.js");
let u = (0, Chunk419954.sN)(Chunk780964.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
  useTitle: () => "Vertical Grid Spacing",
  useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
  usePredicate: () => (0, n.bG)([r.default], () => r.default.layoutDebuggingEnabled),
  minValue: 0,
  maxValue: Chunk172272.YR,
  markers: Array.from({
    length: Chunk172272.YR + 1
  }, (e, t) => t),
  onValueRender: e => "".concat(Math.round(e), "px"),
  onMarkerRender: e => e % 4 == 0 ? "".concat(e) : true,
  getInitialValue: () => l.Or.getState().verticalSpacing,
  asValueChanges: e => {
    l.Or.getState().setVerticalSpacing(e)
  }
})