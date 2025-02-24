/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  b: () => i
});
var r = n(981631);

function i(e, t, n, i) {
  let o = null != n ? n : t;
  return null != o && e.can(r.Plq.CREATE_INSTANT_INVITE, o) || null != t && null != t.vanityURLCode || (null == i ? void 0 : i.invite_code) != null
}