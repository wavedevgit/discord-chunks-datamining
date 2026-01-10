/** Chunk was on 87646 **/
/** chunk id: 560768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk620662 = require("./620662.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n, l, a) {
  let o = null == t ? true : t.application_id;
  if (null == e || null == t || !(0, s.Z)(t, r.xjy.JOIN) || null == o) returnfalse;
  let c = l.getApplication(o);
  return !(null == c || (0, i.yE)(c.flags, r.udG.EMBEDDED) || e.isPrivate() && a.isBlockedOrIgnored(e.getRecipientId())) && n.shouldShowEducation(o)
}