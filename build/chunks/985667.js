/** Chunk was on 28979 **/
/** chunk id: 985667, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  i: () => T
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.zD)(Chunk780964.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
  useTitle: () => o.intl.string(o.t.uancuJ),
  useSubtitle: () => o.intl.string(o.t.I1Eoqq),
  useValue: function() {
    return (0, n.bG)([r.A], () => r.A.getQoS())
  },
  setValue: function(t) {
    l.A.setQoS(t)
  },
  usePredicate: function() {
    return (0, n.bG)([r.A], () => r.A.supports(a.O5.QOS))
  }
})