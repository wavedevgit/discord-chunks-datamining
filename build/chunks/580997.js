/** Chunk was on 4670 **/
/** chunk id: 580997, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk723702 = require("./723702.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zD)(Chunk780964.X.VOICE_SILENCE_WARNING_SETTING, {
  useTitle: () => o.intl.string(o.t["4rsOPQ"]),
  useSubtitle: () => o.intl.string(o.t.jtiiCw),
  useValue: function() {
    return (0, n.bG)([r.A], () => r.A.getEnableSilenceWarning())
  },
  setValue: function(e) {
    l.A.setSilenceWarning(e)
  },
  usePredicate: function() {
    return a.isPlatformEmbedded
  }
})