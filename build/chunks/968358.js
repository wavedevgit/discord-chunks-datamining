/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";

function r(e) {
  if (null == e) return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t].voiceState.selfStream) return !0;
  return !1
}
n.d(t, {
  a: () => r
})