/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  s: () => i
});
var r = n(314897);

function i(e) {
  var t, n;
  let i = r.default.getId();
  return null != i && !!((null === (t = e.removedMemberIds) || void 0 === t ? void 0 : t.includes(i)) || (null === (n = e.addedMembers) || void 0 === n ? void 0 : n.some(e => e.userId === i)))
}