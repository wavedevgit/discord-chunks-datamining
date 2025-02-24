/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  W: () => i
});
var r = n(592125);

function i(e, t) {
  let n = r.Z.getChannel(t);
  return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find(t => t.id === e.id)
}