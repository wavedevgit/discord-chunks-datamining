/** Chunk was on 4670 **/
/** chunk id: 949059, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  p: () => E
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
let E = (0, Chunk419954.zD)(Chunk780964.X.EXPERIMENTAL_UNREADS, {
  useTitle: () => _.intl.string(_.t["k6m/si"]),
  useSubtitle: () => _.intl.string(_.t.LGynPs),
  useValue: () => (0, n.bG)([u.Ay], () => u.Ay.useNewNotifications),
  setValue: function(e) {
    s.A.setAccountFlag(A.i.USE_NEW_NOTIFICATIONS, e), e || (l.w.set("turnedOffNewNotifications", true), d.default.track(c.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
      num_guilds_with_new_setting: a.A.getGuildsArray().filter(e => u.Ay.resolveGuildUnreadSetting(e) === S.e.ONLY_MENTIONS).length
    }))
  },
  usePredicate: () => (0, n.bG)([o.default, u.Ay], () => {
    var e;
    return (null == (e = o.default.getCurrentUser()) ? true : e.isStaff()) || u.Ay.useNewNotifications
  })
})