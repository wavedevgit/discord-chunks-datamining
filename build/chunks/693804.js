/** Chunk was on 30485 **/
/** chunk id: 693804, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  j: () => T
});
var Chunk311907 = require("./311907.js"),
  Chunk264686 = require("./264686.js"),
  Chunk100767 = require("./100767.js"),
  Chunk419954 = require("./419954.js"),
  Chunk803224 = require("./803224.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.Qx)(Chunk780964.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
  useTitle: () => d.intl.string(d.t.JZxxGx),
  useSubtitle: () => d.intl.string(d.t.HDLtJl),
  useValue: () => (0, n.bG)([u.A], () => u.A.getTTSType()),
  setValue: t => l.default.setTTSType(t),
  useOptions: () => [{
    name: d.intl.string(d.t.B1AGeJ),
    value: o.aVn.ALL_CHANNELS
  }, {
    name: d.intl.string(d.t.uzZg9e),
    value: o.aVn.SELECTED_CHANNEL
  }, {
    name: d.intl.string(d.t.DYO5Oi),
    value: o.aVn.NEVER
  }],
  usePredicate: () => s.$j
})