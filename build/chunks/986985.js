/** Chunk was on 36878 **/
/** chunk id: 986985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk292556 = require("./292556.js"),
  Chunk419363 = require("./419363.js"),
  Chunk509613 = require("./509613.js"),
  Chunk292959 = require("./292959.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.J9)("TextToSpeechNotifications", {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.VIm5MD),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["+4dnAw"]),
  useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getTTSType()),
  setValue: e => l.default.setTTSType(e),
  usePredicate: () => Chunk419363.Zh,
  useOptions: () => [{
    name: Chunk388032.intl.string(Chunk388032.t.B1AGeH),
    value: Chunk981631.PrB.ALL_CHANNELS
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.uM2rNj),
    value: Chunk981631.PrB.SELECTED_CHANNEL
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.DYO5Oj),
    value: Chunk981631.PrB.NEVER
  }]
})