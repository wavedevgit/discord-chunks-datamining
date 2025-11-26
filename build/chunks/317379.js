/** Chunk was on 9452 **/
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
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.Wxj9Hp),
  useOptions: () => [{
    label: Chunk388032.intl.string(Chunk388032.t["9x/RtT"]),
    value: Chunk524437.Ns.NOTIFICATIONS_ENABLED
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.fJAbQd),
    value: Chunk524437.Ns.ONLY_DMS
  }, {
    label: Chunk388032.intl.string(Chunk388032.t["xu+UDU"]),
    value: Chunk524437.Ns.NOTIFICATIONS_DISABLED
  }],
  useValue: Chunk695346.fz.useSetting,
  setValue: t => (0, r.MR)(t, u.fz.getSetting())
})