/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  y: () => l
});
var r = n(873546),
  i = n(944486),
  o = n(914010),
  a = n(626135),
  s = n(981631);

function l(e, t) {
  a.default.track(s.rMx.APP_DIRECTORY_PROFILE_EMBED_SENT, {
    application_id: e,
    device_platform: r.tq ? "mobile_web" : "desktop_web",
    guild_id: o.Z.getGuildId(),
    channel_id: i.Z.getChannelId(),
    section: t
  })
}