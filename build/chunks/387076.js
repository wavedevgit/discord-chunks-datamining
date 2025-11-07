/** Chunk was on 9452 **/
/** chunk id: 387076, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk325808 = require("./325808.jsx"),
  Chunk595373 = require("./595373.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.UO)(Chunk313789.n.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.GCNMM8),
  usePredicate: Chunk595373.p,
  getInitialValue: function() {
    let {
      delay: t
    } = Chunk131951.Z.getModeOptions();
    return module
  },
  setValue: function(t) {
    i.Z.setMode(o.pM4.PUSH_TO_TALK, {
      delay: t
    })
  },
  minValue: 0,
  maxValue: Chunk981631.qhL,
  onValueRender: Chunk325808.cO,
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t["pS+K2L"]), Chunk388032.intl.string(Chunk388032.t.nuFtHH)]
})