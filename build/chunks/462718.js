/** Chunk was on 77069 **/
/** chunk id: 462718, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  B: () => S
});
var Chunk657707 = require("./657707.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk585483 = require("./585483.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.m7)(Chunk313789.n.LOGOUT_SIDEBAR_ITEM, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["2jxGer"]),
  icon: Chunk657707.PBZ,
  onClick: () => {
    (0, Chunk248514.Z)({
      title: Chunk388032.intl.string(Chunk388032.t["2jxGer"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.SUnWBB),
      confirmText: Chunk388032.intl.string(Chunk388032.t["2jxGer"]),
      onConfirm: () => {
        Chunk585483.S.dispatch(Chunk981631.CkL.SETTINGS_TRIGGER_LOGOUT)
      }
    })
  },
  buildLayout: () => []
})