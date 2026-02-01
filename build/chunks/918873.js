/** Chunk was on 30485 **/
/** chunk id: 918873, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  W: () => A
}), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk593942 = require("./593942.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.Hn)(Chunk780964.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
  useTitle: () => T.intl.string(T.t.wVBHr0),
  useValue: function() {
    return (0, l.bG)([u.A], () => u.A.getAudioSubsystem())
  },
  setValue: function(t) {
    (0, o.A)(T.intl.string(T.t.uY7AcQ), T.intl.string(T.t.gBqik6), () => s.A.setAudioSubsystem(t))
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
    return n.useMemo(() => {
      let n;
      return n = [{
        id: d.rB.STANDARD,
        value: d.rB.STANDARD,
        label: T.intl.string(T.t.dqb2JZ)
      }], t && n.push({
        id: d.rB.LEGACY,
        value: d.rB.LEGACY,
        label: T.intl.string(T.t["TYfH+5"])
      }), e && n.push({
        id: d.rB.EXPERIMENTAL,
        value: d.rB.EXPERIMENTAL,
        label: T.intl.string(T.t.liQmtr)
      }), i && n.push({
        id: d.rB.AUTOMATIC,
        value: d.rB.AUTOMATIC,
        label: T.intl.string(T.t.qNgtO1)
      }), n
    }, [i, e, t])
  },
  usePredicate: function() {
    return (0, l.bG)([u.A], () => u.A.shouldOfferManualSubsystemSelection())
  }
})