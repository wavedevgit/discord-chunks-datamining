/** Chunk was on 77069 **/
/** chunk id: 462718, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  B: () => T
});
var Chunk657707 = require("./657707.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk585483 = require("./585483.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.m7)(Chunk313789.n.LOGOUT_SIDEBAR_ITEM, {
  useTitle: () => o.intl.string(o.t["2jxGer"]),
  icon: Chunk657707.DoorExitIcon,
  onClick: () => {
    (0, l.Z)({
      title: o.intl.string(o.t["2jxGer"]),
      subtitle: o.intl.string(o.t.SUnWBB),
      confirmText: o.intl.string(o.t["2jxGer"]),
      onConfirm: () => {
        u.S.dispatch(a.CkL.SETTINGS_TRIGGER_LOGOUT)
      }
    })
  },
  buildLayout: () => []
})