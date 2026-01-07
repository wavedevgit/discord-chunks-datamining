/** Chunk was on 77069 **/
/** chunk id: 317379, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  f: () => o
});
var Chunk524437 = require("./524437.js"),
  Chunk995774 = require("./995774.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.Em)(Chunk313789.n.REACTION_NOTIFICATIONS, {
  useTitle: () => a.intl.string(a.t.Wxj9Hp),
  useOptions: () => [{
    id: "enabled",
    label: a.intl.string(a.t["9x/RtT"]),
    value: i.Ns.NOTIFICATIONS_ENABLED
  }, {
    id: "only_dms",
    label: a.intl.string(a.t.fJAbQd),
    value: i.Ns.ONLY_DMS
  }, {
    id: "disabled",
    label: a.intl.string(a.t["xu+UDU"]),
    value: i.Ns.NOTIFICATIONS_DISABLED
  }],
  useValue: Chunk695346.fz.useSetting,
  setValue: t => (0, l.MR)(t, u.fz.getSetting()),
  fieldLayout: "horizontal-responsive"
})