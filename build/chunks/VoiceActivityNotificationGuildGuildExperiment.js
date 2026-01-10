/** Chunk was on 68294 **/
/** chunk id: 729052, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  p2: () => r
});
var Chunk818083 = require("./818083.js"),
  Chunk981631 = require("./981631.js");
let a = (0, Chunk818083.B)({
    kind: "user",
    id: "2023-11_voice_activity_notification_user",
    label: "Voice Activity Notifications for User",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Voice Activity Notifications are enabled for user",
      config: {
        enabled: true
      }
    }, {
      id: 2,
      label: "Control for AA test. Voice Activity Notifications are NOT enabled for user.",
      config: {
        enabled: false
      }
    }]
  }),
  s = (0, Chunk818083.B)({
    kind: "guild",
    id: "2023-11_voice_activity_notification_guild",
    label: "General Voice Channel Notifications for Guild",
    defaultConfig: {
      voiceChannelActivityNotifsEnabled: false
    },
    treatments: [{
      id: 2,
      label: "Deadchat notifs disabled, voice channel activity notifs enabled",
      config: {
        voiceChannelActivityNotifsEnabled: true
      }
    }]
  });

function r(t) {
  var e;
  let {
    voiceChannelActivityNotifsEnabled: n
  } = s.useExperiment({
    location: "useVoiceActivityNotificationSettingsExperiment",
    guildId: null != (e = null == t ? true : t.getGuildId()) ? e : l.lds
  }, {
    disable: (null == t ? true : t.type) !== l.d4z.GUILD_VOICE,
    autoTrackExposure: false
  }), {
    enabled: i
  } = a.useExperiment({
    location: "useVoiceActivityNotificationSettingsExperiment"
  }, {
    disable: (null == t ? true : t.type) !== l.d4z.GUILD_VOICE || !n,
    autoTrackExposure: true
  });
  return (null == t ? true : t.type) === l.d4z.GUILD_VOICE && n && i
}