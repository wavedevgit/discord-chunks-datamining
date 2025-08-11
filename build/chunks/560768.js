/** Chunk was on web.js **/
/** chunk id: 560768, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./997841.js");
var Chunk630388 = require("./630388.js"),
  Chunk620662 = require("./620662.js"),
  Chunk981631 = require("./981631.js");

function a(e, t, n, a, s) {
  let l = null == t ? true : t.application_id;
  if (null == e || null == t || !(0, i.Z)(t, o.xjy.JOIN) || null == l) returnfalse;
  let c = a.getApplication(l);
  return !(null == c || (0, r.yE)(c.flags, o.udG.EMBEDDED) || e.isPrivate() && s.isBlockedOrIgnored(e.getRecipientId())) && n.shouldShowEducation(l)
}