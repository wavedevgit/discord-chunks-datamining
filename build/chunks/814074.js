/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Hr: () => a
}), n(592125);
var r = n(650774),
  i = n(981631);
let o = 1e4;

function a(e) {
  var t;
  let n = null !== (t = r.Z.getMemberCount(null == e ? void 0 : e.guild_id)) && void 0 !== t ? t : 0;
  return null != e && e.type !== i.d4z.DM && e.type !== i.d4z.GROUP_DM && n >= o
}