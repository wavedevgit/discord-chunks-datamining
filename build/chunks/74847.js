/** Chunk was on web.js **/
/** chunk id: 74847, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => s
});
var Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  let t = r.A.getChannel(e),
    n = null == t ? true : t.isPrivate(),
    s = null == t ? true : t.isForumChannel();
  return n || i.A.can(a.xBc.ATTACH_FILES, t) && i.A.can(a.xBc.SEND_MESSAGES, t) && !s
}