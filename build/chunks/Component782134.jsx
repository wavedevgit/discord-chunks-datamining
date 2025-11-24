/** Chunk was on 9452 **/
/** chunk id: 782134, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk269876 = require("./269876.jsx"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let d = (0, Chunk509613.ON)(Chunk313789.n.VOICE_INPUT_SENSITIVITY_SLIDER, {
    useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t["sqUm+k"]), Chunk388032.intl.string(Chunk388032.t.nuFtHH)],
    render: () => (0, Chunk54381.jsx)(Chunk269876.B, {})
  }),
  S = (0, Chunk509613.qs)(Chunk313789.n.VOICE_INPUT_AUTO_SENSITIVITY_SETTING, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.I1Zuq0),
    useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.I1Zuq0), Chunk388032.intl.string(Chunk388032.t.nuFtHH)],
    useValue: () => (0, Chunk442837.e7)([Chunk131951.Z], () => {
      let {
        autoThreshold: t
      } = Chunk131951.Z.getModeOptions();
      return module
    }),
    setValue: t => {
      let e = s.Z.getMode(),
        {
          threshold: n
        } = s.Z.getModeOptions();
      r.Z.setMode(e, {
        autoThreshold: t,
        threshold: n
      })
    },
    usePredicate: () => (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.supports(Chunk65154.AN.AUTOMATIC_VAD))
  }),
  T = (0, Chunk509613.Uc)(Chunk313789.n.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["sqUm+k"]),
    usePredicate: () => (0, Chunk442837.e7)([Chunk131951.Z], () => {
      let t = Chunk131951.Z.getMode(),
        e = Chunk131951.Z.isInputProfileCustom();
      return module === Chunk65154.pM.VOICE_ACTIVITY && exports
    }),
    buildLayout: () => [S, d]
  })