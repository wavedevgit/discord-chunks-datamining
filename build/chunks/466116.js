/** Chunk was on 28979 **/
/** chunk id: 466116, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  l: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.zD)(Chunk780964.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
  useTitle: () => a.intl.string(a.t.DFPXIG),
  useSubtitle: () => a.intl.string(a.t["UyRX+C"]),
  useValue: function() {
    return (0, n.bG)([r.A], () => r.A.getBypassSystemInputProcessing())
  },
  setValue: function(t) {
    l.A.setBypassSystemInputProcessing(t)
  },
  usePredicate: function() {
    return (0, n.bG)([r.A], () => r.A.showBypassSystemInputProcessing() && r.A.isInputProfileCustom())
  }
})