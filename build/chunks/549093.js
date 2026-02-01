/** Chunk was on 30485 **/
/** chunk id: 549093, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  q: () => o
});
var Chunk873298 = require("./873298.js"),
  Chunk815807 = require("./815807.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.Hn)(Chunk780964.X.REACTION_NOTIFICATIONS, {
  useTitle: () => a.intl.string(a.t.Wxj9Hp),
  useOptions: () => [{
    id: "enabled",
    label: a.intl.string(a.t["9x/RtT"]),
    value: n.Tz.NOTIFICATIONS_ENABLED
  }, {
    id: "only_dms",
    label: a.intl.string(a.t.fJAbQd),
    value: n.Tz.ONLY_DMS
  }, {
    id: "disabled",
    label: a.intl.string(a.t["xu+UDU"]),
    value: n.Tz.NOTIFICATIONS_DISABLED
  }],
  useValue: Chunk253932.Zp.useSetting,
  setValue: t => (0, l.n4)(t, r.Zp.getSetting()),
  fieldLayout: "horizontal-responsive"
})