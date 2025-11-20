/** Chunk was on 9452 **/
/** chunk id: 16009, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk383451 = require("./383451.js"),
  Chunk313789 = require("./313789.js"),
  Chunk595373 = require("./595373.jsx"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.qs)(Chunk313789.n.VOICE_PUSH_TO_TALK_LATCHING_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.EGn1eN),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.iT257i),
  usePredicate: function() {
    let t = (0, Chunk595373.J)(),
      {
        enableLatching: e
      } = (0, Chunk383451.H)({
        location: "PushToTalkLatchingSetting"
      });
    return module && exports
  },
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => {
      let {
        pttLatchingEnabled: t
      } = Chunk131951.Z.getModeOptions();
      return null != module && module
    })
  },
  setValue: function(t) {
    l.Z.setMode(c.pM.PUSH_TO_TALK, {
      pttLatchingEnabled: t
    })
  },
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t["pS+K2L"]), Chunk388032.intl.string(Chunk388032.t.nuFtHH)]
})