/** Chunk was on 28979 **/
/** chunk id: 744149, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  S: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.zD)(Chunk780964.X.STREAMING_ADVANCED_SCREENSHARE, {
  useTitle: () => a.intl.string(a.t.GmWk2E),
  useSearchTerms: () => [a.intl.string(a.t["Fj/xn1"])],
  useSubtitle: () => a.intl.string(a.t["Fj/xn1"]),
  useValue: function() {
    return (0, n.bG)([r.A], () => r.A.getVideoHook())
  },
  setValue: Chunk827343.A.setVideoHook,
  usePredicate: function() {
    return (0, n.bG)([r.A], () => r.A.supportsVideoHook())
  }
})