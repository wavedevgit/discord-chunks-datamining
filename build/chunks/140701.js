/** Chunk was on web.js **/
/** chunk id: 140701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => i
});
var Chunk592125 = require("./592125.js");

function i(e, t) {
  let n = r.Z.getChannel(t);
  return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find(t => t.id === e.id)
}