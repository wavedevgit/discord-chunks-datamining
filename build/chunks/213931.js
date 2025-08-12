/** Chunk was on 57789 **/
/** chunk id: 213931, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => s,
  t: () => c
});
var Chunk381499 = require("./381499.js"),
  Chunk675478 = require("./675478.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n, l) {
  t !== n && ((0, i.PS)(e, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: r.Gm.create({
        value: n
      })
    }
  }, i.fy.INFREQUENT_USER_ACTION), a.default.track(o.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
    guild_id: e,
    location: l,
    soundpack: n
  }))
}

function s(e, t, n, c, s) {
  var u;
  n !== c && ((0, i.BU)(e, t, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: r.Gm.create({
        value: c
      })
    }
  }, i.fy.INFREQUENT_USER_ACTION), a.default.track(o.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
    guild_id: e,
    channel_id: t,
    channel_type: null == (u = l.Z.getChannel(t)) ? true : u.type,
    location: s,
    soundpack: c
  }))
}