/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Hr: () => o
}), n(592125);
var r = n(650774),
  i = n(981631);
let a = 1e4;

function o(e) {
  var t;
  let n = null != (t = r.Z.getMemberCount(null == e ? void 0 : e.guild_id)) ? t : 0;
  return null != e && e.type !== i.d4z.DM && e.type !== i.d4z.GROUP_DM && n >= a
}