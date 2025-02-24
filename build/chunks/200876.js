/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => s,
  l: () => a
});
var r = n(442837),
  i = n(430824),
  o = n(981631);

function a(e) {
  return !e.hasFeature(o.oNc.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(o.oNc.CREATOR_MONETIZABLE) || e.hasFeature(o.oNc.CREATOR_MONETIZABLE_PROVISIONAL))
}

function s(e) {
  return (0, r.e7)([i.Z], () => {
    let t = i.Z.getGuild(e);
    return null != t && a(t)
  })
}