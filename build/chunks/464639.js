/** Chunk was on 28979 **/
/** chunk id: 464639, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  e: () => S
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.sN)(Chunk780964.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
    useTitle: () => o.intl.string(o.t.AlybXj),
    setValue: t => l.A.setAttenuation(t, r.A.getAttenuateWhileSpeakingSelf(), r.A.getAttenuateWhileSpeakingOthers()),
    minValue: 0,
    maxValue: 100,
    getInitialValue: () => r.A.getAttenuation()
  }),
  d = (0, Chunk419954.zD)(Chunk780964.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
    useTitle: () => o.intl.string(o.t["9dHxRY"]),
    useValue: () => (0, n.bG)([r.A], () => r.A.getAttenuateWhileSpeakingSelf()),
    setValue: t => l.A.setAttenuation(r.A.getAttenuation(), t, r.A.getAttenuateWhileSpeakingOthers())
  }),
  A = (0, Chunk419954.zD)(Chunk780964.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
    useTitle: () => o.intl.string(o.t.SMt0Gr),
    useValue: () => (0, n.bG)([r.A], () => r.A.getAttenuateWhileSpeakingOthers()),
    setValue: t => l.A.setAttenuation(r.A.getAttenuation(), r.A.getAttenuateWhileSpeakingSelf(), t)
  }),
  S = (0, Chunk419954.FW)(Chunk780964.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
    useTitle: () => o.intl.string(o.t.oSdBvW),
    useSubtitle: () => o.intl.string(o.t["0A/8Rt"]),
    usePredicate: () => (0, n.bG)([r.A], () => r.A.supports(a.O5.ATTENUATION)),
    buildLayout: () => [T, d, A]
  })