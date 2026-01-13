/** Chunk was on 77069 **/
/** chunk id: 305314, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  L: () => S
});
var Chunk714338 = require("./714338.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk509613 = require("./509613.js"),
  Chunk358085 = require("./358085.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.UO)(Chunk313789.n.APPEARANCE_ZOOM, {
  usePredicate: () => r.isPlatformEmbedded,
  useTitle: () => T.intl.string(T.t.i19n5L),
  useSubtitle: () => T.intl.string(T.t.ip0uSf),
  markers: Chunk981631.yqN.ZOOM_SCALES,
  stickToMarkers: true,
  minValue: Chunk981631.yqN.ZOOM_SCALES["0"],
  maxValue: Chunk981631.yqN.ZOOM_SCALES[Chunk981631.yqN.ZOOM_SCALES.length - 1],
  useDefaultValue: () => o.yqN.ZOOM_DEFAULT,
  getInitialValue: () => s.Z.zoom,
  onValueRender: t => "".concat(t.toFixed(0), "%"),
  asValueChanges: t => (0, l.cq)(t),
  useSearchTerms: () => [T.intl.string(T.t.ip0uSf)],
  useHintText: () => T.intl.format(T.t.OMkSUo, {
    modKey: i.Z.modKey
  })
})