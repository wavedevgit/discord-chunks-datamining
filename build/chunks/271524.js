/** Chunk was on 77069 **/
/** chunk id: 271524, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  l: () => S
});
var Chunk442837 = require("./442837.js"),
  Chunk292556 = require("./292556.js"),
  Chunk419363 = require("./419363.js"),
  Chunk509613 = require("./509613.js"),
  Chunk292959 = require("./292959.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.J9)(Chunk313789.n.TEXT_TO_SPEECH_NOTIFICATIONS, {
  useTitle: () => T.intl.string(T.t.JZxxGx),
  useSubtitle: () => T.intl.string(T.t.HDLtJl),
  useValue: () => (0, i.e7)([r.Z], () => r.Z.getTTSType()),
  setValue: t => l.default.setTTSType(t),
  useOptions: () => [{
    name: T.intl.string(T.t.B1AGeJ),
    value: o.PrB.ALL_CHANNELS
  }, {
    name: T.intl.string(T.t.uzZg9e),
    value: o.PrB.SELECTED_CHANNEL
  }, {
    name: T.intl.string(T.t.DYO5Oi),
    value: o.PrB.NEVER
  }],
  usePredicate: () => s.Zh
})