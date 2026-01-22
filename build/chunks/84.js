/** Chunk was on 48898 **/
/** chunk id: 84, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk833349 = require("./833349.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n, l, a) {
  let o = null == t ? true : t.application_id;
  if (null == e || null == t || !(0, s.A)(t, r.jUm.JOIN) || null == o) returnfalse;
  let c = l.getApplication(o);
  return !(null == c || (0, i.Lt)(c.flags, r.gfo.EMBEDDED) || e.isPrivate() && a.isBlockedOrIgnored(e.getRecipientId())) && n.shouldShowEducation(o)
}