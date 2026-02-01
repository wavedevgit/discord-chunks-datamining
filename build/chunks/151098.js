/** Chunk was on 30485 **/
/** chunk id: 151098, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  t: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk926919 = require("./926919.js"),
  Chunk419954 = require("./419954.js"),
  Chunk111162 = require("./111162.js"),
  Chunk780964 = require("./780964.js");
let a = (0, Chunk419954.zD)(Chunk780964.X.DISABLE_APP_COLLECTIONS_CACHE, {
  useTitle: () => "Disable Application Collections Cache",
  useSubtitle: () => "Forces application collection updates to be shown immediately.",
  useDisabled: () => (0, n.bG)([r.default], () => r.default.onlyShowPreviewAppCollections),
  useValue: () => (0, n.bG)([r.default], () => r.default.disableAppCollectionsCache || r.default.onlyShowPreviewAppCollections),
  setValue: t => (0, l.x)({
    disableAppCollectionsCache: t
  })
})