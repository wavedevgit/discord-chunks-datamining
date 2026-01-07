/** Chunk was on 77069 **/
/** chunk id: 51397, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  b: () => E
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.UO)(Chunk313789.n.VOICE_GLOBAL_ATTENUATION_SLIDER, {
    useTitle: () => o.intl.string(o.t.AlybXj),
    setValue: t => l.Z.setAttenuation(t, u.Z.getAttenuateWhileSpeakingSelf(), u.Z.getAttenuateWhileSpeakingOthers()),
    minValue: 0,
    maxValue: 100,
    getInitialValue: () => u.Z.getAttenuation()
  }),
  S = (0, Chunk509613.qs)(Chunk313789.n.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
    useTitle: () => o.intl.string(o.t["9dHxRY"]),
    useValue: () => (0, i.e7)([u.Z], () => u.Z.getAttenuateWhileSpeakingSelf()),
    setValue: t => l.Z.setAttenuation(u.Z.getAttenuation(), t, u.Z.getAttenuateWhileSpeakingOthers())
  }),
  c = (0, Chunk509613.qs)(Chunk313789.n.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
    useTitle: () => o.intl.string(o.t.SMt0Gr),
    useValue: () => (0, i.e7)([u.Z], () => u.Z.getAttenuateWhileSpeakingOthers()),
    setValue: t => l.Z.setAttenuation(u.Z.getAttenuation(), u.Z.getAttenuateWhileSpeakingSelf(), t)
  }),
  E = (0, Chunk509613.Uc)(Chunk313789.n.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
    useTitle: () => o.intl.string(o.t.oSdBvW),
    useSubtitle: () => o.intl.string(o.t["0A/8Rt"]),
    usePredicate: () => (0, i.e7)([u.Z], () => u.Z.supports(a.AN.ATTENUATION)),
    buildLayout: () => [T, S, c]
  })