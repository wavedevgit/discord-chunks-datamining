/** Chunk was on 28979 **/
/** chunk id: 811131, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  B: () => T
});
var Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let o = t => "".concat(t.toFixed(0), "px"),
  T = (0, Chunk419954.sN)(Chunk780964.X.APPEARANCE_FONT_SCALING, {
    useTitle: () => a.intl.string(a.t.qPOqoK),
    useSubtitle: () => a.intl.string(a.t.XrtbPo),
    markers: Chunk652215.hH7.FONT_SIZES,
    stickToMarkers: true,
    minValue: Chunk652215.hH7.FONT_SIZES["0"],
    maxValue: Chunk652215.hH7.FONT_SIZES[Chunk652215.hH7.FONT_SIZES.length - 1],
    useDefaultValue: () => u.hH7.FONT_SIZE_DEFAULT,
    getInitialValue: () => l.A.fontSize,
    onValueRender: o,
    onMarkerRender: o,
    asValueChanges: t => (0, n.XS)(t)
  })