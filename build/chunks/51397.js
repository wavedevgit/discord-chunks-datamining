/** Chunk was on 77069 **/
/** chunk id: 51397, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  b: () => g
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.UO)(Chunk313789.n.VOICE_GLOBAL_ATTENUATION_SLIDER, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.AlybXj),
    setValue: t => l.Z.setAttenuation(t, r.Z.getAttenuateWhileSpeakingSelf(), r.Z.getAttenuateWhileSpeakingOthers()),
    minValue: 0,
    maxValue: 100,
    getInitialValue: () => Chunk131951.Z.getAttenuation()
  }),
  d = (0, Chunk509613.qs)(Chunk313789.n.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["9dHxRY"]),
    useValue: () => (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getAttenuateWhileSpeakingSelf()),
    setValue: t => l.Z.setAttenuation(r.Z.getAttenuation(), t, r.Z.getAttenuateWhileSpeakingOthers())
  }),
  T = (0, Chunk509613.qs)(Chunk313789.n.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.SMt0Gr),
    useValue: () => (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getAttenuateWhileSpeakingOthers()),
    setValue: t => l.Z.setAttenuation(r.Z.getAttenuation(), r.Z.getAttenuateWhileSpeakingSelf(), t)
  }),
  g = (0, Chunk509613.Uc)(Chunk313789.n.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.oSdBvW),
    useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["0A/8Rt"]),
    usePredicate: () => (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.supports(Chunk65154.AN.ATTENUATION)),
    buildLayout: () => [c, d, T]
  })