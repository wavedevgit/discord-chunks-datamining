/** Chunk was on 4670 **/
/** chunk id: 935636, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  I: () => d
});
var Chunk934551 = require("./934551.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk203982 = require("./203982.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.i4)(Chunk780964.X.LOGOUT_SIDEBAR_ITEM, {
  useTitle: () => o.intl.string(o.t["2jxGer"]),
  icon: Chunk934551.DoorExitIcon,
  onClick: () => {
    (0, l.A)({
      title: o.intl.string(o.t["2jxGer"]),
      subtitle: o.intl.string(o.t.SUnWBB),
      confirmText: o.intl.string(o.t["2jxGer"]),
      onConfirm: () => {
        r._.dispatch(u.jej.SETTINGS_TRIGGER_LOGOUT)
      }
    })
  },
  buildLayout: () => []
})