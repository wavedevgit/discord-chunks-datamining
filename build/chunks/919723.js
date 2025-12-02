/** Chunk was on 77069 **/
/** chunk id: 919723, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk208113 = require("./208113.jsx"),
  Chunk680924 = require("./680924.jsx"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.Em)(Chunk313789.n.VOICE_AUDIO_SUBSYSTEM_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.wVBHr0),
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getAudioSubsystem())
  },
  useOptions: function() {
    let {
      legacyAudioSubsystemSupported: t,
      experimentalAudioSubsystemSupported: e,
      automaticAudioSubsystemSupported: n
    } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
      legacyAudioSubsystemSupported: Chunk131951.Z.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM),
      experimentalAudioSubsystemSupported: Chunk131951.Z.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
      automaticAudioSubsystemSupported: Chunk131951.Z.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM)
    }));
    return Chunk473749.useMemo(() => (0, Chunk208113.z)(module, exports, require), [require, exports, module])
  },
  setValue: function(t) {
    (0, c.Z)(E.intl.string(E.t.uY7AcQ), E.intl.string(E.t.gBqik6), () => s.Z.setAudioSubsystem(t))
  },
  usePredicate: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.shouldOfferManualSubsystemSelection())
  }
})