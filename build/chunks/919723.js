/** Chunk was on 77069 **/
/** chunk id: 919723, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  D: () => E
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk208113 = require("./208113.jsx"),
  Chunk680924 = require("./680924.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.Em)(Chunk313789.n.VOICE_AUDIO_SUBSYSTEM_SETTING, {
  useTitle: () => c.intl.string(c.t.wVBHr0),
  useValue: function() {
    return (0, l.e7)([r.Z], () => r.Z.getAudioSubsystem())
  },
  setValue: function(t) {
    (0, T.Z)(c.intl.string(c.t.uY7AcQ), c.intl.string(c.t.gBqik6), () => s.Z.setAudioSubsystem(t))
  },
  useOptions: function() {
    let {
      legacyAudioSubsystemSupported: t,
      experimentalAudioSubsystemSupported: e,
      automaticAudioSubsystemSupported: n
    } = (0, l.cj)([r.Z], () => ({
      legacyAudioSubsystemSupported: r.Z.supports(S.AN.LEGACY_AUDIO_SUBSYSTEM),
      experimentalAudioSubsystemSupported: r.Z.supports(S.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
      automaticAudioSubsystemSupported: r.Z.supports(S.AN.AUTOMATIC_AUDIO_SUBSYSTEM)
    }));
    return i.useMemo(() => (0, o.z)(t, e, n), [n, e, t])
  },
  usePredicate: function() {
    return (0, l.e7)([r.Z], () => r.Z.shouldOfferManualSubsystemSelection())
  }
})