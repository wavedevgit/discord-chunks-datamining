/** Chunk was on 9753 **/
/** chunk id: 74847, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => a
});
var Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  let t = r.A.getChannel(e),
    n = null == t ? true : t.isPrivate(),
    a = null == t ? true : t.isForumChannel();
  return n || i.A.can(l.xBc.ATTACH_FILES, t) && i.A.can(l.xBc.SEND_MESSAGES, t) && !a
}