/** Chunk was on 36878 **/
/** chunk id: 852469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk524437 = require("./524437.js"),
  Chunk995774 = require("./995774.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk388032 = require("./388032.jsx");
let s = (0, Chunk509613.Em)("ReactionNotifications", {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.Rq0NFh),
  options: [{
    label: () => Chunk388032.intl.string(Chunk388032.t["9x/Rtb"]),
    value: Chunk524437.Ns.NOTIFICATIONS_ENABLED
  }, {
    label: () => Chunk388032.intl.string(Chunk388032.t.fJAbQU),
    value: Chunk524437.Ns.ONLY_DMS
  }, {
    label: () => Chunk388032.intl.string(Chunk388032.t["xu+UDQ"]),
    value: Chunk524437.Ns.NOTIFICATIONS_DISABLED
  }],
  useValue: Chunk695346.fz.useSetting,
  setValue: e => (0, o.MR)(e, r.fz.getSetting())
})