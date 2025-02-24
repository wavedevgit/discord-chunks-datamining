/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  W: () => i
});
var r = n(592125);

function i(e, t) {
  let n = r.Z.getChannel(t);
  return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find(t => t.id === e.id)
}