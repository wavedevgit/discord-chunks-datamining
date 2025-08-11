/** Chunk was on 95626 **/
/** chunk id: 213931, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  M: () => r,
  t: () => d
});
var Chunk381499 = require("./381499.js"),
  Chunk675478 = require("./675478.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function d(e, n, t, o) {
  n !== t && ((0, a.PS)(e, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: i.Gm.create({
        value: t
      })
    }
  }, a.fy.INFREQUENT_USER_ACTION), c.default.track(_.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
    guild_id: e,
    location: o,
    soundpack: t
  }))
}

function r(e, n, t, d, r) {
  var l;
  t !== d && ((0, a.BU)(e, n, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: i.Gm.create({
        value: d
      })
    }
  }, a.fy.INFREQUENT_USER_ACTION), c.default.track(_.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
    guild_id: e,
    channel_id: n,
    channel_type: null == (l = o.Z.getChannel(n)) ? true : l.type,
    location: r,
    soundpack: d
  }))
}