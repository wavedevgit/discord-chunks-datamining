/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  V: () => i
});
var r = n(594190);

function i() {
  let e = r.ZP.getCurrentGameForAnalytics();
  return {
    game_name: null != e ? e.name : null,
    game_id: null != e ? e.id : null
  }
}