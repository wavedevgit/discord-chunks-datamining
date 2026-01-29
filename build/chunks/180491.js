/** Chunk was on 4670 **/
/** chunk id: 180491, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  m: () => d
});
var Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk903427 = require("./903427.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.sN)(Chunk780964.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
  useTitle: () => o.intl.string(o.t.GCNMM8),
  useSearchTerms: () => [o.intl.string(o.t["pS+K2L"]), o.intl.string(o.t.nuFtHH)],
  setValue: function(e) {
    n.A.setMode(u.TBI.PUSH_TO_TALK, {
      delay: e
    })
  },
  minValue: 0,
  maxValue: Chunk652215.IjB,
  getInitialValue: function() {
    let {
      delay: e
    } = s.A.getModeOptions();
    return e
  },
  onValueRender: function(e) {
    return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms")
  },
  usePredicate: Chunk903427.P
})