/** Chunk was on 77069 **/
/** chunk id: 418790, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  b: () => T
});
var Chunk473749 = require("./473749.js"),
  Chunk524437 = require("./524437.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk418924 = require("./418924.js");
let T = (0, Chunk509613.J9)(Chunk313789.n.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
  useTitle: () => a.intl.string(o.default["/LHVbt"]),
  useOptions: function() {
    return i.useMemo(() => [{
      value: l.GI.ACTIVITY_STATUS_ON,
      name: a.intl.string(a.t.UzGMH9)
    }, {
      value: l.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
      name: a.intl.string(o.default["/sAeRY"])
    }, {
      value: l.GI.ACTIVITY_STATUS_OFF,
      name: a.intl.string(o.default.m3oL7Q)
    }], [])
  },
  useValue: Chunk695346.no.useSetting,
  setValue: Chunk695346.no.updateSetting
})