/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  y: () => o
});
var r = n(544891),
  i = n(981631);

function o(e, t) {
  r.tn.post({
    url: i.ANM.VOICE_CHANNEL_NOTIFICATIONS(e),
    query: {
      first_user: t
    },
    rejectWithError: !0
  })
}