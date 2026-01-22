/** Chunk was on 49107 **/
/** chunk id: 718194, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  YK: () => s
});
var Chunk600975 = require("./600975.js"),
  Chunk652215 = require("./652215.js");
let l = (0, Chunk600975.C)({
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
  a = (0, Chunk600975.C)({
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

function s(t) {
  var e;
  let {
    voiceChannelActivityNotifsEnabled: n
  } = a.useExperiment({
    location: "useVoiceActivityNotificationSettingsExperiment",
    guildId: null != (e = null == t ? true : t.getGuildId()) ? e : r.dJq
  }, {
    disable: (null == t ? true : t.type) !== r.rbe.GUILD_VOICE,
    autoTrackExposure: false
  }), {
    enabled: i
  } = l.useExperiment({
    location: "useVoiceActivityNotificationSettingsExperiment"
  }, {
    disable: (null == t ? true : t.type) !== r.rbe.GUILD_VOICE || !n,
    autoTrackExposure: true
  });
  return (null == t ? true : t.type) === r.rbe.GUILD_VOICE && n && i
}