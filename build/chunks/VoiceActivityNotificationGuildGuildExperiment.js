/** Chunk was on 24358 **/
/** chunk id: 729052, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  p2: () => r
});
var Chunk818083 = require("./818083.js"),
  Chunk981631 = require("./981631.js");
let s = (0, Chunk818083.B)({
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
  a = (0, Chunk818083.B)({
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
  var i;
  let {
    voiceChannelActivityNotifsEnabled: e
  } = a.useExperiment({
    location: "useVoiceActivityNotificationSettingsExperiment",
    guildId: null != (i = null == t ? true : t.getGuildId()) ? i : l.lds
  }, {
    disable: (null == t ? true : t.type) !== l.d4z.GUILD_VOICE,
    autoTrackExposure: false
  }), {
    enabled: n
  } = s.useExperiment({
    location: "useVoiceActivityNotificationSettingsExperiment"
  }, {
    disable: (null == t ? true : t.type) !== l.d4z.GUILD_VOICE || !e,
    autoTrackExposure: true
  });
  return (null == t ? true : t.type) === l.d4z.GUILD_VOICE && e && n
}