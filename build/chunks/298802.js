/** Chunk was on 4670 **/
/** chunk id: 298802, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  G: () => T
});
var Chunk775121 = require("./775121.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk419954 = require("./419954.js"),
  Chunk723702 = require("./723702.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.sN)(Chunk780964.X.APPEARANCE_ZOOM, {
  usePredicate: () => a.isPlatformEmbedded,
  useTitle: () => d.intl.string(d.t.i19n5L),
  useSubtitle: () => d.intl.string(d.t.ip0uSf),
  markers: Chunk652215.hH7.ZOOM_SCALES,
  stickToMarkers: true,
  minValue: Chunk652215.hH7.ZOOM_SCALES["0"],
  maxValue: Chunk652215.hH7.ZOOM_SCALES[Chunk652215.hH7.ZOOM_SCALES.length - 1],
  useDefaultValue: () => o.hH7.ZOOM_DEFAULT,
  getInitialValue: () => s.A.zoom,
  onValueRender: e => "".concat(e.toFixed(0), "%"),
  asValueChanges: e => (0, l.Qp)(e),
  useSearchTerms: () => [d.intl.string(d.t.ip0uSf)],
  useHintText: () => d.intl.format(d.t.OMkSUo, {
    modKey: n.A.modKey
  })
})