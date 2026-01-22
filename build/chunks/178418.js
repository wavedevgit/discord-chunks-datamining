/** Chunk was on web.js **/
/** chunk id: 178418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => i
});
var Chunk734057 = require("./734057.js");

function i(e, t) {
  let n = r.A.getChannel(t);
  return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find(t => t.id === e.id)
}