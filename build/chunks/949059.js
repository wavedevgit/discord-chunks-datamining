/** Chunk was on 28979 **/
/** chunk id: 949059, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  p: () => _
});
var Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk832712 = require("./832712.js"),
  Chunk419954 = require("./419954.js"),
  Chunk71393 = require("./71393.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk406535 = require("./406535.js"),
  Chunk790782 = require("./790782.js"),
  Chunk985018 = require("./985018.jsx");
let _ = (0, Chunk419954.zD)(Chunk780964.X.EXPERIMENTAL_UNREADS, {
  useTitle: () => g.intl.string(g.t["k6m/si"]),
  useSubtitle: () => g.intl.string(g.t.LGynPs),
  useValue: () => (0, n.bG)([a.Ay], () => a.Ay.useNewNotifications),
  setValue: function(t) {
    s.A.setAccountFlag(S.i.USE_NEW_NOTIFICATIONS, t), t || (l.w.set("turnedOffNewNotifications", true), T.default.track(A.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
      num_guilds_with_new_setting: u.A.getGuildsArray().filter(t => a.Ay.resolveGuildUnreadSetting(t) === E.e.ONLY_MENTIONS).length
    }))
  },
  usePredicate: () => (0, n.bG)([o.default, a.Ay], () => {
    var t;
    return (null == (t = o.default.getCurrentUser()) ? true : t.isStaff()) || a.Ay.useNewNotifications
  })
})