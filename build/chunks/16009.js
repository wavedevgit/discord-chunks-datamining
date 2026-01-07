/** Chunk was on 77069 **/
/** chunk id: 16009, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  X: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk383451 = require("./383451.js"),
  Chunk313789 = require("./313789.js"),
  Chunk595373 = require("./595373.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.qs)(Chunk313789.n.VOICE_PUSH_TO_TALK_LATCHING_SETTING, {
  useTitle: () => S.intl.string(S.t.EGn1eN),
  useSubtitle: () => S.intl.string(S.t.iT257i),
  useSearchTerms: () => [S.intl.string(S.t["pS+K2L"]), S.intl.string(S.t.nuFtHH)],
  useValue: function() {
    return (0, i.e7)([u.Z], () => {
      let {
        pttLatchingEnabled: t
      } = u.Z.getModeOptions();
      return null != t && t
    })
  },
  setValue: function(t) {
    l.Z.setMode(T.pM.PUSH_TO_TALK, {
      pttLatchingEnabled: t
    })
  },
  usePredicate: function() {
    let t = (0, o.J)(),
      {
        enableLatching: e
      } = (0, r.H)({
        location: "PushToTalkLatchingSetting"
      });
    return t && e
  }
})