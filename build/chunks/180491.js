/** Chunk was on 28979 **/
/** chunk id: 180491, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  m: () => A
});
var Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk330688 = require("./330688.jsx"),
  Chunk903427 = require("./903427.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.sN)(Chunk780964.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
  useTitle: () => T.intl.string(T.t.GCNMM8),
  useSearchTerms: () => [T.intl.string(T.t["pS+K2L"]), T.intl.string(T.t.nuFtHH)],
  setValue: function(t) {
    n.A.setMode(o.TBI.PUSH_TO_TALK, {
      delay: t
    })
  },
  minValue: 0,
  maxValue: Chunk652215.IjB,
  getInitialValue: function() {
    let {
      delay: t
    } = s.A.getModeOptions();
    return t
  },
  onValueRender: Chunk330688.hH,
  usePredicate: Chunk903427.P
})