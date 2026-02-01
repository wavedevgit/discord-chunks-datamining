/** Chunk was on 12907 **/
/** chunk id: 84, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk833349 = require("./833349.js"),
  Chunk652215 = require("./652215.js");

function o(e, t, n, o, s) {
  let a = null == t ? true : t.application_id;
  if (null == e || null == t || !(0, r.A)(t, l.jUm.JOIN) || null == a) returnfalse;
  let c = o.getApplication(a);
  return !(null == c || (0, i.Lt)(c.flags, l.gfo.EMBEDDED) || e.isPrivate() && s.isBlockedOrIgnored(e.getRecipientId())) && n.shouldShowEducation(a)
}