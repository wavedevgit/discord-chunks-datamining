/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  D: () => i
});
var r = n(674563);

function i(e) {
  let t;
  return e.isSystemUser() ? t = r.Hb.SYSTEM_DM : e.isClyde() ? t = r.Hb.AI : e.bot && (t = r.Hb.BOT), t
}