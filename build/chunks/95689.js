/** Chunk was on 77069 **/
/** chunk id: 95689, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  m: () => g
});
var Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk87051 = require("./87051.js"),
  Chunk509613 = require("./509613.js"),
  Chunk430824 = require("./430824.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk468788 = require("./468788.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx");
let g = (0, Chunk509613.qs)(Chunk313789.n.EXPERIMENTAL_UNREADS, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["k6m/si"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.LGynPs),
  useValue: () => (0, Chunk442837.e7)([Chunk9156.ZP], () => Chunk9156.ZP.useNewNotifications),
  setValue: function(t) {
    s.Z.setAccountFlag(E.c.USE_NEW_NOTIFICATIONS, t), t || (l.K.set("turnedOffNewNotifications", true), T.default.track(c.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
      num_guilds_with_new_setting: r.Z.getGuildsArray().filter(t => a.ZP.resolveGuildUnreadSetting(t) === d.i.ONLY_MENTIONS).length
    }))
  },
  usePredicate: () => (0, Chunk442837.e7)([Chunk594174.default, Chunk9156.ZP], () => {
    var t;
    return (null == (t = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) || Chunk9156.ZP.useNewNotifications
  })
})