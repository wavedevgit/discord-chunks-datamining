/** Chunk was on 77069 **/
/** chunk id: 305314, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  L: () => _
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
    useTitle: () => c.intl.string(c.t.i19n5L),
    useSubtitle: () => c.intl.string(c.t.ip0uSf),
    markers: Chunk981631.yqN.ZOOM_SCALES,
    stickToMarkers: true,
    minValue: Chunk981631.yqN.ZOOM_SCALES["0"],
    maxValue: Chunk981631.yqN.ZOOM_SCALES[Chunk981631.yqN.ZOOM_SCALES.length - 1],
    getInitialValue: () => r.Z.zoom,
    onValueRender: t => "".concat(t.toFixed(0), "%"),
    asValueChanges: t => (0, u.cq)(t)
  }),
  d = (0, Chunk509613.ON)(Chunk313789.n.APPEARANCE_ZOOM_HELPER_TEXT, {
    useSearchTerms: () => [c.intl.string(c.t.i19n5L), c.intl.string(c.t.ip0uSf)],
    Component: () => (0, i.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: c.intl.format(c.t.OMkSUo, {
        modKey: s.Z.modKey
      })
    })
  }),
  _ = (0, Chunk509613.$l)(Chunk313789.n.APPEARANCE_ZOOM_LIST, {
    usePredicate: () => o.isPlatformEmbedded,
    buildLayout: () => [E, d]
  })