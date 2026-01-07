/** Chunk was on 77069 **/
/** chunk id: 209252, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  v: () => T
});
var Chunk442837 = require("./442837.js"),
  Chunk13245 = require("./13245.js"),
  Chunk509613 = require("./509613.js"),
  Chunk237997 = require("./237997.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.Em)(Chunk313789.n.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
  fieldLayout: "horizontal",
  useTitle: () => o.intl.string(o.t.J0dpcB),
  useValue: () => (0, i.e7)([u.default], () => u.default.getDisplayNameMode()),
  setValue: t => {
    l.Z.setDisplayNameMode(t)
  },
  useOptions: () => [{
    id: "always",
    label: o.intl.string(o.t.nBmDrT),
    value: a.wC$.ALWAYS
  }, {
    id: "speaking",
    label: o.intl.string(o.t["2OvIZY"]),
    value: a.wC$.ONLY_WHILE_SPEAKING
  }, {
    id: "never",
    label: o.intl.string(o.t.ekjlPL),
    value: a.wC$.NEVER
  }]
})