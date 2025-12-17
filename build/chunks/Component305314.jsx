/** Chunk was on 77069 **/
/** chunk id: 305314, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  L: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk714338 = require("./714338.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk509613 = require("./509613.js"),
  Chunk358085 = require("./358085.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.UO)(Chunk313789.n.APPEARANCE_ZOOM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.i19n5L),
    useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.ip0uSf),
    markers: Chunk981631.yqN.ZOOM_SCALES,
    stickToMarkers: true,
    minValue: Chunk981631.yqN.ZOOM_SCALES["0"],
    maxValue: Chunk981631.yqN.ZOOM_SCALES[Chunk981631.yqN.ZOOM_SCALES.length - 1],
    getInitialValue: () => Chunk607070.Z.zoom,
    onValueRender: t => "".concat(t.toFixed(0), "%"),
    asValueChanges: t => (0, u.cq)(t)
  }),
  d = (0, Chunk509613.ON)(Chunk313789.n.APPEARANCE_ZOOM_HELPER_TEXT, {
    useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.i19n5L), Chunk388032.intl.string(Chunk388032.t.ip0uSf)],
    Component: () => (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: Chunk388032.intl.format(Chunk388032.t.OMkSUo, {
        modKey: Chunk714338.Z.modKey
      })
    })
  }),
  g = (0, Chunk509613.$l)(Chunk313789.n.APPEARANCE_ZOOM_LIST, {
    usePredicate: () => Chunk358085.isPlatformEmbedded,
    buildLayout: () => [E, d]
  })