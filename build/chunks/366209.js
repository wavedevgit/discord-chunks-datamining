/** Chunk was on 77069 **/
/** chunk id: 366209, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Q: () => T
});
var Chunk442837 = require("./442837.js"),
  Chunk13245 = require("./13245.js"),
  Chunk509613 = require("./509613.js"),
  Chunk237997 = require("./237997.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.Em)(Chunk313789.n.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
  fieldLayout: "horizontal",
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.swsWWC),
  useValue: () => (0, Chunk442837.e7)([Chunk237997.default], () => Chunk237997.default.getDisplayUserMode()),
  setValue: t => {
    l.Z.setDisplayUserMode(t)
  },
  useOptions: () => [{
    id: "always",
    label: Chunk388032.intl.string(Chunk388032.t.nBmDrT),
    value: Chunk981631.OYC.ALWAYS
  }, {
    id: "speaking",
    label: Chunk388032.intl.string(Chunk388032.t["2OvIZY"]),
    value: Chunk981631.OYC.ONLY_WHILE_SPEAKING
  }]
})