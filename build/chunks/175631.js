/** Chunk was on 28979 **/
/** chunk id: 175631, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  s: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk926919 = require("./926919.js"),
  Chunk419954 = require("./419954.js"),
  Chunk111162 = require("./111162.js"),
  Chunk780964 = require("./780964.js");
let a = (0, Chunk419954.zD)(Chunk780964.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
  useTitle: () => "Only Show Preview App Collections",
  useSubtitle: () => "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
  useValue: () => (0, n.bG)([r.default], () => r.default.onlyShowPreviewAppCollections),
  setValue: t => (0, l.x)({
    onlyShowPreviewAppCollections: t
  })
})