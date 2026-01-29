/** Chunk was on 4670 **/
/** chunk id: 788605, original params: e,t,i (module,exports,require) **/
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
let d = (0, Chunk419954.Hn)(Chunk780964.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
  fieldLayout: "horizontal",
  useTitle: () => o.intl.string(o.t.swsWWC),
  useValue: () => (0, n.bG)([r.default], () => r.default.getDisplayUserMode()),
  setValue: e => {
    l.A.setDisplayUserMode(e)
  },
  useOptions: () => [{
    id: "always",
    label: o.intl.string(o.t.nBmDrT),
    value: u.f5z.ALWAYS
  }, {
    id: "speaking",
    label: o.intl.string(o.t["2OvIZY"]),
    value: u.f5z.ONLY_WHILE_SPEAKING
  }]
})