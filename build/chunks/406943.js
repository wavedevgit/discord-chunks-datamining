/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  D: () => i
});
var r = n(674563);

function i(e) {
  let t;
  return e.isSystemUser() ? t = r.Hb.SYSTEM_DM : e.isClyde() ? t = r.Hb.AI : e.bot && (t = r.Hb.BOT), t
}