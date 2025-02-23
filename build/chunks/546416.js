/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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