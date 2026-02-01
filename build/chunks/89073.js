/** Chunk was on 30485 **/
/** chunk id: 89073, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  p: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk684013 = require("./684013.js"),
  Chunk419954 = require("./419954.js"),
  Chunk256415 = require("./256415.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.Hn)(Chunk780964.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
  fieldLayout: "horizontal",
  useTitle: () => o.intl.string(o.t.J0dpcB),
  useValue: () => (0, n.bG)([r.default], () => r.default.getDisplayNameMode()),
  setValue: t => {
    l.A.setDisplayNameMode(t)
  },
  useOptions: () => [{
    id: "always",
    label: o.intl.string(o.t.nBmDrT),
    value: a.pwA.ALWAYS
  }, {
    id: "speaking",
    label: o.intl.string(o.t["2OvIZY"]),
    value: a.pwA.ONLY_WHILE_SPEAKING
  }, {
    id: "never",
    label: o.intl.string(o.t.ekjlPL),
    value: a.pwA.NEVER
  }]
})