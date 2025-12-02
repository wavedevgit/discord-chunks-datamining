/** Chunk was on 77069 **/
/** chunk id: 754680, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.qs)(Chunk313789.n.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.BbESsg),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.LoOB1F),
  usePredicate: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isAdvancedVoiceActivitySupported() && Chunk131951.Z.isInputProfileCustom())
  },
  useDisabled: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => {
      let t = Chunk131951.Z.getMode(),
        e = Chunk131951.Z.getModeOptions().autoThreshold;
      return module === Chunk981631.pM4.VOICE_ACTIVITY && exports
    })
  },
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => {
      let {
        vadUseKrisp: t
      } = Chunk131951.Z.getModeOptions();
      return module
    })
  },
  setValue: function(t) {
    let e = r.Z.getMode();
    l.Z.setMode(e, {
      vadUseKrisp: t
    })
  }
})