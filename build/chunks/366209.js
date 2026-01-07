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
  useTitle: () => o.intl.string(o.t.swsWWC),
  useValue: () => (0, i.e7)([u.default], () => u.default.getDisplayUserMode()),
  setValue: t => {
    l.Z.setDisplayUserMode(t)
  },
  useOptions: () => [{
    id: "always",
    label: o.intl.string(o.t.nBmDrT),
    value: a.OYC.ALWAYS
  }, {
    id: "speaking",
    label: o.intl.string(o.t["2OvIZY"]),
    value: a.OYC.ONLY_WHILE_SPEAKING
  }]
})