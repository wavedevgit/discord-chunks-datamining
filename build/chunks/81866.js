/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(442837),
  i = n(835473),
  o = n(91896);

function a(e) {
  let t = (0, r.e7)([o.Z], () => {
    let t = o.Z.getGameRelationshipsForUser(e);
    if (0 !== t.length) return t[0].applicationId
  });
  return (0, i.q)(t)
}