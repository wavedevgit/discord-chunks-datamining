/** Chunk was on 95546 **/
/** chunk id: 560768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk620662 = require("./620662.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n, l, s) {
  let a = null == t ? true : t.application_id;
  if (null == e || null == t || !(0, r.Z)(t, o.xjy.JOIN) || null == a) returnfalse;
  let c = l.getApplication(a);
  return !(null == c || (0, i.yE)(c.flags, o.udG.EMBEDDED) || e.isPrivate() && s.isBlockedOrIgnored(e.getRecipientId())) && n.shouldShowEducation(a)
}