/** Chunk was on web.js **/
/** chunk id: 729052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p2: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk981631 = require("./981631.js");
let o = (0, Chunk818083.B)({
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

function s(e) {
  var t;
  let {
    voiceChannelActivityNotifsEnabled: n
  } = a.useExperiment({
    location: "useVoiceActivityNotificationSettingsExperiment",
    guildId: null != (t = null == e ? true : e.getGuildId()) ? t : i.lds
  }, {
    disable: (null == e ? true : e.type) !== i.d4z.GUILD_VOICE,
    autoTrackExposure: false
  }), {
    enabled: r
  } = o.useExperiment({
    location: "useVoiceActivityNotificationSettingsExperiment"
  }, {
    disable: (null == e ? true : e.type) !== i.d4z.GUILD_VOICE || !n,
    autoTrackExposure: true
  });
  return (null == e ? true : e.type) === i.d4z.GUILD_VOICE && n && r
}