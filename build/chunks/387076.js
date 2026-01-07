/** Chunk was on 77069 **/
/** chunk id: 387076, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  q: () => S
});
var Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk325808 = require("./325808.jsx"),
  Chunk595373 = require("./595373.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.UO)(Chunk313789.n.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
  useTitle: () => T.intl.string(T.t.GCNMM8),
  useSearchTerms: () => [T.intl.string(T.t["pS+K2L"]), T.intl.string(T.t.nuFtHH)],
  setValue: function(t) {
    i.Z.setMode(o.pM4.PUSH_TO_TALK, {
      delay: t
    })
  },
  minValue: 0,
  maxValue: Chunk981631.qhL,
  getInitialValue: function() {
    let {
      delay: t
    } = s.Z.getModeOptions();
    return t
  },
  onValueRender: Chunk325808.cO,
  usePredicate: Chunk595373.J
})