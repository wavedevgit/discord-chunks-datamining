/** Chunk was on 28979 **/
/** chunk id: 953701, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  I: () => T
});
var Chunk64700 = require("./64700.js"),
  Chunk873298 = require("./873298.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk536482 = require("./536482.js");
let T = (0, Chunk419954.Qx)(Chunk780964.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
  useTitle: () => a.intl.string(o.default["/LHVbt"]),
  useOptions: function() {
    return n.useMemo(() => [{
      value: l.Qd.ACTIVITY_STATUS_ON,
      name: a.intl.string(a.t.UzGMH9)
    }, {
      value: l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
      name: a.intl.string(o.default["/sAeRY"])
    }, {
      value: l.Qd.ACTIVITY_STATUS_OFF,
      name: a.intl.string(o.default.m3oL7Q)
    }], [])
  },
  useValue: Chunk253932._Z.useSetting,
  setValue: Chunk253932._Z.updateSetting
})