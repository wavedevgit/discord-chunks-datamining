/** Chunk was on 95546 **/
/** chunk id: 560768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./997841.js");
var Chunk630388 = require("./630388.js"),
  Chunk620662 = require("./620662.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n, l, s) {
  let c = null == t ? true : t.application_id;
  if (null == e || null == t || !(0, i.Z)(t, o.xjy.JOIN) || null == c) returnfalse;
  let a = l.getApplication(c);
  return !(null == a || (0, r.yE)(a.flags, o.udG.EMBEDDED) || e.isPrivate() && s.isBlockedOrIgnored(e.getRecipientId())) && n.shouldShowEducation(c)
}