/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(493683),
  i = n(333023),
  o = n(592125);

function a(e) {
  if (e !== i.V) return null;
  let t = o.Z.getChannel(e);
  return null == t ? null : r.Z.ensurePrivateChannel(t.recipients)
}