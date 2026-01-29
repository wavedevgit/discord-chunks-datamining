/** Chunk was on 4670 **/
/** chunk id: 985667, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  i: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zD)(Chunk780964.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
  useTitle: () => o.intl.string(o.t.uancuJ),
  useSubtitle: () => o.intl.string(o.t.I1Eoqq),
  useValue: function() {
    return (0, n.bG)([r.A], () => r.A.getQoS())
  },
  setValue: function(e) {
    l.A.setQoS(e)
  },
  usePredicate: function() {
    return (0, n.bG)([r.A], () => r.A.supports(u.O5.QOS))
  }
})