/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  W: () => i
});
var r = n(592125);

function i(e, t) {
  let n = r.Z.getChannel(t);
  return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find(t => t.id === e.id)
}