/** Chunk was on 28979 **/
/** chunk id: 918873, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  W: () => S
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk204318 = require("./204318.jsx"),
  Chunk593942 = require("./593942.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let S = (0, Chunk419954.Hn)(Chunk780964.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
  useTitle: () => A.intl.string(A.t.wVBHr0),
  useValue: function() {
    return (0, l.bG)([u.A], () => u.A.getAudioSubsystem())
  },
  setValue: function(t) {
    (0, T.A)(A.intl.string(A.t.uY7AcQ), A.intl.string(A.t.gBqik6), () => s.A.setAudioSubsystem(t))
  },
  useOptions: function() {
    let {
      legacyAudioSubsystemSupported: t,
      experimentalAudioSubsystemSupported: e,
      automaticAudioSubsystemSupported: i
    } = (0, l.cf)([u.A], () => ({
      legacyAudioSubsystemSupported: u.A.supports(d.O5.LEGACY_AUDIO_SUBSYSTEM),
      experimentalAudioSubsystemSupported: u.A.supports(d.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
      automaticAudioSubsystemSupported: u.A.supports(d.O5.AUTOMATIC_AUDIO_SUBSYSTEM)
    }));
    return n.useMemo(() => (0, o.g)(t, e, i), [i, e, t])
  },
  usePredicate: function() {
    return (0, l.bG)([u.A], () => u.A.shouldOfferManualSubsystemSelection())
  }
})